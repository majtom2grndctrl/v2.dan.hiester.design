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
        <PrismicLink class="screenshot-link" :field="slice.primary.cms_document">
          <PrismicImage
            class="screenshot"
            :field="slice.primary.image"
            sizes="small:600px medium:1200px large:2000px"
            loading="lazy"
          />
        </PrismicLink>
      </div>
      <div class="content-wrapper dhd--cms-content">
        <div class="dhd--text--overline" v-html="slice.primary.case_study_type" />
        <h2 class="title">
          <PrismicLink
            class="dhd--text--title-link"
            :field="slice.primary.cms_document"
          >
            {{ slice.primary.title }}
          </PrismicLink>
        </h2>
        <div class="summary">
          <PrismicRichText :field="slice.primary.summary" />
        </div>
        <div class="actions">
          <PrismicLink 
            class="dhd--cta-link"
            :field="slice.primary.cms_document"
          >
            {{ slice.primary.cta_label }}
          </PrismicLink>
        </div>
      </div>
    </article>
  </div>
</template>

<style lang="scss">
  /* Scoping this the old-fashioned way, because
     it’s the only way to style the Prismic content */
  .dhd--CaseStudyTeaser-wrapper {
    margin: var(--spatial-scale-10) 0 var(--spatial-scale-10);
  }
  .dhd--CaseStudyTeaser {
    display: flex;
    flex-direction: column;
    gap: var(--spatial-scale-6);
    .screenshot {
      aspect-ratio: calc(3/2);
      max-width: 100%;
    }
    .content-wrapper{
      > div, h2 {
        padding: 0 calc(1/15*100%);
      }
      @media (min-width: $breakpoint-medium) {
        > div, h2 {
          padding: unset;
          margin-right: auto;
          margin-left: auto;
          width: calc(#{11 / 15} *100%);
        }
      }
      @media (min-width: $breakpoint-large) {
        > div, h2 {
          margin-right: unset;
          margin-left: unset;
          max-width: unset;
          padding: unset;
        }
      }
    }
    .title  {
      font-family: var(--font-heading);
      font-size: var(--type-scale-3);
      line-height: var(--spatial-scale-6);
    }
    .summary {
      p {
        margin-top: var(--spatial-scale-3);
        margin-bottom: var(--spatial-scale-3)
      }
    }
  }
  @media (min-width: $breakpoint-large) {
    .dhd--CaseStudyTeaser-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: var(--spatial-scale-12);
      margin-bottom: var(--spatial-scale-12);
    }
    .dhd--CaseStudyTeaser {
      align-items: center;
      display: grid;
      gap: var(--grid-gutter);
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
    @media (min-width: $breakpoint-royale) {
      .dhd--CaseStudyTeaser-wrapper {
        .dhd--CaseStudyTeaser {
          grid-template-columns: repeat(17, 1fr);
        }
        .screenshot-wrapper {
          grid-column: 1 / span 10;
        }
        .content-wrapper {
          grid-column: 12 / span 6;
        }
      }
    }
  }
</style>