<script setup lang="ts">
import { components } from '~/slices'
import PageHero from '~/components/PageHero.vue';

const prismic = usePrismic()
const { data: page } = await useAsyncData('/portfolio', () =>
  prismic.client.getByUID('homepage', 'home')
)

useHead({
  title: 'Dan Hiester'
})
</script>


<template>
  <PageHero>
    <div class="hero dhd--layout-wrapper">
      <div class="summary-wrapper">
        <PrismicText :field="page?.data.hero_intro" class="summary dhd--cms-content" />
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
  <h2 class="section-header">
    <PrismicText :field="page?.data.case_study_heading" />
  </h2>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
    class="dhd--layout-wrapper"
  />
</template>

<style lang="scss" scoped>
  .hero {
    display: block;
    overflow: hidden;
  }
  .section-header {
      font-size: var(--type-scale-2);
      font-family: var(--font-heading);
      font-weight: 500;
      line-height: var(--spatial-scale-2);
      margin-top: var(--spatial-scale-8);
      margin-bottom: var(--spatial-scale-3);
      text-align: center;
  }
  .summary-wrapper {
    margin: var(--spatial-scale-9) 0 var(--spatial-scale-7);
  }
  .summary {
    font-size: var(--type-scale-2);
    line-height: var(--spatial-scale-6);
  }
  .photo-wrapper {
    margin: var(--spatial-scale-6) 0 var(--spatial-scale-9);
  }
  .photo {
    aspect-ratio: calc(3/2);
    border: var(--spatial-scale-1) solid var(--text-knockout);
    box-sizing: border-box;
    max-width: 100%
  }
  @media (min-width: $breakpoint-medium) {
    .hero {
      display: grid;
      gap: var(--grid-gutter);
      grid-template-columns: repeat(15, 1fr);
      overflow: unset;
      padding-top: var(--spatial-scale-6);
      padding-bottom: var(--spatial-scale-8);
    }
    .summary-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-column: 1 / span 7;
      margin: 0;
    }
    .summary {
      font-size: var(--type-scale-1);
      line-height: var(--spatial-scale-5);
      margin-top: 0;
      margin-bottom: 0;
    }
    .photo-wrapper {
      justify-content: center;
      display: flex;
      flex-direction: column;
      grid-column: 9 / span 7;
      margin: 0;
    }
  }
  @media (min-width: calc($breakpoint-medium + (200rem/16))) {
    .summary {
      font-size: var(--type-scale-2);
      line-height: var(--spatial-scale-6);
    }
  }

  @media (min-width: $breakpoint-large) {
    .hero {
      display: grid;
      grid-template-columns: repeat(15, 1fr);
      padding-top: var(--spatial-scale-9);
      padding-bottom: var(--spatial-scale-8);
    }
    .summary {
      font-size: var(--type-scale-2);
      line-height: var(--spatial-scale-6);
    }
    .section-header {
      font-size: var(--type-scale-3);
      line-height: var(--spatial-scale-3);
      margin-top: var(--spatial-scale-12);
      margin-bottom: 0;
    }
  }

  @media (min-width: $breakpoint-royale) {
    .hero {
      grid-template-columns: repeat(17, 1fr);
    }
    .summary-wrapper {
      grid-column: 1 / span 7;
    }
    .summary {
      font-size: var(--type-scale-3);
      line-height: var(--spatial-scale-7);
    }
    .photo-wrapper {
      grid-column: 10 / span 6;
    }
  }
</style>