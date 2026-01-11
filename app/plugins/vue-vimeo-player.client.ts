import { defineNuxtPlugin } from '#app';
import VueVimeoPlayer from 'vue-vimeo-player';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueVimeoPlayer);
});
