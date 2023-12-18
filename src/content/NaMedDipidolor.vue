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
        Piritramid ist ein Opioid-Analgetikum, welches durch die Stimulation zentraler Opioidrezeptoren (μ-Rezeptoren) analgetisch und sedierend wirkt.
      </div-paragraph>
      <div-paragraph> Piritramid besitzt eine geringere analgetische Potenz als Morphin (0,7). </div-paragraph>
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
          1 Ampulle &bdquo;Dipidolor&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '15mg', per: '2ml' }]"
        />
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (i.v.)-Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div>Ampulle auf <span-mono>10ml</span-mono> aufziehen.</div>
          <nos-med-dose
            :items="[
              { label: 'Erwachsene', unit: '7,5mg (5ml)', color: 'adult' },
              { label: 'Kinder', unit: '0,75mg (½ml)', per: '10kg', color: 'child' },
            ]"
          />
        </div-paragraph>
        <div-paragraph>
          <div-u>Repetition nach 15min möglich</div-u>
        </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (s.c.)-Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Intramuskulär / Subkutan möglich</div-u>
          <nos-med-dose :items="[{ label: 'Erwachsene', unit: '15mg (1 Ampulle)', color: 'adult' }]" />
          <v-divider class="my-2" />
          <div>Für Kinder Ampulle auf <span-mono>10ml</span-mono> aufziehen.</div>
          <nos-med-dose :items="[{ label: 'Kinder', unit: '1,5mg (1ml)', per: '10kg', color: 'child' }]" />
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
  name: 'NaMedDipidolor',
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
      return this.$store.getters.getContentMeta('na-med-dipidolor')
    }
  },
  methods: {}
}
</script>
