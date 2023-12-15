<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "20.11.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>

  <nos-header title="Einsatz"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Hier dient der Wells-Score als klinisches Assessment zur Abschätzung der Wahrscheinlichkeit des Vorliegens einer
        Lungenembolie.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Rechner"></nos-header>
  <nos-table>
    <nos-row-score class="mt-2">
      <template v-slot:caption>Symptome einer tiefen Beinvenenthrombose</template>
      <template v-slot:t1>
        <nos-btn-toggle v-model="tgTvt"></nos-btn-toggle>
      </template>
      <template v-slot:t2>
        <div class="nos-score-point">3 Punkte</div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template v-slot:caption>Keine andere wahrscheinlichere Diagnose</template>
      <template v-slot:t1>
        <nos-btn-toggle v-model="tgUnlikly"></nos-btn-toggle>
      </template>
      <template v-slot:t2>
        <div class="nos-score-point">3 Punkte</div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template v-slot:caption>Herzfrequenz &gt; <span class="nos-mono">100/min</span></template>
      <template v-slot:t1>
        <nos-btn-toggle v-model="tgHf100"></nos-btn-toggle>
      </template>
      <template v-slot:t2>
        <div class="nos-score-point">1,5 Punkte</div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template v-slot:caption>Immobilisierung oder OP in den letzten 4 Wochen</template>
      <template v-slot:t1>
        <nos-btn-toggle v-model="tgImmob"></nos-btn-toggle>
      </template>
      <template v-slot:t2>
        <div class="nos-score-point">1,5 Punkte</div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template v-slot:caption>Bereits in Vergangenheit Lungenembolie oder TVT</template>
      <template v-slot:t1>
        <nos-btn-toggle v-model="tgBefore"></nos-btn-toggle>
      </template>
      <template v-slot:t2>
        <div class="nos-score-point">1,5 Punkte</div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template v-slot:caption>Hämoptysen (Bluthusten)</template>
      <template v-slot:t1>
        <nos-btn-toggle v-model="tgHaemoptyse"></nos-btn-toggle>
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
    <nos-row-result :color="scoreResult.color">
      <template v-slot:heading>{{ scoreResult.heading }}</template>
      <template v-slot:text>{{ scoreResult.text }}</template>
    </nos-row-result>
    <nos-row-caption v-if="scorePoints >= 5">
      <template v-slot:caption>Hinweise</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Ab Wells-Score &gt; 5</div>
          <div>Es sollte zusätzlich der <b>sPESI-Score</b> erhoben werden:</div>
          <nos-btn-link content="score-pesi"></nos-btn-link>
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
    name: "ScoreWells",
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
        tgTvt: false,
        tgUnlikly: false,
        tgHf100: false,
        tgImmob: false,
        tgBefore: false,
        tgHaemoptyse: false,
        tgCa: false,
      };
    },
    computed: {
      meta() {
        return this.$store.getters.getContentMeta("score-wells");
      },
      scorePoints() {
        return (
          (this.tgTvt ? 3 : 0) +
          (this.tgUnlikly ? 3 : 0) +
          (this.tgHf100 ? 1.5 : 0) +
          (this.tgImmob ? 1.5 : 0) +
          (this.tgBefore ? 1.5 : 0) +
          (this.tgHaemoptyse ? 1 : 0) +
          (this.tgCa ? 1 : 0)
        );
      },
      scoreResult() {
        let heparinNag = this.scorePoints >= 5 ? ' ()' : '';
        if (this.scorePoints < 2) {
          return {
            heading: "Geringe Wahrscheinlichkeit",
            text: "Punkte: " + this.scorePoints,
            color: "success",
          };
        }
        else if (this.scorePoints < 7) {
          return {
            heading: "Mittlere Wahrscheinlichkeit",
            text: "Punkte: " + this.scorePoints,
            color: "warning",
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
