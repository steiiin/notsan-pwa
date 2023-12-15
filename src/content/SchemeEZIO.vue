<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "15.12.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>

  <nos-header title="Anweisungen"></nos-header>
  <nos-header title="Grundlagen" :decent="true"></nos-header>
  <nos-list>
    <nos-li>Druckinfusion notwendig, um gute Durchflussrate zu erreichen: <br /><b>ca. 300mmHg</b></nos-li>
    <nos-li>Nach Bolusgabe mit 10ml NaCl nachspülen</nos-li>
    <nos-li>Unbedingt die Einwirkzeiten beim Desinfizieren beachten</nos-li>
    <nos-li>Keine Anwendung bei Frakturen am betr. Knochen oder proximal davon</nos-li>
    <nos-li>Keine Anwendung, wenn die letzten 48h bereits i.o. an gleicher Stelle</nos-li>
  </nos-list>

  <nos-header title="Nadelgröße" :decent="true"></nos-header>
  <nos-list>
    <nos-li>Rosa: Tibia Kind</nos-li>
    <nos-li>Blau: Tibia Erwachsene</nos-li>
    <nos-li>Gelb: Humerus Erwachsene</nos-li>
  </nos-list>
  <nos-list>
    <nos-li>Nach Einstechen muss die oberste Markierung erkennbar sein:</nos-li>
    <nos-li :decent="true">1 Ring, nicht mehr, nicht weniger (ca.5mm)</nos-li>
  </nos-list>

  <nos-header title="Durchführung" :decent="true"></nos-header>
  <nos-list :numeric="true"> 
    <li>Punktionsstelle lokalisieren, Extremität stabilisieren</li>
    <li>Spitze der Nadel bis auf den Knochen stechen</li>
    <li>Unter leichtem Druck in einem "Rutsch" bohren, bis Widerstand nachlässt</li>
    <li>Kanüle festhalten, Mandrin ausdrehen</li>
    <li>Stabilizer aufkleben</li>
    <li>Dreiwegehahn (ENTLÜFTET) aufschrauben</li>
    <li>NaCl anspülen (2/5/10 - Kleinkind/Kind/Erwachsene)</li>
  </nos-list>

  <nos-header title="Punktionsorte"></nos-header>
  <nos-header title="Proximale Tibia" :decent="true"></nos-header>
  <nos-list>
    <nos-li><b>Erste</b> Wahl bei <b>Erwachsenen</b> &amp; <b>Kindern</b></nos-li>
  </nos-list>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Nach Tasten der Tuberositas tibiae bei Erwachsenen 2cm nach medial gehen <br />
        <i>(Punktion etwa auf Höhe der Tuberositas tibiae)</i>.
      </p>
      <p>
        Bei Kindern 1–2cm nach medial, dann 1–2cm nach distal gehen <br />
        <i>(Schonung der Wachstumsfuge!)</i>.
      </p>
    </template>
  </nos-paragraphs>
  <nos-img src="/img/res/image-oss-tibia.png"></nos-img>

  <nos-header title="Distale Tibia" :decent="true"></nos-header>
  <nos-list>
    <nos-li><b>Zweite</b> Wahl bei <b>Erwachsenen</b> &amp; <b>Kindern</b></nos-li>
  </nos-list>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Die mediale Fläche der distalen Tibia: <br />
        Etwa 1–2cm proximal des Malleolus medialis.
      </p>
    </template>
  </nos-paragraphs>
  <nos-img src="/img/res/image-oss-sprg.png"></nos-img>

  <nos-header title="Proximaler Humerus" :decent="true"></nos-header>
  <nos-list>
    <nos-li><b>Dritte</b> Wahl bei <b>Erwachsenen</b></nos-li>
  </nos-list>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>Am Humeruskopf, etwa 2cm distal des Acromions.</p>
    </template>
  </nos-paragraphs>
  <nos-img src="/img/res/image-oss-schulter.png"></nos-img>

  <nos-header title="Distaler Femur" :decent="true"></nos-header>
  <nos-list>
    <nos-li><b>Dritte</b> Wahl bei <b>Kindern</b></nos-li>
  </nos-list>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>Etwa 1-2cm proximal der Patella.</p>
    </template>
  </nos-paragraphs>
  <nos-img src="/img/res/image-oss-oschenk.png"></nos-img>
</template>

<script>
  import NosTitle from "../components/NosTitle.vue";
  import NosImg from "../components/NosImg.vue";
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
    name: "SchemeEZIO",
    components: {
      NosTitle,
      NosList,
      NosLi,
      NosImg,
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
      return {};
    },
    computed: {
      meta() {
        return this.$store.getters.getContentMeta("scheme-ezio");
      },
    },
    methods: {},
  };
</script>
