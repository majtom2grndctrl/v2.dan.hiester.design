<script setup lang="ts">
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.ImageSlice>());

</script>


<template>
  <div class="dhd--layout-wrapper">
    <figure
      :class="`dhd--image-slice has-size--${slice.primary.display_size} has-style--${slice.primary.image_style}`"
      v-if="Boolean(slice.primary.image.url)"
    >
      <div v-if="slice.primary.overline" class="dhd--text--overline" v-html="slice.primary.overline" />
      <PrismicImage :field="slice.primary.image" loading="lazy" />
      <figcaption>
        <PrismicRichText :field="slice.primary.caption" />
      </figcaption>
    </figure>
  </div>
</template>


<style lang="scss">

.dhd--image-slice {
  margin: var(--spatial-scale-6) 0 var(--spatial-scale-10);
  &.has-style--Diagram {
    > img {
      background: var(--gray-900);
      box-sizing: border-box;
      color: var(--gray-300);
      padding: var(--spatial-scale-2) var(--spatial-scale-2) var(--spatial-scale-1);
      @media(prefers-color-scheme: dark) {
        background: var(--gray-025);
      }
    }
  }
  > .dhd--text--overline {
    margin-bottom: var(--spatial-scale-2);
  }
  > img {
    box-shadow: 0px 0px var(--spatial-scale-00) 0 var(--box-shadow);
    max-width: 100%;
  }
  > figcaption {
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
      > figcaption {
        margin: 0 auto;
        max-width: calc(calc(#{11 / 15} * 100%) - calc(var(--grid-gutter) / 2));
      }
    }
    &.has-style--Diagram {
      padding: 0;
      > img {
      border-radius: var(--block-border-radius);
      }
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
      > figcaption {
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
      > figcaption {
        max-width: calc(#{9 / 15} * 100%);
      }
    }
  }
}

</style>
