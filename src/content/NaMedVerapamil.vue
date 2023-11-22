<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "20.11.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Paroxysmale Supraventrikuläre Tachykardie</nos-li>
    <nos-li>VHF mit schneller AV-Überleitung (cave: WPW!)</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>Verapamil, ein Kalziumkanalblocker, wirkt, indem es Kalziumkanäle in der Herzmuskulatur und den Blutgefäßen blockiert. Diese Blockade verringert die Stärke der Herzkontraktionen und fördert die Erweiterung der Blutgefäße.</p>
      <p>Durch die Reduzierung des Kalziumeinstroms in die Herzmuskelzellen verlangsamt Verapamil die Herzfrequenz und senkt den Blutdruck, was zu einer geringeren Belastung des Herzens führt.</p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle Verapamil</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '5mg', per: '2ml' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>Anwendung</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Dosierung</div>
            <nos-med-dose :items="[
              { label: 'Ab 14 Jahren', unit: '5mg (1 Ampulle)', color: 'adult' },
              { label: 'Kind (1-14)', unit: '2,5mg (½ Ampulle)', color: 'child' }]">
            </nos-med-dose>
            <v-divider class="my-2"></v-divider>
            <div>Langsam über 2min spritzen.</div>
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
  name: "NaMedVerapamil",
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
      return this.$store.getters.getContentMeta("na-med-verapamil");
    },
  },
  methods: {},
};
</script>