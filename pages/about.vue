<script setup lang="ts">
import { components } from '~/slices'
import PageHero from '~/components/PageHero.vue';

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
        <div class="dhd--text--overline" v-html="page?.data.page_title_overline" />
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
  <h2 class="section-header">
  </h2>
  <div v-for="item in page?.data.influences_list" :key="`item-${item.title?.replace(/\s+/g, '')}`">
    <PrismicImage :field="item.cover_image" loading="lazy" />
    <h3 v-html="item.title" />
    <div v-html="item.credit" />
    <PrismicRichText :field="item.description" />
  </div>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices3 ?? []"
    :components="components"
    class="dhd--layout-wrapper"
  />
</template>

<style lang="scss" scoped>
  .hero {
    display: block;
    padding-top: var(--spatial-scale-3);
    padding-bottom: var(--spatial-scale-3);
  }
  .photo {
    aspect-ratio: calc(3/2);
    border: var(--spatial-scale-1) solid var(--text-knockout);
    box-sizing: border-box;
    max-width: 100%
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

  @media (min-width: $breakpoint-large) {
    .hero {
      display: grid;
      gap: var(--spatial-scale-2);
      grid-template-columns: repeat(15, 1fr);
      padding-top: var(--spatial-scale-5);
      padding-bottom: var(--spatial-scale-6);
    }
    .summary-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-column: 1 / span 7;
    }
    .summary {
      font-size: var(--type-scale-3);
      line-height: var(--spatial-scale-7);
    }
    .photo-wrapper {
      grid-column: 9 / span 7;
    }
    .section-header {
      font-size: var(--type-scale-3);
      line-height: var(--spatial-scale-3);
      margin-top: var(--spatial-scale-12);
      margin-bottom: var(--spatial-scale-9);
    }
  }
</style>