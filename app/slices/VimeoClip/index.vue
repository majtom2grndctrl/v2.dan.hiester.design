<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.VideoSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);


</script>

<template>
  <div
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
  <h1>Vimeo Slice</h1>
    <CaseStudyAsset
      :caption="slice.primary.caption"
      :overline="slice.primary.overline"
    >
      <vimeo-player :video-id="slice.primary.vimeo_id" class="player" />
    </CaseStudyAsset>
  </div>
</template>

<style lang="scss" scoped>
  .player {
    width: 80vw;
  }
</style>
