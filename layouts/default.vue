<script lang="ts" setup>
  import ContactCTA from '~/components/ContactCTA.vue';
  import paths from '~/paths';
  const prismic = usePrismic();
  const navLinks = useAsyncData(
    '$site_navigation',
    () => prismic.client.getSingle('main_navigation')
  ).data;
</script>

<template>
  <slot />
  <ContactCTA />
  <footer class="SiteFooter--wrapper">
    <div class="SiteFooter dhd--layout-wrapper">
      <div class="brand-wrapper">
        <NuxtLink :to="paths.home" class="brand">Dan Hiester</NuxtLink>
      </div>
      <nav class="nav-wrapper">
        <PrismicLink
          v-for="item in navLinks?.data.links"
          :key="item.label + '_link'"
          :field="item.link"
          class="nav-link"
        >
          {{ item.label }}
        </PrismicLink>
      </nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .SiteFooter--wrapper {
    --footer-text-color: oklch(94.2% 0.032 183.3);
    background-color: oklch(34.6% 0.051 222.4);
    color: var(--footer-text-color);
    padding-top: var(--spatial-scale-9);
    padding-bottom: var(--spatial-scale-12);
    @media (min-width: $breakpoint-medium) {
      padding-top: var(--spatial-scale-5);
      padding-bottom: var(--spatial-scale-8);
    }
  }
  .SiteFooter {
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    @media (min-width: $breakpoint-royale) {
      grid-template-columns: repeat(17, 1fr);
    }
  }
  a {
    color: var(--footer-text-color);
    text-decoration: none;
  }
  .brand-wrapper {
    margin-bottom: var(--spatial-scale-3);
    grid-column: 1 / span 8;
    @media (min-width: $breakpoint-small) {
      grid-column: 1 / span 7;
    }
    @media (min-width: $breakpoint-medium) {
      grid-column: 1 / span 5;
    }
    @media (min-width: $breakpoint-large) {
      grid-column: 1 / span 3;
    }
    @media (min-width: $breakpoint-royale) {
      grid-column: 1 / span 3;
    }
  }
  .brand {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: var(--type-scale-3);
    line-height: var(--spatial-scale-3);
  }
  .nav-wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--spatial-scale-00);
    grid-column: 10 / span 7;
    @media (min-width: $breakpoint-small) {
      grid-column: 9 / span 5;
    }
    @media (min-width: $breakpoint-medium) {
      grid-column: 6 / span 5;
    }
    @media (min-width: $breakpoint-large) {
      grid-column: 4 / span 5;
    }
    @media (min-width: $breakpoint-royale) {
      grid-column: 4 / span 5;
    }
  }
  .nav-link {
    display: inline-block;
  }
</style>
