<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Kardiales Lungenödem</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list-ci type="intolerable">
    <nos-li-point>
      Unverträglichkeit ggb. Furosemid &amp; andere Schleifendiuretika
    </nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="acute">
    <nos-li-point>RR<sub>syst.</sub> &lt; 120mmHg</nos-li-point>
    <nos-li-point>Exsikkose</nos-li-point>
    <nos-li-point>Akutes Leberversagen (Ikterus, Azetongeruch)</nos-li-point>
    <nos-li-point>Akutes Nierenversagen (Harnverhalt, Ödeme, Müdigkeit)</nos-li-point>
    <nos-li-point>Harnableitungsstörung</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="family">
    <nos-li-point>Schwangerschaft</nos-li-point>
    <nos-li-point>Stillzeit</nos-li-point>
    <nos-li-point>Kinder &lt; 12 Jahre (durch SAA untersagt)</nos-li-point>
  </nos-list-ci>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-cave>Blutdruckabfall</nos-li-cave>
  </nos-list>
  <nos-list>
    <nos-li-point>Kopfschmerzen, Schwindel</nos-li-point>
    <nos-li-point>Ohrengeräusche, wenn zu schnell appliziert</nos-li-point>
    <nos-li-point>Hypovolämie</nos-li-point>
    <nos-li-point>Elektrolytverschiebung</nos-li-point>
  </nos-list>
  <nos-list>
    <nos-li-todo> Blutdruckabfall: flachere Lagerung </nos-li-todo>
  </nos-list>
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-ampul">1 Ampulle Furosemid</nos-content>
        <nos-content mode="med-size-mono">20mg</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Kardiales Lungenödem" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-dose
          :items="[{ label: 'Ab 12J', unit: '20mg (1 Ampulle)', color: 'adult' }]"
        ></nos-dose>
        <v-divider class="my-2"></v-divider>
        <p>Langsam spritzen.</p>
        <p class="nos-u">Einmalige Repetition nach 15min möglich</p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~2-15min</template>
    <template v-slot:span>~2h</template>
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header>
      Starkes, kurz und schnell wirkendes Schleifendiuretikum.
    </template>
    <p>
      Es wirkt im aufsteigenden Teil der Henle-Schleife und blockiert dort den
      Na+/2Cl-/K+-Ionen-Carrier und damit die Rückresorption dieser Ionen. Durch die
      fehlende Rückresorption wird mehr Natrium ausgeschieden, welches durch den
      osmotischen Druck Wasser bindet. Hierdurch steigt die Menge an Harn und es werden
      vermehrt Elektrolyte und Wasser ausgeschieden.
    </p>
    <p>
      Bei einer Herzinsuffizienz führt Furosemid zu einer Senkung der Vorlast durch
      Erweiterung der venösen Kapazitäten. Es wirkt blutdrucksenkend infolge einer
      gesteigerten Natriumchlorid-Ausscheidung und einer verminderten Ansprechbarkeit der
      glatten Gefäßmuskulatur auf vasokonstriktorische Reize infolge einer
      Blutvolumenabnahme. Der Einsatz im Rahmen des hypertensiven Notfalls ist möglich, im
      Rettungsdienst jedoch unüblich.
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
  name: "MedFurosemid",
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
      return this.$store.getters.getContentMeta("med-furosemid");
    },
  },
  methods: {},
};
</script>
