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
        Der Apgar-Score dient in der Neonatologie und in der Notfallmedizin zur Beurteilung der postnatalen Adaptation eines Neugeborenen an das extrauterine Leben. 
      </p>
      <p>
        Der Score wird jeweils <b>1</b>, <b>5</b> und <b>10</b> Minuten nach der Geburt ermittelt.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Rechner"></nos-header>
  <nos-table>

    <div class="nos-wide-score">
      <div class="nos-wide-score__caption">
        <span class="nos-engdeu">Hautfarbe<section>(<b>A</b>ussehen)</section></span>
      </div>
      <div class="nos-wide-score__options">
        <nos-btn-group
          v-model="scAp"
          :items="[
            { label: 'Blau/Weiß', state: '0' },
            { label: 'Akrozyanose', state: '1' },
            { label: 'Rosig', state: '2' },
          ]"
        ></nos-btn-group>
      </div>
    </div>

    <div class="nos-wide-score">
      <div class="nos-wide-score__caption">
        <span class="nos-engdeu">Herzaktion<section>(<b>P</b>ulse)</section></span>
      </div>
      <div class="nos-wide-score__options">
        <nos-btn-group
          v-model="scPu"
          :items="[
            { label: 'Keine', state: '0' },
            { label: 'Puls < 100', state: '1' },
            { label: 'Puls > 100', state: '2' },
          ]"
        ></nos-btn-group>
      </div>
    </div>

    <div class="nos-wide-score">
      <div class="nos-wide-score__caption">
        <span class="nos-engdeu">Absaugreflexe<section>(<b>G</b>esicht)</section></span>
      </div>
      <div class="nos-wide-score__options">
        <nos-btn-group
          v-model="scGr"
          :items="[
            { label: 'Keine', state: '0' },
            { label: 'Grimassen', state: '1' },
            { label: 'Schreien', state: '2' },
          ]"
        ></nos-btn-group>
      </div>
    </div>

    <div class="nos-wide-score">
      <div class="nos-wide-score__caption">
        <span class="nos-engdeu">Muskeltonus<section>(<b>A</b>ktivität)</section></span>
      </div>
      <div class="nos-wide-score__options">
        <nos-btn-group
          v-model="scAc"
          :items="[
            { label: 'Schlaff', state: '0' },
            { label: 'Träge Flexion', state: '1' },
            { label: 'Aktiv', state: '2' },
          ]"
        ></nos-btn-group>
      </div>
    </div>

    <div class="nos-wide-score">
      <div class="nos-wide-score__caption">
        <span class="nos-engdeu">Atmung<section>(<b>R</b>espiration)</section></span>
      </div>
      <div class="nos-wide-score__options">
        <nos-btn-group
          v-model="scRe"
          :items="[
            { label: 'Keine', state: '0' },
            { label: 'Langsam', state: '1' },
            { label: 'Schnell', state: '2' },
          ]"
        ></nos-btn-group>
      </div>
    </div>

  </nos-table>
  <nos-header title="Ergebnis" v-if="scorePoints>=0"></nos-header>

    <nos-table v-if="scorePoints>=0">
      <nos-row-result :color="scoreResult.color" >
        <template v-slot:heading>{{ scoreResult.heading }}</template>
        <template v-slot:text>{{ scoreResult.text }}</template>
      </nos-row-result>
      <v-btn 
        color="error" @click="resetScorePoints()"
        class="ms-n2 mt-2">Score zurücksetzen</v-btn>
    </nos-table>

</template>

<script>
  import NosTitle from "../components/NosTitle.vue";
  import NosHeader from "../components/NosHeader.vue";
  import NosParagraphs from "../components/NosParagraphs.vue";
  import NosTable from "../components/NosTable.vue";
  import NosRowCaption from "../components/NosRowCaption.vue";
  import NosRowScore from "../components/NosRowScore.vue";
  import NosBtnGroup from "../components/NosBtnGroup.vue";
  import NosRowResult from "../components/NosRowResult.vue";
  import NosBtnLink from "../components/NosBtnLink.vue";
  import NosBtnToggle from "../components/NosBtnToggle.vue";

  export default {
    name: "ScoreAPGAR",
    components: {
      NosTitle,
      NosHeader,
      NosParagraphs,
      NosTable,
      NosRowCaption,
      NosRowScore,
      NosRowResult,
      NosBtnGroup,
      NosBtnLink,
      NosBtnToggle,
    },
    data() {
      return {
        scAp: "-100",
        scPu: "-100",
        scGr: "-100",
        scAc: "-100",
        scRe: "-100",
      };
    },
    watch: {
      scAp(newValue, oldValue) {
        this.scrollToNextEmpty()
      },
      scPu(newValue, oldValue) {
        this.scrollToNextEmpty()
      },
      scGr(newValue, oldValue) {
        this.scrollToNextEmpty()
      },
      scAc(newValue, oldValue) {
        this.scrollToNextEmpty()
      },
      scRe(newValue, oldValue) {
        this.scrollToNextEmpty()
      },
    },
    computed: {
      meta() {
        return this.$store.getters.getContentMeta("score-apgar");
      },
      scorePoints() {
        return (
          parseInt(this.scAp) + 
          parseInt(this.scPu) + 
          parseInt(this.scGr) + 
          parseInt(this.scAc) + 
          parseInt(this.scRe)
        );
      },
      scoreResult() {

        if (this.scorePoints < 4) {
          return {
            heading: "Hypoxiegefahr",
            text: "Punkte: " + this.scorePoints,
            color: "error",
          }
        }
        else if (this.scorePoints < 6) {
          return {
            heading: "Hypoxiegefahr, wenn 5 Minuten seit Geburt",
            text: "Punkte: " + this.scorePoints ,
            color: "yellow-darken-1",
          }
        }
        else if (this.scorePoints < 7){
          return {
            heading: "Leichte Anpassungsschwierigkeiten",
            text: "Punkte: " + this.scorePoints ,
            color: "lime-darken-2",
          }
        }
        else if (this.scorePoints < 9){
          return {
            heading: "Weitgehend Adaptiert",
            text: "Punkte: " + this.scorePoints ,
            color: "lime-darken-1",
          }
        }
        else {
          return {
            heading: "Adaptiert",
            text: "Punkte: " + this.scorePoints ,
            color: "success",
          }
        }

      },
    },
    methods: {
      scrollToNextEmpty() {

        let top = 270;
        if (this.scAp < 0) { top = 270; }
        else if (this.scPu < 0) { top = 370; }
        else if (this.scGr < 0) { top = 470; }
        else if (this.scAc < 0) { top = 570; }
        else if (this.scRe < 0) { top = 670; }
        else { top = 770; }

        this.$nextTick(() => {
          window.scrollTo({ top: top, behavior: 'smooth' }) 
        })

      },
      resetScorePoints() {

        window.location.reload();
        this.scrollToNextEmpty();

      }
    },
  };
</script>
<style lang="scss" scoped>

  .nos-wide-score {
    
    margin: 0 -16px;
    padding: 0 16px; 

    &__caption {
      padding: 4px 0 0 0;
    }
    &__options {
      padding: 0 0 8px 0;
    }

    &:nth-child(even) {
      background-color: #fff;
    }
    &:nth-child(odd) {
      background-color: #eee;
    }

  }

  .nos-engdeu {
    font-style: normal;
    display: block;

    & section {
      display: block;
      margin-top: -8px;
      font-style: italic;
    }

  }

</style>