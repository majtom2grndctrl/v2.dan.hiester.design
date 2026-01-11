<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';

type Props = {
  text?: string;
  texts?: string[];
  loop?: boolean;
  typeSpeed?: number;
  deleteSpeed?: number;
  startDelay?: number;
  pauseDelay?: number;
  nextDelay?: number;
  cursor?: string;
  showCursor?: boolean;
  hideCursorOnComplete?: boolean;
  prefix?: string;
  preserveWhitespace?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  typeSpeed: 34,
  deleteSpeed: 22,
  startDelay: 250,
  pauseDelay: 1200,
  cursor: '',
  showCursor: true,
  hideCursorOnComplete: true,
  prefix: '',
  preserveWhitespace: true,
});

const emit = defineEmits<{
  (event: 'done'): void;
}>();

const displayText = ref('');
const isDone = ref(false);
const prefersReducedMotion = ref(false);
const isMounted = ref(false);
let timeoutId: ReturnType<typeof setTimeout> | null = null;

const effectiveTexts = computed(() => {
  if (props.text !== undefined && props.text !== null) {
    return [props.text];
  }
  if (props.texts?.length) {
    return props.texts;
  }
  return [];
});

const textsKey = computed(() => effectiveTexts.value.join('\u0000'));

const shouldLoop = computed(() => {
  if (props.loop !== undefined) {
    return props.loop;
  }
  return props.texts?.length ? true : false;
});

const shouldShowCursor = computed(() => {
  if (!props.showCursor) {
    return false;
  }
  if (prefersReducedMotion.value) {
    return false;
  }
  if (props.hideCursorOnComplete && isDone.value) {
    return false;
  }
  return true;
});

const hasGlyphCursor = computed(() => props.cursor.length > 0);

const stopTimer = () => {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
};

const markDone = () => {
  isDone.value = true;
  if (!shouldLoop.value) {
    emit('done');
  }
};

const startTyping = () => {
  stopTimer();
  const texts = effectiveTexts.value.filter((value) => value !== '');
  if (!texts.length) {
    displayText.value = '';
    markDone();
    return;
  }
  if (prefersReducedMotion.value) {
    displayText.value = texts[0];
    markDone();
    return;
  }

  displayText.value = '';
  isDone.value = false;
  let textIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const step = () => {
    const currentText = texts[textIndex] ?? '';
    if (!deleting) {
      charIndex += 1;
      displayText.value = currentText.slice(0, charIndex);
      if (charIndex >= currentText.length) {
        if (!shouldLoop.value) {
          markDone();
          return;
        }
        deleting = true;
        timeoutId = setTimeout(step, props.pauseDelay);
        return;
      }
      timeoutId = setTimeout(step, props.typeSpeed);
      return;
    }

    charIndex -= 1;
    displayText.value = currentText.slice(0, Math.max(0, charIndex));
    if (charIndex <= 0) {
      deleting = false;
      textIndex = (textIndex + 1) % texts.length;
      const nextDelay = props.nextDelay ?? props.typeSpeed;
      timeoutId = setTimeout(step, nextDelay);
      return;
    }
    timeoutId = setTimeout(step, props.deleteSpeed);
  };

  timeoutId = setTimeout(step, props.startDelay);
};

onMounted(() => {
  isMounted.value = true;
  prefersReducedMotion.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  startTyping();
});

watch(textsKey, () => {
  if (!isMounted.value) {
    return;
  }
  startTyping();
});

onBeforeUnmount(() => {
  stopTimer();
});
</script>

<template>
  <span class="typewriter" :class="{ 'typewriter--preserve': preserveWhitespace }">
    <span v-if="prefix" class="typewriter-prefix">{{ prefix }}</span>
    <span class="typewriter-text">{{ displayText }}</span>
    <span
      v-if="shouldShowCursor"
      class="typewriter-cursor"
      :class="{ 'typewriter-cursor--glyph': hasGlyphCursor }"
      aria-hidden="true"
    >
      <span v-if="hasGlyphCursor" class="typewriter-cursor-text">{{ cursor }}</span>
    </span>
  </span>
</template>

<style lang="scss" scoped>
.typewriter {
  display: inline;
}

.typewriter--preserve {
  white-space: pre-wrap;
}

.typewriter-text {
  white-space: inherit;
}

.typewriter-cursor {
  display: inline-block;
  position: relative;
  height: 1.125em;
  margin-left: 0.08em;
  vertical-align: -0.2em;
  animation: typewriter-blink 1s step-end infinite;
  opacity: 0.6;
}

.typewriter-cursor::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.05em;
  bottom: 0.05em;
  width: 0.12em;
  background: currentColor;
}

.typewriter-cursor--glyph {
  width: auto;
  height: auto;
  vertical-align: baseline;
}

.typewriter-cursor--glyph::before {
  content: none;
}

.typewriter-cursor-text {
  line-height: 1;
}

@keyframes typewriter-blink {
  50% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .typewriter-cursor {
    animation: none;
  }
}
</style>
