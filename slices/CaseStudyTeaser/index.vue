<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CaseStudyTeaserSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <div class="CaseStudyTeaser-wrapper">
    <article
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
      class="CaseStudyTeaser"
    >
      <div class="screenshot-wrapper">
        <PrismicImage
          class="screenshot"
          :field="slice.primary.image"
          sizes="small:600px medium:1200px large:2000px"
          loading="lazy"
        />
      </div>
      <div class="content-wrapper">
        <PrismicText class="dhd--text--overline" :field="slice.primary.case_study_type" />
        <PrismicRichText class="title" :field="slice.primary.title" />
        <PrismicRichText class="summary" :field="slice.primary.summary" />
        <PrismicRichText class="cta" :field="slice.primary.cta_link" />
      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>
  .CaseStudyTeaser {

  }
  @media (min-width: $breakpoint-large) {
    .CaseStudyTeaser {
      display: grid;
      grid-template-columns: repeat(15, 1fr);
    }
    .screenshot-wrapper {
      grid-column: 1 / span 9;
    }
    .screenshot {
      aspect-ratio: calc(3/2);
      max-width: 100%;
    }
    .content-wrapper {
      grid-column: 11 / span 5;
    }
  }
</style>