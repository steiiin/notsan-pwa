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
        Natriumthiosulfat wirkt, indem es mit Cyanid zu Thiozyanat reagiert, einer weniger toxischen Verbindung, die vom Körper leichter ausgeschieden werden kann. 
      </p>
      <p>
        Die Wirkung von Natriumthiosulfat tritt nicht sofort ein. Es dauert einige Zeit, bis sich ausreichend Thiozyanat gebildet hat und die Cyanidtoxizität reduziert wird. Daher wird Natriumthiosulfat oft als zweiter Schritt nach der Verabreichung eines schneller wirkenden Antidots wie 4-DMAP eingesetzt.
      </p>
      <p>
        <b>4-DMAP</b> wirkt schnell, indem es Methämoglobin bildet, das Cyanidionen bindet. <br/>
        <b>Natriumthiosulfat</b> bietet eine längerfristige Lösung, indem es Cyanid in eine weniger toxische Form umwandelt. 
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="iv">1 Ampulle &bdquo;Natriumthiosulfat 10%&rdquo;</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '1g', per: '10ml' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Dosierung</div>
          <nos-med-dose :items="[
            { unit: '1ml', per: 'kg', color: 'adult' },
          ]"></nos-med-dose>
        </p>
        <p>
          <div class="nos-u">Immer zuerst <b>4-DMAP</b> anwenden.</div>
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
  name: "NaMedNathiosulfat",
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
      return this.$store.getters.getContentMeta("na-med-nathiosulfat");
    },
  },
  methods: {},
};
</script>