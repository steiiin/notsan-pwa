<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "20.11.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Akutes Koronarsyndrom</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list contragroup="intolerable">
    <nos-li>Orale Antikoagulation als Dauermedikation</nos-li>
    <nos-li>Unverträglichkeit ggb. ASS oder anderen NSAR (z.B. Ibu, Diclo)</nos-li>
  </nos-list>
  <nos-list contragroup="acute">
    <nos-li>Vd. auf Innere Blutung</nos-li>
    <nos-li>Vd. auf Aortensyndrom</nos-li>
    <nos-li>Akutes Leberversagen (Ikterus, Azetongeruch)</nos-li>
    <nos-li>Asthmaanfall</nos-li>
  </nos-list>
  <nos-list contragroup="known">
    <nos-li>Blutungsneigung</nos-li>
    <nos-li>Schwerer Leberschaden (Leberzirrhose)</nos-li>
    <nos-li>Schwere Nierenfunktionsstörung</nos-li>
    <nos-li>Magen-Darm-Geschwüre</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Schwangerschaft (ab 28. Woche / 6. Monat)</nos-li>
    <nos-li>Keine Kinder (&lt; 18J durch SAA untersagt)</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li variant="cave">NSAR-Überempfindlichkeit (Allergische Reaktion)</nos-li>
    <nos-li variant="cave" :decent="true">Luftnot</nos-li>
    <nos-li variant="cave" :decent="true">Ausschlag</nos-li>
    <nos-li variant="cave" :decent="true">Magenschmerzen, Übelkeit</nos-li>
    <nos-li variant="todo">Andere Algorithmen beachten:</nos-li>
    <nos-btn-link list="list-anaphylaxie"></nos-btn-link>
  </nos-list>
  <v-divider class="my-2"></v-divider>
  <nos-list>
    <nos-li>Wirkungsverstärkung von Antidiabetika (z.B. Metformin)</nos-li>
    <nos-li variant="todo">Andere Algorithmen beachten:</nos-li>
    <nos-btn-link content="med-glucose"></nos-btn-link>
  </nos-list>
  <v-divider class="my-2"></v-divider>
  <nos-list>
    <nos-li>Erhöhte Blutungsneigung</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">
          1 Durchstechflasche &bdquo;Aspirin&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '500mg Pulver' },
            { unit: '5ml Wasser', prefix: '+' },
          ]"
        ></nos-med-dose>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Akutes Koronarsyndrom" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-med-dose
          :items="[{ label: 'Erwachsene', unit: '250mg (½ Flasche)', color: 'adult' }]"
        ></nos-med-dose>
        <v-divider class="my-2"></v-divider>
        <p>Langsam spritzen.</p>
        <p>Alternativ orale Gabe möglich.</p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~3min</template>
    <template v-slot:span>~bis 7 Tage (Blutgerinnung)</template>
  </nos-med-effects>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs>
    <template v-slot:heading> Nicht-steroidales Antirheumatikum. </template>
    <template v-slot:text>
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
  name: "MedAspirin",
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
    meta() {
      return this.$store.getters.getContentMeta("med-aspirin");
    },
  },
  methods: {},
};
</script>
