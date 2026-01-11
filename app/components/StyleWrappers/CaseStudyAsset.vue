<script setup lang="ts">
  import type { KeyTextField, RichTextField, SelectField } from '@prismicio/types';
  interface ImageSliceProps {
    caption?: RichTextField;
    displaySize?: SelectField<'Aside' | 'Cover_Image' | 'Large'>;
    imageStyle?: SelectField<'Diagram' | 'Screenshot'>;
    overline?: KeyTextField;
  }

  // Define props with validation and default values
  const props = withDefaults(defineProps<ImageSliceProps>(), {
    displaySize: 'Large',
    imageStyle: 'Diagram',
  });
</script>

<template>
  <div class="dhd--layout-wrapper">
    <figure :class="`dhd--image-slice has-size--${props.displaySize} has-style--${props.imageStyle}`">
      <div v-if="props.overline" class="dhd--text--overline" v-html="props.overline" />
      <slot />
      <figcaption>
        <PrismicRichText :field="props.caption" />
      </figcaption>
    </figure>
  </div>
</template>

<style lang="scss" scoped>
.body-copy .dhd--image-slice {
  margin-right: 0;
  margin-left: 0;
  max-width: none;
}

.dhd--image-slice {
  margin: var(--spatial-scale-6) 0 var(--spatial-scale-10);
  .dhd--text--overline {
    margin-bottom: var(--spatial-scale-2);
  }
  > .dhd--text--overline {
    margin-bottom: var(--spatial-scale-2);
  }
  figcaption {
    font-size: var(--type-scale-1);
    line-height: var(--spatial-scale-5);
  }
}

@media (min-width: $breakpoint-medium) {
  .dhd--image-slice {
    box-sizing: border-box;
    font-size: var(--type-scale-0);
    margin-right: auto;
    margin-left: auto;
    max-width: calc(calc(#{11 / 15} * 100%) - calc(var(--grid-gutter) / 2));
    &.has-size--Aside {
      float: right;
      max-width: calc(100% * 5 / 15);
      margin-right: calc(100% * 1 / 15);
      margin-left: var(--spatial-scale-3);
    }
    &.has-size--Cover_Image {
      max-width: 100%;
      figcaption {
        margin: 0 auto;
        max-width: calc(calc(#{11 / 15} * 100%) - calc(var(--grid-gutter) / 2));
      }
    }
    &.has-style--Diagram {
      padding: 0;
    }
    &.has-style--Screenshot {
      padding: none;
    }
  }
}

@media (min-width: $breakpoint-large) {
  .dhd--image-slice {
    max-width: calc(calc(#{9 / 15} * 100%) - calc(var(--grid-gutter) / 2));
    &.has-size--Cover_Image {
      figcaption {
        max-width: calc(#{9 / 15} * 100%);
      }
    }
  }
}

@media (min-width: $breakpoint-royale){
  .dhd--image-slice {
    max-width: calc(100% * 9 / 17);
    &.has-size--Cover_Image {
      max-width: calc(100% * 15 / 17);
      figcaption {
        max-width: calc(#{9 / 15} * 100%);
      }
    }
  }
}
</style>
