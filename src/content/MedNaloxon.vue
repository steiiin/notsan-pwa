<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Opiod-Intoxikation</nos-li>
  </nos-list>
  
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Naloxon</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Kinder &lt; 12 Jahre (durch SAA untersagt)</nos-li>
  </nos-list>
  
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li>Starke Entzugsreaktion</nos-li>
    <nos-li :decent="true">Tremor, Muskelkrämpfe</nos-li>
    <nos-li :decent="true">Tachykardie, Blutdruckanstieg</nos-li>
    <nos-li :decent="true">Unruhe, Aggressivität</nos-li>
    <nos-li variant="todo">Vorsichtig Titrieren</nos-li>
  </nos-list>
  
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle Naloxon</nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '0,4mg', per: '1ml' },
          ]"
        ></nos-med-dose>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Opioid-Intoxikation" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p class="nos-u">Intoxikation mit <b>nicht lösbarem</b> A / B-Problem.</p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Vorbereitung</div>
          <div>
            Ampulle auf <span class="nos-mono">10ml</span> NaCl aufziehen.<br />
            <span class="nos-mono">&equals;0,04mg / ml</span>
          </div>
        </p>
        <p>
          <div class="nos-u">Initialdosis</div>
          <nos-med-dose
            :items="[{  unit: '2,5ml (¼ Spritze)', color: 'adult' },
            { unit: '0,1mg', color: 'adult'}]"
          ></nos-med-dose>
        </p>
        <v-divider class="my-2"></v-divider>
        <p>
          <div class="nos-u">Alle 2min: Repetition</div>
          <nos-med-dose
            :items="[{ unit: '1ml (0,04mg)', color: 'adult' } ]"
          ></nos-med-dose>
          <div>Sehr langsam über die 2min spritzen.<br/>
          Bis Schutzreflexe vorhanden &amp; Atmung suffizient.</div>
        </p>
        <p><b>Patient muss nicht zwingend erwachen</b></p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~2min</template>
    <template v-slot:span>~30min</template>
  </nos-med-effects>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs>
    <template v-slot:heading>
      Kompetitiver Opioid-Antagonist an den zentralen Opioid-Rezeptoren.
    </template>
    <template v-slot:text>
      <p>
        Naloxon hat eine höhere Affinität zu den Opioidrezeptorstellen als sämtliche 
        Opioid-Agonisten und partielle Antagonisten, es verdrängt andere Moleküle vom 
        Rezeptor und blockiert deren Wirkung. 
      </p>
      <p>
        In Abwesenheit von Opioiden oder agonistischen Effekten anderer 
        Opioid-Antagonisten zeigt Naloxon im Wesentlichen keine pharmakologische 
        Eigenwirkung, so dass eine Gabe bei Verdacht auf eine Opiatintoxikation keine 
        negativen Folgen hat, sollte sich der Verdacht nicht bestätigen.
      </p>
      <p>
        Aufgrund der kürzeren Wirkdauer als andere Opioide kann es nach 15-45min zu 
        einer erneuten Opioid-Intoxikation kommen <b>(Rebound-Effekt)</b>.
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
import NosTabRow from "../components/NosTabRow.vue";
import NosMedLabel from "../components/NosMedLabel.vue";
import NosMedDose from "../components/NosMedDose.vue";
import NosMedEffects from "../components/NosMedEffects.vue";

export default {
  name: "MedNaloxon",
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosList,
    NosLi,
    NosTable,
    NosTabRow,
    NosMedLabel,
    NosMedDose,
    NosMedEffects
  },
  computed: {
    meta() {
      return this.$store.getters.getContentMeta("med-naloxon");
    },
  },
  methods: {},
};
</script>
