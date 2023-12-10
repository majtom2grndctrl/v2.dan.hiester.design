<script setup lang="ts">
import { components } from '~/slices'
import PageHero from '~/components/PageHero.vue'

const prismic = usePrismic()
const { data: page } = useAsyncData('index', async () =>
  await prismic.client.getByUID('about_page_type', 'about')
)

console.log({ page_data: await page.value?.data });

useHead({
  title: 'Dan Hiester'
})
</script>


<template>
  <PageHero>
    <div class="hero dhd--layout-wrapper">
      <div class="summary-wrapper">
        <div class="dhd--text--overline summary-overline" v-html="page?.data.page_title_overline" />
        <h1 class="page-title" v-html="page?.data.page_title" />
      </div>
      <div class="photo-wrapper">
        <PrismicImage
          :field="page.data.hero_image"
          v-if="page"
          class="photo"
        />
      </div>
    </div>
  </PageHero>

  <section class="dhd--layout-wrapper overview-wrapper">
    <PrismicText class="overview" :field="page?.data.overview" />
  </section>

  <section
    class="dhd--layout-wrapper influence-section"
    :id="(page?.data.influences_section_id as string)"
  >
    <header class="influence-section-header">
      <div class="dhd--text--overline" v-html="page?.data.influences_section_overline" />
      <h2 class="influence-section-title" v-html="page?.data.influences_section_title" />
    </header>
    <div class="influence-section-content">
      <div 
        class="influence-item"
        v-for="item in page?.data.influences_list" 
        :key="`item-${item.title?.replace(/\s+/g, '')}`"
      >
        <div class="influence-meta">
          <h3 class="influence-title" v-html="item.title" />
          <div class="influence-credit" v-html="item.credit" />
        </div>
        <div
          class="influence-image-wrapper"
          :style="`--item-background-color: ${item.image_background}`"
        >
          <PrismicImage
            class="influence-image"
            :field="item.image"
            loading="lazy" 
          />
        </div>
        <PrismicRichText class="influence-description" :field="item.description" />
      </div>
    </div>
  </section>
  <SliceZone
    wrapper="section"
    :slices="page?.data.slices3 ?? []"
    :components="components"
  />
</template>

