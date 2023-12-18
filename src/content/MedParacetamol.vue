<!-------------------------------------------------------------------------------------------------
{

}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title
    :headline="meta.title"
    :subtitle="meta.subtitle"
  />

  <nos-header title="Indikationen" />
  <nos-list>
    <nos-li>Starke Schmerzen</nos-li>
    <nos-li>Fiebersenkung</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen" />
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

  <nos-header title="Nebenwirkungen" />
  <nos-list>
    <nos-li variant="cave">
      Blutdruckabfall
    </nos-li>
    <nos-li variant="todo">
      Anwendung unterbrechen
    </nos-li>
    <nos-li variant="todo">
      Flachlagerung, Volumengabe
    </nos-li>
  </nos-list>
  <nos-list>
    <nos-li variant="cave">
      Allergische Reaktion (NSAR-Asthmaanfall)
    </nos-li>
    <nos-li variant="todo">
      Andere Algorithmen beachten:
    </nos-li>
    <nos-btn-link list="list-anaphylaxie" />
    <nos-btn-link list="list-asthma" />
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung" />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Größen
      </template>
      <template #content>
        <nos-med-label type="infusion">
          1 Kurzinfusion Paracetamol
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '1g', per: '100ml' }]"
        />
        <nos-med-label
          type="suppositorium"
          class="mt-2"
        >
          2 Zäpfchen Paracetamol
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '125mg' }, { unit: '150mg' }]"
        />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Schmerzen"
    :decent="true"
    icon="$hospitalBox"
  />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Einsatz
      </template>
      <template #content>
        <div-paragraph>
          <div-u>NRS &gt; 6</div-u>
        </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (i.v.)-Dosis
      </template>
      <template #content>
        <nos-med-dose
          :items="[
            { label: 'Erwachsene', unit: '1g (1 Kurzinf.)', color: 'adult' },
            { label: 'Kinder (>15kg)', unit: '500mg (½ Kurzinf.)', color: 'teen' },
          ]"
        />
        <v-divider class="my-2" />
        <div-paragraph> Über 15min laufen lassen. </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Fiebersenkung"
    :decent="true"
    icon="$hospitalBox"
  />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        (i.v.)-Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Erwachsene &amp; Kinder &ge; 10 Jahre</div-u>
        </div-paragraph>
        <nos-med-dose
          :items="[
            { label: 'Erwachsene', unit: '1g (1 Kurzinf.)', color: 'adult' },
            { label: 'Kinder (>15kg)', unit: '500mg (½ Kurzinf.)', color: 'teen' },
          ]"
        />
        <v-divider class="my-2" />
        <div-paragraph> Über 15min laufen lassen. </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (rect.)-Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Kinder &lt; 10 Jahre</div-u>
        </div-paragraph>
        <nos-med-dose
          :items="[
            { label: 'Grundschule &', unit: '', color: 'young' },
            { label: 'Kindergarten', unit: '250mg', color: 'young' },
            { label: '< 1J', unit: '125mg', color: 'baby' },
          ]"
        />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~10min
    </template>
    <template #span>
      ~6h
    </template>
  </nos-med-effects>

  <nos-header title="Wirkweise" />
  <nos-paragraphs>
    <template #heading>
      Analgetikum welches antipyretisch und analgetisch wirkt.
    </template>
    <template #text>
      <div-paragraph>
        Es gehört nicht zu den nicht steroidalen Antirheumatika (NSAR), da seine entzündungshemmende Wirkung nur unter Laborbedingungen feststellbar ist. Dennoch besitzt es einen
        ähnlichen Wirkmechanismus, welcher noch nicht abschließend geklärt ist.
      </div-paragraph>
      <div-paragraph>
        Paracetamol hemmt die Prostaglandinsynthese über die Cyclooxygenase 2 und wirkt so analgetisch und antipyretisch. Es hat keine Wirkung auf die Cyclooxygenase 1, weshalb die
        Thrombozytenaggregation nicht beeinflusst wird.
      </div-paragraph>
      <div-paragraph>
        Im Hypothalamus wirkt Paracetamol auf die endogenen Pyrogene (fiebererzeugende Stoffe des Körpers, z.B. Interleukine) des Temperaturregulationszentrum und wirkt hierdurch
        antipyretisch. Es hat keine spasmolytische oder antikonvulsive Wirkung. Die positive Wirkung bei Fieberkrämpfen beruht auf der Antipyrese und der daraus folgenden erhöhten
        Krampfschwelle.
      </div-paragraph>
    </template>
  </nos-paragraphs>
</template>

<script>
import NosTitle from '../components/NosTitle.vue'
import NosHeader from '../components/NosHeader.vue'
import NosParagraphs from '../components/NosParagraphs.vue'
import NosList from '../components/NosList.vue'
import NosLi from '../components/NosLi.vue'
import NosTable from '../components/NosTable.vue'
import NosRowCaption from '../components/NosRowCaption.vue'
import NosBtnLink from '../components/NosBtnLink.vue'
import NosMedLabel from '../components/NosMedLabel.vue'
import NosMedDose from '../components/NosMedDose.vue'
import NosMedEffects from '../components/NosMedEffects.vue'

export default {
  name: 'MedParacetamol',
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
    NosMedEffects
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('med-paracetamol')
    }
  },
  methods: {}
}
</script>
