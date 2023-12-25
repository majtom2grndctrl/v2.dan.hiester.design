  <script setup lang="ts">
  import type { AboutPageTypeDocumentDataInfluencesListItem } from '~/prismicio-types'

  const props = defineProps({
    overline: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    influences: {
      type: Array as () => AboutPageTypeDocumentDataInfluencesListItem[],
      required: true,
    }
  })
  </script>

  <template>
    <section
      class="dhd--layout-wrapper Influences"
    >
      <header class="header">
        <div class="header-sticky">
          <div class="dhd--text--overline" v-html="overline" />
          <h2 class="title" v-html="title" />
        </div>
      </header>
      <div class="content">
        <div 
          class="influence-item"
          v-for="item in influences" 
          :key="`item-${item.title?.replace(/\s+/g, '')}`"
        >
          <div class="influence-meta">
            <h3 class="influence-title" v-html="item.title" />
            <div class="influence-credit" v-html="item.credit" />
          </div>
          <div
            class="influence-image-wrapper"
            :style="`--item-background-color: ${item.image_background}`"
          >
            <PrismicImage
              class="influence-image"
              :field="item.image"
              loading="lazy" 
            />
          </div>
          <PrismicRichText class="influence-description" :field="item.description" />
        </div>
      </div>
    </section>
  </template>

  <style lang="scss" scoped>
    .Influences {
      // margin-top: var(--spatial-scale-13);
      @media (min-width: $breakpoint-large) {
        display: grid;
        gap: var(--grid-gutter);
        grid-template-columns: repeat(15, 1fr);
        margin: 0 auto;
      }
      @media (min-width: $breakpoint-royale) {
        grid-template-columns: repeat(17, 1fr);
      }
    }
    .header {
      margin-top: 0;
      margin-bottom: var(--spatial-scale-8);
      @media (min-width: $breakpoint-large) {
        grid-column: 1 / span 4;
        margin: 0;
        position: relative;
        text-align: right;
      }
      @media (min-width: $breakpoint-royale) {
        grid-column: 1 / span 5;
      }
    }
    .header-sticky {
      @media (min-width: $breakpoint-large) {
        position: sticky;
        top: var(--spatial-scale-8);
        padding-bottom: var(--spatial-scale-0);
      }
    }

    .title {
      font-size: var(--type-scale-4);
      font-family: var(--font-heading);
      font-weight: 600;
      line-height: var(--spatial-scale-7);
      margin-top: 0;
      margin-bottom: 0;
    }

    .content {
      @media (min-width: $breakpoint-large) {
        grid-column: 6 / span 8;
        margin-top: calc(var(--spatial-scale-00) * -1);
      }
      @media (min-width: $breakpoint-royale) {
        grid-column: 7 / span 8;
      }
    }
    .influence-item {
      margin-bottom: var(--spatial-scale-10);
      &:last-of-type {
        margin-bottom: 0;
      }

      @media (min-width: $breakpoint-medium) {
        display: grid;
        gap: var(--grid-gutter);
        grid-template-columns: repeat(15, 1fr);
        grid-template-rows: repeat(2, auto);
      }
      @media (min-width: $breakpoint-large) {
        grid-template-columns: repeat(8, 1fr);
      }
      @media (min-width: $breakpoint-royale) {
        grid-template-columns: repeat(8, 1fr);
      }
    }
    .influence-meta {
      margin: 0 0 var(--spatial-scale-3);
      @media (min-width: $breakpoint-medium) {
        grid-column: 1 / span 15;
        grid-row: 1 / span 1;
        margin: 0;
      }
      @media (min-width: $breakpoint-large) {
        grid-column: 1 / span 8;
      }
      @media (min-width: $breakpoint-royale) {
        grid-column: 1 / span 8;
      }
    }
    .influence-title {
      font-family: var(--font-heading);
      font-size: var(--type-scale-2);
      line-height: var(--spatial-scale-5);
      margin: 0 0 var(--spatial-scale-00);
    }
    .influence-image-wrapper {
      background-color: var(--item-background-color);
      box-sizing: border-box;
      margin: 0 0 var(--grid-gutter);
      padding: var(--grid-gutter);
      @media (min-width: $breakpoint-medium) {
        aspect-ratio: 1;
        grid-column: 1 / span 5;
        grid-row: 2 / span 1;
      }
      @media (min-width: $breakpoint-large) {
        grid-column: 1 / span 3;
      }
    }
    .influence-image {
      display: block;
      margin: 0 auto;
      max-height: 20lvh;
      max-width: 100%;
      @media (min-width: $breakpoint-medium) {
        max-height: 100%;
      }
    }
    .influence-description {
      font-size: var(--type-scale-1);
      line-height: var(--spatial-scale-5);
      grid-column: 6 / span 10;

      & > :first-child {
        margin-top: 0;
      }
      @media (min-width: $breakpoint-large) {
        grid-column: 4 / span 5;
        grid-row: 2 / span 1;
        margin-top: -0.25em;
      }
      @media (min-width: $breakpoint-royale) {
        grid-column: 4 / span 5;
      }
    }

  </style>