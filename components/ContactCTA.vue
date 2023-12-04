<script lang="ts" setup>
const oblada = {
  la: 'op@hies',
  ob: 'talk-sh',
  di: 'ter.design',
};
let emailHref = ref<string | undefined>(undefined);

console.log('emailhref1', emailHref);

onMounted(() => {
  console.log('onMounted fired');
    // This helps me hide things from bots
    setTimeout(() => {
      console.log('setTimeout callback is starting');
      const { ob, la, di } = oblada // Life goes on 🎶
      emailHref.value = `mailto:${ob + la + di}`;
      console.log('emailhref2', emailHref);
    }, 5000);
})
</script>

<template>
  <section class="dhd--layout-wrapper ContactCTA-wrapper">
    <div class="ContactCTA">
      <h2 class="heading">Want to see more?<br>Let’s get in touch.</h2>
      <div class="content-wrapper">
        <p>Much of my work is under NDA, and I’m also often working on new projects that aren’t ready to be published here. The best way to learn about my capabilities is to get in touch and talk&nbsp;shop!</p>
      </div>
      <ul class="links-list">
        <li class="links-item">
          <a
            id="cntct_lnk"
            class="dhd--cta-link"
            :href="emailHref"
          >
            Send a friendly email
          </a>
        </li>
        <li class="links-item">
          <a
            href="https://linkedin.com/in/danhiester"
            class="dhd--cta-link"
            target="_blank"
          >
            Contact me on LinkedIn
          </a>
        </li>
        <li class="links-item">
          <a
            href="https://calendly.com/dan-hiester/virtual-coffee"
            class="dhd--cta-link"
            target="_blank"
          >
            Schedule a virtual coffee
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .ContactCTA-wrapper {
    margin-top: var(--spatial-scale-14);
    margin-bottom: var(--spatial-scale-14);
    @media (min-width: $breakpoint-medium) {
      margin-top: var(--spatial-scale-12);
      margin-bottom: var(--spatial-scale-12);
    }
    @media (min-width: $breakpoint-large) {
      margin-top: var(--spatial-scale-10);
      margin-bottom: var(--spatial-scale-13);
    }
  }

  .heading {
    font-family: var(--font-heading);
    font-size: var(--type-scale-4);
    font-weight: 600;
    line-height: var(--spatial-scale-7);
    text-align: center;
    @media (min-width: $breakpoint-medium) {
      font-size: var(--type-scale-5);
      line-height: var(--spatial-scale-8);
    }
  }
  .content-wrapper {
    font-size: var(--type-scale-1);
    line-height: var(--spatial-scale-5);
    padding: 0 calc(1/15*100%);
    @media (min-width: $breakpoint-medium) {
      margin: 0 auto;
      padding: unset;
      text-align: justify;
      width: calc(#{11 / 15} * 100%);
    }
    @media (min-width: $breakpoint-large) {
      width: calc(#{ 9 / 15} * 100%);
    }
    @media (min-width: $breakpoint-royale) {
      width: calc(#{ 9 / 17} * 100%);
    }
  }

  .links-list {
    display: block;
    padding: 0 calc(#{1 / 15} *100%);
    margin: var(--spatial-scale-5) 0;
    @media (min-width: $breakpoint-medium) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: var(--grid-gutter) calc(#{1 / 15} * 100%);
      justify-content: center;
    }
    @media (min-width: $breakpoint-large) {
      margin: var(--spatial-scale-7) auto;
      width: calc(#{ 11 / 15} * 100%);
    }
    @media (min-width: $breakpoint-large) {
      gap: var(--spatial-scale-5) calc(calc(#{1 / 15} *100%) + calc(var(--grid-gutter) * 2));
      padding: 0;
    }
    @media (min-width: $breakpoint-royale) {
      width: calc(#{ 11 / 17} * 100%);
    }
  }
  .links-item {
    display: block;
    margin: var(--spatial-scale-3) 0;
    @media (min-width: $breakpoint-medium) {
      margin: 0;
    }
  }
  .dhd--cta-link {
    filter: blur(0);
    opacity: 1;
    transition: filter 0.3s linear, opacity 0.3s linear;
    &:not([href]) {
      filter: blur(calc(var(--spatial-scale-1) / 4));
      opacity: 0.7;
    }
  }

</style>
