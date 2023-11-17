<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Hypoglykämie (intramuskuläre Therapie)</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list-ci type="intolerable">
    <nos-li-point>Unverträglichkeit ggb. Glucagon</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="known">
    <nos-li-point>Phäochromocytom (vgl. Nieren-Ca)</nos-li-point>
  </nos-list-ci>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-cave>Übelkeit, Erbrechen</nos-li-cave>
  </nos-list>
  <nos-list>
    <nos-li-todo> Andere Algorithmen beachten: </nos-li-todo>
    <div><v-btn>TODO: SAA Vomex</v-btn></div>
  </nos-list>
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-ampul">1 Ampulle Glucagon</nos-content>
        <nos-content mode="med-size-mono">1mg Pulver</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Hypoglykämie" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">BZ &lt; <span class="nos-mono">3,3mmol/l</span></div>
          <div>Bzw. &lt; <span class="nos-mono">60mg/dl</span></div>
        </p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(i.m.)-Dosis</template>
      <template v-slot:content>
        <nos-dose
          :items="[
            { label: 'Ab 8 Jahren', unit: '1mg (i.m.)', color: 'adult' },
            { label: '< 8 Jahren', unit: '0,5mg (i.m.)', color: 'child' },
          ]"
        ></nos-dose>
        <v-divider class="my-2"></v-divider>
        <p class="nos-u">Nach 5min Kontrollmessung</p>
        <p>
          <div>Keine Repetition vorgesehen. Andere Algorithmen beachten: </div>
          <div><v-btn>TODO: SAA Vomex</v-btn></div>
        </p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~5min</template>
    <template v-slot:span>~30min</template>
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header>
      Glucagon wirkt im Körper entgegengesetzt zu Insulin.
    </template>
    <p>
      Glucagon führt zu einer Erhöhung der Blutglucose-Konzentration 
      durch Aktivierung der Glucagon-Rezeptoren in der Leber. Die 
      Rezeptor-Aktivierung bedingt wiederum den Glykogen-Abbau und die 
      Glucose-Freisetzung. Das Hormon wirkt somit als Antagonist von 
      Insulin.
    </p>
    <p>
      Glucagon ist nur dann bei der Behandlung einer Hypoglykämie 
      wirksam, wenn genügend Leber-Glykogen vorhanden ist. Da Glucagon 
      im Falle von Hunger, Nebenniereninsuffizienz, chronischem 
      Alkoholmissbrauch oder chronischer Hypoglykämie wenig bis gar 
      nicht wirkt, sollte in solchen Fällen mit Glucose behandelt werden.
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
  name: "MedGlucagon",
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
      return this.$store.getters.getContentMeta("med-glucagon");
    },
  },
  methods: {},
};
</script>
