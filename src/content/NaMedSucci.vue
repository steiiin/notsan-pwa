<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "11.12.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Muskelrelaxation zur Crash-Intubation</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Lysthenon ist ein depolarisierendes Muskelrelaxans. Es ahmt die Wirkung des Neurotransmitters Acetylcholin nach, indem es an die Acetylcholinrezeptoren an der motorischen Endplatte der Muskeln bindet. Diese Bindung führt zu einer anhaltenden Depolarisation der Muskelzellmembran. Im Gegensatz zu Acetylcholin wird Lysthenon nicht schnell abgebaut, wodurch die Depolarisation länger anhält. Dies führt zu einer vorübergehenden Muskellähmung, da die Muskeln nicht mehr auf weitere Nervenimpulse reagieren können.
      </p>
      <p>
        Nach der anfänglichen Depolarisation tritt eine Phase der Repolarisation ein, während der die Muskeln nicht erregbar sind. Das ist die Phase, in der die Muskelentspannung für medizinische Eingriffe genutzt wird. Nach einigen Minuten wird Lysthenon von Enzymen im Blutserum abgebaut, was die Repolarisation der Muskelzellen ermöglicht und die Muskeln wieder auf Nervenimpulse reagieren können.
      </p>
      <p>
        Lysthenon ist effektiv für die kurzzeitige Muskelentspannung und wird hauptsächlich verwendet, um Intubationsvorgänge zu erleichtern. Seine schnelle Wirkung und kurze Wirkdauer machen es zu einem wichtigen Medikament in der Anästhesie.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle &bdquo;Lysthenon 2%&rdquo;</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '100mg', per: '5ml' },
          { unit: '20mg', per: ' ml' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Dosierung</div>
          <nos-med-dose :items="[
            { unit: '10mg (0,5ml)', per: '10kg', color: 'adult' },
          ]"></nos-med-dose>
        </p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~30s</template>
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
  name: "NaMedSucci",
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
      return this.$store.getters.getContentMeta("na-med-succi");
    },
  },
  methods: {},
};
</script>