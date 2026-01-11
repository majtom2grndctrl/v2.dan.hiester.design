<script setup lang="ts">
import PageHero from '~/components/PageHero.vue';
import TypewriterText from '~/components/TypewriterText.vue';
import { components } from '~~/slices';

const prismic = usePrismic()
const { data: page } = useAsyncData('/portfolio', async () =>
  await prismic.client.getByUID('homepage', 'home')
)

const heroIntroText = computed(() => prismic.asText(page.value?.data.hero_intro) || '');
const titleList = computed(() => (page.value?.data.titles_list ?? [])
  .map((item) => item.title_item)
  .filter((item): item is string => typeof item === 'string' && item.trim().length > 0)
);
const longestTitle = computed(() => titleList.value.reduce((longest, current) => (
  current.length > longest.length ? current : longest
), ''));
const summaryGhostText = computed(() => {
  const base = heroIntroText.value.trim();
  const suffix = longestTitle.value.trim();
  if (base && suffix) {
    return `${base} ${suffix}`;
  }
  return base || suffix;
});
const summaryTyped = ref(false);
const showTitles = computed(() => (summaryTyped.value || !heroIntroText.value) && titleList.value.length > 0);

watch(heroIntroText, (value) => {
  summaryTyped.value = !value;
});

useServerHead({
  title: () => `${page.value?.data.meta_title} • Dan Hiester`,
})

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
    <div class="hero">
        <div class="summary-wrapper">
          <div class="summary dhd--cms-content">
            <span v-if="summaryGhostText" class="summary-ghost" aria-hidden="true">
              {{ summaryGhostText }}
            </span>
            <span class="summary-live">
              <TypewriterText
                :text="heroIntroText"
                :type-speed="26"
                :start-delay="300"
                :pause-delay="900"
                :reserve-space="false"
                @done="summaryTyped = true"
              /><!--
              --><span v-if="showTitles" class="summary-titles">
                <TypewriterText
                  :texts="titleList"
                  :loop="true"
                  :type-speed="32"
                  :delete-speed="20"
                  :pause-delay="3000"
                  :start-delay="200"
                  :next-delay="1000"
                  :hide-cursor-on-complete="false"
                  :reserve-space="false"
                  prefix=" "
                />
              </span>
            </span>
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
    position: relative;
  }
  .summary-ghost {
    display: inline;
    visibility: hidden;
    white-space: pre-wrap;
  }
  .summary-live {
    position: absolute;
    inset: 0;
    width: 100%;
    white-space: pre-wrap;
  }
  .photo {
    aspect-ratio: calc(3/2);
    border: var(--spatial-scale-1) solid var(--text-knockout);
    box-sizing: border-box;
    max-width: 100%
  }
  @media (min-width: $breakpoint-small) {
      .summary-wrapper {
        padding-top: 0;
    }
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
      padding: 0;
    }
    .summary {
      font-size: var(--type-scale-1);
      line-height: var(--spatial-scale-5);
      margin-top: 0;
      margin-bottom: 0;
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
