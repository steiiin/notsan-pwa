<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Unspezifische Kreislaufunterstützung</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:heading></template>
    <template v-slot:text>
      <p>
        Akrinor wirkt hauptsächlich auf β-Adrenorezeptoren und in geringerem Maße auf α-Adrenorezeptoren. Es steigert die Herzleistung und bewirkt eine mäßige Vasokonstriktion.
      </p>
      <p>
        Primär eingesetzt bei Hypotonie und Kreislaufstörungen. Es erhöht den Blutdruck und das Herzminutenvolumen, ohne die Herzfrequenz stark zu beeinflussen.
      </p>
      <p>
        Akrinor ist besonders nützlich in Situationen, in denen ein schneller und kontrollierter Anstieg des Blutdrucks erforderlich ist, ohne eine ausgeprägte Tachykardie zu verursachen.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle &bdquo;Akrinor&rdquo;</nos-med-label>
        <div>
          <span class="nos-mono">&nbsp;200mg</span> Cafedrin<br />
          <span class="nos-mono">+10mg</span> Theodrenalin
        </div>
        <div class="nos-mono">&nbsp;2ml Ampulle</div>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>Anwendung</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Fraktioniert nach Wirkung</div>
          <div>Ampulle auf <span class="nos-mono">10ml</span> aufziehen.</div>
          <div>Initial <span class="nos-mono"><b>2ml</b></span></div>
          <div>Alle 60s repetieren.</div>
        </p>
        <p>
          <div class="nos-u">Intramuskuläre Gabe</div>
          <div><span class="nos-mono"><b>2ml</b> (1 Ampulle)</span> i.m.</div>
        </p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~5min</template>
    <template v-slot:span>~1h</template>
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
  name: "NaMedAkrinor",
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
      return this.$store.getters.getContentMeta("na-med-akrinor");
    },
  },
  methods: {},
};
</script>