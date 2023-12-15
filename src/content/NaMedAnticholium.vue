<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "11.12.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Antidot für: </nos-li>
    <nos-li :decent="true">Alkohol</nos-li>
    <nos-li :decent="true">Atropin (Tollkirsche, Stechapfel)</nos-li>
    <nos-li :decent="true">Antidepressiva, Neuroleptika</nos-li>
    <nos-li :decent="true">KO-Tropfen</nos-li>
    <nos-li :decent="true">Ketamin</nos-li>
    <nos-li :decent="true">Muskelrelaxanzien</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Anticholium wirkt, indem es die Aktivität des Enzyms Acetylcholinesterase hemmt. Dieses Enzym ist normalerweise dafür verantwortlich, den Neurotransmitter Acetylcholin abzubauen.
      </p>
      <p>
        Indem die Aktivität dieses Enzyms reduziert wird, erhöht es die Menge an Acetylcholin, das an den Synapsen im Nervensystem verfügbar ist. Dies führt dazu, dass die Acetylcholinrezeptoren länger und intensiver stimuliert werden.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="iv">1 Durchstechflasche &bdquo;Esmeron&rdquo;</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '2mg', per: '5ml' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Dosierung</div>
          <nos-med-dose :items="[
            { label: '> 50kg', unit: '2mg (1 Ampulle)', color: 'adult' },
            { label: '< 50kg', unit: '1ml', per: '5min', color: 'child' },
          ]"></nos-med-dose>
        </p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~10min</template>
    <template v-slot:span>~45min</template>
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
  name: "NaMedAnticholium",
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
      return this.$store.getters.getContentMeta("na-med-anticholium");
    },
  },
  methods: {},
};
</script>