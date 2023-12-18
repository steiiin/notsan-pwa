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
        OPQRST ist ein Akronym-Schema, das im Gesundheitswesen zur genauen Bestimmung von Symptomen eines Patienten und deren Hergang im Falle einer akuten Erkrankung dient.
      </div-paragraph>
    </template>
  </nos-paragraphs>

  <nos-header title="Schema" />
  <nos-table>
    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="O"
          meaning="Onset"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Beginn</div-u>
          <div>- Wann haben die Schmerzen begonnen?</div>
          <div>- Aktivität (aktiv, inaktiv, gestresst)?</div>
          <div>- Plötzlich / Schleichend</div>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="P"
          meaning="Provocation"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Verstärkung &amp; Linderung</div-u>
          <div>- Bewegung, Ruhe?</div>
          <div>- Bestimmte Lage?</div>
          <div>- Druckschmerzen?</div>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="Q"
          meaning="Quality"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Schmerzcharacter</div-u>
          <div>- Stechend, Stumpf?</div>
          <div>- Wellenartig?</div>
          <div>- Konstant Ansteigend?</div>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="R"
          meaning="Region"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Schmerzort &amp; Ausstrahlung</div-u>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="S"
          meaning="Severity"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Schmerzstärke</div-u>
          <div>- NRS (0-10)</div>
          <div>- VRS (leicht, mittel, stark)</div>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="T"
          meaning="Time"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Zeitlicher Verlauf</div-u>
          <div>- Früher schonmal Aufgetreten?</div>
          <div>- Veränderung seit Beginn?</div>
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
import NosCaptionAkronym from '../components/NosCaptionAkronym.vue'

export default {
  name: 'SchemeOPQRST',
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosTable,
    NosRowCaption,
    NosCaptionAkronym
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
      return this.$store.getters.getContentMeta('scheme-opqrst')
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
