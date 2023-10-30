<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.OverlineSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <div
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="new-chapter-intro-wrapper dhd--layout-wrapper"
  >
    <div class="horizontal-rule"></div>
    <div class="dhd--text--overline" v-if="slice.primary.overline" v-html="slice.primary.overline" />
    <PrismicRichText :field="slice.primary.title" class="heading" />
    <PrismicRichText v-if="slice.primary.lede" :field="slice.primary.lede" class="lede" />
</div>
</template>

<style lang="scss">
.new-chapter-intro-wrapper {
  margin-top: var(--spatial-scale-12);
  .heading {
    font-family: var(--font-heading);
  }

  h2 {
    font-size: var(--type-scale-4);
    font-weight: 600;
    line-height: var(--spatial-scale-7);
    margin-top: 0;
  }
  h3 {
    font-size: var(--type-scale-3);
    line-height: var(--spatial-scale-6); 
    margin-top: 0;
  }
  .lede {
    font-size: var(--type-scale-2);
    line-height: var(--spatial-scale-6);
  }
}

@media(min-width: $breakpoint-small) {
  .new-chapter-intro-wrapper {
    margin-top: var(--spatial-scale-10);
    .dhd--text--overline, .heading, .lede {
      margin-right: auto;
      margin-left: auto;
    }
  }
}

@media(min-width: $breakpoint-medium) {
  .new-chapter-intro-wrapper {
    .dhd--text--overline, .heading, .lede {
      max-width: 45rem;
    }
  }
}

@media(min-width: $breakpoint-large) {
  .new-chapter-intro-wrapper {
    margin-top: var(--spatial-scale-12);
    .dhd--text--overline, .heading, .lede {
      max-width: calc(calc(#{11 / 15} * 100%) - calc(var(--grid-gutter) / 2));
    }
  }
}
@media(min-width: $breakpoint-royale) {
  .new-chapter-intro-wrapper {
    .dhd--text--overline, .heading, .lede {
      max-width: calc(calc(#{9 / 17} * 100%) - calc(var(--grid-gutter) / 2));
    }
  }
}

</style>
