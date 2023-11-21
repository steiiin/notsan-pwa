<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Hypertonie</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:heading></template>
    <template v-slot:text>
      <p>
        Nifedipin blockiert Kalziumkanäle in der glatten Gefäßmuskulatur, was zu einer Vasodilatation führt und den Blutdruck senkt.
      </p>
      <p>
        Nifedipin ist effektiv zur Senkung eines erhöhten Blutdrucks.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="suppositorium">1 Weichkapsel Nifedipin</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '10mg' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>Anwendung</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Dosierung</div>
          <div>
            <span class="nos-mono">10mg (1 Kapsel)</span> zerbeißen lassen.
          </div>
        </p>
        <p>
          <div class="nos-u">Nach 30min Repetition möglich</div>
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
  name: "NaMedNifedipin",
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
      return this.$store.getters.getContentMeta("na-med-nifedipin");
    },
  },
  methods: {},
};
</script>