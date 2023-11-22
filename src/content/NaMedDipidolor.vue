<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "20.11.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Schmerzen</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Piritramid ist ein Opioid-Analgetikum, welches durch die Stimulation zentraler Opioidrezeptoren (μ-Rezeptoren) analgetisch und sedierend wirkt.
      </p>
      <p>
        Piritramid besitzt eine geringere analgetische Potenz als Morphin (0,7).
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle &bdquo;Dipidolor&rdquo;</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '15mg', per: '2ml' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <p>
          <div>Ampulle auf <span class="nos-mono">10ml</span> aufziehen.</div>
          <nos-med-dose :items="[
            { label: 'Erwachsene', unit: '7,5mg (5ml)', color: 'adult' },
            { label: 'Kinder', unit: '0,75mg (½ml)', per: '10kg', color: 'child' }
          ]"></nos-med-dose>
        </p>
        <p class="nos-u">Repetition nach 15min möglich</p>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(s.c.)-Dosis</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Intramuskulär / Subkutan möglich</div>
          <nos-med-dose :items="[
            { label: 'Erwachsene', unit: '15mg (1 Ampulle)', color: 'adult' }
          ]"></nos-med-dose>
          <v-divider class="my-2"></v-divider>
          <div>Für Kinder Ampulle auf <span class="nos-mono">10ml</span> aufziehen.</div>
          <nos-med-dose :items="[
            { label: 'Kinder', unit: '1,5mg (1ml)', per: '10kg', color: 'child' }
          ]"></nos-med-dose>
        </p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~5min</template>
    <template v-slot:span>~6h</template>
  </nos-med-effects>
  
</template>

<script>
import NosTitle from "../components/NosTitle.vue";
import NosHeader from "../components/NosHeader.vue";
import NosParagraphs from "../components/NosParagraphs.vue";
import NosList from "../components/NosList.vue";
import NosLi from "../components/NosLi.vue";
import NosTable from "../components/NosTable.vue";
import NosRowCaption from "../components/NosRowCaption.vue";
import NosMedLabel from "../components/NosMedLabel.vue";
import NosMedDose from "../components/NosMedDose.vue";
import NosMedEffects from "../components/NosMedEffects.vue";

export default {
  name: "NaMedDipidolor",
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
    meta() {
      return this.$store.getters.getContentMeta("na-med-dipidolor");
    },
  },
  methods: {},
};
</script>