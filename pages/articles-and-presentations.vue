<script lang="ts" setup>
import type { ArticlesPageTypeDocumentDataListItem } from '~/prismicio-types'
import PageHero from '~/components/PageHero.vue'
import ContentList from '~/components/PageSections/ArticlesAndPresentations/ContentList.vue'

const prismic = usePrismic()
const { data: articles_page } = useAsyncData('/articles-and-presentations', async () =>
  await prismic.client.getByUID('articles_page_type', 'articles-and-presentations')
)

useServerSeoMeta({
  title: () => articles_page.value!.data.meta_title,
  description: () => articles_page.value?.data.meta_description,
  ogTitle: () => articles_page.value?.data.meta_title,
  ogDescription: () => articles_page.value?.data.meta_description,
  ogImage: () => articles_page.value?.data.meta_image.url,
  ogImageAlt: () => articles_page.value?.data.meta_image.alt,
})

</script>

<template>
  <PageHero>
    <div class="hero dhd--layout-wrapper" v-if="articles_page">
      <div class="summary-wrapper">
        <h1
          class="dhd--text--overline summary-overline"
          v-html="articles_page.data.page_title_overline" 
        />
        <h1 class="page-title" v-html="articles_page.data.page_title" />
      </div>
      <div class="hero-image-wrapper">
        <PrismicImage
          :field="articles_page.data.hero_image"
          class="hero-image"
        />
      </div>
    </div>
  </PageHero>
  <ContentList
    :content="(articles_page?.data.list as ArticlesPageTypeDocumentDataListItem[])"
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
  .summary {
    font-size: var(--type-scale-2);
    line-height: var(--spatial-scale-6);
    @media (min-width: $breakpoint-medium) {
      font-size: var(--type-scale-1);
      line-height: var(--spatial-scale-5);
      margin-top: 0;
      margin-bottom: 0;
    }
    @media (min-width: calc($breakpoint-medium + (200rem/16))) {
      font-size: var(--type-scale-2);
      line-height: var(--spatial-scale-6);
    }
    @media (min-width: $breakpoint-royale) {
      font-size: var(--type-scale-3);
      line-height: var(--spatial-scale-7);
    }
  }

  .hero-image-wrapper {
      @media (min-width: $breakpoint-medium) {
        grid-column: 9 / span 7;
      }
      @media (min-width: $breakpoint-large) {
        grid-column: 9 / span 7;
      }
      @media (min-width: $breakpoint-royale) {
        grid-column: 9 / span 7;
      }
    }

  .hero-image {
    aspect-ratio: calc(3/2);
    border: var(--spatial-scale-1) solid var(--text-knockout);
    box-sizing: border-box;
    max-width: 100%
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

</style>
