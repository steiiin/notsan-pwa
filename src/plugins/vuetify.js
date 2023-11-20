// Styles
// import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import 
{ 
  // MainMenu
  mdiNeedle,
  mdiShapeOutline,

  // Ui
  mdiChevronLeft,
  mdiChevronRight,
  mdiChevronDoubleRight,
  mdiArrowRight,
  mdiClose,
  mdiMagnify,
  mdiCheck,
  mdiTimerOutline,
  mdiTimer,
  mdiHospitalBox,

  // Icons
  mdiFlask,
  mdiPill,
  mdiSpray,
  mdiIvBag,
  mdiLotion,
  mdiDatabaseOutline,
  mdiDatabasePlusOutline,
  mdiTextBoxRemoveOutline,
  mdiTextBoxSearchOutline,
  mdiCloudOffOutline,
} 
from '@mdi/js'

// Vuetify
import { createVuetify } from 'vuetify'
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      needle: mdiNeedle,
      shapeOutline: mdiShapeOutline,

      chevronLeft: mdiChevronLeft,
      chevronRight: mdiChevronRight,
      chevronDoubleRight: mdiChevronDoubleRight,
      arrowRight: mdiArrowRight,
      close: mdiClose,
      magnify: mdiMagnify,
      check: mdiCheck,
      timerOutline: mdiTimerOutline,
      timer: mdiTimer,
      hospitalBox: mdiHospitalBox,
      
      flask: mdiFlask,
      pill: mdiPill,
      spray: mdiSpray,
      ivBag: mdiIvBag,
      lotion: mdiLotion,
      databaseOutline: mdiDatabaseOutline,
      databasePlusOutline: mdiDatabasePlusOutline,
      textBoxRemoveOutline: mdiTextBoxRemoveOutline,
      textBoxSearchOutline: mdiTextBoxSearchOutline,
      cloudOffOutline: mdiCloudOffOutline
    },
    sets: {
      mdi,
    },
  },
})