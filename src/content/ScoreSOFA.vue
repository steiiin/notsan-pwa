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
        Der qSOFA-Score ist eine vereinfachte Form des SOFA-Scores. Er kann zur ersten Einschätzung in präklinischen Situationen und Notaufnahmen bei Verdacht auf eine Infektion
        angewendet werden.
      </div-paragraph>
    </template>
  </nos-paragraphs>

  <nos-header title="Rechner" />
  <nos-table>
    <nos-row-score class="mt-2">
      <template #caption>
        Atemfrequenz &ge; 22/min
      </template>
      <template #t1>
        <nos-btn-toggle v-model="tgAF" />
      </template>
    </nos-row-score>
    <nos-row-score>
      <template #caption>
        Vigilanzminderung (GCS &lt; 15)
      </template>
      <template #t1>
        <nos-btn-toggle v-model="tgGCS" />
      </template>
    </nos-row-score>
    <nos-row-score>
      <template #caption>
        Systolischer Blutdruck &le; 100mmHg
      </template>
      <template #t1>
        <nos-btn-toggle v-model="tgRR" />
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
  </nos-table>
</template>

<script>
import NosTitle from '../components/NosTitle.vue'
import NosHeader from '../components/NosHeader.vue'
import NosParagraphs from '../components/NosParagraphs.vue'
import NosTable from '../components/NosTable.vue'
import NosRowScore from '../components/NosRowScore.vue'
import NosRowResult from '../components/NosRowResult.vue'
import NosBtnToggle from '../components/NosBtnToggle.vue'

export default {
  name: 'ScoreSOFA',
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosTable,
    NosRowScore,
    NosRowResult,
    NosBtnToggle
  },
  data () {
    return {
      tgAF: false,
      tgGCS: false,
      tgRR: false
    }
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('score-sofa')
    },
    scorePoints () {
      return (this.tgAF ? 1 : 0) + (this.tgGCS ? 1 : 0) + (this.tgRR ? 1 : 0)
    },
    scoreResult () {
      if (this.scorePoints < 2) {
        return {
          heading: 'Geringe Sepsis-Risiko',
          text: 'Punkte: ' + this.scorePoints,
          color: 'success'
        }
      } else if (this.scorePoints === 2) {
        return {
          heading: 'Sepsis-Risiko erhöht',
          text: 'Punkte: ' + this.scorePoints,
          color: 'warning'
        }
      } else {
        return {
          heading: 'Sepsis-Risiko hoch',
          text: 'Punkte: ' + this.scorePoints,
          color: 'error'
        }
      }
    }
  },
  methods: {}
}
</script>
