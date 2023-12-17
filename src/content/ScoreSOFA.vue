<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "16.12.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>

  <nos-header title="Einsatz"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Der qSOFA-Score ist eine vereinfachte Form des SOFA-Scores. Er kann zur ersten Einschätzung in präklinischen Situationen und Notaufnahmen bei Verdacht auf eine Infektion angewendet werden. 
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Rechner"></nos-header>
  <nos-table>
    <nos-row-score class="mt-2">
      <template v-slot:caption>Atemfrequenz &ge; 22/min</template>
      <template v-slot:t1>
        <nos-btn-toggle v-model="tgAF"></nos-btn-toggle>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template v-slot:caption>Vigilanzminderung (GCS &lt; 15)</template>
      <template v-slot:t1>
        <nos-btn-toggle v-model="tgGCS"></nos-btn-toggle>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template v-slot:caption>Systolischer Blutdruck &le; 100mmHg</template>
      <template v-slot:t1>
        <nos-btn-toggle v-model="tgRR"></nos-btn-toggle>
      </template>
    </nos-row-score>
    
    <nos-row-result :color="scoreResult.color">
      <template v-slot:heading>{{ scoreResult.heading }}</template>
      <template v-slot:text>{{ scoreResult.text }}</template>
    </nos-row-result>
  </nos-table>
</template>

<script>
  import NosTitle from "../components/NosTitle.vue";
  import NosHeader from "../components/NosHeader.vue";
  import NosParagraphs from "../components/NosParagraphs.vue";
  import NosTable from "../components/NosTable.vue";
  import NosRowCaption from "../components/NosRowCaption.vue";
  import NosRowScore from "../components/NosRowScore.vue";
  import NosRowResult from "../components/NosRowResult.vue";
  import NosBtnLink from "../components/NosBtnLink.vue";
  import NosBtnToggle from "../components/NosBtnToggle.vue";

  export default {
    name: "ScoreSOFA",
    components: {
      NosTitle,
      NosHeader,
      NosParagraphs,
      NosTable,
      NosRowCaption,
      NosRowScore,
      NosRowResult,
      NosBtnLink,
      NosBtnToggle,
    },
    data() {
      return {
        tgAF: false,
        tgGCS: false,
        tgRR: false,
      };
    },
    computed: {
      meta() {
        return this.$store.getters.getContentMeta("score-sofa");
      },
      scorePoints() {
        return (
          (this.tgAF ? 1 : 0) +
          (this.tgGCS ? 1 : 0) +
          (this.tgRR ? 1 : 0) 
        );
      },
      scoreResult() {
        if (this.scorePoints < 2) {
          return {
            heading: "Geringe Sepsis-Risiko",
            text: "Punkte: " + this.scorePoints,
            color: "success",
          };
        }
        else if (this.scorePoints == 2) {
          return {
            heading: "Sepsis-Risiko erhöht",
            text: "Punkte: " + this.scorePoints,
            color: "warning",
          };
        }
        else {
          return {
            heading: "Sepsis-Risiko hoch",
            text: "Punkte: " + this.scorePoints,
            color: "error",
          };
        }
      },
    },
    methods: {},
  };
</script>
