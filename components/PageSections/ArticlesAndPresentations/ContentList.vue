<script setup lang="ts">
import type { ArticlesPageTypeDocumentDataListItem } from '~/prismicio-types'
import type { GroupField } from '@prismicio/client';
import { defineProps } from 'vue'

const props = defineProps({
  content: {
    type: Array as () => ArticlesPageTypeDocumentDataListItem[],
    required: true,
  }
})
</script>

<template>
  <section class="dhd--layout-wrapper ContentList-wrapper">
    <div class="ContentList">
      <article class="item" v-for="item in content">
        <header class="header">
          <div class="dhd--text--overline" v-html="item.overline" />
          <h2 class="title">
            <PrismicLink class="dhd--text--title-link" :field="item.url">
              {{ item.title }}
            </PrismicLink>
          </h2>
        </header>
        <PrismicRichText
          class="description"
          :field="item.description" 
        />
        <PrismicLink class="dhd--cta-link" :field="item.url">
          {{ item.cta_link_label }}
        </PrismicLink>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .ContentList-wrapper {
    @media (min-width: $breakpoint-medium) {
      display: grid;
      gap: var(--grid-gutter);
      grid-template-columns: repeat(15, 1fr);
    }
    @media (min-width: $breakpoint-royale) {
      grid-template-columns: repeat(17, 1fr);
    }
  }
  .ContentList {
    @media (min-width: $breakpoint-medium) {
      grid-column: 3 / span 11;
    }
    @media (min-width: $breakpoint-large) {
      grid-column: 4 / span 9;
    }
    @media (min-width: $breakpoint-royale) {
      grid-column: 5 / span 9;
    }
  }

  .item {
    margin-top: var(--spatial-scale-11);
    margin-bottom: var(--spatial-scale-11);
  }

  .title {
    font-size: var(--type-scale-4);
    font-family: var(--font-heading);
    font-weight: 600;
    line-height: var(--spatial-scale-7);
    margin-top: 0;
    margin-bottom: var(--spatial-scale-3);
  }

  .description {
    font-size: var(--type-scale-1);
    line-height: var(--spatial-scale-5);
    @media (min-width: $breakpoint-large) {
      grid-column: 6 / span 10;
    }
    @media (min-width: $breakpoint-royale) {
      grid-column: 6 / span 8;
    }
  }

</style>