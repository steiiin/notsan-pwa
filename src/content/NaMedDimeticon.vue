<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "11.12.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Spülmittelvergiftung beim Kind</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Dimeticon, auch bekannt als Dimethicon, ist eine silikonbasierte Substanz, die häufig in medizinischen und kosmetischen Produkten verwendet wird. Es ist bekannt für seine antischäumenden und gleitenden Eigenschaften.
      </p>
      <p>
        Bei der Behandlung von Spülmittelvergiftungen kann Dimeticon eine Rolle spielen, allerdings eher als unterstützende Maßnahme.
      </p>
      <p>
        Dimeticon wirkt durch Veränderung der Oberflächenspannung des Schaums, der durch das Spülmittel im Magen-Darm-Trakt gebildet wird. Durch diese Wirkung hilft es, den Schaum zu zerstören oder seine Bildung zu verhindern.
      </p>
      <p>
        Dies kann nützlich sein, um Symptome wie Blähungen und Unbehagen zu lindern und das Risiko von Komplikationen wie einer Aspiration (Einatmen von Schaum in die Lungen) zu verringern.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="iv">1 Flasche &bdquo;Sab Simplex&rdquo;</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '30ml' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(p.o.)-Dosis</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Dosierung</div>
          <nos-med-dose :items="[
            { label: 'Mindestdosis', unit: '1EL (5ml)', color: 'adult' },
          ]"></nos-med-dose>
          <div>Größere Mengen werden problemlos vertragen.</div>
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

export default {
  name: "NaMedDimeticon",
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
  },
  computed: {
    meta() {
      return this.$store.getters.getContentMeta("na-med-dimeticon");
    },
  },
  methods: {},
};
</script>