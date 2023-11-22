<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "20.11.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Tachykardie</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>Metoprolol ist ein (relativ) selektiver β1-Rezeptorblocker mit dementsprechend vorwiegend kardialer Wirkung. Erst bei hohen Dosen kommt es zur Wirkung an β2-Rezeptoren (Bronchokonstriktion). Durch die Blockade von β1-Rezeptoren wird der Einfluss von Katecholaminen auf das Herzen verringert.</p>
      <p>Metoprolol reguliert die Herzfrequenz, vermindert das Herzminutenvolumen und die Kontraktilität und senkt zeitverzögert den Blutdruck.</p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle &bdquo;Lopressor&rdquo;</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '5mg', per: '5ml' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>Anwendung</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Dosierung</div>
            <nos-med-dose :items="[
              { unit: '5mg (1 Ampulle)', color: 'adult' }]">
            </nos-med-dose>
            <v-divider class="my-2"></v-divider>
            <div>Wiederholung nach 10min möglich.</div>
            <div>Maximal <span class="nos-mono">15mg</span></div>
        </p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~2min</template>
    <template v-slot:span>~5h</template>
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
  name: "NaMedMetoprolol",
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
      return this.$store.getters.getContentMeta("na-med-metoprolol");
    },
  },
  methods: {},
};
</script>