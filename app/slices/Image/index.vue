<script setup lang="ts">
import CaseStudyAsset from "~/components/StyleWrappers/CaseStudyAsset.vue";
import type { Content } from "@prismicio/client";

defineProps(getSliceComponentProps<Content.ImageSlice>());

</script>


<template>
  <CaseStudyAsset
    :caption="slice.primary.caption"
    :display-size="slice.primary.display_size"
    :image-style="slice.primary.image_style"
    :overline="slice.primary.overline"
  >
    <PrismicImage
      :field="slice.primary.image"
      loading="lazy"
      :class="`has-size--${slice.primary.display_size} has-style--${slice.primary.image_style}`"
    />
  </CaseStudyAsset>
</template>

<style lang="scss" scoped>

img {
  box-shadow: 0px 0px var(--spatial-scale-00) 0 var(--box-shadow);
  max-width: 100%;
  &.has-style--Diagram {
    background: var(--gray-900);
    box-sizing: border-box;
    color: var(--gray-300);
    padding: var(--spatial-scale-2) var(--spatial-scale-2) var(--spatial-scale-1);
    @media(prefers-color-scheme: dark) {
      background: var(--gray-025);
    }
    @media (min-width: $breakpoint-medium) {
      border-radius: var(--block-border-radius);
    }
  }
}

</style>
