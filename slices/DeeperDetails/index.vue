<script setup lang="ts">
import BodyCopy from "~/components/PageSections/Style/BodyCopy.vue";
import { isFilled, type Content, type PrismicDocument } from "@prismicio/client";
import { components } from '~/slices'

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

const importedDocument = ref<globalThis.Ref<PrismicDocument<Record<string, any>, string, string> | null>>()

if (
  props.slice.variation === 'importedDocument'
  && isFilled.contentRelationship(props.slice.primary.document_relation)
) {
  const externalPostId = props.slice.primary.document_relation.id
  const { data} = usePrismicDocumentByID(externalPostId)
  importedDocument.value = data

}

console.log({ documentValue: importedDocument })

</script>

<template>
  <div
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    v-if="slice.variation === 'default'"
    class="dhd--layout-wrapper"
  >
    <BodyCopy>
      <deeper-details>
        <PrismicRichText :field="slice.primary.body_copy" />
      </deeper-details>
    </BodyCopy>
  </div>
  <div
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
    v-if="props.slice.variation === 'importedDocument' && importedDocument?.value?.data"
  >
      <deeper-details>
        <SliceZone
          :slices="importedDocument?.value?.data?.slices ?? []"
          :components="components"
        />
      </deeper-details>
  </div>
</template>

<style lang="scss" scoped>
  deeper-details {
    --deeperDetails-transition: max-height 400ms ease-in-out, opacity 400ms ease-in-out, transform 400ms linear;
  }

</style>
