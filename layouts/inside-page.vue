<script setup lang="ts">
  const prismic = usePrismic();
  const navLinks = useAsyncData(
    '$site_navigation',
    () => prismic.client.getSingle('main_navigation')
  ).data;

  console.log({ links: navLinks });

</script>

<template>
  <div class="header-wrapper">
    <header class="header">
      <div class="logo-wrapper">
        <div class="logo-type">Dan Hiester</div>
      </div>
      <nav class="header-nav">
        <PrismicLink
          v-for="item in navLinks?.data.links"
          :key="item.label + '_link'"
          :field="item.link"
          class="header-link"
        >
          {{ item.label }}
        </PrismicLink>
      </nav>
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
  .header {
    margin: var(--mobile-margin);
  }
  .header-nav {
    display: flex;
    gap: 1rem;
  }
  .logo-type {
    font-family: var(--font-heading);
    font-size: var(--type-scale-3);
    font-weight: 700;
  }
</style>
