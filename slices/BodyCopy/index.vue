<script setup lang="ts">
import type { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.BodyCopySlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <div
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="body-copy-wrapper dhd--layout-wrapper"
  >
    <PrismicRichText :field="slice.primary.content" class="body-copy dhd--cms-content" />
  </div>
</template>

<style lang="scss">
.body-copy-wrapper {
}

@media(min-width: $breakpoint-small) {
}

/*
  After we get to the Medium breakpoint, we want the text
  to take up less space than the full available width, so
  we’re overriding .dhd--layout-wrapper as we move to
  larger breakpoints.
*/

@media(min-width: $breakpoint-medium) {
  .body-copy {
    margin-right: auto;
    margin-left: auto;
    max-width: 45rem;
  }
}

@media(min-width: $breakpoint-large) {
  .body-copy {
    max-width: calc(calc(#{11 / 15} * 100%) - calc(var(--grid-gutter) / 2));
  }
}

@media(min-width: $breakpoint-royale) {
  .body-copy {
    max-width: calc(calc(#{9 / 17} * 100%) - calc(var(--grid-gutter) / 2));
  }
}

</style>
