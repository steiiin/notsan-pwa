<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Kreislaufunterstützung im Schock / ROSC</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Stimuliert vorrangig α-Adrenorezeptoren in der glatten Gefäßmuskulatur, was den systemischen vaskulären Widerstand erhöht und den Blutdruck steigert.
      </p>
      <p>
        Hauptsächlich verwendet bei septischem Schock und anderen Formen von hypotensiven Zuständen, wo eine Erhöhung des Blutdrucks erforderlich ist. Noradrenalin ist effektiv bei Patienten, die eine Vasokonstriktion benötigen, um den Blutdruck zu stabilisieren.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle &bdquo;Arterenol&rdquo;</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '1mg', per: '1ml' }]"></nos-med-dose>
        <nos-med-label class="mt-2" type="infusion">1 Durchstechflasche &bdquo;Arterenol&rdquo;</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '25mg', per: '25ml' }]"></nos-med-dose>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>Anwendung</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Dosierung</div>
          <div>
            <span class="nos-mono">0,01µg - 1µg / kg / min</span>
          </div>
        </p>
        <p>
          <div class="nos-u">Perfusor</div>
          <div>
            <span class="nos-mono">1mg</span> Noradrenalin auf <span class="nos-mono">50ml = 20µg / ml</span>
          </div>
          <div>
            <span class="nos-mono">1µg/min = <b>3ml/h</b></span>
          </div>
        </p>
        <p>
          <div>
            <span class="nos-mono">5mg</span> Noradrenalin auf <span class="nos-mono">50ml = 100µg / ml</span>
          </div>
          <div>
            <span class="nos-mono">1µg/min = <b>0,6ml/h</b></span>
          </div>
        </p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>sofort</template>
    <template v-slot:span>~3min</template>
  </nos-med-effects>

  
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
  name: "NaMedNoradrenalin",
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
    NosMedEffects
  },
  computed: {
    meta() {
      return this.$store.getters.getContentMeta("na-med-noradrenalin");
    },
  },
  methods: {},
};
</script>