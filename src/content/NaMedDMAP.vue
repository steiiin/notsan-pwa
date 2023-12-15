<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "11.12.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Antidot für Cyanid-Vergiftung</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Innerhalb der Zellen entfaltet die Blausäure ihre Wirkung in der Atmungskette der Mitochondrien. Die höhere Bindungsaffinität der Blausäure im Vergleich mit Sauerstoff verhindert eine weitere Sauerstoffbindung und führt zur Blockade der Atmungskette.
      </p>
      <p>
        Der Tod durch "inneres Ersticken" tritt innerhalb weniger Minuten ein. 
      </p>
      <p>
        4-DMAP wirkt, indem es einen Teil des Hämoglobins im Blut in Methämoglobin umwandelt. Durch das Methämoglobin wird Cyanid von der mitochondrialen Atmung abgelenkt und gebunden, wodurch die zelluläre Atmungskette wieder funktionieren kann.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="iv">1 Ampulle &bdquo;Anexate&rdquo;</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '250mg', per: '5ml' },
          { unit: '50mg', per: ' ml' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Dosierung</div>
          <nos-med-dose :items="[
            { label: 'Erwachsene', unit: '250mg', color: 'adult' },
            { label: 'Kinder', unit: '25mg (0,5ml)', per: '10kg', color: 'child' },
          ]"></nos-med-dose>
        </p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>Sofort</template>
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
  name: "NaMedDMAP",
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
      return this.$store.getters.getContentMeta("na-med-dmap");
    },
  },
  methods: {},
};
</script>