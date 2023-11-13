<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.StoryOverviewSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <div class="StoryOverview-wrapper">
    <PrismicRichText :field="slice.primary.body_copy" class="StoryOverview" />
    <div class="sidebar">
      <template v-for="item in slice.items" :key="`sidebar-item-${item.section_title}`">
        <div v-html="item.section_title" />
        <PrismicRichText :field="item.section_content" />
      </template>
    </div>
  </div>
</template>
