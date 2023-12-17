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
        OPQRST ist ein Akronym-Schema, das im Gesundheitswesen zur genauen Bestimmung von Symptomen eines Patienten und deren Hergang im Falle einer akuten Erkrankung dient. 
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Schema"></nos-header>
  <nos-table>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="O" meaning="Onset" color="red-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Beginn</div>
          <div>- Wann haben die Schmerzen begonnen?</div>
          <div>- Aktivität (aktiv, inaktiv, gestresst)?</div>
          <div>- Plötzlich / Schleichend</div>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="P" meaning="Provocation" color="red-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Verstärkung &amp; Linderung</div>
          <div>- Bewegung, Ruhe?</div>
          <div>- Bestimmte Lage?</div>
          <div>- Druckschmerzen?</div>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="Q" meaning="Quality" color="red-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Schmerzcharacter</div>
          <div>- Stechend, Stumpf?</div>
          <div>- Wellenartig?</div>
          <div>- Konstant Ansteigend?</div>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="R" meaning="Region" color="red-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Schmerzort &amp; Ausstrahlung</div>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="S" meaning="Severity" color="red-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Schmerzstärke</div>
          <div>- NRS (0-10)</div>
          <div>- VRS (leicht, mittel, stark)</div>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="T" meaning="Time" color="red-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Zeitlicher Verlauf</div>
          <div>- Früher schonmal Aufgetreten?</div>
          <div>- Veränderung seit Beginn?</div>
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
  import NosCaptionAkronym from "../components/NosCaptionAkronym.vue";
  import NosBtnLink from "../components/NosBtnLink.vue";
  import NosBtnToggle from "../components/NosBtnToggle.vue";

  export default {
    name: "SchemeOPQRST",
    components: {
      NosTitle,
      NosHeader,
      NosParagraphs,
      NosTable,
      NosRowCaption,
      NosRowScore,
      NosRowResult,
      NosCaptionAkronym,
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
        return this.$store.getters.getContentMeta("scheme-opqrst");
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
