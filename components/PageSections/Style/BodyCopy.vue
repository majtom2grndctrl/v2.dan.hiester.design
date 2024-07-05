<template>
  <div class="body-copy dhd--cms-content"><slot /></div>
</template>

<style lang="scss" scoped>
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
    max-width: calc(calc(#{11 / 15} * 100%) - calc(var(--grid-gutter) / 2));
  }
}

@media(min-width: $breakpoint-large) {
  .body-copy {
    max-width: calc(calc(#{9 / 15} * 100%) - calc(var(--grid-gutter) / 2));
  }
}

@media(min-width: $breakpoint-royale) {
  .body-copy {
    max-width: calc(calc(#{9 / 17} * 100%) - calc(var(--grid-gutter) / 2));
  }
}
</style>