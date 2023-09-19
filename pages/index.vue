<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const { data: page } = useAsyncData('index', () =>
  prismic.client.getByUID('page', 'home')
)

useHead({
  title: prismic.asText(page.value?.data.title)
})
</script>


<template>
  <h1>Home</h1>
  <NuxtLink to="/portfolio/road-closures-tracker">First case study</NuxtLink>

  <SliceZone
    wrapper="main"
    :slices="page?.data.slices ?? []"
    :components="components"
  />
</template>
