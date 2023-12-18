// Styles
import 'vuetify/styles'

import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import
{
  // MainMenu
  mdiNeedle,
  mdiShapeOutline,
  mdiAlarmPanelOutline,
  mdiFileTree,

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
  mdiCloseThick,
  mdiCheckBold,

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
  mdiWeight,
  mdiFormatParagraphSpacing,
  mdiLink
}
  from '@mdi/js'

// Vuetify
import { createVuetify } from 'vuetify'
export default createVuetify({
  defaults: {
    global: {
      ripple: false
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      needle: mdiNeedle,
      shapeOutline: mdiShapeOutline,
      alarmPanelOutline: mdiAlarmPanelOutline,
      fileTree: mdiFileTree,

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
      closeThick: mdiCloseThick,
      checkBold: mdiCheckBold,

      flask: mdiFlask,
      pill: mdiPill,
      spray: mdiSpray,
      ivBag: mdiIvBag,
      lotion: mdiLotion,
      databaseOutline: mdiDatabaseOutline,
      databasePlusOutline: mdiDatabasePlusOutline,
      textBoxRemoveOutline: mdiTextBoxRemoveOutline,
      textBoxSearchOutline: mdiTextBoxSearchOutline,
      cloudOffOutline: mdiCloudOffOutline,
      weight: mdiWeight,
      formatParagraphSpacing: mdiFormatParagraphSpacing,
      link: mdiLink
    },
    sets: {
      mdi
    }
  }
})
