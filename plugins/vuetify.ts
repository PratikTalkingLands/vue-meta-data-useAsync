// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
        themes: {
          light: {
            colors: {
              primary: '#DF6851',
              secondary: '#19896B',
              tertiary: '#6B7BE1',
              white: '#FFFFFF',
              black: '#000000',
              materialDark: '#121212',
              primarySuccess50: '#ECFDF3',
              primarySuccess500: '#12B76A',
              lightBeidge: '#EFEBE9',
              alertError : '#FF5252',
              customprimary : '#1976D2',
              Greyscale:'#EFEBE9',
              MediumGrey:'#B7BDC0',
              tintColor : "#424242",
              primaryBlue50 : "#E6F2FE",
              secondaryPink100 : "#FCE7F6",
              warning : "#FB8C00",
              facebookBlue: "#0570E6",
              whatsappGreen: "#25D366",
              success : "#4CAF50",
              offWhite: "#f7f7f7",
              cardBackground: "#D9D9D9",
              Primarygrey700 : "#344054",
              tabColorUnSelected:"#C5CAE9",
              tabSelected:"#6B7BE1",
              tabBackground:"#BBDEFB",
              backgroundColor:"#EEEEEE",
              enquiryViewPrimary:"#CD5C08",
              enquiryViewPrimary50:"#FAEEE6",
              projectViewHeader: "#80CBC3",
              tertiaryBrand : "#6B7BE1",
              insightLayer:"#BA55D3",
              footerColor:"#E5E7EB"
            },
          },
        },
      }
  })
  app.vueApp.use(vuetify)
})
