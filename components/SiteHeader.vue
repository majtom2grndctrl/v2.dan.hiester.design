<script lang="ts" setup>
  import Nav1 from './Nav1.vue';
  import paths from '~/paths';
</script>

<template>
  <div class="SiteHeader-wrapper">
    <header class="SiteHeader dhd--layout-wrapper">
      <div class="SiteHeader-logo-wrapper">
        <NuxtLink :to="paths.home" class="SiteHeader-logo-link">Dan Hiester</NuxtLink>
      </div>
      <div class="SiteHeader-nav1-wrapper">
        <Nav1 class="Nav1--SiteHeader" />
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
  .SiteHeader-wrapper {
    background-color: var(--blue-hero-bg);
  }
  .SiteHeader {
    padding-top: var(--spatial-scale-5);
    @media (min-width: $breakpoint-medium) {
      align-items: first baseline;
      display: flex;
      gap: var(--grid-gutter);
      justify-content: flex-start;
      padding-top: var(--spatial-scale-6);
    }
    @media (min-width: $breakpoint-large) {
      display: grid;
      grid-template-columns: repeat(15, 1fr);
      padding-top: var(--spatial-scale-7);
    }
  }
  .SiteHeader-logo-link {
    color: var(--text-knockout);
    font-size: var(--type-scale-3);
    line-height: var(--spatial-scale-3);
    font-family: var(--font-heading);
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
  }
  .SiteHeader-nav1-wrapper {
    margin: var(--spatial-scale-3) 0 0 0;
    // Turns out, the downside of OKLCH is it does not currently have
    // a good way to support a gradient from solid to transparent
    /*
    position: relative;
    &:before {
      content: ' ';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 100%;
      background: linear-gradient(to right, var(--blue-hero-bg), var(--blue-hero-bg-transparent));
      width: var(--grid-gutter);
      z-index: 2;
    }
    &:after {
      content: ' ';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 100%;
      background: linear-gradient(to left, var(--blue-hero-bg), var(--blue-hero-bg-transparent));
      width: var(--grid-gutter);
      z-index: 2;
    }
    */
    @media (min-width: $breakpoint-medium) {
      grid-column: 5 / span 10;
      margin: 0 var(--grid-gutter);
    }
    @media (min-width: $breakpoint-large) {
      margin: 0;
    }
  }

  .Nav1--SiteHeader {
    --nav-link-color: var(--text-knockout);
    margin: calc(var(--grid-gutter) * -1);
    padding: var(--spatial-scale-2) var(--grid-gutter);
    position: relative;
    overflow-x: auto;
    z-index: 1;
    @media (min-width: $breakpoint-medium) {
      gap: var(--spatial-scale-4);
      margin: 0;
      padding: 0;
      overflow-x: unset;
    }
  }
  @media (min-width: $breakpoint-medium) {
    .SiteHeader-logo-wrapper {
      grid-column: 1 / span 4;
    }
    .SiteHeader-logo-link {
      font-size: var(--type-scale-3);
      line-height: var(--spatial-scale-3);
    }
  }
  @media (min-width: $breakpoint-large) {
    .SiteHeader-logo-wrapper {
      grid-column: 1 / span 4;
    }
    .SiteHeader-nav1-wrapper {
      grid-column: 5 / span 9;
    }
    .SiteHeader-logo-link {
      font-size: var(--type-scale-4);
      line-height: var(--spatial-scale-4);
    }
  }
  @media (min-width: $breakpoint-royale) {
    .SiteHeader {
      grid-template-columns: repeat(17, 1fr);
    }
    .SiteHeader-nav1-wrapper {
      grid-column: 5 / span 10;
    }
  }
</style>
