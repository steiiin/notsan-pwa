<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "20.11.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Thrombolytische Therapie</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Metalyse gehört zu einer Gruppe von Arzneimitteln, die als
        Thrombolytika bezeichnet werden. Diese Arzneimittel sind in der
        Lage, Blutgerinnsel aufzulösen. Tenecteplase ist ein rekombi-
        nanter fibrinspezifischer Plasminogen-Aktivator.
      </p>
      <p>
        Metalyse wird zur Behandlung von Herzinfarkten (innerhalb von
        6 Stunden nach Symptombeginn) angewendet und dient zur
        Auflösung von Blutgerinnseln, die sich in den Blutgefäßen des
        Herzens gebildet haben.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="infusion">Durchstechflasche &bdquo;Metalyse&rdquo;</nos-med-label>
        <nos-med-label type="nadel">+ Fertigspritze (Wasser)</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '10.000U (5mg)' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Dosierung</div>
          <nos-med-dose :decent="true" :items="[{ unit: '1ml', per: '10kg', color: 'adult' }]"></nos-med-dose>
          <v-divider class="my-2"></v-divider>
          <div>Maximum:<span class="nos-mono">&nbsp;50mg (1 Spritze)</span></div>
        </p>
      </template>
    </nos-row-caption>
  </nos-table>

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
  name: "NaMedMetalyse",
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
    NosMedEffects
  },
  computed: {
    meta() {
      return this.$store.getters.getContentMeta("na-med-metalyse");
    },
  },
  methods: {},
};
</script>