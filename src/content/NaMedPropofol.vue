<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "20.11.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Narkose</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Propofol ist ein intravenöses Anästhetikum in Form einer Fettemulsion.
      </p>
      <p>
        Als Vorteile gegenüber anderen Anästhetika werden ein angenehmes Einschlafen und Aufwachen, sowie nur geringe Übelkeit nach der Narkose beschrieben. 
      </p>
      <p>
        Propofol induziert Alpha-Wellen (8 bis 12 Hz) im frontalen Kortex. Dies verhindert die Kommunikation zwischen Kortex und Thalamus im Sinne eines "lauten Grundrauschens" statt einer differenzierten Kommunikation zwischen den beiden Arealen. 
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle Propofol 1%</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '500mg', per: '50ml' },
          { unit: '10mg', per: '  ml'}]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <p>
          <nos-med-dose :items="[
            { label: 'Erwachsene', unit: '2ml', per: '10s', color: 'adult' }
          ]"></nos-med-dose>
          <div>Repetition bis Narkosetiefe erreicht.</div>
        </p>
        <p>
          <nos-med-dose :items="[
            { label: 'Kinder', unit: '1ml', per: '10kg', color: 'child' }
          ]"></nos-med-dose>
          <div>Meist geringere Dosen, als beim Erwachsenen nötig</div>
        </p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>Innerhalb weniger Sekunden</template>
    <template v-slot:span>~10min</template>
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
  name: "NaMedPropofol",
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
      return this.$store.getters.getContentMeta("na-med-propofol");
    },
  },
  methods: {},
};
</script>