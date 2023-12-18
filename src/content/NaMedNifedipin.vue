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
    <nos-li>Hypertonie</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #heading />
    <template #text>
      <div-paragraph> Nifedipin blockiert Kalziumkanäle in der glatten Gefäßmuskulatur, was zu einer Vasodilatation führt und den Blutdruck senkt. </div-paragraph>
      <div-paragraph> Nifedipin ist effektiv zur Senkung eines erhöhten Blutdrucks. </div-paragraph>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung" />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Größen
      </template>
      <template #content>
        <nos-med-label type="suppositorium">
          1 Weichkapsel Nifedipin
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '10mg' }]"
        />
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        Anwendung
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Dosierung</div-u>
          <div><span-mono>10mg (1 Kapsel)</span-mono> zerbeißen lassen.</div>
        </div-paragraph>
        <div-paragraph>
          <div-u>Nach 30min Repetition möglich</div-u>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~5min
    </template>
    <template #span>
      ~6h
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
  name: 'NaMedNifedipin',
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
      return this.$store.getters.getContentMeta('na-med-nifedipin')
    }
  },
  methods: {}
}
</script>
