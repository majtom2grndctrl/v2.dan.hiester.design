<script lang="ts" setup>
  const prismic = usePrismic();
  const navLinks = useAsyncData(
    '$site_navigation',
    () => prismic.client.getSingle('main_navigation')
  ).data;
</script>

<template>
  <nav class="Nav1">
    <PrismicLink
      v-for="item in navLinks?.data.links"
      :key="item.label + '_link'"
      :field="item.link"
      class="Nav1-link"
    >
      {{ item.label }}
    </PrismicLink>
  </nav>
</template>

<style lang="scss" scoped>
  .Nav1 {
    display: flex;
    gap: var(--spatial-scale-4);
    overflow-x: auto;
    @media (min-width: $breakpoint-medium) {
      gap: var(--spatial-scale-4);
      overflow-x: unset;
    }
    > .Nav1-link {
      background-color: var(--link-bg-inactive);
      border-radius: var(--spatial-scale-00);
      box-sizing: border-box;
      color: var(--nav-link-color);
      display: flex;
        align-items: center;
        justify-content: center;
      font-size: var(--type-scale-0);
      font-weight: 500;
      font-family: var(--font-heading);
      line-height: var(--spatial-scale-0);
      margin: calc(var(--spatial-scale-0) * -1);
      padding: var(--spatial-scale-1);
      position: relative;
      text-decoration: none;
      transition: color .66s, background-color .66s;
      white-space: nowrap;
      &:after {
        background: var(--bg-blue-600);
        border-radius: 100%;
        content: '';
        display: block;
        height: calc(3.5rem/16);
        opacity: 0;
        position: absolute;
          top: 90%;
          left: 49%;
        transition: opacity .66s, background-color .4s;
        width: calc(3.5rem/16);
      }
      &.active {
        color: var(--bg-blue-600);
        &:after {
          opacity: 1;
        }
      }
      &:hover {
        background-color: var(--link-bg-active);
        color: var(--gray-400);
      }
    }

  }


</style>
