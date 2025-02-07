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
    padding-top: var(--spatial-scale-9);
    transition: background-color 0.3s ease-in-out;
  }
  .PageHero {
    color: var(--text-knockout);
  }
</style>
