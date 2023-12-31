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
      <div-paragraph> Hier dient der Wells-Score als klinisches Assessment zur Abschätzung der Wahrscheinlichkeit des Vorliegens einer Lungenembolie. </div-paragraph>
    </template>
  </nos-paragraphs>

  <nos-header title="Rechner" />
  <nos-table>
    <nos-row-score class="mt-2">
      <template #caption>
        Symptome einer tiefen Beinvenenthrombose
      </template>
      <template #t1>
        <nos-btn-toggle v-model="tgTvt" />
      </template>
      <template #t2>
        <div class="nos-score-point">
          3 Punkte
        </div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template #caption>
        Keine andere wahrscheinlichere Diagnose
      </template>
      <template #t1>
        <nos-btn-toggle v-model="tgUnlikly" />
      </template>
      <template #t2>
        <div class="nos-score-point">
          3 Punkte
        </div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template #caption>
        Herzfrequenz &gt; <span-mono>100/min</span-mono>
      </template>
      <template #t1>
        <nos-btn-toggle v-model="tgHf100" />
      </template>
      <template #t2>
        <div class="nos-score-point">
          1,5 Punkte
        </div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template #caption>
        Immobilisierung oder OP in den letzten 4 Wochen
      </template>
      <template #t1>
        <nos-btn-toggle v-model="tgImmob" />
      </template>
      <template #t2>
        <div class="nos-score-point">
          1,5 Punkte
        </div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template #caption>
        Bereits in Vergangenheit Lungenembolie oder TVT
      </template>
      <template #t1>
        <nos-btn-toggle v-model="tgBefore" />
      </template>
      <template #t2>
        <div class="nos-score-point">
          1,5 Punkte
        </div>
      </template>
    </nos-row-score>
    <nos-row-score>
      <template #caption>
        Hämoptysen (Bluthusten)
      </template>
      <template #t1>
        <nos-btn-toggle v-model="tgHaemoptyse" />
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
    <nos-row-result :color="scoreResult.color">
      <template #heading>
        {{ scoreResult.heading }}
      </template>
      <template #text>
        {{ scoreResult.text }}
      </template>
    </nos-row-result>
    <nos-row-caption v-if="scorePoints >= 5">
      <template #caption>
        Hinweise
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Ab Wells-Score &gt; 5</div-u>
          <div>Es sollte zusätzlich der <b>sPESI-Score</b> erhoben werden:</div>
          <nos-btn-link content="score-pesi" />
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
  name: 'ScoreWells',
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
      tgTvt: false,
      tgUnlikly: false,
      tgHf100: false,
      tgImmob: false,
      tgBefore: false,
      tgHaemoptyse: false,
      tgCa: false
    }
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('score-wells')
    },
    scorePoints () {
      return (
        (this.tgTvt ? 3 : 0) +
          (this.tgUnlikly ? 3 : 0) +
          (this.tgHf100 ? 1.5 : 0) +
          (this.tgImmob ? 1.5 : 0) +
          (this.tgBefore ? 1.5 : 0) +
          (this.tgHaemoptyse ? 1 : 0) +
          (this.tgCa ? 1 : 0)
      )
    },
    scoreResult () {
      if (this.scorePoints < 2) {
        return {
          heading: 'Geringe Wahrscheinlichkeit',
          text: 'Punkte: ' + this.scorePoints,
          color: 'success'
        }
      } else if (this.scorePoints < 7) {
        return {
          heading: 'Mittlere Wahrscheinlichkeit',
          text: 'Punkte: ' + this.scorePoints,
          color: 'warning'
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
