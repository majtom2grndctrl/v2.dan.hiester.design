<script setup lang="ts">
import { components } from '~/slices'
import Influences from '~/components/PageSections/About/Influences.vue';
import PageHero from '~/components/PageHero.vue';

const prismic = usePrismic()
const { data: page } = useAsyncData('/about-dan', async () =>
  await prismic.client.getByUID('about_page_type', 'about')
)

useServerSeoMeta({
  title: () => page.value?.data.meta_title || '',
  description: () => page.value?.data.meta_description,
  ogTitle: () => page.value?.data.meta_title,
  ogDescription: () => page.value?.data.meta_description,
  ogImage: () => page.value?.data.meta_image.url,
  ogImageAlt: () => page.value?.data.meta_image.alt,
})

</script>


<template>
  <PageHero>
    <div class="hero" v-if="page">
      <div class="summary-wrapper">
        <h1 class="dhd--text--overline summary-overline" v-html="page.data.page_title_overline" />
        <div class="page-title" v-html="page.data.page_title" />
      </div>
      <div class="photo-wrapper">
        <PrismicImage
          :field="page.data.hero_image"
          :imgixParams="{ fit: 'crop', ar: '3:2' }"
          class="photo"
        />
      </div>
    </div>
  </PageHero>
  <section class="dhd--layout-wrapper overview-wrapper">
    <div class="overview">
      <PrismicText :field="page?.data.overview" />
    </div>
  </section>

  <Influences
    :overline="page?.data.influences_section_overline!"
    :title="page?.data.influences_section_title!"
    :influences="page?.data.influences_list"
    :id="(page?.data.influences_section_id as string)"
    v-if="page?.data"
  />

  <SliceZone
    wrapper="section"
    class="more-about"
    :slices="page?.data.slices3 ?? []"
    :components="components"
  />
</template>

<style lang="scss" scoped>
  .hero {
    display: block;
    padding-top: var(--spatial-scale-8);
    padding-bottom: var(--spatial-scale-7);
    display: flex;
    flex-direction: column-reverse;
    gap: var(--spatial-scale-7);
    @media (min-width: $breakpoint-small) {
      padding-top: 0;
    }
    @media (min-width: $breakpoint-medium) {
      display: grid;
      gap: var(--grid-gutter);
      grid-template-columns: repeat(15, 1fr);
      padding-top: 0;
      padding-bottom: 0;
    }
    @media (min-width: $breakpoint-large) {
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
    height: auto;
    max-width: 100%;
  }
  .page-title {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: var(--type-scale-3);
    line-height: var(--spatial-scale-6);
    margin: 0;
    @media (min-width: $breakpoint-small) {
      font-size: var(--type-scale-4);
      line-height: var(--spatial-scale-7);
    }
    @media (min-width: $breakpoint-medium) {
      font-size: var(--type-scale-3);
      line-height: var(--spatial-scale-6);
    }
    @media (min-width: $breakpoint-large) {
      font-size: var(--type-scale-4);
      line-height: var(--spatial-scale-7);
    }
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
    @media (min-height: 800px) {
      margin-top: var(--spatial-scale-12);
      margin-bottom: var(--spatial-scale-12);
    }
    @media (min-width: $breakpoint-medium) {
      display: grid;
      gap: var(--grid-gutter);
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

  .more-about {
    @media (min-width: $breakpoint-large) {
      margin-top: var(--spatial-scale-12);
      margin-bottom: var(--spatial-scale-12);
    }
  }

</style>
