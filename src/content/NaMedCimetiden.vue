<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "11.12.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Magen-Darm-Beschwerden bei Anaphylaxie</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Cimetidin wirkt, indem es die H2-Rezeptoren im Magen blockiert. Diese Rezeptoren spielen eine Rolle bei der Steuerung der Produktion von Magensäure.
      </p>
      <p>
        Durch die Blockierung dieser Rezeptoren reduziert Cimetidin die Menge und die Säure des Magensafts, was hilft, Magen-Darm-Beschwerden zu lindern.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="iv">1 Ampulle Cimetiden</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '200mg', per: '2ml' },
          { unit: '100mg', per: ' ml' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>Dosis</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">i.v. / i.m.-Gabe möglich</div>
          <nos-med-dose :items="[
            { unit: '50mg', per: '10kg', color: 'adult' },
            { unit: '0,5ml', per: '10kg', color: 'adult' },
          ]"></nos-med-dose>
          <div>Gabe nur über Kurzinfusion.</div>
        </p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~30min</template>
    <template v-slot:span>~6h</template>
  </nos-med-effects>
  
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
  name: "NaMedCimetiden",
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
      return this.$store.getters.getContentMeta("na-med-cimetiden");
    },
  },
  methods: {},
};
</script>