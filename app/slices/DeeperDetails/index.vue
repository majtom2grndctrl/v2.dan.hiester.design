<script setup lang="ts">
import BodyCopy from "~/components/PageSections/Style/BodyCopy.vue";
import { isFilled, type Content, type PrismicDocument } from "@prismicio/client";
import { components } from '~/slices'
import type { DeeperDetailsContentDocument } from "~/prismicio-types";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.DeeperDetailsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);

const { client } = usePrismic();

const importedDocument = ref<DeeperDetailsContentDocument | null>(null)
const isLoading = ref(false)
const error = ref<Error | null>(null)

if (
  props.slice.variation === 'importedDocument'
  && isFilled.contentRelationship(props.slice.primary.document_relation)
) {
  const externalPostId = props.slice.primary.document_relation.uid
  const fetchDocument = async () => {
    isLoading.value = true
    try {
      importedDocument.value = await client.getByUID('deeper_details_content', externalPostId!)
    } catch (e) {
      error.value = e as Error
      console.error('Error fetching document:', e)
    } finally {
      isLoading.value = false
    }
  }
  fetchDocument()
}
</script>

<template>
  <!-- Default variation -->
  <div
    v-if="slice.variation === 'default'"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="dhd--layout-wrapper"
  >
    <BodyCopy>
      <deeper-details>
        <button slot="expand-button">Tell me more!</button>
        <button slot="hide-button">Show me less</button>
        <PrismicRichText :field="slice.primary.body_copy" />
      </deeper-details>
    </BodyCopy>
  </div>

  <!-- Loading state -->
  <div v-else-if="isLoading" class="dhd--layout-wrapper">
    <BodyCopy>Loading...</BodyCopy>
  </div>

  <!-- Error state -->
  <div v-else-if="error" class="dhd--layout-wrapper">
    <BodyCopy>Error loading content: {{ error.message }}</BodyCopy>
  </div>

  <!-- Imported document variation -->
  <div
    v-else-if="props.slice.variation === 'importedDocument' && importedDocument?.data?.slices"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    class="dhd--layout-wrapper"
  >
    <BodyCopy>
      <deeper-details>
        <button slot="expand-button">Tell me more!</button>
        <button slot="hide-button">Show me less</button>
        <SliceZone
          :slices="importedDocument.data.slices"
          :components="components"
        />
      </deeper-details>
    </BodyCopy>
  </div>
</template>

<style lang="scss" scoped>
deeper-details {
  --deeperDetails-transition: max-height 400ms ease-in-out, opacity 400ms ease-in-out, transform 400ms linear;
}

button[slot] {
  min-width: 8rem;
}
</style>