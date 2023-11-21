<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>AV Re-Entry Tachykardien</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>Adenosin ist ein Antiarrhythmikum und wirkt an den Adenosin-1-Rezeptoren am Herzen. Über eine Aktivierung dieser hemmt es Kaliumkanäle im Bereich des Vorhofes und des AV-Knotens und führt so zu einer herabgesetzten Überleitungsgeschwindigkeit der Vorhöfen zu den Kammern.</p>
      <p>Dadurch werden Tachykardien, die durch einen Re-Entry-Mechanismus mit Beteiligung des AV-Knotens entstehen unterbrochen und ein Sinusrhythmus kann sich wiedereinstellen.</p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle &bdquo;Adrekar&rdquo;</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '6mg', per: '2ml' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>Anwendung</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Dosierung</div>
            <nos-med-dose :items="[
              { unit: '6mg (1 Ampulle)', color: 'adult' }]">
            </nos-med-dose>
            <v-divider class="my-2"></v-divider>
            <div>Schnell als <b>Bolus</b> &amp; sofort <b>nachspülen</b>.</div>
        </p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>sofort</template>
    <template v-slot:span>~10s</template>
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
  name: "NaMedAdenosin",
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
      return this.$store.getters.getContentMeta("na-med-adenosin");
    },
  },
  methods: {},
};
</script>