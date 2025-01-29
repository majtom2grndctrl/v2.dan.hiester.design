<script setup lang="ts">
import PageHero from '~/components/PageHero.vue';
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('/portfolio', async () =>
  await prismic.client.getByUID('homepage', 'home')
)

useServerHead({
  title: () => `${page.value?.data.meta_title} • Dan Hiester`,
})

useServerSeoMeta({
  title: () => page.value!.data.meta_title,
  description: () => page.value?.data.meta_description,
  ogTitle: () => page.value?.data.meta_title,
  ogDescription: () => page.value?.data.meta_description,
  ogImage: () => page.value?.data.meta_image.url,
  ogImageAlt: () => page.value?.data.meta_image.alt,
})

</script>


<template>
  <PageHero>
    <div class="hero dhd--layout-wrapper">
        <div class="summary-wrapper">
          <div class="summary dhd--cms-content">
            <PrismicText :field="page?.data.hero_intro" />
          </div>
        </div>
      </div>
  </PageHero>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
    class="dhd--layout-wrapper case-study-list"
  />
</template>

<style lang="scss" scoped>
  .hero {
    display: block;
  }
  .summary-wrapper {
    padding: var(--spatial-scale-8) 0;
  }
  .summary {
    font-size: var(--type-scale-2);
    line-height: var(--spatial-scale-6);
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
    }
    .summary-wrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      grid-column: 1 / span 10;
      padding: var(--spatial-scale-6) 0;
    }
    .summary {
      font-size: var(--type-scale-1);
      line-height: var(--spatial-scale-5);
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  @media (min-width: calc($breakpoint-medium + (200rem/16))) {
    .summary-wrapper {
      padding: var(--spatial-scale-9) 0;
    }
    .summary {
      font-size: var(--type-scale-2);
      line-height: var(--spatial-scale-6);
    }
  }

  @media (min-width: $breakpoint-large) {
    .hero {
      display: grid;
      grid-template-columns: repeat(15, 1fr);
    }
  }

  @media (min-width: $breakpoint-royale) {
    .hero {
      grid-template-columns: repeat(17, 1fr);
    }
    .summary-wrapper {
      grid-column: 1 / span 10;
    }
    .summary {
      font-size: var(--type-scale-3);
      line-height: var(--spatial-scale-7);
    }
  }
</style>