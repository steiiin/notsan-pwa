<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "12.12.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Tokolyse bei: </nos-li>
    <nos-li :decent="true">Medikamenteninduzierten Wehen</nos-li>
    <nos-li :decent="true">Nabelschnurvorfall</nos-li>
    <nos-li :decent="true">drohende Uterusruptur</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Fenoterol gehört zur Gruppe der Beta-2-Sympathomimetika. Es wirkt, indem es die Beta-2-Rezeptoren in der glatten Muskulatur des Uterus stimuliert.
      </p>
      <p>
        Diese Stimulation führt zu einer Entspannung der Uterusmuskulatur, was wiederum die Wehen hemmt oder vermindert. Durch die Unterdrückung der Wehen kann Fenoterol dabei helfen, die Geburt hinauszuzögern.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle &bdquo;Partusisten&rdquo;</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '25µg', per: '1ml' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Vorbereitung</div>
          <div>Auf <span class="nos-mono">5ml</span> aufziehen.</div>
        </p>
        <p>
          <div class="nos-u">Dosierung</div>
          <nos-med-dose :items="[
            { unit: '25µg (1 Ampulle)', color: 'adult' },
          ]"></nos-med-dose>
          <div>Über <b>3min</b> applizieren. Nicht zu schnell.</div>
        </p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~3min</template>
    <template v-slot:span>~2h</template>
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
  name: "NaMedFenoterol",
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
      return this.$store.getters.getContentMeta("na-med-fenoterol");
    },
  },
  methods: {},
};
</script>