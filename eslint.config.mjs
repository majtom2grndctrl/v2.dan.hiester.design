// @ts-check
import nuxtConfig from '@nuxt/eslint-config'

export default nuxtConfig({
  features: {
    typescript: true
  },
  rules: {
    'vue/multi-word-component-names': 'off'
  }
})