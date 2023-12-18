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
    <nos-li>Anaphylaxie</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen" />
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Dimetinden</nos-li>
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
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Schwangerschaft</nos-li>
    <nos-li>Stillzeit</nos-li>
    <nos-li>Kinder &lt; 12 Jahre (durch SAA untersagt)</nos-li>
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
          1 Ampulle &bdquo;Histakut&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '4mg', per: '4ml' },
            { unit: '1mg', per: 'ml', prefix: '=' },
          ]"
        />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="ANAPHYLAXIE"
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
          <div-u>Jegliches Stadium d. Anaphylaxie</div-u>
        </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (i.v.)-Dosis
      </template>
      <template #content>
        <nos-med-dose :items="[{ label: 'Ab 12 Jahren', unit: '1mg', per: '10kg', color: 'adult' }, { unit: '8mg maximal' }]" />
        <v-divider class="my-2" />
        <div-paragraph> Langsam spritzen. <br><b>Keine</b> Wiederholungsgabe nach SAA. </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~15min
    </template>
    <template #span>
      ~12h (<b>cave:</b>&nbsp;24h vermindetes Reaktionsvermögen)
    </template>
  </nos-med-effects>

  <nos-header title="Wirkweise" />
  <nos-paragraphs>
    <template #heading>
      Dimetinden ist ein Antihistaminikum.
    </template>
    <template #text>
      <div-paragraph>
        Dimetinden ist ein nichtkompetitiver Histamin-Antagonist am H1-Rezeptor und wirkt nicht auf H2-Rezeptoren. Erst in Kombination mit einem H2-Blocker (z.B. Ranitidin) kann
        die gesamte Wirkung des Histamins unterdrückt werden.
      </div-paragraph>
      <div-paragraph>
        Im Gegensatz zu anderen Antihistaminika blockiert Dimetinden bereits mit Histamin besetzte H1-Rezeptoren. Es nimmt damit eine Sonderstellung unter den Antihistaminika ein,
        da diese sonst nur die noch nicht besetzte Rezeptoren blockieren.
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
  name: 'MedDimetinden',
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
      return this.$store.getters.getContentMeta('med-dimetinden')
    }
  },
  methods: {}
}
</script>
