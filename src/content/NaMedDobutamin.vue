<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "20.11.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Kreislaufunterstützung im kardiogenen Schock</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:heading></template>
    <template v-slot:text>
      <p>
        Stimuliert hauptsächlich β1-Adrenorezeptoren im Herzen, was die Kontraktilität und Herzfrequenz erhöht.
      </p>
      <p>
        Verwendet bei Herzinsuffizienz und kardiogenem Schock, da es die Herzleistung verbessert, ohne den peripheren Widerstand signifikant zu erhöhen. Ideal für Patienten, die eine verbesserte Herzpumpleistung benötigen, ohne den Blutdruck wesentlich zu steigern.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle Dobutamin</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '250mg' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Dosierung</div>
          <div>
            <span class="nos-mono">2,5µg - 10µg / kg / min</span>
          </div>
        </p>
        <p>
          <div class="nos-u">Perfusor</div>
          <div>
            <span class="nos-mono">250mg</span> Dobutamin auf <span class="nos-mono">50ml = 5mg / ml</span>
          </div>
          <div>
            <span class="nos-mono">1µg/min = <b>0,012ml/h</b></span>
          </div>
        </p>
        <p>
          <div>
            <span class="nos-mono">500mg</span> Noradrenalin auf <span class="nos-mono">50ml = 10mg / ml</span>
          </div>
          <div>
            <span class="nos-mono">1µg/min = <b>0,006ml/h</b></span>
          </div>
        </p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>sofort</template>
    <template v-slot:span>~3h</template>
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
  name: "NaMedDobutamin",
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
      return this.$store.getters.getContentMeta("na-med-dobutamin");
    },
  },
  methods: {},
};
</script>