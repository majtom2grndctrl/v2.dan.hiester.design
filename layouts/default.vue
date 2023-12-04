<script lang="ts" setup>
  import ContactCTA from '~/components/ContactCTA.vue';
</script>

<template>
  <slot />
  <ContactCTA />
  <footer class="SiteFooter--wrapper">
    <div class="SiteFooter dhd--layout-wrapper">
      Dan Hiester
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .SiteFooter--wrapper {
    background-color: gray;
    padding-top: var(--spatial-scale-3);
    padding-bottom: var(--spatial-scale-5);
  }
</style>
