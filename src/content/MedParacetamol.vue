<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Starke Schmerzen</nos-li-point>
    <nos-li-point>Fiebersenkung</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list-ci type="intolerable">
    <nos-li-point
      >Unverträglichkeit ggb. Paracetamol oder NSAR (z.B. Ibu, Diclo)</nos-li-point
    >
  </nos-list-ci>
  <nos-list-ci type="acute">
    <nos-li-point>Kardiales Ereignis nicht ausgeschlossen (z.B. ACS)</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="known">
    <nos-li-point
      >Schwerer Leberschaden, z.B. chronischer Alkoholabusus,
      Mangelernährung</nos-li-point
    >
    <nos-li-point>Hochgradige Niereninsuffizienz, insb. dialysepflichtig</nos-li-point>
    <nos-li-point>Angeborene Blutbildungsstörung</nos-li-point>
    <nos-li-point
      >Glucose-6-phosphat-Dehydrogenase-Mangel, kurz G6PD - ca. 10% Prävalenz bei
      Afrikanern</nos-li-point
    >
  </nos-list-ci>
  <nos-list-ci type="family">
    <nos-li-point>Schwangerschaft</nos-li-point>
  </nos-list-ci>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-cave>Blutdruckabfall</nos-li-cave>
    <nos-li-cave>Allergische Reaktion (NSAR-Asthmaanfall)</nos-li-cave>
  </nos-list>
  <nos-list>
    <nos-li-todo>Anwendung unterbrechen</nos-li-todo>
    <nos-li-todo> Andere Algorithmen beachten: </nos-li-todo>
    <div><v-btn>TODO: BPR Anaphylaxie</v-btn></div>
    <div class="mt-1"><v-btn>TODO: BPR Asthmaanfall</v-btn></div>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-iv">1 Kurzinfusion Paracetamol</nos-content>
        <nos-content mode="med-size-mono">1g / 100ml</nos-content>
        <nos-content mode="med-size-supp" class="mt-2"
          >2 Zäpfchen Paracetamol</nos-content
        >
        <nos-content mode="med-size-mono">125mg</nos-content>
        <nos-content mode="med-size-mono">250mg</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Schmerzen" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p class="nos-u">NRS &gt; 6</p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-dose
          :items="[
            { label: 'Erwachsene', unit: '1g (1 Kurzinf.)', color: 'adult' },
            { label: 'Kinder (>15kg)', unit: '500mg (½ Kurzinf.)', color: 'teen' },
          ]"
        ></nos-dose>
        <v-divider class="my-2"></v-divider>
        <p>Über 15min laufen lassen.</p>
      </template>
    </nos-tab-row>
  </nos-table>
  <nos-header title="Fiebersenkung" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <p class="nos-u">Erwachsene &amp; Kinder &ge; 10 Jahre</p>
        <nos-dose
          :items="[
            { label: 'Erwachsene', unit: '1g (1 Kurzinf.)', color: 'adult' },
            { label: 'Kinder (>15kg)', unit: '500mg (½ Kurzinf.)', color: 'teen' },
          ]"
        ></nos-dose>
        <v-divider class="my-2"></v-divider>
        <p>Über 15min laufen lassen.</p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(rect.)-Dosis</template>
      <template v-slot:content>
        <p class="nos-u">Kinder &lt; 10 Jahre</p>
        <nos-dose
          :items="[
            { label: 'Grundschule &', unit: '', color: 'young' },
            { label: 'Kindergarten', unit: '250mg', color: 'young' },
            { label: '< 1J', unit: '125mg', color: 'baby' },
          ]"
        ></nos-dose>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~10min</template>
    <template v-slot:span>~6h</template>
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header>
      Analgetikum welches antipyretisch und analgetisch wirkt.
    </template>
    <p>
      Es gehört nicht zu den nicht steroidalen Antirheumatika (NSAR), da seine
      entzündungshemmende Wirkung nur unter Laborbedingungen feststellbar ist. Dennoch
      besitzt es einen ähnlichen Wirkmechanismus, welcher noch nicht abschließend geklärt
      ist.
    </p>
    <p>
      Paracetamol hemmt die Prostaglandinsynthese über die Cyclooxygenase 2 und wirkt so
      analgetisch und antipyretisch. Es hat keine Wirkung auf die Cyclooxygenase 1,
      weshalb die Thrombozytenaggregation nicht beeinflusst wird.
    </p>
    <p>
      Im Hypothalamus wirkt Paracetamol auf die endogenen Pyrogene (fiebererzeugende
      Stoffe des Körpers, z.B. Interleukine) des Temperaturregulationszentrum und wirkt
      hierdurch antipyretisch. Es hat keine spasmolytische oder antikonvulsive Wirkung.
      Die positive Wirkung bei Fieberkrämpfen beruht auf der Antipyrese und der daraus
      folgenden erhöhten Krampfschwelle.
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
  name: "MedParacetamol",
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
      return this.$store.getters.getContentMeta("med-paracetamol");
    },
  },
  methods: {},
};
</script>
