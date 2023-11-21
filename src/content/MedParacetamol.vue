<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Starke Schmerzen</nos-li>
    <nos-li>Fiebersenkung</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Paracetamol oder NSAR (z.B. Ibu, Diclo)</nos-li>
    <nos-li>Letzte Paracetamol-Einnahme &lt; 6h</nos-li>
  </nos-list>
  <nos-list contragroup="acute">
    <nos-li>Kardiales Ereignis nicht ausgeschlossen (z.B. ACS)</nos-li>
  </nos-list>
  <nos-list contragroup="known">
    <nos-li>Schwerer Leberschaden, z.B. chronischer Alkoholabusus, Mangelernährung</nos-li>
    <nos-li>Hochgradige Niereninsuffizienz, insb. dialysepflichtig</nos-li>
    <nos-li>Angeborene Blutbildungsstörung</nos-li>
    <nos-li>Glucose-6-phosphat-Dehydrogenase-Mangel, kurz G6PD - ca. 10% Prävalenz bei Afrikanern</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Schwangerschaft</nos-li>
  </nos-list>
  
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li variant="cave">Blutdruckabfall</nos-li>
    <nos-li variant="todo">Anwendung unterbrechen</nos-li>
    <nos-li variant="todo">Flachlagerung, Volumengabe</nos-li>
  </nos-list>
  <nos-list>
    <nos-li variant="cave">Allergische Reaktion (NSAR-Asthmaanfall)</nos-li>
    <nos-li variant="todo">Andere Algorithmen beachten:</nos-li>
    <nos-btn-link list="list-anaphylaxie"></nos-btn-link>
    <nos-btn-link list="list-asthma"></nos-btn-link>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="infusion">1 Kurzinfusion Paracetamol</nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '1g', per: '100ml' }]"
        ></nos-med-dose>
        <nos-med-label type="suppositorium" class="mt-2">2 Zäpfchen Paracetamol</nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '125mg' }, { unit: '150mg' }]"
        ></nos-med-dose>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Schmerzen" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p class="nos-u">NRS &gt; 6</p>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-med-dose
          :items="[
            { label: 'Erwachsene', unit: '1g (1 Kurzinf.)', color: 'adult' },
            { label: 'Kinder (>15kg)', unit: '500mg (½ Kurzinf.)', color: 'teen' },
          ]"
        ></nos-med-dose>
        <v-divider class="my-2"></v-divider>
        <p>Über 15min laufen lassen.</p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Fiebersenkung" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <p class="nos-u">Erwachsene &amp; Kinder &ge; 10 Jahre</p>
        <nos-med-dose
          :items="[
            { label: 'Erwachsene', unit: '1g (1 Kurzinf.)', color: 'adult' },
            { label: 'Kinder (>15kg)', unit: '500mg (½ Kurzinf.)', color: 'teen' },
          ]"
        ></nos-med-dose>
        <v-divider class="my-2"></v-divider>
        <p>Über 15min laufen lassen.</p>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(rect.)-Dosis</template>
      <template v-slot:content>
        <p class="nos-u">Kinder &lt; 10 Jahre</p>
        <nos-med-dose
          :items="[
            { label: 'Grundschule &', unit: '', color: 'young' },
            { label: 'Kindergarten', unit: '250mg', color: 'young' },
            { label: '< 1J', unit: '125mg', color: 'baby' },
          ]"
        ></nos-med-dose>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~10min</template>
    <template v-slot:span>~6h</template>
  </nos-med-effects>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs>
    <template v-slot:heading>
      Analgetikum welches antipyretisch und analgetisch wirkt.
    </template>
    <template v-slot:text>
      <p>
        Es gehört nicht zu den nicht steroidalen Antirheumatika (NSAR), da seine
        entzündungshemmende Wirkung nur unter Laborbedingungen feststellbar ist. Dennoch
        besitzt es einen ähnlichen Wirkmechanismus, welcher noch nicht abschließend
        geklärt ist.
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
import NosRowCaption from "../components/NosRowCaption.vue";
import NosBtnLink from "../components/NosBtnLink.vue";
import NosMedLabel from "../components/NosMedLabel.vue";
import NosMedDose from "../components/NosMedDose.vue";
import NosMedEffects from "../components/NosMedEffects.vue";

export default {
  name: "MedParacetamol",
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosList,
    NosLi,
    NosTable,
    NosRowCaption,
    NosBtnLink,
    NosMedLabel,
    NosMedDose,
    NosMedEffects,
  },
  computed: {
    meta() {
      return this.$store.getters.getContentMeta("med-paracetamol");
    },
  },
  methods: {},
};
</script>
