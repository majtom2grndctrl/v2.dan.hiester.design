<script setup lang="ts">
import { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.ImageSlice>());

</script>


<template>
  <div class="dhd--image-slice-wrapper">
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

.dhd--image-slice-wrapper {
  @include wrapper-full-width;
}

.dhd--image-slice {
  margin: var(--spatial-scale-6) var(--spatial-scale-2) var(--spatial-scale-10);
  // max-width: calc(40rem - var(--spatial-scale-4) * 2);
  &.has-style--Diagram {
    > img {
      background: var(--gray-900);
      box-sizing: border-box;
      color: var(--gray-300);
      padding: var(--spatial-scale-2) var(--spatial-scale-2) var(--spatial-scale-1);
    }
  }
  > .dhd--text--overline {
    margin-bottom: var(--spatial-scale-2);
  }
  > img {
    box-shadow: 0px 0px var(--spatial-scale-00) 0 rgba(90, 100, 104, 0.6);
    max-width: 100%;
  }
  > figcaption {
    font-size: var(--type-scale-0);
    line-height: var(--spatial-scale-4);
  }
}

@media (min-width: $breakpoint-small) {
  .dhd--image-slice {
    margin-right: auto;
    margin-left: auto;
    max-width: calc(100% * 11 / 13);
    p {
      margin-right: auto;
      margin-left: auto;
    }
    &.has-size--Cover_Image {
      max-width: unset;
    }
    &.has-size--Aside {
      float: right;
      margin-left: var(--spatial-scale-1);
      max-width: calc(100% * 5 / 13);
    }
    &.has-style--Screenshot {
      margin-right: auto;
      margin-left: auto;
      max-width: calc(100% * 11 / 13)
    }
  }
}
@media (min-width: $breakpoint-medium) {
  .dhd--image-slice {
    box-sizing: border-box;
    font-size: var(--type-scale-0);
    max-width: calc(100% * 9 / 15);
    &.has-size--Aside {
      max-width: calc(100% * 5 / 15);
      margin-right: calc(100% * 1 / 15);
      margin-left: var(--spatial-scale-3);
    }
    &.has-size--Cover_Image {
      max-width: calc(100% * 13 / 15);
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

@media (min-width: $breakpoint-large){
  .dhd--image-slice {
    max-width: calc(100% * 9 / 17);
    &.has-size--Cover_Image {
      max-width: calc(100% * 15 / 17);
    }
  }
}

</style>
