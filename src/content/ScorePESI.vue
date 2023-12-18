<!-------------------------------------------------------------------------------------------------
{

}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title
    :headline="meta.title"
    :subtitle="meta.subtitle"
  />

  <nos-header title="Einsatz" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Der vereinfachte <i>(simplified)</i> "Pulmonal-Embolie-Schwere-Index" als klinisches Assessment zur Abschätzung der Wahrscheinlichkeit des Vorliegens einer Lungenembolie.
      </div-paragraph>
    </template>
  </nos-paragraphs>

  <nos-header title="Rechner" />
  <nos-table>
    <nos-row-score class="mt-2">
      <template #caption>
        Patient &gt; 80 Jahre alt
      </template>
      <template #t1>
        <nos-btn-toggle v-model="tgOld" />
      </template>
      <template #t2>
        <div class="nos-score-point">
          1 Punkt
        </div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template #caption>
        Tumorerkrankung (letzte 6 Monate behandelt)
      </template>
      <template #t1>
        <nos-btn-toggle v-model="tgCa" />
      </template>
      <template #t2>
        <div class="nos-score-point">
          1 Punkt
        </div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template #caption>
        Chronische kardiopulmonale Erkrankung
      </template>
      <template #t1>
        <nos-btn-toggle v-model="tgHeart" />
      </template>
      <template #t2>
        <div class="nos-score-point">
          1 Punkt
        </div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template #caption>
        Puls &ge; <span-mono>110/min</span-mono>
      </template>
      <template #t1>
        <nos-btn-toggle v-model="tgTachy" />
      </template>
      <template #t2>
        <div class="nos-score-point">
          1 Punkt
        </div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template #caption>
        Systolischer Blutdruck &lt; <span-mono>100mmHg</span-mono>
      </template>
      <template #t1>
        <nos-btn-toggle v-model="tgHypoton" />
      </template>
      <template #t2>
        <div class="nos-score-point">
          1 Punkt
        </div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template #caption>
        Sauerstoffsättigung &lt; <span-mono>90%</span-mono>
      </template>
      <template #t1>
        <nos-btn-toggle v-model="tgHypoxie" />
      </template>
      <template #t2>
        <div class="nos-score-point">
          1 Punkt
        </div>
      </template>
    </nos-row-score>
    <nos-row-result :color="scoreResult.color">
      <template #heading>
        {{ scoreResult.heading }}
      </template>
      <template #text>
        {{ scoreResult.text }}
      </template>
    </nos-row-result>
    <nos-row-caption v-if="scorePoints >= 1">
      <template #caption>
        Hinweise
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Ab sPESI-Score &gt; 0</div-u>
          <div>Es sollte zusätzlich der <b>Wells-Score</b> erhoben werden:</div>
          <nos-btn-link content="score-wells" />
        </div-paragraph>
        <div-paragraph>
          <div-u>Beide Tests ergeben erhöhtes Risiko?</div-u>
          <nos-btn-link content="med-heparin" />
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>
</template>

<script>
import NosTitle from '../components/NosTitle.vue'
import NosHeader from '../components/NosHeader.vue'
import NosParagraphs from '../components/NosParagraphs.vue'
import NosTable from '../components/NosTable.vue'
import NosRowCaption from '../components/NosRowCaption.vue'
import NosRowScore from '../components/NosRowScore.vue'
import NosRowResult from '../components/NosRowResult.vue'
import NosBtnLink from '../components/NosBtnLink.vue'
import NosBtnToggle from '../components/NosBtnToggle.vue'

export default {
  name: 'ScorePESI',
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosTable,
    NosRowCaption,
    NosRowScore,
    NosRowResult,
    NosBtnLink,
    NosBtnToggle
  },
  data () {
    return {
      tgOld: false,
      tgCa: false,
      tgHeart: false,
      tgTachy: false,
      tgHypoton: false,
      tgHypoxie: false
    }
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('score-pesi')
    },
    scorePoints () {
      return (this.tgOld ? 1 : 0) + (this.tgCa ? 1 : 0) + (this.tgHeart ? 1 : 0) + (this.tgTachy ? 1 : 0) + (this.tgHypoton ? 1 : 0) + (this.tgHypoxie ? 1 : 0)
    },
    scoreResult () {
      if (this.scorePoints < 1) {
        return {
          heading: 'Geringe Wahrscheinlichkeit',
          text: '0 Punkte',
          color: 'success'
        }
      } else {
        return {
          heading: 'Hohe Wahrscheinlichkeit',
          text: 'Punkte: ' + this.scorePoints,
          color: 'error'
        }
      }
    }
  },
  methods: {}
}
</script>
