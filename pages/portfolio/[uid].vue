<script setup lang="ts">
import { components } from '~/slices'

const prismic = usePrismic()
const route = useRoute()
const { data: page } = useAsyncData('[uid]', () =>
  prismic.client.getByUID('case_study', route.params.uid as string)
)

useHead({
  title: prismic.asText(page.value?.data.title)
})

</script>


<template>
  <NuxtLayout name="inside-page">
    <div>
      <PrismicRichText class="title" :field="page?.data.title" />
      <SliceZone
        wrapper="main"
        :slices="page?.data.slices ?? []"
        :components="components"
      />
    </div>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
</style>
