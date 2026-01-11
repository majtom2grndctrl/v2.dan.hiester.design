<script setup lang="ts">
import BodyCopy from "~/components/PageSections/Style/BodyCopy.vue";
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.BodyCopySlice>([
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
    class="dhd--layout-wrapper"
  >
    <BodyCopy>
      <PrismicRichText :field="slice.primary.content" class="body-copy dhd--cms-content" />
    </BodyCopy>
  </div>
</template>
