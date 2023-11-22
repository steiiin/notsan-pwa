<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "20.11.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Metabolische Azidose (V.a. nach Reanimation)</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>Natriumhydrogencarbonat ist eine schwache Lauge und somit in der Lage, Säuren zu neutralisieren.</p>
      <p>Infolge eines Kreislaufversagens kommt es aufgrund der anaeroben Stoffwechsellage zur Anhäufung von Stoffwechselprodukten, wie zum Beispiel Milchsäure.</p>
      <p>Der pH-Wert im Blut sinkt - eine Azidose. Durch die Gabe von NaBi (nach dem Trivialnamen NatriumBiCarbonat) werden die sauren Metabolite unter Abgabe von CO<sub>2</sub> und Wasser neutralisiert (<b>Pufferung</b>).</p>  
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="infusion">1 Durchstechflasche NaBi</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '100mmol', per: '100ml' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>Anwendung</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Dosierung</div>
            <nos-med-dose :items="[
              { unit: '1ml', per: 'kg', color: 'adult' }]">
            </nos-med-dose>
            <v-divider class="my-2"></v-divider>
            <div>Langsam spritzen.</div>
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
  name: "NaMedNahycarb",
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
      return this.$store.getters.getContentMeta("na-med-nahycarb");
    },
  },
  methods: {},
};
</script>