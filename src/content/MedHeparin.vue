<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Akutes Koronarsyndrom</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list-ci type="intolerable">
    <nos-li-point>Orale Antikoagulation als Dauermedikation, außer ASS</nos-li-point>
    <nos-li-point>Unverträglichkeit ggb. Heparin</nos-li-point>
    <nos-li-point
      >Heparininduzierte Thrombozytopenie (HIT) in der Vergangenheit</nos-li-point
    >
  </nos-list-ci>
  <nos-list-ci type="acute">
    <nos-li-point>Akute Blutung, Trauma, Aortensyndrom oder Schlaganfall</nos-li-point>
    <nos-li-point>Akutes Leberversagen (Ikterus, Azetongeruch)</nos-li-point>
    <nos-li-point>Akutes Nierenversagen (Harnverhalt, Ödeme, Müdigkeit)</nos-li-point>
    <nos-li-point>Nieren- oder Harnleitersteine (Kolikschmerz)</nos-li-point>
    <nos-li-point>Hypertensive Krise / RR<sub>dia.</sub> &gt; 105mmHg</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="known">
    <nos-li-point>Bekannte Blutungsneigung</nos-li-point>
    <nos-li-point>Magen-Darm-Geschwür, Gastro- / Urogenitale Blutung</nos-li-point>
    <nos-li-point>Letzte Wochen operative Eingriffe</nos-li-point>
    <nos-li-point>Chronischer Alkoholabusus</nos-li-point>
    <nos-li-point>Bösartiger Krebs</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="family">
    <nos-li-point>Schwangerschaft</nos-li-point>
    <nos-li-point>Stillzeit</nos-li-point>
    <nos-li-point>Vor wenigen Tagen entbunden</nos-li-point>
    <nos-li-point>Kinder &lt; 12 Jahre (durch SAA untersagt)</nos-li-point>
  </nos-list-ci>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-point>Erhöhte Blutungsneigung</nos-li-point>
  </nos-list>
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-ampul">1 Ampulle Heparin</nos-content>
        <nos-content mode="med-size-mono">5000I.E. / 0,2ml</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="AKUTES KORONARSYNDROM" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-dose
          :items="[{ label: 'Ab 12J', unit: '5000I.E. (1 Ampulle)', color: 'adult' }]"
        ></nos-dose>
        <v-divider class="my-2"></v-divider>
        <p>
          Totraumfreie Spritze verwenden, <br />
          oder auf größere Spritze aufziehen.
        </p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>sofort</template>
    <template v-slot:span>~4h</template>
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header
      >Verhindert den endgültigen Wundverschluss und hemmt die sekundäre
      Hämostase.</template
    >
    <p>
      Es bildet mit verschiedenen Proteinen Komplexe, allen voran mit Antithrombin III
      (ATIII), welches eine etwa 700fache Aktivitätssteigerung erfährt. Aktiviertes ATIII
      hemmt Serinproteasen und damit die Gerinnungsfaktoren XIIa, XIa, Xa, VIIa, IIa
      (Thrombin). Durch diese Wirkung wird die plasmatische Gerinnung gehemmt. In hohen
      Dosen inaktiviert Heparin überschüssig gebildetes Thrombin und verhindert die
      Umwandlung von Fibrinogen zu Fibrin.
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
  name: "MedHeparin",
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
      return this.$store.getters.getContentMeta("med-heparin");
    },
  },
  methods: {},
};
</script>
