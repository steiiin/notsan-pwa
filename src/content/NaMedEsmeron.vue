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
    <nos-li>Muskelrelaxation zur Allgemeinanästhesie</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Esmeron, auch bekannt als Rocuronium, ist ein nicht-depolarisierendes Muskelrelaxans, das in der Anästhesie verwendet wird, um eine Muskelentspannung während chirurgischer
        Eingriffe oder Intubationen zu ermöglichen.
      </div-paragraph>
      <div-paragraph>
        Rocuronium hat einen relativ schnellen Wirkungseintritt im Vergleich zu anderen nicht-depolarisierenden Muskelrelaxanzien. Die Wirkung tritt in der Regel innerhalb von 1
        bis 3 Minuten nach intravenöser Gabe ein.
      </div-paragraph>
      <div-paragraph>
        Im Gegensatz zu Lysthenon, das ein depolarisierendes Muskelrelaxans ist, wirkt Rocuronium als nicht-depolarisierendes Muskelrelaxans. Es bindet an die
        Acetylcholinrezeptoren an den motorischen Endplatten der Muskeln, ohne sie zu aktivieren.
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
          1 Durchstechflasche &bdquo;Esmeron&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '50mg', per: '5ml' },
            { unit: '10mg', per: ' ml' },
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
          <nos-med-dose :items="[{ unit: '10mg (1ml)', per: '10kg', color: 'adult' }]" />
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~2min
    </template>
    <template #span>
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
  name: 'NaMedEsmeron',
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
      return this.$store.getters.getContentMeta('na-med-esmeron')
    }
  },
  methods: {}
}
</script>
