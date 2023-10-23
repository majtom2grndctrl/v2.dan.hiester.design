<script setup lang="ts">
import { components } from '~/slices'
import PageHero from '~/components/PageHero.vue';

const prismic = usePrismic()
const { data: page } = useAsyncData('index', async () =>
  await prismic.client.getByUID('home', 'home')
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
        <PrismicText :field="page?.data.hero_intro" class="summary" />
      </div>
      <div class="photo-wrapper">
        <PrismicImage :field="page?.data.hero_image" class="photo" />
      </div>
    </div>
  </PageHero>
  <NuxtLink to="/portfolio/road-closures-tracker">First case study</NuxtLink>

  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
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
  }
</style>