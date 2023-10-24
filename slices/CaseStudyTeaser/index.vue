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
  <div class="dhd--CaseStudyTeaser-wrapper">
    <article
      :data-slice-type="slice.slice_type"
      :data-slice-variation="slice.variation"
      class="dhd--CaseStudyTeaser"
    >
      <div class="screenshot-wrapper">
        <PrismicImage
          class="screenshot"
          :field="slice.primary.image"
          sizes="small:600px medium:1200px large:2000px"
          loading="lazy"
        />
      </div>
      <div class="content-wrapper dhd--cms-content">
        <PrismicText class="dhd--text--overline" :field="slice.primary.case_study_type" />
        <PrismicRichText class="title" :field="slice.primary.title" />
        <PrismicRichText class="summary" :field="slice.primary.summary" />
        <PrismicRichText class="cta" :field="slice.primary.cta_link" />
      </div>
    </article>
  </div>
</template>

<style lang="scss">
  /* Scoping this the old-fashioned way, because
     it’s the only way to style the Prismic content */
  .dhd--CaseStudyTeaser {
    .conent-wrapper > div {
      display: inline;
    }
    .summary {
      p {
        margin: var(--spatial-scale-3) 0;
      }
    }

    .cta {
      p {
        display: inline;
      }
      a {
      border-bottom: 0.12rem solid var(--text-inline-hyperlink);
      color: var(--text-inline-hyperlink);
      display: inline-block;
      font-size: var(--type-scale-2);
      line-height: var(--spatial-scale-5);
      text-decoration: none;
      }
    }
  }
  @media (min-width: $breakpoint-large) {
    .dhd--CaseStudyTeaser {
      align-items: center;
      display: grid;
      grid-template-columns: repeat(15, 1fr);
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
  }
</style>