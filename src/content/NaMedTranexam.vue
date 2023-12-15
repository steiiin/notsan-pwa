<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "12.12.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Blutungen unter fibrinolytischer Therapie</nos-li>
    <nos-li>Lebensbedrohliche innere &amp; äußere Blutungen (Polytrauma)</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Tranexamsäure ist ein Antifibrinolytikum, das heißt, es verhindert den Abbau von Fibrin, einem Schlüsselelement im Blutgerinnungsprozess.
      </p>
      <p>
        Fibrin bildet ein Netzwerk, das zur Bildung eines Blutgerinnsels beiträgt, um Blutungen zu stoppen. Tranexamsäure wirkt, indem es die Bindung des Plasminogens an Fibrin hemmt und so den Abbau des Gerinnsels verlangsamt oder verhindert. Dies führt zu einer verbesserten Blutgerinnung und einer reduzierten Blutung.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="iv">1 Ampulle &bdquo;Cyklokapron&rdquo;</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '500mg', per: '5ml' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>Dosis</template>
      <template v-slot:content>
        <p>
          <nos-med-dose :items="[
            { unit: '1ml (100mg)', per: '10kg', color: 'adult' },
          ]"></nos-med-dose>
          <div>Langsam spritzen (max. <b>1ml/min</b>)</div>
          <div>Am Besten per Kurzinfusion verabreichen.</div>
        </p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>Sofort</template>
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
  name: "NaMedTranexam",
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
      return this.$store.getters.getContentMeta("na-med-tranexam");
    },
  },
  methods: {},
};
</script>