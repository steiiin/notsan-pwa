<!-------------------------------------------------------------------------------------------------
{

}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title
    :headline="meta.title"
    :subtitle="meta.subtitle"
  />

  <nos-header title="Indikationen" />
  <nos-list>
    <nos-li>Akutes Koronarsyndrom</nos-li>
    <nos-li>Akuter peripherer Arterieller Verschluss</nos-li>
    <nos-li>Lungenembolie (nach Wells-Score)</nos-li>
    <nos-btn-link content="score-wells" />
  </nos-list>

  <nos-header title="Kontraindikationen" />
  <nos-list contragroup="intolerable">
    <nos-li>Orale Antikoagulation als Dauermedikation, außer ASS</nos-li>
    <nos-li>Unverträglichkeit ggb. Heparin</nos-li>
    <nos-li>Heparininduzierte Thrombozytopenie (HIT) in der Vergangenheit</nos-li>
  </nos-list>
  <nos-list contragroup="acute">
    <nos-li>Akute Blutung oder schweres Trauma</nos-li>
    <nos-li>Schlaganfall oder Vd. Hirnblutung</nos-li>
    <nos-li>Vd. auf Aortensyndrom</nos-li>
    <nos-li>Nieren- oder Harnleitersteine (Kolikschmerz)</nos-li>
    <nos-li>Gastrointestinale / Urogenitale Blutung</nos-li>
    <nos-li>Hypertensive Krise / RR<sub>dia.</sub> &gt; 105mmHg</nos-li>
  </nos-list>
  <nos-list contragroup="known">
    <nos-li>Bekannte Blutungsneigung</nos-li>
    <nos-li>Magen-Darm-Geschwür</nos-li>
    <nos-li>Letzte <b>4</b> Wochen operative Eingriffe</nos-li>
    <nos-li>Schwere Leberinsuffizienz (Zirrhose, Alkoholabusus)</nos-li>
    <nos-li>Bösartiger Krebs</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Schwangerschaft</nos-li>
    <nos-li>Vor wenigen Tagen Entbunden</nos-li>
    <nos-li>Kinder &lt; 12 Jahre (durch SAA untersagt)</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen" />
  <nos-list>
    <nos-li>Erhöhte Blutungsneigung</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung" />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Größen
      </template>
      <template #content>
        <nos-med-label type="ampulle">
          1 Ampulle Heparin
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '5000I.E.', per: '0,2ml' }]"
        />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="ACS, Arterieller Verschluss &amp; Lungenembolie"
    :decent="true"
    icon="$hospitalBox"
  />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        (i.v.)-Dosis
      </template>
      <template #content>
        <nos-med-dose :items="[{ label: 'Ab 12J', unit: '5000I.E. (1 Ampulle)', color: 'adult' }]" />
        <v-divider class="my-2" />
        <div-paragraph>
          Totraumfreie Spritze verwenden, <br>
          oder auf größere Spritze aufziehen.
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      sofort
    </template>
    <template #span>
      ~4h
    </template>
  </nos-med-effects>

  <nos-header title="Wirkweise" />
  <nos-paragraphs>
    <template #header>
      Verhindert den endgültigen Wundverschluss und hemmt die sekundäre Hämostase.
    </template>
    <template #text>
      <div-paragraph>
        Es bildet mit verschiedenen Proteinen Komplexe, allen voran mit Antithrombin III (ATIII), welches eine etwa 700fache Aktivitätssteigerung erfährt. Aktiviertes ATIII hemmt
        Serinproteasen und damit die Gerinnungsfaktoren XIIa, XIa, Xa, VIIa, IIa (Thrombin). Durch diese Wirkung wird die plasmatische Gerinnung gehemmt. In hohen Dosen inaktiviert
        Heparin überschüssig gebildetes Thrombin und verhindert die Umwandlung von Fibrinogen zu Fibrin.
      </div-paragraph>
    </template>
  </nos-paragraphs>
</template>

<script>
import NosTitle from '../components/NosTitle.vue'
import NosHeader from '../components/NosHeader.vue'
import NosParagraphs from '../components/NosParagraphs.vue'
import NosList from '../components/NosList.vue'
import NosLi from '../components/NosLi.vue'
import NosTable from '../components/NosTable.vue'
import NosRowCaption from '../components/NosRowCaption.vue'
import NosMedLabel from '../components/NosMedLabel.vue'
import NosMedDose from '../components/NosMedDose.vue'
import NosMedEffects from '../components/NosMedEffects.vue'

export default {
  name: 'MedHeparin',
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosList,
    NosLi,
    NosTable,
    NosRowCaption,
    NosMedLabel,
    NosMedDose,
    NosMedEffects
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('med-heparin')
    }
  },
  methods: {}
}
</script>
