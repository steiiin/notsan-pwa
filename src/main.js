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
        'med-adrenalin': { title: "Adrenalin", subtitle: "Epinephrin, Suprarenin", hint: "", category: "med", component: g(() => import('./content/MedAdrenalin.vue')) },
        'med-aspirin': { title: "Acetylsalicylsäure", subtitle: "ASS, Aspirin, Aspisol", hint: "", category: "med", component: g(() => import('./content/MedAspirin.vue')) },
        'med-amiodaron': { title: "Amiodaron", subtitle: "Cordarex", hint: "", category: "med", component: g(() => import('./content/MedAmiodaron.vue')) },
        'med-atropin': { title: "Atropin", hint: "", category: "med", component: g(() => import('./content/MedAtropin.vue')) },
        'med-buscopan': { title: "Butylscopulamin", subtitle: "Buscopan", hint: "", category: "med", component: g(() => import('./content/MedBuscopan.vue')) },
        'med-vomex': { title: "Dimenhydrinat", subtitle: "Vomex", hint: "", category: "med", component: g(() => import('./content/MedVomex.vue')) },
        'med-dimetinden': { title: "Dimetinden", subtitle: "Fenistil, Histakut", hint: "", category: "med", component: g(() => import('./content/MedDimetinden.vue')) },
        'med-esketamin': { title: "Esketamin", subtitle: "Ketanest S", hint: "", category: "med", component: g(() => import('./content/MedEsketamin.vue')) },
        'med-furosemid': { title: "Furosemid", subtitle: "Furesis, Lasix", hint: "", category: "med", component: g(() => import('./content/MedFurosemid.vue')) },
        'med-glucose': { title: "Glukose", subtitle: "G20, G5", hint: "", category: "med", component: g(() => import('./content/MedGlucose.vue')) },
        'med-glucagon': { title: "Glucagon", hint: "", category: "med", component: g(() => import('./content/MedGlucagon.vue')) },
        'med-nitro': { title: "Glyceroltrinitrat", subtitle: "Nitro-Spray, Nitrolingual", hint: "", category: "med", component: g(() => import('./content/MedNitro.vue')) },
        'med-heparin': { title: "Heparin", hint: "", category: "med", component: g(() => import('./content/MedHeparin.vue')) },
        'med-ibuprofen': { title: "Ibuprofen", subtitle: "Nurofen, Dolormin", hint: "", category: "med", component: g(() => import('./content/MedIbuprofen.vue')) },
        'med-ipratropium': { title: "Ipratropiumbromid", subtitle: "Atrovent", hint: "", category: "med", component: g(() => import('./content/MedIpratropium.vue')) },
        'med-ipramol': { title: "Ipramol®", subtitle: "Salbutamol+Ipratropiumbromid", hint: "", category: "med", component: g(() => import('./content/MedIpramol.vue')) },
        'med-lidocain': { title: "Lidocain", subtitle: "", hint: "", category: "med", component: g(() => import('./content/MedLidocain.vue')) },
        'med-midazolam': { title: "Midazolam", subtitle: "Dormicum, Buccolam", hint: "", category: "med", component: g(() => import('./content/MedMidazolam.vue')) },
        'med-naloxon': { title: "Naloxon", subtitle: "Narcanti", hint: "", category: "med", component: g(() => import('./content/MedNaloxon.vue')) },
        'med-paracetamol': { title: "Paracetamol", subtitle: "Perfalgan", hint: "", category: "med", component: g(() => import('./content/MedParacetamol.vue')) },
        'med-prednisolon': { title: "Prednisolon", subtitle: "Prednisolut", hint: "", category: "med", component: g(() => import('./content/MedPrednisolon.vue')) },
        'med-salbutamol': { title: "Salbutamol", subtitle: "Bronchospray", hint: "", category: "med", component: g(() => import('./content/MedSalbutamol.vue')) },
        'med-urapidil': { title: "Urapidil", subtitle: "Ebrantil", hint: "", category: "med", component: g(() => import('./content/MedUrapidil.vue')) },
        'med-sauerstoff': { title: "Sauerstoff", hint: "", category: "med", component: g(() => import('./content/MedSauerstoff.vue')) },

        // Notarzt-Medikamente
        'na-med-noradrenalin': { title: "Noradrenalin", subtitle: "Arterenol", hint: "", category: "na-med", component: g(() => import('./content/NaMedNoradrenalin.vue')) },
        'na-med-dobutamin': { title: "Dobutamin", subtitle: "Dobutrex", hint: "", category: "na-med", component: g(() => import('./content/NaMedDobutamin.vue')) },
        'na-med-akrinor': { title: "Akrinor", subtitle: "Cafedrin+Theodrenalin", hint: "", category: "na-med", component: g(() => import('./content/NaMedAkrinor.vue')) },
        'na-med-nifedipin': { title: "Nifedipin", subtitle: "Adalat", hint: "", category: "na-med", component: g(() => import('./content/NaMedNifedipin.vue')) },
        'na-med-clonidin': { title: "Clonidin", subtitle: "Paracefan", hint: "", category: "na-med", component: g(() => import('./content/NaMedClonidin.vue')) },
        'na-med-verapamil': { title: "Verapamil", subtitle: "Verahexal, Isoptin", hint: "", category: "na-med", component: g(() => import('./content/NaMedVerapamil.vue')) },
        'na-med-adenosin': { title: "Adenosin", subtitle: "Adrekar", hint: "", category: "na-med", component: g(() => import('./content/NaMedAdenosin.vue')) },
        'na-med-metoprolol': { title: "Metoprolol", subtitle: "Beloc, Lopressor", hint: "", category: "na-med", component: g(() => import('./content/NaMedMetoprolol.vue')) },
        'na-med-nahycarb': { title: "Natriumhydrogencarbonat", subtitle: "NaBi", hint: "", category: "na-med", component: g(() => import('./content/NaMedNahycarb.vue')) },
        'na-med-magnesium': { title: "Magnesium", subtitle: "Cormagnesin", hint: "", category: "na-med", component: g(() => import('./content/NaMedMagnesium.vue')) },
        'na-med-metalyse': { title: "Tenecteplase", subtitle: "MetaLyse", hint: "", category: "na-med", component: g(() => import('./content/NaMedMetalyse.vue')) },
        'na-med-reproterol': { title: "Reproterol", subtitle: "Bronchospasmin", hint: "", category: "na-med", component: g(() => import('./content/NaMedReproterol.vue')) },
        'na-med-bricanyl': { title: "Terbutalin", subtitle: "Bricanyl", hint: "", category: "na-med", component: g(() => import('./content/NaMedBricanyl.vue')) },
        'na-med-metamizol': { title: "Metamizol", subtitle: "Berlosin, Novaminsulfon", hint: "", category: "na-med", component: g(() => import('./content/NaMedMetamizol.vue')) },
        'na-med-morphin': { title: "Morphin", subtitle: "MSI, Morphium", hint: "", category: "na-med", component: g(() => import('./content/NaMedMorphin.vue')) },
        'na-med-dipidolor': { title: "Piritramid", subtitle: "Dipidolor", hint: "", category: "na-med", component: g(() => import('./content/NaMedDipidolor.vue')) },
        'na-med-fentanyl': { title: "Fentanyl", subtitle: "", hint: "", category: "na-med", component: g(() => import('./content/NaMedFentanyl.vue')) },
        'na-med-haloperidol': { title: "Haloperidol", subtitle: "Haldol", hint: "", category: "na-med", component: g(() => import('./content/NaMedHaloperidol.vue')) },
      
        // Scores
        'score-wells': { title: "Wells-Score", subtitle: "Lungenembolie", hint: "", category: "score", component: g(() => import('./content/ScoreWells.vue')) },
        'score-pesi': { title: "sPESI-Score", subtitle: "Lungenembolie", hint: "", category: "score", component: g(() => import('./content/ScorePESI.vue')) },
      
        // Schemata
        'scheme-atmist': { title: "Traumaübergabe", subtitle: "ATMIST", hint: "", category: "scheme", component: g(() => import('./content/SchemeATMIST.vue')) },
        'scheme-isobar': { title: "Internistische Übergabe", subtitle: "ISOBAR", hint: "", category: "scheme", component: g(() => import('./content/SchemeISOBAR.vue')) },
      
        // Rechner
        'calc-childspecs': { title: "Kinderlineal", subtitle: "Gewicht, Normwerte & Dosierung", hint: "", category: "scheme", component: g(() => import('./content/CalcChildSpecs.vue')) },
        'calc-doses': { title: "Dosierungsrechner", subtitle: "Gewichtsadapt. Dosis & Einstellungen", hint: "", category: "scheme", component: g(() => import('./content/CalcDoses.vue')) },
      

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
          title: "Zusatz: Notarztmedikamente", hint: "", category: "med", items:
            [
              { content: 'na-med-noradrenalin' },
              { content: 'na-med-dobutamin' },
              { content: 'na-med-akrinor' },
              { content: 'na-med-nifedipin' },
              { content: 'na-med-clonidin' },
              { content: 'na-med-verapamil' },
              { content: 'na-med-adenosin' },
              { content: 'na-med-metoprolol' },
              { content: 'na-med-nahycarb' },
              { content: 'na-med-magnesium' },
              { content: 'na-med-metalyse' },
              { content: 'na-med-reproterol' },
              { content: 'na-med-bricanyl' },
              { content: 'na-med-metamizol' },
              { content: 'na-med-morphin' },
              { content: 'na-med-dipidolor' },
              { content: 'na-med-fentanyl' },
              { content: 'na-med-haloperidol' },
            ],
          ignoreAtSearch: true
        },

        'list-schockraum':
        {
          title: "Schockraum", hint: "", category: "scheme", items:
            [
              { content: 'scheme-atmist' },
              { content: 'scheme-isobar' },
            ]
        },
        'list-scores':
        {
          title: "Medizinische Scores", hint: "", category: "score", items:
            [
              { content: 'score-wells' },
              { content: 'score-pesi' },
            ]
        }
      },
      category:
      {
        'med': { title: "Medikamente (NotSan)" },
        'na-med': { title: "Medikamente (Notarzt)" },
        'topic': { title: "Krankheitsbilder" },
        'score': { title: "Medizinische Scores" },
        'scheme': { title: "Schemata" },
      },
      menu:
      {
        'medis':
        {
          name: 'Medikamente', icon: '$needle', items:
            [
              { content: 'med-adrenalin' },
              { content: 'med-amiodaron' },
              { content: 'med-aspirin' },
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
              { content: 'med-lidocain' },
              { content: 'med-midazolam' },
              { content: 'med-naloxon' },
              { content: 'med-paracetamol' },
              { content: 'med-prednisolon'},
              { content: 'med-salbutamol' },
              { content: 'med-urapidil' },
              { content: 'med-sauerstoff' },
              { list: 'list-na-med' }
            ],
        },
        'scheme':
        {
          name: 'Schemata & Anweisungen', icon: '$fileTree', items:
            [
              { list: 'list-schockraum' },
              { list: 'list-scores' },
            ],
          nosort: true, nogroups: true
        },
        'calculator':
        {
          name: 'Rechner', icon: '$alarmPanelOutline', items:
            [
              { content: 'calc-doses' },
              { content: 'calc-childspecs' }
            ],
        }
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

// HELPER
function g(source)
{
  return markRaw(defineAsyncComponent({ loader: source, loadingComponent: loaderComponent, errorComponent: failureComponent, delay: 250 }))
}