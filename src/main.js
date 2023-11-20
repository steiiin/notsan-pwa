// import vue
import { createApp, markRaw, defineAsyncComponent } from 'vue'
import { createStore } from 'vuex'

// import app
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './registerServiceWorker';

// import css
import './assets/main-fonts.scss'

// create content-storage
import loaderComponent from './views/ContentViewLoading.vue';
import failureComponent from './views/ContentViewFailure.vue';
const store = createStore({
  state() {
    return {
      content:
      {
        // NotSan-Medikamente
        'med-adrenalin': { title: "Adrenalin", subtitle: "Epinephrin, Suprarenin", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedAdrenalin.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-aspirin': { title: "Acetylsalicylsäure", subtitle: "ASS, Aspirin, Aspisol", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedAspirin.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) }, 
        'med-amiodaron': { title: "Amiodaron", subtitle: "Cordarex", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedAmiodaron.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-atropin': { title: "Atropin", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedAtropin.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-buscopan': { title: "Butylscopulamin", subtitle: "Buscopan", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedBuscopan.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-vomex': { title: "Dimenhydrinat", subtitle: "Vomex", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedVomex.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-dimetinden': { title: "Dimetinden", subtitle: "Fenistil, Histakut", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedDimetinden.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-esketamin': { title: "Esketamin", subtitle: "Ketanest S", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedEsketamin.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-furosemid': { title: "Furosemid", subtitle: "Furesis, Lasix", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedFurosemid.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-glucose': { title: "Glukose", subtitle: "G20, G5", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedGlucose.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-glucagon': { title: "Glucagon", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedGlucagon.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-nitro': { title: "Glyceroltrinitrat", subtitle: "Nitro-Spray, Nitrolingual", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedNitro.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-heparin': { title: "Heparin", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedHeparin.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-ibuprofen': { title: "Ibuprofen", subtitle: "Nurofen, Dolormin", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedIbuprofen.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-ipratropium': { title: "Ipratropiumbromid", subtitle: "Atrovent", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedIpratropium.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-ipramol': { title: "Ipramol®", subtitle: "Salbutamol+Ipratropiumbromid", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedIpramol.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-midazolam': { title: "Midazolam", subtitle: "Dormicum, Buccolam", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedMidazolam.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-naloxon': { title: "Naloxon", subtitle: "Narcanti", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedNaloxon.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-paracetamol': { title: "Paracetamol", subtitle: "Perfalgan", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedParacetamol.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-prednisolon': { title: "Prednisolon", subtitle: "Prednisolut", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedPrednisolon.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-salbutamol': { title: "Salbutamol", subtitle: "Bronchospray", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedSalbutamol.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-urapidil': { title: "Urapidil", subtitle: "Ebrantil", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedUrapidil.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'med-sauerstoff': { title: "Sauerstoff", hint: "", category: "med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/MedSauerstoff.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },

        // Notarzt-Medikamente
        'na-med-noradrenalin': { title: "Noradrenalin", subtitle: "Arterenol", hint: "", category: "na-med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/NaMedNoradrenalin.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'na-med-dobutamin': { title: "Dobutamin", subtitle: "Dobutrex", hint: "", category: "na-med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/NaMedDobutamin.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
        'na-med-akrinor': { title: "Akrinor", subtitle: "Cafedrin+Theodrenalin", hint: "", category: "na-med", component: markRaw(defineAsyncComponent({ loader: () => import('./content/NaMedAkrinor.vue'), loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 })) },
      
      
      },
      submenu:
      {
        'list-anaphylaxie':
        {
          title: "Anaphylaxie", hint: "", category: "topic", items:
            [
              { content: 'med-adrenalin' },
              { content: 'med-dimetinden' },
              { content: 'med-prednisolon' },
            ],
          nogroups: true
        },
        'list-bradykardie':
        {
          title: "Bradykardie", hint: "", category: "topic", items:
            [
              { content: 'med-adrenalin' },
              { content: 'med-atropin' },
            ],
          nogroups: true
        },
        'list-asthma':
        {
          title: "Asthmaanfall", hint: "Bronchialobstruktion", category: "topic", items:
            [
              { content: 'med-salbutamol' },
              { content: 'med-ipratropium' },
              { content: 'med-ipramol' },
              { content: 'med-prednisolon' },
            ],
          nogroups: true
        },
        'list-na-med':
        {
          title: "Notarztmedikamente", hint: "", category: "med", items:
            [
              { content: 'na-med-noradrenalin' },
              { content: 'na-med-dobutamin' },
              { content: 'na-med-akrinor' }
            ]
        }
      },
      category:
      {
        'med': { title: "Medikamente" },
        'na-med': { title: "Medikamente (Notarzt)" },
        'topic': { title: "Krankheitsbilder" },
      },
      menu:
      {
        'medis':
        {
          name: 'Medikamente', icon: '$needle', items:
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
              { content: 'med-urapidil' },
              { content: 'med-sauerstoff' },
              { list: 'list-na-med' }
            ]
        },
        'topics':
        {
          name: 'Themen', icon: '$shapeOutline', items:
            [
              { list: 'list-anaphylaxie' },
              { list: 'list-bradykardie' },
              { list: 'list-asthma' },
            ]
        }
        // 'test':
        // {
        //   name: 'Sub-Menü', icon: '', items:
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

createApp(App)
  .use(router)
  .use(vuetify)
  .use(store)
  .mount('#app')
