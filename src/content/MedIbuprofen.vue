<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Starke Schmerzen</nos-li-point>
    <nos-li-point>Fiebersenkung</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list-ci type="intolerable">
    <nos-li-point>Unverträglichkeit ggb. NSAR</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="acute">
    <nos-li-point>Aktive Blutung, Blutungsneigung</nos-li-point>
    <nos-li-point>SHT / Vd. auf Hirnblutung</nos-li-point>
    <nos-li-point>Akute Herzbeschwerden</nos-li-point>
    <nos-li-point>Schwere Dehydratation</nos-li-point>
    <nos-li-point>Akute Magen-Darm-Geschwüre</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="known">
    <nos-li-point>Blutbildungsstörungen</nos-li-point>
    <nos-li-point>Schwere Leber- oder Niereninsuffizienz</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="family">
    <nos-li-point>Schwangerschaft</nos-li-point>
    <nos-li-point>Kinder &lt; 6 Monate (durch SAA untersagt)</nos-li-point>
  </nos-list-ci>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-cave>Anaphylaxie</nos-li-cave>
  </nos-list>
  <nos-list>
    <nos-li-point>Magendarmbeschwerden</nos-li-point>
    <nos-li-point>Kopfschmerzen, Schwindel, Ödeme</nos-li-point>
  </nos-list>
  <nos-list>
    <nos-li-todo> Andere Algorithmen beachten: </nos-li-todo>
    <div><v-btn>TODO: BPR Anaphylaxie</v-btn></div>
  </nos-list>
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-drink">Fiebersaft</nos-content>
        <nos-content mode="med-size-mono">20mg / ml</nos-content>
        <nos-content mode="med-size-mono">40mg / ml</nos-content>
        <nos-content mode="med-size-supp">Tabletten &amp; Zäpfchen</nos-content>
        <nos-content mode="med-size-mono"
          >75mg,&nbsp;&nbsp;125mg, 150mg, 250mg</nos-content
        >
        <nos-content mode="med-size-mono">200mg, 400mg, 600mg, 800mg</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header
    title="Schmerzen &amp; Fiebersenkung"
    :decent="true"
    icon="mdi-hospital-box"
  />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          <span class="nos-u">NRS &gt; 6</span><br />
          oder<span class="nos-u">Fieberkrampf</span>
        </p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>Dosis</template>
      <template v-slot:content>
        <p>Per Oral oder Zäpfchen ist dosisgleich:</p>
        <nos-dose
          :items="[
            { label: 'Ab 12 Jahre', unit: '400mg', color: 'adult' },
            { label: 'Kind (6-12)', unit: '200mg', color: 'teen' },
            { label: 'Kind (3-6)', unit: '150mg', color: 'young' },
            { label: 'Kind (1-3)', unit: '100mg', color: 'child' },
            { label: '< 1 Jahr', unit: '50mg', color: 'baby' },
          ]"
        ></nos-dose>
        <v-divider class="my-2"></v-divider>
        <p>Keine Repetition vorgesehen.</p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~30min</template>
    <template v-slot:span>~6h</template>
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header>NSAR-Schmerzmittel</template>
    <p>
      Ibuprofen greift in das Entzündungsgeschehen und die Schmerzwahrnehmung ein indem es
      die Cyclooxygenasen (COX) COX-1 und COX-2 hemmt und damit die Bildung von
      Prostaglandinen stoppt. Diese Botenstoffe sind wesentlich an Entzündungsgeschehen
      sowie an der Weiterleitung und Wahrnehmung von Schmerzsignalen beteiligt.
    </p>
    <p>
      Allerdings bauen Prostaglandine auch die schützende Magenschleimhaut auf, weshalb es
      bei Einnahme von Ibuprofen zu einer Reduktion der schützenden Schleimschicht
      innerhalb des Magens kommen kann. Ein Nebeneffekt der COX-Hemmung ist eine vermehrte
      Bildung von Leukotrienen, die für Asthmatiker problematisch sein kann, da diese zu
      einer Bronchokonstriktion führen können.
    </p>
  </nos-card>
</template>

<script>
import NosTitle from "../components/NosTitle.vue";
import NosHeader from "../components/NosHeader.vue";
import NosCard from "../components/NosCard.vue";
import NosList from "../components/NosList.vue";
import NosListCi from "../components/NosListCi.vue";
import NosLiNone from "../components/NosLiNone.vue";
import NosLiPoint from "../components/NosLiPoint.vue";
import NosLiCheck from "../components/NosLiCheck.vue";
import NosLiCave from "../components/NosLiCave.vue";
import NosLiTodo from "../components/NosLiTodo.vue";
import NosTable from "../components/NosTable.vue";
import NosTabRow from "../components/NosTabRow.vue";
import NosContent from "../components/NosContent.vue";
import NosDose from "../components/NosDose.vue";
import NosPharmakin from "../components/NosPharmakin.vue";

export default {
  name: "MedIbuprofen",
  components: {
    NosTitle,
    NosHeader,
    NosCard,
    NosList,
    NosListCi,
    NosLiNone,
    NosLiPoint,
    NosLiCheck,
    NosLiCave,
    NosLiTodo,
    NosTable,
    NosTabRow,
    NosContent,
    NosDose,
    NosPharmakin,
  },
  computed: {
    meta() {
      return this.$store.getters.getContentMeta("med-ibuprofen");
    },
  },
  methods: {},
};
</script>
