<script lang="ts" setup>
import Nav1 from './Nav1.vue';
import paths from '~/paths';
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

// Debounce function
const debounce = (fn: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

const handleScroll = () => {
  requestAnimationFrame(() => {
    if (typeof window !== 'undefined') {
      isScrolled.value = window.scrollY > 0;
    }
  });
};

const debouncedHandleScroll = debounce(handleScroll, 10);

// Add scroll listener when component mounts
onMounted(() => {
  window.addEventListener('scroll', debouncedHandleScroll, { passive: true });
  // Check initial scroll position
  handleScroll();
});

// Clean up scroll listener when component unmounts
onUnmounted(() => {
  window.removeEventListener('scroll', debouncedHandleScroll);
});
</script>

<template>
  <div class="SiteHeader-wrapper" :class="{ 'is-scrolled': isScrolled }">
    <header class="SiteHeader dhd--layout-wrapper">
      <div class="SiteHeader-logo-wrapper">
        <NuxtLink :to="paths.home" class="SiteHeader-logo-link">Dan Hiester</NuxtLink>
      </div>
      <div class="SiteHeader-nav1-wrapper">
        <Nav1 class="Nav1--SiteHeader" />
      </div>
    </header>
  </div>
</template>

<style lang="scss" scoped>
  .SiteHeader-wrapper {
    --nav-link-color: var(--text-knockout);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1000;
    transition: background-color 0.3s ease-out, backdrop-filter 0.3s ease-out;
    will-change: background-color, backdrop-filter;

    &.is-scrolled {
      --nav-link-color: var(--midnight-slate);
      background-color: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(8px);
      color: var(--midnight-slate);
      -webkit-backdrop-filter: blur(8px);

      @media (prefers-color-scheme: dark) {
        --nav-link-color: var(--text-knockout); // Keep the original color in dark mode
        background-color: rgba(0, 0, 0, 0.2);
        color: var(--text-knockout);
      }
    }
  }

  .SiteHeader {
    padding: var(--spatial-scale-5) 0 var(--spatial-scale-7);
    @media (min-width: $breakpoint-medium) {
      align-items: first baseline;
      display: flex;
      gap: var(--grid-gutter);
      justify-content: flex-start;
      padding-top: var(--spatial-scale-6);
    }
    @media (min-width: $breakpoint-large) {
      display: grid;
      grid-template-columns: repeat(15, 1fr);
      padding: var(--spatial-scale-7) 0 var(--spatial-scale-6);
    }
  }

  .SiteHeader-logo-link {
    color: var(--nav-link-color);
    font-size: var(--type-scale-3);
    line-height: var(--spatial-scale-3);
    font-family: var(--font-heading);
    font-weight: 700;
    text-decoration: none;
    transition: color 0.3s ease-out;
    white-space: nowrap;
  }

  .SiteHeader-nav1-wrapper {
    margin: var(--spatial-scale-3) 0 0 0;
    @media (min-width: $breakpoint-medium) {
      grid-column: 5 / span 10;
      margin: 0 var(--grid-gutter);
    }
    @media (min-width: $breakpoint-large) {
      margin: 0;
    }
  }

  .Nav1--SiteHeader {
    margin: calc(var(--grid-gutter) * -1);
    padding: var(--spatial-scale-2) var(--grid-gutter);
    position: relative;
    overflow-x: auto;
    z-index: 1;
    @media (min-width: $breakpoint-medium) {
      gap: var(--spatial-scale-4);
      margin: 0;
      padding: 0;
      overflow-x: unset;
    }
  }

  @media (min-width: $breakpoint-medium) {
    .SiteHeader-logo-wrapper {
      grid-column: 1 / span 4;
    }
    .SiteHeader-logo-link {
      font-size: var(--type-scale-3);
      line-height: var(--spatial-scale-3);
    }
  }

  @media (min-width: $breakpoint-large) {
    .SiteHeader-logo-wrapper {
      grid-column: 1 / span 4;
    }
    .SiteHeader-nav1-wrapper {
      grid-column: 5 / span 9;
    }
    .SiteHeader-logo-link {
      font-size: var(--type-scale-4);
      line-height: var(--spatial-scale-4);
    }
  }

  @media (min-width: $breakpoint-royale) {
    .SiteHeader {
      grid-template-columns: repeat(17, 1fr);
    }
    .SiteHeader-nav1-wrapper {
      grid-column: 5 / span 10;
    }
  }
</style>
