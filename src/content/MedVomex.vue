<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Übelkeit &amp; Erbrechen</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list-ci type="intolerable">
    <nos-li-point>Unverträglichkeit ggb. Dimenhydrinat</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="acute">
    <nos-li-point>Akute Bronchialobstruktion (Asthmaanfall, exarz. COPD)</nos-li-point>
    <nos-li-point>Engwinkelglaukom (Glaukomanfall), d.h.:</nos-li-point>
    <nos-li-point class="nos-li-decent"
      >Sehstörungen / Farbspiele beim Sehen</nos-li-point
    >
    <nos-li-point class="nos-li-decent"
      >Starke Kopfschmerzen &amp; Erbrechen</nos-li-point
    >
    <nos-li-point class="nos-li-decent">Gerötetes Auge</nos-li-point>
    <nos-li-point>Abgelaufener Krampfanfall (Epilepsie, Eklampsie)</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="known">
    <nos-li-point>Selten: Porphyrie</nos-li-point>
    <nos-li-point>Selten: Long-QT-Syndrom</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="family">
    <nos-li-point>Schwangerschaft</nos-li-point>
    <nos-li-point>Stillzeit</nos-li-point>
    <nos-li-point>Kinder &lt; 1 Jahr</nos-li-point>
  </nos-list-ci>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-cave>Sedierung, insb. bei Alkoholeinfluss</nos-li-cave>
  </nos-list>
  <nos-list>
    <nos-li-point>Müdigkeit (<b>bis 24h: Aufklärung des Pat.!</b>)</nos-li-point>
    <nos-li-point>Sehstörungen</nos-li-point>
    <nos-li-point>Tachykardie</nos-li-point>
    <nos-li-point>Mund- &amp; Hauttrockenheit</nos-li-point>
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
        <nos-content mode="med-size-ampul">1 Ampulle &bdquo;Vomex&rdquo;</nos-content>
        <nos-content mode="med-size-mono">62mg / 5ml</nos-content>
        <nos-content mode="med-size-supp">1 Zäpfchen &bdquo;Vomex&rdquo;</nos-content>
        <nos-content mode="med-size-mono">40mg</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Erbrechen" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          <span class="nos-u">Anhaltendes Erbrechen, </span><br />mit Erschöpfung oder
          Aspirationsgefahr
        </p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-dose
          :items="[{ label: 'Ab 14J', unit: '62mg (1 Ampulle)', color: 'adult' }]"
        ></nos-dose>
        <v-divider class="my-2"></v-divider>
        <p>
          Auf 20ml NaCl aufziehen, <br />
          langsam spritzen &amp; nachspülen.
        </p>
        <p>Herzfrequenz mit EKG oder SpO<sub>2</sub>-Sensor überwachen.</p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(rect.)-Dosis</template>
      <template v-slot:content>
        <nos-dose
          :items="[{ label: '<14J', unit: '40mg (1 Zäpfchen)', color: 'child' }]"
        ></nos-dose>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~5min</template>
    <template v-slot:span
      >~12h (<b>cave:</b>&nbsp;24h vermindetes Reaktionsvermögen)</template
    >
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header> Dimenhydrinat ist ein Antihistaminikum. </template>
    <p>
      Dimenhydrinat wirkt im Brechzentrum (Area postrema) im Gehirn. Dort blockiert es
      Histamin-Rezeptoren, welche Impulse zum Brechzentrum weiterleiten und verhindert so
      Erbrechen bzw. das Gefühl von Übelkeit. Dimenhydrinat wirkt demnach als
      H1-Rezeptor-Antagonist hauptsächlich antiemetisch und anticholinerg.
    </p>
    <p>Zusätzlich entfaltet es eine geringe antiallergische und sedierende Wirkung.</p>
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
  name: "MedVomex",
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
      return this.$store.getters.getContentMeta("med-vomex");
    },
  },
  methods: {},
};
</script>
