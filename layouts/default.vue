<script lang="ts" setup>
  import ContactCTA from '~/components/ContactCTA.vue';
</script>

<template>
  <slot />
  <ContactCTA />
  <footer class="SiteFooter--wrapper">
    <div class="SiteFooter dhd--layout-wrapper">
      <NuxtLink to="/" class="brand">Dan Hiester</NuxtLink>
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
  a {
    color: var(--footer-text-color);
    text-decoration: none;
  }
  .brand {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: var(--type-scale-3);
    line-height: var(--spatial-scale-3);
  }
</style>
