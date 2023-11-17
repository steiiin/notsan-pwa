<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Akutes Koronarsyndrom</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list-ci type="intolerable">
    <nos-li-point>Orale Antikoagulation als Dauermedikation</nos-li-point>
    <nos-li-point
      >Unverträglichkeit ggb. ASS oder anderen NSAR (z.B. Ibu, Diclo)</nos-li-point
    >
  </nos-list-ci>
  <nos-list-ci type="acute">
    <nos-li-point>Akute Blutung, Trauma, Aortensyndrom oder Schlaganfall</nos-li-point>
    <nos-li-point>Akutes Leberversagen (Ikterus, Azetongeruch)</nos-li-point>
    <nos-li-point>Akutes Nierenversagen (Harnverhalt, Ödeme, Müdigkeit)</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="known">
    <nos-li-point>Bekannte Blutungsneigung</nos-li-point>
    <nos-li-point>Magen-Darm-Geschwür, Aortenaneurysma</nos-li-point>
    <nos-li-point>Allergisches Asthma</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="family">
    <nos-li-point>Schwangerschaft (ab 28. Woche / 6. Monat)</nos-li-point>
    <nos-li-point>Keine Kinder (&lt; 18J durch SAA untersagt)</nos-li-point>
  </nos-list-ci>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-cave>NSAR-Überempfindlichkeit (Allergische Reaktion)</nos-li-cave>
    <nos-li-cave class="nos-li-decent">Luftnot</nos-li-cave>
    <nos-li-cave class="nos-li-decent">Ausschlag</nos-li-cave>
    <nos-li-cave class="nos-li-decent">Magenschmerzen, Übelkeit</nos-li-cave>
  </nos-list>
  <nos-list>
    <nos-li-point>Erhöhte Blutungsneigung</nos-li-point>
    <nos-li-point>Wirkungsverstärkung von Antidiabetika (z.B. Metformin)</nos-li-point>
  </nos-list>
  <nos-list>
    <nos-li-todo> Andere Algorithmen beachten: </nos-li-todo>
    <div><v-btn>TODO: BPR Anaphylaxie</v-btn></div>
    <div class="mt-1"><v-btn>TODO: BPR Hypoglykämie</v-btn></div>
  </nos-list>
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-ampul"
          >1 Durchstechflasche &bdquo;Aspirin&rdquo;</nos-content
        >
        <nos-content mode="med-size-mono">500mg Pulver</nos-content>
        <nos-content mode="med-size-mono">+ 5ml Wasser</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Akutes Koronarsyndrom" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-dose
          :items="[{ label: 'Erwachsene', unit: '250mg (½ Flasche)', color: 'adult' }]"
        ></nos-dose>
        <v-divider class="my-2"></v-divider>
        <p>Langsam spritzen.</p>
        <p>Alternativ orale Gabe möglich.</p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~3min</template>
    <template v-slot:span>~bis 7 Tage (Blutgerinnung)</template>
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header> Nicht-steroidales Antirheumatikum. </template>
    <p>
      Aus Arachidonsäure (Fettsäure) der Zellmembran werden durch die enzymatische Zerlegung
      durch Cyclooxygenase (COX) ...
      <ol class="ms-4"> 
        <li>Prostacycline (Entzündung, Fieber) </li>
        <li>Prostaglandine (Schmerzen)</li>
        <li>Thromboxan (Thrombozytenaggregation)</li>
      </ol>
      ... erzeugt.  
    </p>
    <p>
      Die Acetylsalicylsäure gehört zu den nicht steroidalen Antirheumatika (NSAR). 
      Sie sorgt für eine Hemmung der Cyclooxygenase und entfaltet somit eine 
      analgetische, antiinflammatorische und antipyretische Wirkung. Sie hemmt die 
      Thrombozytenaggregation <b>irreversibel</b> für 7 Tage, indem sie die 
      Synthese von Thromboxan A2 in den Thrombozyten selbst blockiert.
    </p>
    <p>
      Erst neue Thrombozyten - die nach 7 Tagen entstehen - können das Hormon 
      wieder herstellen.
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
  name: "MedAspirin",
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
    NosPharmakin
  },
  computed: {
    meta() {
      return this.$store.getters.getContentMeta("med-aspirin");
    },
  },
  methods: {},
};
</script>
