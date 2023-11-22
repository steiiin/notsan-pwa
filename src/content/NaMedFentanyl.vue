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
        Fentanyl ist ein Opioid-Analgetikum, welches durch die Stimulation zentraler Opioidrezeptoren (vorwiegend μ-Rezeptoren) analgetisch und sedierend wirkt. Es wirkt ebenfalls gering an δ- und κ-Rezeptoren. Fentanyl besitzt eine geringe Herz-Kreislauf-Belastung, Patienten zeigen aber starke Atemdepressionen.
      </p>
      <p>
        Fentanyl besitzt eine 100-fach stärkere analgetische Potenz als Morphin.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">2 Ampullen Fentanyl</nos-med-label>
        <nos-med-dose :decent="true" :items="[
          { unit: '0,1mg', per: '2ml' },
          { unit: '0,5mg', per: '10ml' },
          { unit: '0,05mg', per: 'ml', prefix: '='}]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>Analgesie</template>
      <template v-slot:content>
        <p>
          <nos-med-dose :items="[
              { label: 'Erwachsene', unit: '0,05mg (1ml)', color: 'adult' }
            ]"></nos-med-dose>
          <p class="nos-u">Repetition alle 3min möglich</p>
        </p>
        <v-divider class="my-2"></v-divider>
        <p>
          <div>Für Kinder <span class="nos-mono">0,1mg-Ampulle</span> auf <span class="nos-mono">10ml</span> aufziehen.</div>
          <nos-med-dose :items="[
            { label: 'Kinder', unit: '0,01mg (1ml)', per: '10kg', color: 'child' }
          ]"></nos-med-dose>
        </p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~2min</template>
    <template v-slot:span>~30min</template>
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
  name: "NaMedFentanyl",
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
      return this.$store.getters.getContentMeta("na-med-fentanyl");
    },
  },
  methods: {},
};
</script>