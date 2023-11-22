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
        Das ATMIST-Schema erleichtert die strukturierte Übergabe von Traumapatienten im Schockraum.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Schema"></nos-header>
  <nos-table>
    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="A" meaning="Age" color="red-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Alter &amp; Name</div>
          <div>Als erste wichtige Information werden Alter und Name genannt; zum einen werden Verwechslungen vermieden und auch weitere Verfahrensweise eingegrenzt (z.B. geriatrische Patienten, Kinder).</div>
          <v-divider class="my-2"></v-divider>
          <q>Frau Walter, 27 Jahre alt, ...</q>
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
          <div class="nos-u">Zeitpunkt des Unfalls</div>
          <div>Als nächstes wird die eigentliche Unfallbeschreibung aber mit dem genauen Unfallzeitpunkt eingeleitet.</div>
          <div>Gerade beim Trauma entscheidet die Zeit bis zur Therapie über das Outcome und hilft während der Übergabe die weitere Behandlung zu planen.</div>
          <v-divider class="my-2"></v-divider>
          <q>... ist vor einer halben Stunde, gegen 12:00 Uhr ...</q>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="M" meaning="Mechanism" color="red-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Angaben zum Unfallablauf</div>
          <div>Hier folgt eine KURZE Beschreibung des Unfalls, insbesondere die Mechanismen, die zu den Verletzungen des Patienten geführt haben.</div>
        </p>
        <p>
          <div>Bei einem Schockraumpatienten sollte hier die Schockraumanmeldung begründet werden.</div>
          <v-divider class="my-2"></v-divider>
          <q>... auf dem Fahrrad unterwegs, dabei von einem abbiegendem PKW frontal erfasst worden, gegen die Frontscheibe geschleudert und danach am Boden liegen geblieben. Der PKW fuhr ca. 40km/h. ...</q>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="I" meaning="Injuries" color="red-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Verletzungen</div>
          <div>Im Rahmen der Versorgung an der Einsatzstelle festgestellte Verletzungen, werden hier kurz beschrieben. Idealerweise geschieht dies von Kopf bis Fuß.</div>
        </p>
        <p>
          <div>Am Besten werden die Verletzungen aufgezählt, denn primär soll hier ein Eindruck des Gesamtzustandes entstehen und verhindert werden, dass der Patient <i>falsch</i> angefasst wird.</div>
          <v-divider class="my-2"></v-divider>
          <q>... Festgestellt wurden eine Kopfplatzwunde, Blut aus den Ohren; Nacken- und Rückenschmerzen; Schmerzen linkes Handgelenk und Fehlstellung Sprunggelenk links ...</q>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="S" meaning="Signs" color="red-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Untersuchungsbefunde &amp; Symptome</div>
          <div>Hier wird anhand des ABCDE-Schemas kurz ein Überblick über die Erstuntersuchung gegeben, bzw. auf Anzeichen oder Veränderungen bei der Behandlung hingewiesen.</div>
          <v-divider class="my-2"></v-divider>
          <q>
            ... Kein A- oder B-Problem, Haut blass und kalt, Blutdruck systolisch 100, Tachykard mit 110/min; <br/>
            Frau Walter war initial bewusstlos, bei unserem Eintreffen wach, allerdings verlangsamt und desorientiert.<br/> 
            Inzwischen zumindest situativ orientiert, keine neurol. Ausfälle. ...
          </q>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="T" meaning="Threatment" color="red-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Angaben zur Behandlung</div>
          <div>Hier folgt schlussendlich die Beschreibung der Behandlung vor Ort und etwaige Änderungen des Zustandes während des Transports.</div>
        </p>
        <p>
          <div>Sollte eine relevante Vorgeschichte (z.B. Blutverdünnereinnahme, Drogen, Allergien) bestehen, sollte das hier zum Schluss erwähnt werden.</div>
          <div>Auch können hier weitere die Behandlung betreffende Infos gegeben werden, z.B. Dolmetscher, oder alte Unfälle.</div>
          <v-divider class="my-2"></v-divider>
          <q>
            ... Aufgrund der Unfallmechanik immobilisierten wir die Patientin zusammen mit Beckenschlinge, legten einen großlumige Zugang und forderten den Notarzt nach - der allerdings nicht verfügbar war.<br/>
            Relevant hier noch die Einnahme von Xarelto und eine Hüft-TEP links vor zwei Jahren.
          </q>
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
    name: "SchemeATMIST",
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
        return this.$store.getters.getContentMeta("scheme-atmist");
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
