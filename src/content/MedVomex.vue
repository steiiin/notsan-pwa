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
    <nos-li>Übelkeit &amp; Erbrechen</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen" />
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Dimenhydrinat</nos-li>
  </nos-list>
  <nos-list contragroup="acute">
    <nos-li>Engwinkelglaukom (Glaukomanfall), d.h.:</nos-li>
    <nos-li :decent="true">
      Sehstörungen / Farbspiele beim Sehen
    </nos-li>
    <nos-li :decent="true">
      Starke Kopfschmerzen &amp; Erbrechen
    </nos-li>
    <nos-li :decent="true">
      Gerötetes Auge
    </nos-li>
    <nos-li>Akute Bronchialobstruktion (Asthmaanfall, exarz. COPD)</nos-li>
    <nos-li>Abgelaufener Krampfanfall (Epilepsie, Eklampsie)</nos-li>
  </nos-list>
  <nos-list contragroup="known">
    <nos-li>Selten: Porphyrie</nos-li>
    <nos-li>Selten: Long-QT-Syndrom</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Schwangerschaft</nos-li>
    <nos-li>Stillzeit</nos-li>
    <nos-li>Kinder &lt; 1 Jahr (durch SAA untersagt)</nos-li>
  </nos-list>
  <nos-header title="Nebenwirkungen" />
  <nos-list>
    <nos-li variant="cave">
      Sedierung, insb. bei Alkoholeinfluss
    </nos-li>
    <nos-li>Müdigkeit (bis 24h: <b>Aufklärung des Patienten</b>)</nos-li>
    <nos-li variant="todo">
      Verstärkte Vigilanzkontrolle
    </nos-li>
  </nos-list>
  <nos-list>
    <nos-li>Sehstörungen</nos-li>
    <nos-li>Mund- &amp; Hauttrockenheit</nos-li>
    <nos-li>Gastrointestinale Beschwerden</nos-li>
    <nos-li>Unruhe, Angst</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung" />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Größen
      </template>
      <template #content>
        <nos-med-label type="ampulle">
          1 Ampulle &bdquo;Vomex&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '62mg', per: '5ml' }]"
        />
        <nos-med-label
          type="suppositorium"
          class="mt-2"
        >
          1 Zäpfchen &bdquo;Vomex&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '40mg' }]"
        />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Erbrechen"
    :decent="true"
    icon="$hospitalBox"
  />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Einsatz
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Anhaltendes Erbrechen,</div-u>
          <div>mit Erschöpfung oder Aspirationsgefahr</div>
        </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (i.v.)-Dosis
      </template>
      <template #content>
        <nos-med-dose :items="[{ label: 'Ab 14 Jahren', unit: '62mg (1 Ampulle)', color: 'adult' }]" />
        <v-divider class="my-2" />
        <div-paragraph> Langsam spritzen. </div-paragraph>
        <div-paragraph> Herzfrequenz mit EKG oder SpO<sub>2</sub>-Sensor überwachen. </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (rect.)-Dosis
      </template>
      <template #content>
        <nos-med-dose :items="[{ label: '<14 Jahre', unit: '40mg (1 Zäpfchen)', color: 'child' }]" />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~5min
    </template>
    <template #span>
      ~12h (<b>cave:</b>&nbsp;24h vermindetes Reaktionsvermögen)
    </template>
  </nos-med-effects>

  <nos-header title="Wirkweise" />
  <nos-paragraphs>
    <template #heading>
      Dimenhydrinat ist ein Antihistaminikum.
    </template>
    <template #text>
      <div-paragraph>
        Dimenhydrinat wirkt im Brechzentrum (Area postrema) im Gehirn. Dort blockiert es Histamin-Rezeptoren, welche Impulse zum Brechzentrum weiterleiten und verhindert so
        Erbrechen bzw. das Gefühl von Übelkeit. Dimenhydrinat wirkt demnach als H1-Rezeptor-Antagonist hauptsächlich antiemetisch und anticholinerg.
      </div-paragraph>
      <div-paragraph> Zusätzlich entfaltet es eine geringe antiallergische und sedierende Wirkung. </div-paragraph>
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
  name: 'MedVomex',
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
      return this.$store.getters.getContentMeta('med-vomex')
    }
  },
  methods: {}
}
</script>
