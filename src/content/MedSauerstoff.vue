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
    <nos-li>Hypoxämie</nos-li>
    <nos-li>CO-Intoxikation</nos-li>
    <nos-li>Tauchunfall / Dekompressionskrankheit</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen" />
  <nos-list contragroup="intolerable">
    <nos-li variant="check">
      Keine
    </nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen" />
  <nos-list>
    <nos-li>Hyperoxie</nos-li>
    <nos-li>Koronare / Cerebrale Vasokonstriktion</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung" />
  <nos-header
    title="Hypoxie"
    :decent="true"
    icon="$hospitalBox"
  />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Zielwert
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Ohne Hyperkapnierisiko</div-u>
          <nos-med-dose :items="[{ unit: '92-96%', color: 'young' }]" />
        </div-paragraph>
        <div-paragraph>
          <div-u>Mit Hyperkapnierisiko</div-u>
          <nos-med-dose :items="[{ unit: '88-92%', color: 'adult' }]" />
        </div-paragraph>
        <v-divider class="my-2" />
        <div-paragraph>
          <div-u>Hyperkapnierisiko: z.B.</div-u>
          <div>COPD, Mukoviszidose, Extreme Fettleibigkeit, Neuromuskuläre Erkrankungen, Thoraxfehlbildungen</div>
        </div-paragraph>
        <div-paragraph>
          <i>Beatmete Patienten sind trotzdem im Normalen Bereich <b>(Ohne Hyperkapnierisiko)</b> zu behandeln.</i>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="CO-Intoxikation / Tauchunfall / Schwere Atemnot"
    :decent="true"
    icon="$hospitalBox"
  />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Zielwert
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Kein Zielwert</div-u>
          <div>Hochdosierte Sauerstoffgabe</div>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>
</template>

<script>
import NosTitle from '../components/NosTitle.vue'
import NosHeader from '../components/NosHeader.vue'
import NosList from '../components/NosList.vue'
import NosLi from '../components/NosLi.vue'
import NosTable from '../components/NosTable.vue'
import NosRowCaption from '../components/NosRowCaption.vue'
import NosMedDose from '../components/NosMedDose.vue'

export default {
  name: 'MedVomex',
  components: {
    NosTitle,
    NosHeader,
    NosList,
    NosLi,
    NosTable,
    NosRowCaption,
    NosMedDose
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('med-sauerstoff')
    }
  },
  methods: {}
}
</script>
