<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>

  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Hypoxämie</nos-li>
    <nos-li>CO-Intoxikation</nos-li>
    <nos-li>Tauchunfall / Dekompressionskrankheit</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list contragroup="intolerable">
    <nos-li variant="check">Keine</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li>Hyperoxie</nos-li>
    <nos-li>Koronare / Cerebrale Vasokonstriktion</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-header title="Hypoxie" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Zielwert</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Ohne Hyperkapnierisiko</div>
          <nos-med-dose :items="[{ unit: '92-96%', color: 'young' }]"></nos-med-dose>
        </p>
        <p>
          <div class="nos-u">Mit Hyperkapnierisiko</div>
          <nos-med-dose :items="[{ unit: '88-92%', color: 'adult' }]"></nos-med-dose>
        </p>
        <v-divider class="my-2"></v-divider>
        <p>
          <div class="nos-u">Hyperkapnierisiko: z.B.</div>
          <div>COPD, Mukoviszidose, Extreme Fettleibigkeit, Neuromuskuläre Erkrankungen, Thoraxfehlbildungen</div>
        </p>
        <p>
          <i>Beatmete Patienten sind trotzdem im Normalen Bereich <b>(Ohne Hyperkapnierisiko)</b> zu behandeln.</i>
        </p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="CO-Intoxikation / Tauchunfall / Schwere Atemnot" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Zielwert</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Kein Zielwert</div>
          <div>Hochdosierte Sauerstoffgabe</div>
        </p>
      </template>
    </nos-tab-row>
  </nos-table>

</template>

<script>
  import NosTitle from "../components/NosTitle.vue";
  import NosHeader from "../components/NosHeader.vue";
  import NosParagraphs from "../components/NosParagraphs.vue";
  import NosList from "../components/NosList.vue";
  import NosLi from "../components/NosLi.vue";
  import NosTable from "../components/NosTable.vue";
  import NosTabRow from "../components/NosTabRow.vue";
  import NosMedLabel from "../components/NosMedLabel.vue";
  import NosMedDose from "../components/NosMedDose.vue";
  import NosMedEffects from "../components/NosMedEffects.vue";

  export default {
    name: "MedVomex",
    components: {
      NosTitle,
      NosHeader,
      NosParagraphs,
      NosList,
      NosLi,
      NosTable,
      NosTabRow,
      NosMedLabel,
      NosMedDose,
      NosMedEffects,
    },
    computed: {
      meta() {
        return this.$store.getters.getContentMeta("med-sauerstoff");
      },
    },
    methods: {},
  };
</script>
