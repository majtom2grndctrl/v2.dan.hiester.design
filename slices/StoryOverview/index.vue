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
  <div class="dhd--layout-wrapper dhd--StoryOverview-wrapper">
    <PrismicRichText :field="slice.primary.body_copy" class="StoryOverview" />
    <div class="sidebar">
      <div class="sidebar-section" v-for="item in slice.items" :key="`sidebar-item-${item.section_title}`">
        <div class="sidebar-section-title" v-html="item.section_title" />
        <PrismicRichText :field="item.section_content" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .dhd--StoryOverview-wrapper {
    .StoryOverview {
      font-size: var(--type-scale-2);
      line-height: var(--spatial-scale-6);
      margin: var(--spatial-scale-9) 0 var(--spatial-scale-7);
    }
    .sidebar {
      font-size: var(--type-scale-1);
      line-height: var(--spatial-scale-4);
      margin: var(--spatial-scale-7) 0;
    }
    .sidebar-section {
      margin: var(--spatial-scale-5) 0;
      p {
        margin: var(--spatial-scale-0) 0;
      }
    }
    .sidebar-section-title {
      font-weight: 600;
    }
    @media (min-width: $breakpoint-medium) {
      align-items: center;
      display: grid;
      gap: var(--grid-gutter);
      grid-template-columns: repeat(11, 1fr);
      margin-top: var(--spatial-scale-9);
     .StoryOverview {
        grid-column: 1 / span 7;
        margin: 0;
      }
      .sidebar {
        grid-column: 9 / span 3;
        margin: 0;
      }
    }
    @media (min-width: $breakpoint-large) {
      grid-template-columns: repeat(15, 1fr);
      margin-top: var(--spatial-scale-11);
      .StoryOverview {
        grid-column: 3 / span 9;
      }
      .sidebar {
        grid-column: 13 / span 3;
      }
    }
    @media (min-width: $breakpoint-royale) {
      grid-template-columns: repeat(17, 1fr);
      .StoryOverview {
        grid-column: 5 / span 9;
        font-size: var(--type-scale-3);
        line-height: var(--spatial-scale-7);
      }
      .sidebar {
        grid-column: 15 / span 3;
      }
    }
  }
</style>
