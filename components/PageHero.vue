<script lang="ts" setup>
  import Nav1 from './Nav1.vue';
  import paths from '~/paths';
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
    background-color: var(--blue-hero-bg);
    transition: background-color 0.3s ease-in-out;
  }
  .PageHero {
    color: var(--text-knockout);
  }
</style>
