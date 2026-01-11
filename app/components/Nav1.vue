<script lang="ts" setup>
  import type { FilledLinkToWebField } from '@prismicio/types';
  const prismic = usePrismic();
  const navLinks = useAsyncData(
    '$site_navigation',
    () => prismic.client.getSingle('main_navigation')
  ).data;

  const route = useRoute();

  // We want the link to / to also show as active when a case study
  // from the /portfolio folder is currently being shown.
  const additionalLinkClassName = (linkPath: string) => {
    return linkPath === '/' && route.path.startsWith('/portfolio')
      ? 'router-link-active'
      : ''
  };
</script>

<template>
  <nav class="Nav1">
    <PrismicLink
      v-for="item in navLinks?.data.links"
      :key="item.label + '_link'"
      :field="item.link"
      :class="`Nav1-link ${additionalLinkClassName((item.link as FilledLinkToWebField).url)}`"
    >
      {{ item.label }}
    </PrismicLink>
  </nav>
</template>

<style lang="scss" scoped>
  .Nav1 {
    --nav-link-underline-width: var(--spatial-scale-2);
    --nav-link-underline-width--hover: calc(100% - var(--grid-gutter));
    display: flex;
    gap: var(--spatial-scale-4);
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
      font-family: var(--font-body);
      line-height: var(--spatial-scale-0);
      margin: calc(var(--spatial-scale-0) * -1);
      padding: var(--spatial-scale-1);
      position: relative;
      text-decoration: none;
      transition: color .3s ease-out, text-decoration-color .3s ease-out;
      white-space: nowrap;
      &:after {
        background: var(--nav-link-color);
        content: ' ';
        display: block;
        height: calc(3.5rem/16);
        opacity: 0;
        position: absolute;
          top: 100%;
          left: var(--spatial-scale-1);
        transition: opacity .66s, width 0.66s;
        width: var(--nav-link-underline-width);
      }
      &:hover {
        &:after {
          opacity: 1;
          width: var(--nav-link-underline-width--hover);
        }
      }
      @media (min-width: $breakpoint-large) {
        font-size: var(--type-scale-1);
        line-height: var(--spatial-scale-1);
      }
    }
    .router-link-active {
      font-weight: 600;
      &:after {
        opacity: 1;
        width: var(--nav-link-underline-width);
      }
    }
  }

</style>
