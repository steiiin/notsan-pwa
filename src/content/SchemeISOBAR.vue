<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "22.11.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>

  <nos-header title="Einsatz"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Das ISOBAR-Schema erleichtert die strukturierte Übergabe von internistischen Patienten im Schockraum.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Schema"></nos-header>
  <nos-table>
    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="I" meaning="Identification" color="blue-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Alter &amp; Name</div>
          <div>Als erste wichtige Information werden Alter und Name genannt; zum einen werden Verwechslungen vermieden und auch weitere Verfahrensweise eingegrenzt (z.B. geriatrische Patienten, Kinder).</div>
          <v-divider class="my-2"></v-divider>
          <q>Herr Walter, 37 Jahre alt, ...</q>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="S" meaning="Situation" color="blue-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Hauptdiagnose &amp; Situation am Notfallort</div>
          <div>Hier folgt die Hauptdiagnose und eine KURZE Beschreibung des Notfalls (z.B. Anrufer, Ort)</div>
          <v-divider class="my-2"></v-divider>
          <q>... Akutes Aortensyndrom, angerufen hat die Mutter, welche mit ihrem Sohn telefonierte und bemerkte, dass dieser mit der Atmung Probleme hat. ...</q>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="O" meaning="Observation" color="blue-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Symptome, Verlauf &amp; Maßnahmen</div>
          <div>Anschließend werden die Symptome und Vitalparameter bei Eintreffen, die Maßnahmen und der Verlauf beschrieben.</div>
        </p>
        <p>
          <div>Etwaige Komplikationen bei der Therapie oder dem Transport werden hier erwähnt.</div>
          <v-divider class="my-2"></v-divider>
          <q>... Bei Eintreffen sitzend; keine Zyanose, hyperventilierend; blasse, schweißige Haut, Schwindel, starke Schmerzen zwischen den Schulterblättern, Blutdruckdifferenz zwischen den Armen, [...], während der Fahrt mehrfach erbrochen ...</q>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="B" meaning="Background" color="blue-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Vorgeschichte</div>
          <div>Den akuten Symptomen schließt sich die relevante Vorgeschichte an, d.h. Vorerkrankungen, Dauermedikation, Pflegestatus, Angehörige.</div>
          <v-divider class="my-2"></v-divider>
          <q>... keine Dauermedikation, lt. eigner Aussage irgendetwas angeborenes mit der Herzklappe, aber sonst gesund. ...</q>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="A" meaning="Assessment" color="blue-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Einschätzung &amp; Behandlung</div>
          <div>Abschließend wird begründet, warum ein Klinikaufenthalt nötig war und/oder welche Maßnahmen man bis jetzt ergriffen hat.</div>
          <v-divider class="my-2"></v-divider>
          <q>
            ... Den Blutdruck senkten wir mit 10mg Urapidil auf 160 zu 100, warteten nicht auf den nachalarmierten Notarzt und leiteten einen zügigen Transport hierher ein. ...
          </q>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="R" meaning="Recommendation" color="blue-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">(Empfehlung und) Rückfragen</div>
          <div>Da das ISOBAR-Schema universell entwickelt wurde, kann man hier eine eigene Empfehlung formulieren, im Klinikkontext macht aber die explizite Rückfrage nach offenen Fragen mehr Sinn.</div>
          <v-divider class="my-2"></v-divider>
          <q>... Noch Fragen?</q>
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
    name: "SchemeISOBAR",
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
        return this.$store.getters.getContentMeta("scheme-isobar");
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
