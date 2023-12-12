<script setup lang="ts">
import { components } from '~/slices'
import PageHero from '~/components/PageHero.vue';

const prismic = usePrismic()
const route = useRoute()
const { data: page } = await useAsyncData('[uid]', () =>
  prismic.client.getByUID('page', route.params.uid as string)
)

useHead({
  title: prismic.asText(page.value?.data.title)
})
</script>


<template>
  <PageHero>
    <div class="dhd--layout-wrapper">
    <h1>Nothing to see here yet!</h1>
    </div>
  </PageHero>
  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
