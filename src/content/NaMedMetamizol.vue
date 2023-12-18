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
    <nos-li>Schmerzen</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        <b>Analgetische Wirkung:</b> Hemmung der zentralen Cyclooxygenasen, dadurch verminderte Prostaglandinsynthese sowie vermutete Aktivierung von Neuronen der zentralen
        Schmerzhemmung.
      </div-paragraph>
      <div-paragraph>
        <b>Spasmolytische Wirkung:</b> Hemmung der intrazellulären Kalziumausschüttung (Hemmung der Phospholipase C), hierdurch lässt die Muskelkontraktionen nach.
      </div-paragraph>
      <div-paragraph> <strong>Antipyretische Wirkung:</strong> Vermuteter Zusammenhang mit Hemmung der Prostaglandinsynthese (nicht ausreichend erforscht). </div-paragraph>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung" />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Größen
      </template>
      <template #content>
        <nos-med-label type="ampulle">
          1 Ampulle Metamizol
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '1g', per: '2ml' }]"
        />
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (i.v.)-Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Dosierung</div-u>
          <nos-med-dose
            :items="[
              { label: 'Ab 14 Jahren', unit: '1000mg (1 Ampulle)', color: 'adult' },
              { label: 'Kind (1-14)', unit: '500mg (½ Ampulle)', color: 'child' },
            ]"
          />
          <v-divider class="my-2" />
          <div>Als Kurzinfusion.</div>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~3min
    </template>
    <template #span>
      ~3h
    </template>
  </nos-med-effects>
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
  name: 'NaMedMetamizol',
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
      return this.$store.getters.getContentMeta('na-med-metamizol')
    }
  },
  methods: {}
}
</script>
