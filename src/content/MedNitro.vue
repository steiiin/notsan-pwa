<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Akutes Koronarsyndrom</nos-li-point>
    <nos-li-point>Kardiales Lungenödem</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list-ci type="intolerable">
    <nos-li-point>Unverträglichkeit ggb. Nitraten</nos-li-point>
    <nos-li-point>Gleichzeitige Einnahme von PDE-5-Hemmern, z.B.:</nos-li-point>
    <nos-li-point class="nos-li-decent"
      >Sildenafil (24h): Viagra, Silde, Sildaristo</nos-li-point
    >
    <nos-li-point class="nos-li-decent"
      >Vardenafil (24h): Levitra, Vardenaristo, Vardegn</nos-li-point
    >
    <nos-li-point class="nos-li-decent"
      >Tadalafil (72h): Cialis, Tadagis, Adcirca, Tadal</nos-li-point
    >
  </nos-list-ci>
  <nos-list-ci type="acute">
    <nos-li-point>ST-Streckenhebung in II, III oder aVF</nos-li-point>
    <nos-li-point
      >Schock (insb. Herzfrequenz &gt; 120min<sup>-1</sup> / RR<sub>syst.</sub> &le;
      120mmHg)</nos-li-point
    >
    <nos-li-point>Verdacht auf Hirnblutung</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="known">
    <nos-li-point>Schwere Herzklappenstenose</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="family">
    <nos-li-point>Schwangerschaft</nos-li-point>
    <nos-li-point>Stillzeit</nos-li-point>
    <nos-li-point>Kinder &lt; 12 Jahre (durch SAA untersagt)</nos-li-point>
  </nos-list-ci>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-cave>Starker Blutdruckabfall (Synkope mgl.)</nos-li-cave>
  </nos-list>
  <nos-list>
    <nos-li-point>Tachykardie</nos-li-point>
    <nos-li-point>Kopfschmerzen</nos-li-point>
    <nos-li-point>Schwindel</nos-li-point>
  </nos-list>
  <nos-list>
    <nos-li-todo>Flach- ggf. Schocklagerung</nos-li-todo>
    <nos-li-todo>Volumengabe</nos-li-todo>
    <nos-li-todo>Abwarten: Nach ca. 5min Besserung</nos-li-todo>
  </nos-list>
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-spray">1 Pumpspray</nos-content>
        <nos-content mode="med-size-mono">0,4mg / Hub</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="ACS &amp;Kardiales Lungenödem" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p class="nos-u">Vor Anwendung ist ein sicherer i.v.-Zugang anzulegen</p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(s.l.)-Dosis</template>
      <template v-slot:content>
        <nos-dose
          :items="[{ label: 'Ab 12J', unit: '1 Hub', color: 'adult' }]"
        ></nos-dose>
        <v-divider class="my-2"></v-divider>
        <p>Sublinguale Anwendung. Spray zuvor Nicht schütteln.</p>
        <p class="nos-u">Einmalige Repetition nach 5min möglich</p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~1min</template>
    <template v-slot:span>~5min</template>
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header>Das Nitrat bewirkt eine Gefäßweitung.</template>
    <p>
      Blutgefäße werden einerseits zentral (hormonell &amp;vegetatives NS) reguliert.
      Anderseits durch sich selbst (Autoregulation) bei Kälte, Verletzungen,
      Sauerstoffmangel, usw.
    </p>
    <p>
      Nitroglycerin zerfällt im Körper und setzt dabei Stickstoffmonoxid frei.
      Stickstoffmonoxid wirkt auf glatte Muskelzellen entspannend (dilatierend). Durch die
      Wirkung auf die glatten Muskelzellen in den Wänden der Blutgefäße wirkt es
      gefäßerweiternd. Die Wirkung ist besonders stark in großen Venen und großen Arterien
      und weniger ausgeprägt in Widerstandsgefäßen.
    </p>
    <p>
      Durch die Erweiterung der Venen wird der Füllungsdruck des Herzens (Vorlast)
      verringert, durch die Erweiterung der großen Arterien steigt deren Compliance, der
      Blutdruck sinkt, und damit der Druck, gegen den das Herz das Blut auswerfen muss
      (Nachlast). Beides führt dazu, dass das Herz weniger stark arbeiten muss und weniger
      Sauerstoff verbraucht.
    </p>
  </nos-card>
</template>

<script>
import NosTitle from "../components/NosTitle.vue";
import NosHeader from "../components/NosHeader.vue";
import NosCard from "../components/NosCard.vue";
import NosList from "../components/NosList.vue";
import NosListCi from "../components/NosListCi.vue";
import NosLiNone from "../components/NosLiNone.vue";
import NosLiPoint from "../components/NosLiPoint.vue";
import NosLiCheck from "../components/NosLiCheck.vue";
import NosLiCave from "../components/NosLiCave.vue";
import NosLiTodo from "../components/NosLiTodo.vue";
import NosTable from "../components/NosTable.vue";
import NosTabRow from "../components/NosTabRow.vue";
import NosContent from "../components/NosContent.vue";
import NosDose from "../components/NosDose.vue";
import NosPharmakin from "../components/NosPharmakin.vue";

export default {
  name: "MedNitro",
  components: {
    NosTitle,
    NosHeader,
    NosCard,
    NosList,
    NosListCi,
    NosLiNone,
    NosLiPoint,
    NosLiCheck,
    NosLiCave,
    NosLiTodo,
    NosTable,
    NosTabRow,
    NosContent,
    NosDose,
    NosPharmakin,
  },
  computed: {
    meta() {
      return this.$store.getters.getContentMeta("med-nitro");
    },
  },
  methods: {},
};
</script>
