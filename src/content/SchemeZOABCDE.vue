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
      <div-paragraph> Das ZOABCDE-Schema erleichtert die strukturierte Anmeldung von Notfallpatienten im Krankenhaus. </div-paragraph>
    </template>
  </nos-paragraphs>

  <nos-header title="Schema" />
  <nos-table>
    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="Z"
          meaning="Zeiten"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Ankunftszeit</div-u>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="O"
          meaning="Opening"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Patienten- &amp; Notfallinformation</div-u>
          <div>- Name, Geschlecht und Alter</div>
          <div>- Trauma oder Erkrankung</div>
          <div>- In einem Satz &bdquo;Was ist passiert&rdquo;</div>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="A"
          meaning="Airway"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Atemweg</div-u>
          <div>- Tracheostoma</div>
          <div>- Gesichert (Tubus)</div>
          <div>- Gefährdet</div>
          <div>- Frei</div>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="B"
          meaning="Breathing"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Belüftung</div-u>
          <div>- Beatmet</div>
          <div>- CPAP</div>
          <div>- Sauerstoffpflichtig</div>
          <div>- Pneumothorax</div>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="C"
          meaning="Circulation"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Kreislauf</div-u>
          <div>- Stabil / Instabil</div>
          <div>- Schock, Katecholaminpflichtig</div>
          <div>- Reanimation</div>
          <div>- Blutungen (Beckenbruch, Bauchtrauma)</div>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="D"
          meaning="Disability"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Neurologische Defizite</div-u>
          <div>- Wach &amp; Orientiert</div>
          <div>- BE-FAST auffällig</div>
          <div>- Koma</div>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="E"
          meaning="Extra"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Zusatzinformationen</div-u>
          <div>- Antikoagulation / relevante Medikation</div>
          <div>- Erbrechen, Durchfall, Keime</div>
          <div>- Schwangerschaft</div>
          <div>- sonstige Besonderheiten</div>
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
  name: 'SchemeZOABCDE',
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
      return this.$store.getters.getContentMeta('scheme-zoabcde')
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
