<script setup lang="ts">
import { components } from '~/slices'
import PageHero from '~/components/PageHero.vue'

const prismic = usePrismic()
const route = useRoute()
const { data: page } = useAsyncData('[uid]', () =>
  prismic.client.getByUID('case_study', route.params.uid as string)
)
useHead({
  title: prismic.asText(page.value?.data.title)
})

</script>


<template>
    <PageHero>
      <div class="hero dhd--layout-wrapper">
        <div class="hero-meta-wrapper">
          <div class="dhd--text--overline" v-html="page?.data.case_study_type" />
          <h1 class="page-title">
            <PrismicText :field="page?.data.title" />
          </h1>
          <div class="project-title" v-html="page?.data.project_name" />
        </div>
        <div class="hero-image-wrapper">
          <PrismicImage class="hero-image" :field="page?.data.project_image!" />
        </div>
      </div>

    </PageHero>
    <SliceZone
      wrapper="main"
      :slices="page?.data.slices ?? []"
      :components="components"
    />
</template>

<style lang="scss" scoped>
  .hero {
    margin-top: var(--spatial-scale-6);
    padding-bottom: var(--spatial-scale-6)
  }
  .page-title {
    font-family: var(--font-heading);
    font-size: var(--type-scale-3);
    font-weight: 600;
    line-height: var(--spatial-scale-6);
    margin: 0;
  }
  .project-title {
    font-family: var(--font-heading);
    font-size: var(--type-scale-2);
    line-height: var(--spatial-scale-5);
  }
  .hero-image {
    aspect-ratio: calc(3/2);
    max-width: 100%;
  }
</style>