<style lang="scss" scoped>
  .hero {
    display: block;
    padding-top: var(--spatial-scale-7);
    padding-bottom: var(--spatial-scale-5);
    display: flex;
    flex-direction: column-reverse;
    gap: var(--spatial-scale-7);
    @media (min-width: $breakpoint-medium) {
      display: grid;
      gap: var(--grid-gutter);
      grid-template-columns: repeat(15, 1fr);
    }
    @media (min-width: $breakpoint-large) {
      padding-top: var(--spatial-scale-5);
      padding-bottom: var(--spatial-scale-6);
    }
  }
  .summary-wrapper {
    @media (min-width: $breakpoint-medium) {
      display: flex;
      flex-direction: column;
      grid-column: 1 / span 7;
      justify-content: center;
    }
    @media (min-width: $breakpoint-large) {
      grid-column: 1 / span 7;
    }
  }
  .photo-wrapper {
      @media (min-width: $breakpoint-medium) {
        grid-column: 9 / span 7;
      }
      @media (min-width: $breakpoint-large) {
        grid-column: 9 / span 5;
      }
    }

  .photo {
    aspect-ratio: calc(3/2);
    border: var(--spatial-scale-1) solid var(--text-knockout);
    box-sizing: border-box;
    max-width: 100%
  }
  .page-title {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: var(--type-scale-3);
    margin: 0;
  }

  @media (min-width: $breakpoint-large) {
    .summary {
      font-size: var(--type-scale-3);
      line-height: var(--spatial-scale-7);
    }
    .section-header {
      font-size: var(--type-scale-3);
      line-height: var(--spatial-scale-3);
      margin-top: var(--spatial-scale-12);
      margin-bottom: var(--spatial-scale-9);
    }
  }

  .overview-wrapper {
    margin-top: var(--spatial-scale-10);
    margin-bottom: var(--spatial-scale-10);
    @media (min-width: $breakpoint-medium) {
      display: grid;
      grid-template-columns: repeat(15, 1fr);
    }
    @media (min-width: $breakpoint-large) {
      margin-top: var(--spatial-scale-13);
    margin-bottom: var(--spatial-scale-13);
    }
    @media (min-width: $breakpoint-royale) {
      grid-template-columns: repeat(17, 1fr);
    }
  }
  .overview {
    font-size: var(--type-scale-2);
    margin: 0 auto;
    line-height: var(--spatial-scale-6);
    @media (min-width: $breakpoint-medium) {
      grid-column: 4 / span 9;
    }
    @media (min-width: $breakpoint-royale) {
      grid-column: 5 / span 9;
    }
  }

  .influence-section {
    @media (min-width: $breakpoint-large) {
      display: grid;
      gap: var(--grid-gutter);
      grid-template-columns: repeat(15, 1fr);
    }
  }
  .influence-section-header {
    margin-top: var(--spatial-scale-13);
    margin-bottom: var(--spatial-scale-8);
    @media (min-width: $breakpoint-large) {
      grid-column: 1 / span 4;
      margin: 0;
      text-align: right;
    }
    @media (min-width: $breakpoint-royale) {
      grid-column: 1 / span 4;
    }
  }

  .influence-section-title {
    font-size: var(--type-scale-4);
    font-family: var(--font-heading);
    font-weight: 600;
    line-height: var(--spatial-scale-7);
    margin-top: 0;
  }

  .influence-section-content {
    @media (min-width: $breakpoint-large) {
      grid-column: 6 / span 10;
      margin-top: calc(var(--spatial-scale-00) * -1);
    }
    @media (min-width: $breakpoint-royale) {
      grid-column: 6 / span 8;
    }
  }
  .influence-item {
    @media (min-width: $breakpoint-medium) {
      display: grid;
      gap: var(--grid-gutter);
      grid-template-columns: repeat(15, 1fr);
      grid-template-rows: repeat(2, auto);
    }
    @media (min-width: $breakpoint-large) {
      grid-template-columns: repeat(7, 1fr);
    }
  }
  .influence-meta {
    margin: 0 0 var(--spatial-scale-3);
    @media (min-width: $breakpoint-medium) {
      grid-column: 1 / span 15;
      grid-row: 1 / span 1;
      margin: 0;
    }
    @media (min-width: $breakpoint-large) {
      grid-column: 1 / span 8;
    }
  }
  .influence-title {
    font-family: var(--font-heading);
    font-size: var(--type-scale-2);
    line-height: var(--spatial-scale-5);
    margin: 0 0 var(--spatial-scale-00);
  }
  .influence-image-wrapper {
    background-color: var(--item-background-color);
    box-sizing: border-box;
    margin: 0 0 var(--grid-gutter);
    padding: var(--grid-gutter);
    @media (min-width: $breakpoint-medium) {
      grid-column: 1 / span 7;
      grid-row: 2 / span 1;
    }
    @media (min-width: $breakpoint-large) {
      aspect-ratio: 1;
      grid-column: 1 / span 3;
    }
  }
  .influence-image {
    display: block;
    margin: 0 auto;
    max-height: 20lvh;
    max-width: 100%;
    @media (min-width: $breakpoint-large) {
      max-height: 100%;
    }
  }
  .influence-description {
    font-size: var(--type-scale-1);
    line-height: var(--spatial-scale-5);
    grid-column: 8 / span 8;

    & > :first-child {
      margin-top: 0;
    }
    @media (min-width: $breakpoint-large) {
      grid-column: 4 / span 5;
      grid-row: 2 / span 1;
      margin-top: -0.25em;
    }
  }
</style>
