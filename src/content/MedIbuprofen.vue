<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Starke Schmerzen</nos-li>
    <nos-li>Fiebersenkung</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. NSAR</nos-li>
  </nos-list>
  <nos-list contragroup="acute">
    <nos-li>Aktive Blutung, Blutungsneigung</nos-li>
    <nos-li>SHT / Vd. auf Hirnblutung</nos-li>
    <nos-li>Akute Herzbeschwerden</nos-li>
    <nos-li>Schwere Dehydratation</nos-li>
    <nos-li>Akute Magen-Darm-Geschwüre</nos-li>
  </nos-list>
  <nos-list contragroup="known">
    <nos-li>Blutbildungsstörungen</nos-li>
    <nos-li>Schwere Leber- oder Niereninsuffizienz</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Schwangerschaft</nos-li>
    <nos-li>Kinder &lt; 6 Monate (durch SAA untersagt)</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li variant="cave">Anaphylaxie</nos-li>
    <nos-li variant="todo"> Andere Algorithmen beachten: </nos-li>
    <nos-btn-link list="list-anaphylaxie"></nos-btn-link>
  </nos-list>
  <nos-list>
    <nos-li>Magendarmbeschwerden</nos-li>
    <nos-li>Kopfschmerzen, Schwindel, Ödeme</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="saft">Fiebersaft</nos-med-label>
        <div class="nos-mono">20mg/ml, 40mg/ml, o.ä.</div>
        <nos-med-label type="suppositorium" class="mt-2">Zäpfchen &amp; Tabletten</nos-med-label>
        <div class="nos-mono">75mg, 125mg, 250mg, 200mg, 400mg, 600mg, 800mg, o.ä.</div>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Schmerzen &amp; Fiebersenkung" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          <span class="nos-u">NRS &gt; 6</span> oder <br />
          <span class="nos-u">Fieberkrampf</span>
        </p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>Dosis</template>
      <template v-slot:content>
        <p>Per Oral oder Zäpfchen ist dosisgleich:</p>
        <nos-med-dose
          :items="[
            { label: 'Ab 12 Jahre', unit: '400mg', color: 'adult' },
            { label: 'Kind (6-12)', unit: '200mg', color: 'teen' },
            { label: 'Kind (3-6)', unit: '150mg', color: 'young' },
            { label: 'Kind (1-3)', unit: '100mg', color: 'child' },
            { label: '< 1 Jahr', unit: '50mg', color: 'baby' },
          ]"
        ></nos-med-dose>
        <v-divider class="my-2"></v-divider>
        <p>Keine Repetition vorgesehen.</p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~30min</template>
    <template v-slot:span>~6h</template>
  </nos-med-effects>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs>
    <template v-slot:heading>NSAR-Schmerzmittel</template>
    <template v-slot:text>
      <p>
        Ibuprofen greift in das Entzündungsgeschehen und die Schmerzwahrnehmung ein indem
        es die Cyclooxygenasen (COX) COX-1 und COX-2 hemmt und damit die Bildung von
        Prostaglandinen stoppt. Diese Botenstoffe sind wesentlich an Entzündungsgeschehen
        sowie an der Weiterleitung und Wahrnehmung von Schmerzsignalen beteiligt.
      </p>
      <p>
        Allerdings bauen Prostaglandine auch die schützende Magenschleimhaut auf, weshalb
        es bei Einnahme von Ibuprofen zu einer Reduktion der schützenden Schleimschicht
        innerhalb des Magens kommen kann. Ein Nebeneffekt der COX-Hemmung ist eine
        vermehrte Bildung von Leukotrienen, die für Asthmatiker problematisch sein kann,
        da diese zu einer Bronchokonstriktion führen können.
      </p>
    </template>
  </nos-paragraphs>
</template>

<script>
import NosTitle from "../components/NosTitle.vue";
import NosHeader from "../components/NosHeader.vue";
import NosParagraphs from "../components/NosParagraphs.vue";
import NosList from "../components/NosList.vue";
import NosLi from "../components/NosLi.vue";
import NosTable from "../components/NosTable.vue";
import NosTabRow from "../components/NosTabRow.vue";
import NosBtnLink from "../components/NosBtnLink.vue";
import NosMedLabel from "../components/NosMedLabel.vue";
import NosMedDose from "../components/NosMedDose.vue";
import NosMedEffects from "../components/NosMedEffects.vue";

export default {
  name: "MedIbuprofen",
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosList,
    NosLi,
    NosTable,
    NosTabRow,
    NosBtnLink,
    NosMedLabel,
    NosMedDose,
    NosMedEffects,
  },
  computed: {
    meta() {
      return this.$store.getters.getContentMeta("med-ibuprofen");
    },
  },
  methods: {},
};
</script>
