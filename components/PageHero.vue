<script lang="ts" setup>
  import Nav1 from './Nav1.vue';
  import paths from '~/paths';
</script>

<template>
  <div class="PageHero--wrapper">
    <div class="site-header dhd--layout-wrapper">
      <div class="site-header-logo-wrapper">
        <NuxtLink :to="paths.home" class="site-header-logo-link">Dan Hiester</NuxtLink>
      </div>
      <div class="site-header-nav1-wrapper">
        <Nav1 class="Nav1--site-header" />
      </div>
    </div>

    <header class="PageHero">
        <slot />
    </header>
  </div>
</template>

<style lang="scss" scoped>
  .PageHero--wrapper {
    background: var(--blue-hero-bg);
  }
  .PageHero {
    color: var(--text-knockout);
  }
  .site-header {
    display: flex;
    gap: var(--grid-gutter);
    justify-content: space-between;
    align-items: center;
    padding-top: var(--spatial-scale-3);
  }
  .site-header-logo-link {
    color: var(--text-knockout);
    font-size: var(--type-scale-1);
    line-height: var(--spatial-scale-1);
    font-family: var(--font-heading);
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
  }

  .Nav1--site-header {
    --nav-link-color: var(--text-knockout);
  }
  @media (min-width: $breakpoint-medium) {
    .site-header-logo-link {
      font-size: var(--type-scale-3);
      line-height: var(--spatial-scale-3);
    }
  }
  @media (min-width: $breakpoint-large) {
    .site-header {
      align-items: center;
      display: grid;
      gap: var(--grid-gutter);
      grid-template-columns: repeat(17, 1fr);
      padding-top: var(--spatial-scale-7);
    }
    .site-header-logo-wrapper {
      grid-column: 1 / span 4;
    }
    .site-header-nav1-wrapper {
      grid-column: 5 / span 9;
      padding-top: var(--spatial-scale-00);
    }
    .site-header-logo-link {
      font-size: var(--type-scale-4);
      line-height: var(--spatial-scale-4);
    }
    .Nav1--site-header {
      margin: 0 calc(var(--grid-gutter) * -1);
    }
  }
</style>
