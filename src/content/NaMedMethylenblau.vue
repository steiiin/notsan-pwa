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
    <nos-li>Vergiftung mit Methämoglobin-Bildnern</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Methylenblau wird vor allem bei Vergiftungen mit Methämoglobinbildnern eingesetzt. Zu diesen gehören bestimmte Chemikalien und Medikamente, die dazu führen können, dass
        sich im Blut ein erhöhter Anteil von Methämoglobin bildet, eine Form des Hämoglobins, die keinen Sauerstoff transportieren kann.
      </div-paragraph>
      <div-paragraph> Methylenblau wirkt, indem es die Enzyme im Körper aktiviert, die Methämoglobin in funktionstüchtiges Hämoglobin umwandeln. </div-paragraph>
      <div-paragraph>
        Dies geschieht durch die Reduktion von Methämoglobin zu Hämoglobin, wodurch die Sauerstofftransportfähigkeit des Blutes wiederhergestellt wird.
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
        <nos-med-label type="ampulle">
          1 Ampulle Methylenblau
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '50mg', per: '10ml' },
            { unit: '5mg', per: '  ml' },
          ]"
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
              { unit: '10mg', per: '10kg', color: 'adult' },
              { unit: '2ml', per: '10kg', color: 'adult' },
            ]"
          />
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~30min
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
  name: 'NaMedMethylenblau',
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
      return this.$store.getters.getContentMeta('na-med-methylenblau')
    }
  },
  methods: {}
}
</script>
