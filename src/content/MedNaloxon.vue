<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Opiod-Intoxikation</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list-ci type="intolerable">
    <nos-li-point>Unverträglichkeit ggb. Naloxon</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="family">
    <nos-li-point>Kinder &lt; 12 Jahre (durch SAA untersagt)</nos-li-point>
  </nos-list-ci>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-point>Starke Entzugsreaktion</nos-li-point>
    <nos-li-point class="nos-li-decent">Tremor, Muskelkrämpfe</nos-li-point>
    <nos-li-point class="nos-li-decent">Tachykardie, Blutdruckanstieg</nos-li-point>
    <nos-li-point class="nos-li-decent">Unruhe, Aggressivität</nos-li-point>
  </nos-list>
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-ampul"
          >1 Ampulle Naloxon</nos-content
        >
        <nos-content mode="med-size-mono">0,4mg</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Opioid-Intoxikation" :decent="true" icon="mdi-hospital-box" />
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
          <nos-dose
            :items="[{  unit: '2,5ml (¼ Spritze)', color: 'adult' },
            { unit: '0,1mg', color: 'adult'}]"
          ></nos-dose>
        </p>
        <v-divider class="my-2"></v-divider>
        <p>
          <div class="nos-u">Alle 2min: Repetition</div>
          <nos-dose
            :items="[{ unit: '1ml (0,04mg)', color: 'adult' } ]"
          ></nos-dose>
          <div>Sehr langsam über die 2min spritzen.<br/>
          Bis Schutzreflexe vorhanden &amp; Atmung suffizient.</div>
        </p>
        <p><b>Patient muss nicht zwingend erwachen</b></p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~2min</template>
    <template v-slot:span>~30min</template>
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header>
      Kompetitiver Opioid-Antagonist an den zentralen Opioid-Rezeptoren.
    </template>
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
  name: "MedNaloxon",
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
      return this.$store.getters.getContentMeta("med-naloxon");
    },
  },
  methods: {},
};
</script>
