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
        Morphin ist ein Opioid-Analgetikum, welches durch die Stimulation zentraler Opioidrezeptoren (vorwiegend μ-Rezeptoren) analgetisch und sedierend wirkt. Es wirkt ebenfalls
        gering an δ- und κ-Rezeptoren.
      </div-paragraph>
      <div-paragraph>
        Im limbischen System bewirkt Morphin eine verringerte Schmerzwahrnehmung. Es verringert die emotionalen und negativen Schmerzreaktion, wodurch der Patient den Schmerz zwar
        spürt, ihn aber als weniger bedrohlich ansieht. Ergänzend aktiviert es Schmerzhemmsysteme in der Medulla oblongata, welche die analgetische Wirkung verstärken.
      </div-paragraph>
      <div-paragraph>
        Morphin sorgt für einen geringeren Sauerstoffbedarf des Herzens und sorgt für eine 10%ige Vor- und Nachlastsenkung. Durch seine sedierende und teilweise euphorisierende
        Wirkung ist es daher besonders zur Schmerztherapie beim akuten Koronarsyndrom (ACS) und dem Lungenödem geeignet, da es vor allem das Gefühl der Atemnot nimmt.
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
          1 Ampulle Morphin
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '10mg', per: '1ml' }]"
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
          <div>Ampulle auf <span-mono>10ml</span-mono> aufziehen.</div>
          <nos-med-dose
            :items="[
              { label: 'Erwachsene', unit: '2mg (2ml)', color: 'adult' },
              { label: 'Kinder', unit: '0,5ml', per: '10kg', color: 'child' },
            ]"
          />
        </div-paragraph>
        <div-paragraph>
          <div-u>Repetition nach 15min möglich</div-u>
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
  name: 'NaMedMorphin',
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
      return this.$store.getters.getContentMeta('na-med-morphin')
    }
  },
  methods: {}
}
</script>
