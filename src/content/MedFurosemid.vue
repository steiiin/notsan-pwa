<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Kardiales Lungenödem</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list contragroup="intolerable">
    <nos-li> Unverträglichkeit ggb. Furosemid &amp; andere Schleifendiuretika </nos-li>
  </nos-list>
  <nos-list contragroup="acute">
    <nos-li>RR<sub>syst.</sub> &lt; 120mmHg</nos-li>
    <nos-li>Ausgeprägte Exsikkose</nos-li>
    <nos-li>Akutes Leberversagen (Ikterus, Azetongeruch)</nos-li>
    <nos-li>Akutes Nierenversagen (Harnverhalt, Ödeme, Müdigkeit)</nos-li>
    <nos-li>Harnableitungsstörung</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Schwangerschaft</nos-li>
    <nos-li>Stillzeit</nos-li>
    <nos-li>Kinder &lt; 12 Jahre (durch SAA untersagt)</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li variant="cave">Blutdruckabfall</nos-li>
    <nos-li>Kopfschmerzen, Schwindel</nos-li>
    <nos-li variant="todo">Flachere Lagerung</nos-li>
  </nos-list>
  <nos-list>
    <nos-li>Ohrengeräusche, wenn zu schnell appliziert</nos-li>
    <nos-li>Hypovolämie</nos-li>
    <nos-li>Elektrolytverschiebung</nos-li>
  </nos-list>
  
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle Furosemid</nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '20mg', per: '2ml' }]"
        ></nos-med-dose>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Kardiales Lungenödem" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-med-dose
          :items="[{ label: 'Ab 12J', unit: '20mg (1 Ampulle)', color: 'adult' }]"
        ></nos-med-dose>
        <v-divider class="my-2"></v-divider>
        <p>Langsam spritzen.</p>
        <p class="nos-u">Einmalige Repetition nach 15min möglich</p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~2-15min</template>
    <template v-slot:span>~2h</template>
  </nos-med-effects>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs>
    <template v-slot:heading>
      Starkes, kurz und schnell wirkendes Schleifendiuretikum.
    </template>
    <template v-slot:text>
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
        gesteigerten Natriumchlorid-Ausscheidung und einer verminderten Ansprechbarkeit
        der glatten Gefäßmuskulatur auf vasokonstriktorische Reize infolge einer
        Blutvolumenabnahme. Der Einsatz im Rahmen des hypertensiven Notfalls ist möglich,
        im Rettungsdienst jedoch unüblich.
      </p>
    </template>
  </nos-paragraphs>
</template>

<script>
import NosTitle from "../components/NosTitle.vue";
import NosHeader from "../components/NosHeader.vue";
import NosParagraphs from "../components/NosParagraphs.vue";
import NosList from "../components/NosList.vue";
import NosLi from "../components/NosLi.vue";
import NosTable from "../components/NosTable.vue";
import NosRowCaption from "../components/NosRowCaption.vue";
import NosMedLabel from "../components/NosMedLabel.vue";
import NosMedDose from "../components/NosMedDose.vue";
import NosMedEffects from "../components/NosMedEffects.vue";

export default {
  name: "MedFurosemid",
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosList,
    NosLi,
    NosTable,
    NosRowCaption,
    NosMedLabel,
    NosMedDose,
    NosMedEffects,
  },
  computed: {
    meta() {
      return this.$store.getters.getContentMeta("med-furosemid");
    },
  },
  methods: {},
};
</script>
