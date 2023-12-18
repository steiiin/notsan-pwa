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
    <nos-li>Tokolyse bei: </nos-li>
    <nos-li :decent="true">
      Medikamenteninduzierten Wehen
    </nos-li>
    <nos-li :decent="true">
      Nabelschnurvorfall
    </nos-li>
    <nos-li :decent="true">
      drohende Uterusruptur
    </nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Fenoterol gehört zur Gruppe der Beta-2-Sympathomimetika. Es wirkt, indem es die Beta-2-Rezeptoren in der glatten Muskulatur des Uterus stimuliert.
      </div-paragraph>
      <div-paragraph>
        Diese Stimulation führt zu einer Entspannung der Uterusmuskulatur, was wiederum die Wehen hemmt oder vermindert. Durch die Unterdrückung der Wehen kann Fenoterol dabei
        helfen, die Geburt hinauszuzögern.
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
          1 Ampulle &bdquo;Partusisten&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '25µg', per: '1ml' }]"
        />
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (i.v.)-Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Vorbereitung</div-u>
          <div>Auf <span-mono>5ml</span-mono> aufziehen.</div>
        </div-paragraph>
        <div-paragraph>
          <div-u>Dosierung</div-u>
          <nos-med-dose :items="[{ unit: '25µg (1 Ampulle)', color: 'adult' }]" />
          <div>Über <b>3min</b> applizieren. Nicht zu schnell.</div>
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
      ~2h
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
  name: 'NaMedFenoterol',
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
      return this.$store.getters.getContentMeta('na-med-fenoterol')
    }
  },
  methods: {}
}
</script>
