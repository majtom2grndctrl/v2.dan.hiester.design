<script lang="ts" setup>
  const prismic = usePrismic();
  const navLinks = useAsyncData(
    '$site_navigation',
    () => prismic.client.getSingle('main_navigation')
  ).data;
</script>

<template>
  <div>
    <nav class="Nav1">
        <PrismicLink
          v-for="item in navLinks?.data.links"
          :key="item.label + '_link'"
          :field="item.link"
          class="header-link"
        >
          {{ item.label }}
        </PrismicLink>
      </nav>
  </div>
</template>

<style lang="scss" scoped>
  .Nav1 {
    display: flex;
    gap: var(--spatial-scale-00);
    > a {
      background-color: var(--link-bg-inactive);
      border-radius: var(--spatial-scale-00);
      box-sizing: border-box;
      color: #97A3A7;
      display: flex;
        align-items: center;
        justify-content: center;
      font-size: var(--type-scale-0);
      font-weight: 500;
      font-family: var(--font-heading);
      line-height: var(--spatial-scale-0);
      min-width: var(--spatial-scale-10);
      margin: 0;
      padding: var(--spatial-scale-1);
      position: relative;
      text-decoration: none;
      transition: color .66s, background-color .66s;
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
