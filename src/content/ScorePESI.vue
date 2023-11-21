<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>

  <nos-header title="Einsatz"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Der vereinfachte <i>(simplified)</i> "Pulmonal-Embolie-Schwere-Index" als klinisches Assessment zur Abschätzung der Wahrscheinlichkeit des Vorliegens einer
        Lungenembolie.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Rechner"></nos-header>
  <nos-table>
    <nos-row-score>
      <template v-slot:caption>Patient &gt; 80 Jahre alt</template>
      <template v-slot:t1>
        <nos-btn-toggle v-model="tgOld"></nos-btn-toggle>
      </template>
      <template v-slot:t2>
        <div class="nos-score-point">1 Punkt</div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template v-slot:caption>Tumorerkrankung (letzte 6 Monate behandelt)</template>
      <template v-slot:t1>
        <nos-btn-toggle v-model="tgCa"></nos-btn-toggle>
      </template>
      <template v-slot:t2>
        <div class="nos-score-point">1 Punkt</div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template v-slot:caption>Chronische kardiopulmonale Erkrankung</template>
      <template v-slot:t1>
        <nos-btn-toggle v-model="tgHeart"></nos-btn-toggle>
      </template>
      <template v-slot:t2>
        <div class="nos-score-point">1 Punkt</div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template v-slot:caption>Puls &ge; <span class="nos-mono">110/min</span></template>
      <template v-slot:t1>
        <nos-btn-toggle v-model="tgTachy"></nos-btn-toggle>
      </template>
      <template v-slot:t2>
        <div class="nos-score-point">1 Punkt</div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template v-slot:caption>Systolischer Blutdruck &lt; <span class="nos-mono">100mmHg</span></template>
      <template v-slot:t1>
        <nos-btn-toggle v-model="tgHypoton"></nos-btn-toggle>
      </template>
      <template v-slot:t2>
        <div class="nos-score-point">1 Punkt</div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template v-slot:caption>Sauerstoffsättigung &lt; <span class="nos-mono">90%</span></template>
      <template v-slot:t1>
        <nos-btn-toggle v-model="tgHypoxie"></nos-btn-toggle>
      </template>
      <template v-slot:t2>
        <div class="nos-score-point">1 Punkt</div>
      </template>
    </nos-row-score>
    <nos-row-result :color="scoreResult.color">
      <template v-slot:heading>{{ scoreResult.heading }}</template>
      <template v-slot:text>{{ scoreResult.text }}</template>
    </nos-row-result>
    <nos-row-caption v-if="scorePoints >= 1">
      <template v-slot:caption>Hinweise</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Ab sPESI-Score &gt; 0</div>
          <div>Es sollte zusätzlich der <b>Wells-Score</b> erhoben werden:</div>
          <nos-btn-link content="score-wells"></nos-btn-link>
        </p>
        <p>
          <div class="nos-u">Beide Tests ergeben erhöhtes Risiko?</div>
          <nos-btn-link content="med-heparin"></nos-btn-link>
        </p>
      </template>
    </nos-row-caption>
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
    name: "ScorePESI",
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
        tgOld: false,
        tgCa: false,
        tgHeart: false,
        tgTachy: false,
        tgHypoton: false,
        tgHypoxie: false,
      };
    },
    computed: {
      meta() {
        return this.$store.getters.getContentMeta("score-pesi");
      },
      scorePoints() {
        return (
          (this.tgOld ? 1 : 0) +
          (this.tgCa ? 1 : 0) +
          (this.tgHeart ? 1 : 0) +
          (this.tgTachy ? 1 : 0) +
          (this.tgHypoton ? 1 : 0) +
          (this.tgHypoxie ? 1 : 0)
        );
      },
      scoreResult() {
        if (this.scorePoints < 1) {
          return {
            heading: "Geringe Wahrscheinlichkeit",
            text: "0 Punkte",
            color: "success",
          };
        }
        else {
          return {
            heading: "Hohe Wahrscheinlichkeit",
            text: "Punkte: " + this.scorePoints,
            color: "error",
          };
        }
      },
    },
    methods: {},
  };
</script>
