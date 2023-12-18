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
    <nos-li>Antidot für Cyanid-Vergiftung</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Innerhalb der Zellen entfaltet die Blausäure ihre Wirkung in der Atmungskette der Mitochondrien. Die höhere Bindungsaffinität der Blausäure im Vergleich mit Sauerstoff
        verhindert eine weitere Sauerstoffbindung und führt zur Blockade der Atmungskette.
      </div-paragraph>
      <div-paragraph> Der Tod durch "inneres Ersticken" tritt innerhalb weniger Minuten ein. </div-paragraph>
      <div-paragraph>
        4-DMAP wirkt, indem es einen Teil des Hämoglobins im Blut in Methämoglobin umwandelt. Durch das Methämoglobin wird Cyanid von der mitochondrialen Atmung abgelenkt und
        gebunden, wodurch die zelluläre Atmungskette wieder funktionieren kann.
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
        <nos-med-label type="iv">
          1 Ampulle &bdquo;Anexate&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '250mg', per: '5ml' },
            { unit: '50mg', per: ' ml' },
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
              { label: 'Erwachsene', unit: '250mg', color: 'adult' },
              { label: 'Kinder', unit: '25mg (0,5ml)', per: '10kg', color: 'child' },
            ]"
          />
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      Sofort
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
  name: 'NaMedDMAP',
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
      return this.$store.getters.getContentMeta('na-med-dmap')
    }
  },
  methods: {}
}
</script>
