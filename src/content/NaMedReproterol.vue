<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "20.11.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Bronchospastischer Anfall / Status Asthmaticus</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Reproterol wirkt vorwiegend an den β2-Rezeptoren der Lunge und führt dort zu einer Erschlaffung der glatten Muskulatur der Bronchien / Bronchiolen und somit zur Bronchodilatation & Bronchospasmolyse. Es fördert die Flimmerbewegung des Flimmerepithels und sorgt für einen leichteren Schleimauswurf. Zudem hemmt es die Freisetzung von Entzündungsmediatoren aus den Mastzellen, wirkt also mastzellstabilisierend.
      </p>
      <p>
        Bei hoher Dosierung kommt es zur Anregung der β2-Rezeptoren in der Gebärmutter, die dortige Muskulatur erschlafft und es kommt zur Wehenhemmung (Tokolyse). Bei den o.g. Indikationen ist dies als unerwünschte Nebenwirkung anzusehen. Eine Wirkung an den β1-Rezeptoren kommt erst bei höheren Dosierungen zu Stande, weshalb kardiale Nebenwirkungen selten sind.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle &bdquo;Bronchospasmin&rdquo;</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '0,09mg', per: '1ml' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>Anwendung</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Dosierung</div>
          <nos-med-dose :items="[
            { label: 'Erwachsene', unit: '0,09mg (1 Ampulle)', color: 'adult' },
          ]"></nos-med-dose>
          <v-divider class="my-2"></v-divider>
          <div>Für Kinder Ampulle auf <span class="nos-mono">10ml</span> aufziehen.</div>
          <nos-med-dose :items="[
              { label: 'Kinder', unit: '1ml', per: '10kg', color: 'child' },
            ]"></nos-med-dose>
        </p>
        <p class="nos-u">Repetition nach 15min möglich</p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~2min</template>
    <template v-slot:span>~4h</template>
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
  name: "NaMedReproterol",
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
      return this.$store.getters.getContentMeta("na-med-reproterol");
    },
  },
  methods: {},
};
</script>