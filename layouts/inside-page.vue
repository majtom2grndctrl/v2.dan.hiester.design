<script setup lang="ts">
import Nav1 from '~/components/Nav1.vue';
</script>

<template>
  <div class="header-wrapper">
    <header class="header">
      <div class="logo-wrapper" id="dh-logo-wrapper">
        <div class="logo-type">Dan Hiester</div>
      </div>
      <Nav1 />
    </header>
  </div>
  <main class="main-wrapper">
    <div class="main">
      <NuxtPage />
    </div>
  </main>
  <footer>Footer</footer>
</template>

<style lang="scss" scoped>
  .header-wrapper {
    @include wrapper-full-width;
  }
  .header {
    margin-top: var(--mobile-block-margin);
    margin-bottom: var(--mobile-block-margin);
    display: flex;
    flex-direction: row;
    align-items: basline;
    gap: var(--spatial-scale-3);
  }
  .logo-type {
    font-family: var(--font-heading);
    font-size: var(--type-scale-3);
    font-weight: 700;
  }
  @media(min-width: $breakpoint-medium) {
    .header {
      display: grid;
      grid-template-columns: repeat(17, 1fr);
      gap: var(--spatial-scale-1);
    }
    .logo-wrapper {
      grid-column-start: 1;
      grid-column-end: 8;
    }
    @media(min-width: $breakpoint-large) {
      .header {
        grid-template-columns: repeat(19, 1fr);
      }
      .logo-wrapper {
        grid-column-end: 6;
      }
    }
  }
</style>
