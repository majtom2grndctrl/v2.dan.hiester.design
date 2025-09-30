<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const route = useRoute()
const { data: page } = useAsyncData(`/${ route.params.uid }`, async () =>
  await prismic.client.getByUID('page', route.params.uid as string)
)

useHead({
  title: prismic.asText(page.value?.data.title)
})
</script>


<template>
  <NuxtLayout name="main">
    <template #page-hero>
      <div class="dhd--layout-wrapper">
      <h1>Nothing to see here yet!</h1>
      </div>
    </template>
    <template>
      <SliceZone
        wrapper="main"
        :slices="page?.data.slices ?? []"
        :components="components"
      />
    </template>
  </NuxtLayout>
</template>
