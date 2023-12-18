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
    <nos-li>Magen-Darm-Beschwerden bei Anaphylaxie</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Cimetidin wirkt, indem es die H2-Rezeptoren im Magen blockiert. Diese Rezeptoren spielen eine Rolle bei der Steuerung der Produktion von Magensäure.
      </div-paragraph>
      <div-paragraph>
        Durch die Blockierung dieser Rezeptoren reduziert Cimetidin die Menge und die Säure des Magensafts, was hilft, Magen-Darm-Beschwerden zu lindern.
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
          1 Ampulle Cimetiden
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '200mg', per: '2ml' },
            { unit: '100mg', per: ' ml' },
          ]"
        />
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div-u>i.v. / i.m.-Gabe möglich</div-u>
          <nos-med-dose
            :items="[
              { unit: '50mg', per: '10kg', color: 'adult' },
              { unit: '0,5ml', per: '10kg', color: 'adult' },
            ]"
          />
          <div>Gabe nur über Kurzinfusion.</div>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~30min
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
  name: 'NaMedCimetiden',
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
      return this.$store.getters.getContentMeta('na-med-cimetiden')
    }
  },
  methods: {}
}
</script>
