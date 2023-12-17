<script setup lang="ts">
import { components } from '~/slices'
import PageHero from '~/components/PageHero.vue'

const prismic = usePrismic()
const route = useRoute()
const { data: page } = useAsyncData(`/portfolio/${route.params.uid}`, async () =>
  await prismic.client.getByUID('case_study', route.params.uid as string)
)
useHead({
  title: prismic.asText(page.value?.data.title)
})

useSeoMeta({
  title: page.value?.data.meta_title,
  description: page.value?.data.meta_description,
});

</script>


<template>
    <PageHero>
      <div class="hero dhd--layout-wrapper">
        <div class="hero-image-wrapper">
          <PrismicImage
            class="hero-image"
            :field="page.data.project_image"
            v-if="page"
          />
        </div>
        <div class="hero-meta-wrapper">
          <div class="dhd--text--overline" v-html="page?.data.case_study_type" />
          <h1 class="page-title">
            <PrismicText :field="page?.data.title" />
          </h1>
          <div class="project-title" v-html="page?.data.project_name" />
          <div class="employer" v-html="page?.data.employer" />
          <div class="project-timeline" v-html="page?.data.timeline" />
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
    display: flex;
    flex-direction: column;
    gap: var(--spatial-scale-4);
    margin-top: var(--spatial-scale-6);
    padding-bottom: var(--spatial-scale-6);
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
    margin: var(--spatial-scale-4) 0 var(--spatial-scale-00);
  }
  .employer, .project-timeline {
    font-size: var(--type-scale-1);
    line-height: var(--spatial-scale-4);
    margin: var(--spatial-scale-00) 0;
  }
  .hero-image {
    aspect-ratio: calc(3/2);
    max-width: 100%;
  }

  @media (min-width: $breakpoint-large) {
    .hero {
      flex-direction: row-reverse;
      align-items: center;
      gap: calc(calc(#{1/17} * 100%) + calc(var(--grid-gutter) * 2));
    }
    .hero-image-wrapper {
      flex-basis: calc(#{11/17} * 100%);
    }
    .hero-meta-wrapper {
      flex-basis: calc(#{5/17} * 100%);
    }
    .page-title {
      font-size: var(--type-scale-4);
      line-height: var(--spatial-scale-7);
    }
  }
</style>
