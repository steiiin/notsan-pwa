<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "15.12.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>

  <nos-header title="Grundlage"></nos-header>
  <nos-list>
    <nos-li>Informationsverständnis</nos-li>
    <nos-li>Informationsverarbeitung</nos-li>
    <nos-li>Bewertung erhaltener Informationen</nos-li>
    <nos-li>Bestimmbarkeit des eigenen Willens</nos-li>
  </nos-list>

  <nos-header title="Fehlende Einwilligungsfähigkeit"></nos-header>
  <nos-header title="Psychische Ursachen" :decent="true"></nos-header>
  <nos-list>
    <nos-li>Orientierungsstörung</nos-li>
    <nos-li :decent="true">Demenz, Delir</nos-li>

    <nos-li>Störung des formalen Denkens</nos-li>
    <nos-li :decent="true">Shizophrenie</nos-li>
    <nos-li :decent="true">Wahnhafte / Paranoide Gedanken</nos-li>

    <nos-li>Störung des Antriebs</nos-li>
    <nos-li :decent="true">Depression</nos-li>
    <nos-li :decent="true">Suizidalität</nos-li>
    <nos-li :decent="true">Manie</nos-li>
  </nos-list>

  <nos-header title="Somatische Ursachen" :decent="true"></nos-header>
  <nos-list>
    <nos-li>Vigilanzminderung (GCS &lt; 15)</nos-li>
    <nos-li>Örtlich, Zeitlich oder Situativ desorientiert</nos-li>
    <nos-li>Intoxikation mit Alkohol, Drogen oder Arzneimitteln</nos-li>
  </nos-list>
  <nos-list>
    <nos-li>Krampfanfall (postkonvulsiv)</nos-li>
    <nos-li>Hypoglykämie</nos-li>
  </nos-list>

  <nos-header title="Minderjährigkeit" :decent="true"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Minderjährige sind grundsätzlich nicht einwilligungsfähig.
      </p>
      <p> 
        Je älter die Person, desto eher sind Ausnahmen
        möglich. Eine Prüfung muss und kann nur im Einzelfall erfolgen. Bei einer Entscheidungsfindung sind sowohl das
        Alter wie auch die feststellbare Reife der zu betrachtenden Person und die Art und Schwere der Erkrankung bzw.
        Situation zu berücksichtigen.
      </p>
    </template>
  </nos-paragraphs>
</template>

<script>
  import NosTitle from "../components/NosTitle.vue";
  import NosList from "../components/NosList.vue";
  import NosLi from "../components/NosLi.vue";
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
    name: "Schemeinwilligung",
    components: {
      NosTitle,
      NosList,
      NosLi,
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
        return this.$store.getters.getContentMeta("scheme-einwilligung");
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
        let heparinNag = this.scorePoints >= 5 ? " ()" : "";
        if (this.scorePoints < 2) {
          return {
            heading: "Geringe Wahrscheinlichkeit",
            text: "Punkte: " + this.scorePoints,
            color: "success",
          };
        } else if (this.scorePoints < 7) {
          return {
            heading: "Mittlere Wahrscheinlichkeit",
            text: "Punkte: " + this.scorePoints,
            color: "warning",
          };
        } else {
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
