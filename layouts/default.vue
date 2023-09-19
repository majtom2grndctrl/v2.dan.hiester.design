<template>
  <div>
    <h1 class="foo">Let me tell you a story…</h1>
    <h2>About Dan</h2>
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .foo {
    font-size: var(--type-scale-8);
  }
</style>