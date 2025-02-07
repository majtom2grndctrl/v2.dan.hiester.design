<script lang="ts" setup>
</script>

<template>
  <div class="PageHero--wrapper">
    <header class="PageHero">
        <slot />
    </header>
  </div>
</template>

<style lang="scss" scoped>
  .PageHero--wrapper {
    background: var(--hero-bg);
    padding-top: var(--spatial-scale-11);
    transition: background-color 0.3s ease-in-out;
    @media (min-width: $breakpoint-small) {
        padding-top: var(--spatial-scale-13)
    }
    @media (min-width: $breakpoint-medium) {
      padding-top: var(--spatial-scale-11);
      padding-bottom: var(--spatial-scale-6);
    }
    @media (min-width: $breakpoint-large) {
      padding-top: var(--spatial-scale-11);
      padding-bottom: var(--spatial-scale-7);
    }
  }
  .PageHero {
    color: var(--text-knockout);
  }
</style>
