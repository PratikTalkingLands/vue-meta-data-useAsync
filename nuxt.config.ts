import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  app: {
    head: {
      title: 'Talking Lands',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',

      // meta: [
      //   { charset: 'utf-8' },
      //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      //   { hid: 'description', name: 'description', content: '' },
      //   { hid: 'og-title', property: 'og:title', content: 'Talking Lands'},
      //   { hid: 'og-type', property: 'og:type', content: 'website' },
      //   { hid: 'twitter-card', property: 'twitter:card', content: '' },
      //   { hid: 'og-image', property: 'og:image', content: 'https://new.talkinglands.com/static-assests/images/TLlogo_Dark.svg'},
      //   { hid: 'og-description', property: 'og:description', content: 'Talkinglands is an AI driven real estate platform which enables buyers to discover and own properties through hyper-personalized recommendations. Talkinglands uses deep machine learning to understand buyer behavior and expectations to provide insight-driven, curated experience for owning their dream properties effortlessly.'},
      //   { name: 'format-detection', content: 'telephone=no' }
      // ],
    },
    // pageTransition: { name: 'page', mode: 'out-in' },
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
