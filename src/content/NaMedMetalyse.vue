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
    <nos-li>Thrombolytische Therapie</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Metalyse gehört zu einer Gruppe von Arzneimitteln, die als Thrombolytika bezeichnet werden. Diese Arzneimittel sind in der Lage, Blutgerinnsel aufzulösen. Tenecteplase ist
        ein rekombi- nanter fibrinspezifischer Plasminogen-Aktivator.
      </div-paragraph>
      <div-paragraph>
        Metalyse wird zur Behandlung von Herzinfarkten (innerhalb von 6 Stunden nach Symptombeginn) angewendet und dient zur Auflösung von Blutgerinnseln, die sich in den
        Blutgefäßen des Herzens gebildet haben.
      </div-paragraph>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung" />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Größen
      </template>
      <template #content>
        <nos-med-label type="infusion">
          Durchstechflasche &bdquo;Metalyse&rdquo;
        </nos-med-label>
        <nos-med-label type="nadel">
          + Fertigspritze (Wasser)
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '10.000U (5mg)' }]"
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
            :decent="true"
            :items="[{ unit: '1ml', per: '10kg', color: 'adult' }]"
          />
          <v-divider class="my-2" />
          <div>Maximum:<span-mono>&nbsp;50mg (1 Spritze)</span-mono></div>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>
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

export default {
  name: 'NaMedMetalyse',
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosList,
    NosLi,
    NosTable,
    NosRowCaption,
    NosMedLabel,
    NosMedDose
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('na-med-metalyse')
    }
  },
  methods: {}
}
</script>
