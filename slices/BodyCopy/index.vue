<script setup lang="ts">
import { Content } from "@prismicio/client";

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
    class="body-copy-wrapper"
  >
    <PrismicRichText :field="slice.primary.content" class="body-copy" />
</div>
</template>

<style lang="scss">
.body-copy-wrapper {
  @include wrapper-full-width;
}

.body-copy {
  p {
    font-size: var(--type-scale-1);
    line-height: var(--spatial-scale-6);
    margin-top: var(--spatial-scale-5);
    margin-bottom: var(--spatial-scale-5);
  }

}

@media(min-width: $breakpoint-small) {
  .body-copy {
    max-width: calc(100% * 11 / 13);
    margin-right: auto;
    margin-left: auto;
  }
}

@media(min-width: $breakpoint-medium) {
  .body-copy {
    max-width: calc(100% * 9 / 15);
  }
}

@media(min-width: $breakpoint-large) {
  .body-copy {
    max-width: calc(100% * 9 / 17);
  }
}

</style>
