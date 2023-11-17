<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Anaphylaxie</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list-ci type="intolerable">
    <nos-li-point>Unverträglichkeit ggb. Dimetinden</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="acute">
    <nos-li-point>Engwinkelglaukom (Glaukomanfall), d.h.:</nos-li-point>
    <nos-li-point class="nos-li-decent"
      >Sehstörungen / Farbspiele beim Sehen</nos-li-point
    >
    <nos-li-point class="nos-li-decent"
      >Starke Kopfschmerzen &amp; Erbrechen</nos-li-point
    >
    <nos-li-point class="nos-li-decent">Gerötetes Auge</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="family">
    <nos-li-point>Schwangerschaft</nos-li-point>
    <nos-li-point>Stillzeit</nos-li-point>
    <nos-li-point>Kinder &lt; 12 Jahre (durch SAA untersagt)</nos-li-point>
  </nos-list-ci>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-cave>Sedierung, insb. bei Alkoholeinfluss</nos-li-cave>
  </nos-list>
  <nos-list>
    <nos-li-point>Müdigkeit (<b>bis 24h: Aufklärung des Pat.!</b>)</nos-li-point>
    <nos-li-point>Sehstörungen</nos-li-point>
    <nos-li-point>Mund- &amp; Hauttrockenheit</nos-li-point>
    <nos-li-point>Gastrointestinale Beschwerden</nos-li-point>
    <nos-li-point>Unruhe, Angst</nos-li-point>
  </nos-list>
  <nos-list>
    <nos-li-todo> Verstärkte Vigilanzkontrolle </nos-li-todo>
  </nos-list>
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-ampul">1 Ampulle &bdquo;Histakut&rdquo;</nos-content>
        <nos-content mode="med-size-mono">4mg / 4ml</nos-content>
        <nos-content mode="med-size-mono">1mg / ml</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="ANAPHYLAXIE" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p class="nos-u">Jegliches Stadium d. Anaphylaxie</p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-dose
          :items="[
            { label: 'Ab 12J', unit: '1mg', per: '10kg', color: 'adult' },
            { unit: '8mg maximal' },
          ]"
        ></nos-dose>
        <v-divider class="my-2"></v-divider>
        <p>Langsam spritzen. <br /><b>Keine</b> Wiederholungsgabe nach SAA.</p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~15min</template>
    <template v-slot:span
      >~12h (<b>cave:</b>&nbsp;24h vermindetes Reaktionsvermögen)</template
    >
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header> Dimetinden ist ein Antihistaminikum. </template>
    <p>
      Dimetinden ist ein nichtkompetitiver Histamin-Antagonist am H1-Rezeptor und wirkt
      nicht auf H2-Rezeptoren. Erst in Kombination mit einem H2-Blocker (z.B. Ranitidin)
      kann die gesamte Wirkung des Histamins unterdrückt werden.
    </p>
    <p>
      Im Gegensatz zu anderen Antihistaminika blockiert Dimetinden bereits mit Histamin
      besetzte H1-Rezeptoren. Es nimmt damit eine Sonderstellung unter den Antihistaminika
      ein, da diese sonst nur die noch nicht besetzte Rezeptoren blockieren.
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
  name: "MedDimetinden",
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
      return this.$store.getters.getContentMeta("med-dimetinden");
    },
  },
  methods: {},
};
</script>
