<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "20.11.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>

  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Reanimation als Amiodaron-Alternative</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Lidocain</nos-li>
  </nos-list>
  <nos-list>
    <nos-li variant="cave">Nicht mehr als Analgesie beim i.o-Zugang für NotSan</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li variant="check">Irrelevant, weil Anwendung nur bei Lebensgefahr</nos-li>
  </nos-list>
  <nos-list>
    <nos-li>Bradykardie, Hypotonie</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">2 Ampullen Lidocain</nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { label: '2%', unit: '100mg', per: '5ml' },
            { label: '1%', unit: '50mg', per: '5ml' },
          ]"
        ></nos-med-dose>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Reanimation" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Einsatz &amp;<br />(i.v.)-Dosis</template>
      <template v-slot:content>
        <p class="nos-u">Nach 3. Defibrillation</p>
        <nos-med-dose
          :items="[
            { label: 'Erwachsene', unit: '100mg (1 Ampulle-2%)', color: 'adult' },
            { label: 'Kind', unit: '10mg', per: '10kg', color: 'child' },
            { unit: '1ml', per: '10kg (2%)', color: 'child' },
            { unit: '0,5ml', per: '10kg (1%)', color: 'child' }
          ]"
        >
        </nos-med-dose>
        <p class="nos-u mt-2">Nach 5. Defibrillation</p>
        <nos-med-dose
          :items="[
            { label: 'Erwachsene', unit: '50mg (½ Ampulle-2%)', color: 'adult' },
            { label: 'Kinder', unit: 'Keine Repetition', color: 'child' },
          ]"
        >
        </nos-med-dose>
        <v-divider class="my-2"></v-divider>
        <p>Nachspülen.</p>
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
    name: "MedLidocain",
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
      NosMedEffects,
    },
    computed: {
      meta() {
        return this.$store.getters.getContentMeta("med-lidocain");
      },
    },
    methods: {},
  };
</script>
