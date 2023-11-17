import { createApp, markRaw, defineAsyncComponent } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import MedAdrenalin from './content/MedAdrenalin.vue'
import MedAspirin from './content/MedAspirin.vue'
import MedAmiodaron from './content/MedAmiodaron.vue'
import MedAtropin from './content/MedAtropin.vue'

// create content-storage
const store = createStore({
  state() {
    return {
      content:
      {
        'med-adrenalin': { title: "Adrenalin", subtitle: "Epinephrin, Suprarenin", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedAdrenalin.vue'))) },
        'med-aspirin': { title: "Acetylsalicylsäure", subtitle: "ASS, Aspirin, Aspisol", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedAspirin.vue'))) },
        'med-amiodaron': { title: "Amiodaron", subtitle: "Cordarex", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedAmiodaron.vue'))) },
        'med-atropin': { title: "Atropin", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedAtropin.vue'))) },
        'med-buscopan': { title: "Butylscopulamin", subtitle: "Buscopan", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedBuscopan.vue'))) },
        'med-vomex': { title: "Dimenhydrinat", subtitle: "Vomex", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedVomex.vue'))) },
        'med-dimetinden': { title: "Dimetinden", subtitle: "Fenistil, Histakut", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedDimetinden.vue'))) },
        'med-esketamin': { title: "Esketamin", subtitle: "Ketanest S", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedEsketamin.vue'))) },
        'med-furosemid': { title: "Furosemid", subtitle: "Furesis, Lasix", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedFurosemid.vue'))) },
        'med-glucose': { title: "Glukose", subtitle: "G20, G5", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedGlucose.vue'))) },
        'med-glucagon': { title: "Glucagon", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedGlucagon.vue'))) },
        'med-nitro': { title: "Glyceroltrinitrat", subtitle: "Nitro-Spray, Nitrolingual", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedNitro.vue'))) },
        'med-heparin': { title: "Heparin", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedHeparin.vue'))) },
        'med-ibuprofen': { title: "Ibuprofen", subtitle: "Nurofen, Dolormin", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedIbuprofen.vue'))) },
        'med-ipratropium': { title: "Ipratropiumbromid", subtitle: "Atrovent", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedIpratropium.vue'))) },
        'med-ipramol': { title: "Ipramol®", subtitle: "Salbutamol+Ipratropiumbromid", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedIpramol.vue'))) },
        'med-midazolam': { title: "Midazolam", subtitle: "Dormicum, Buccolam", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedMidazolam.vue'))) },
        'med-naloxon': { title: "Naloxon", subtitle: "Narcanti", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedNaloxon.vue'))) },
        'med-paracetamol': { title: "Paracetamol", subtitle: "Perfalgan", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedParacetamol.vue'))) },
        'med-prednisolon': { title: "Prednisolon", subtitle: "Prednisolut", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedPrednisolon.vue'))) },
        'med-salbutamol': { title: "Salbutamol", subtitle: "Bronchospray", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedSalbutamol.vue'))) },
        'med-urapidil': { title: "Urapidil", subtitle: "Ebrantil", hint: "", category: "med", component: markRaw(defineAsyncComponent(() => import('./content/MedUrapidil.vue'))) },
      },
      submenu:
      {
        // 'list-test1':
        // {
        //   title: "Liste mit Submenüs", subtitle: "Untertitel", hint: "", category: "med", items:
        //     [
        //       { content: 'med-adrenalin' }
        //     ]
        // },
      },
      category:
      {
        'med': { title: "Medikamente (NotSan)" }
      },
      menu:
      {
        'medis':
        {
          name: 'Medikamente', icon: 'mdi-needle', items:
            [
              { content: 'med-adrenalin' },
              { content: 'med-aspirin' },
              { content: 'med-amiodaron' },
              { content: 'med-atropin' },
              { content: 'med-buscopan' },
              { content: 'med-vomex' },
              { content: 'med-dimetinden' },
              { content: 'med-esketamin' },
              { content: 'med-furosemid' },
              { content: 'med-glucose' },
              { content: 'med-glucagon' },
              { content: 'med-ibuprofen' },
              { content: 'med-nitro' },
              { content: 'med-heparin' },
              { content: 'med-ipratropium' },
              { content: 'med-ipramol' },
              { content: 'med-midazolam' },
              { content: 'med-naloxon' },
              { content: 'med-paracetamol' },
              { content: 'med-prednisolon'},
              { content: 'med-salbutamol' },
              { content: 'med-urapidil' }
            ]
        },
        // 'test':
        // {
        //   name: 'Sub-Menü', icon: 'mdi-truck', items:
        //     [
        //       { list: 'list-test1' },
        //       { content: 'med-adrenalin' }
        //     ]
        // }

      },
    }
  },
  getters: {
    getContentMeta: (state) => (contentKey) => {
      return {
        title: state.content[contentKey]?.title ?? "",
        subtitle: state.content[contentKey]?.subtitle ?? "",
        hint: state.content[contentKey]?.hint ?? ""
      }
    }
  },
  mutations: {
  }
})

// import css
import './assets/main-fonts.scss'

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .mount('#app')
