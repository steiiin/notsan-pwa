<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "15.12.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>

  <nos-header title="Traumatisch"></nos-header>
  <nos-header title="Empfehlungsgrad A (soll)" :decent="true"></nos-header>
  <nos-list>
    <nos-li>Kritische Verletzung</nos-li>
    <nos-li :decent="true">Instabiler Thorax</nos-li>
    <nos-li :decent="true">Instabiles Becken</nos-li>
    <nos-li :decent="true">Penetrierende Verletzung Thorax</nos-li>
    <nos-li :decent="true">Amputation proximal Hand/Fuß</nos-li>
    <nos-li :decent="true">Sensomotorisches Defizit nach Wirbelsäulenverletzung</nos-li>

    <nos-li>Prähospitale Maßnahmen</nos-li>
    <nos-li :decent="true">Atemwegssicherung</nos-li>
    <nos-li :decent="true">Thoraxdrainage / Entlastung</nos-li>
    <nos-li :decent="true">Kreislaufunterstützung m. Katecholaminen</nos-li>
    <nos-li :decent="true">Anlage eines Tourniquets</nos-li>

    <nos-li>cABCDE-Problem nach Trauma</nos-li>
    <nos-li :decent="true">SpO<sub>2</sub> &lt; 90%</nos-li>
    <nos-li :decent="true">Schockindex &gt; 0,9</nos-li>
    <nos-li :decent="true">Vigilanzminderun (GCS &lt; 12)</nos-li>
    <nos-li :decent="true">Hypothermie (&lt; 35°C)</nos-li>
  </nos-list>

  <nos-btn-link content="calc-schockindex" :backLink="true" class="mx-4 mb-4"></nos-btn-link>

  <nos-header title="Empfehlungsgrad B (sollte)" :decent="true"></nos-header>
  <nos-list>
    <nos-li>Frakturen von &ge; 2 proximalen großen Röhrenknochen</nos-li>
    <nos-li>Verbrennungen &gt; 20% KOF &amp; Grad &ge; 2b</nos-li>
    <nos-li>Sturz aus &gt; 3m Höhe</nos-li>
    <nos-li>Verkehrsunfall mit</nos-li>
    <nos-li :decent="true">Herausscheudern einer Person aus dem PKW</nos-li>
    <nos-li :decent="true">Fraktur langer Röhrenknochen</nos-li>
    <nos-li>Inhalationstrauma (chemisch, thermisch, toxisch)</nos-li>
  </nos-list>

  <nos-header title="Nicht-Traumatisch"></nos-header>
  <nos-list>

    <nos-li>Drohende Atemwegsverlegung (A-Problem)</nos-li>
    <nos-li>Respiratorische Insuffizienz (B-Problem)</nos-li>
    <nos-li :decent="true">Dyspnoe mit muskulärer Erschöpfung</nos-li>
    <nos-li :decent="true">Beatmung (invasiv &amp; niv)</nos-li>
    <nos-li :decent="true">High-Flow-Sauerstofftherapie</nos-li>
    <nos-li :decent="true">Oxygenierungsstörung (&lt;89% mit O<sub>2</sub>)</nos-li>

    <nos-li>Hämodynamische Instabilität (C-Problem)</nos-li>
    <nos-li :decent="true">RR<sub>syst.</sub> &lt; 80mmHg</nos-li>
    <nos-li :decent="true">Bradykardie (&lt; 40min<sup>-1</sup>)</nos-li>
    <nos-li :decent="true">Tachykardie (&gt; 180min<sup>-1</sup>)</nos-li>
    <nos-li :decent="true">Reanimation (Laufend/Erfolgt)</nos-li>

    <nos-li>Neurologische Auffälligkeiten (D-Problem)</nos-li>
    <nos-li :decent="true">Vigilanzminderung (GCS &lq; 9)</nos-li>
    <nos-li :decent="true">Neurologisches Defizit</nos-li>
    <nos-li :decent="true">Unklare Bewusstlosigkeit</nos-li>
    <nos-li :decent="true">Status Epilepticus</nos-li>

    <nos-li>Begleitende Faktoren (E-Problem)</nos-li>
    <nos-li :decent="true">Liegetrauma bzw. kritischer Gesamtzustand</nos-li>
    <nos-li :decent="true">Hypo- / Hyperthermie (&le;32°C/&ge;40°C)</nos-li>
    <nos-li :decent="true">Sepsis (qSOFA &gt; 2)</nos-li>

  </nos-list>

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
    name: "SchemeSchockraumInd",
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
        return this.$store.getters.getContentMeta("scheme-schockraumind");
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
