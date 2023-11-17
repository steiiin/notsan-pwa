<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Krampfdurchbrechung</nos-li-point>
    <nos-li-point>Fieberkrampf</nos-li-point>
    <nos-li-point>Analgosedierung mit Esketamin</nos-li-point>
    <nos-li-point>Sedierung</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-header title="Zur Krampfdurchbrechung" :decent="true" icon="mdi-database-outline" />
  <nos-list-ci type="intolerable">
    <nos-li-point>Überempfindlichkeit ggb. Midazolam oder Benzodiazepine</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="acute">
    <nos-li-point>Akute Ateminsuffizienz</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="family">
    <nos-li-point>Kinder &lt; 3 Monate</nos-li-point>
  </nos-list-ci>
  <nos-header title="Zur Sedierung zusätzlich" :decent="true" icon="mdi-database-plus-outline" />
  <nos-list-ci type="intolerable">
    <nos-li-point>Abhängigkeit von Alkohol, Medikamenten oder Drogen</nos-li-point>
    <nos-li-point>Akute Intoxikation</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="known">
    <nos-li-point>Schlafapnoe-Syndrom</nos-li-point>
    <nos-li-point>Myasthenia gravis</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="family">
    <nos-li-point>Schwangerschaft</nos-li-point>
  </nos-list-ci>

  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-cave>Atemdepression</nos-li-cave>
  </nos-list>
  <nos-list>
    <nos-li-point>Müdigkeit, Amnesie</nos-li-point>
    <nos-li-point>Muskelschwäche &rarr; Sturzgefahr</nos-li-point>
    <nos-li-point>Möglich: paradoxe Erregungszustände</nos-li-point>
  </nos-list>
  <nos-list>
    <nos-li-todo>Erwecken, zum Atmen animieren</nos-li-todo>
    <nos-li-todo>Sauerstoffgabe, evtl. assistierte Beatmung</nos-li-todo>
  </nos-list>
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-ampul">1 Ampulle Midazolam</nos-content>
        <nos-content mode="med-size-mono">5mg / 1ml</nos-content>
        <nos-content mode="med-size-ampul">
          4 Spritzen &bdquo;Buccolam&rdquo;
        </nos-content>
        <nos-content mode="med-size-mono">2,5mg (Gelb)</nos-content> <!-- pre space, with html-entity -->
        <nos-content mode="med-size-mono">&nbsp;&nbsp;5mg (Blau)</nos-content>
        <nos-content mode="med-size-mono">7,5mg (Lila)</nos-content>
        <nos-content mode="med-size-mono">&nbsp;10mg (Rot)</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Krampfdurchbrechung" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Rezidiver Krampf, oder Anfallsdauer &gt; 5min</div>
          <div>Bei Kindern &gt; 2min</div>
        </p>
      </template>
    </nos-tab-row>
    <nos-tab-row group="l3">
      <template v-slot:caption>(buccal)-Dosis</template>
      <template v-slot:content>
        <nos-dose
          :items="[
            { label: 'Erwachsene', unit: '10mg (Rot)', color: 'child' },
            { label: 'Ab 10J', unit: '10mg (Rot)', color: 'child' },
            { label: 'Grundschule', unit: '7,5mg (Lila)', color: 'baby' },
            { label: 'Kindergarten', unit: '5mg (Blau)', color: 'adult' },
            { label: '< 1J', unit: '2,5mg (Gelb)', color: 'teen' },]"
        ></nos-dose>
        <v-divider class="my-2"></v-divider>
        <p class="nos-u">Keine Repetition der buccalen Gabe.</p>
      </template>
    </nos-tab-row>
    <nos-tab-row group="l2">
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Vorbereitung</div>
          <div>
            <span class="nos-mono">5mg</span>-Ampulle auf <span class="nos-mono">5ml</span> NaCl aufziehen.<br />
            <span class="nos-mono">&equals;1mg / ml</span>
          </div>
        </p>
        <p>
          <div class="nos-u">Bis zur Krampfdurchbrechung</div>
          <div class="nos-mono"><b>1mg / 30s</b></div>
        </p>
      </template>
    </nos-tab-row>
  </nos-table>
  <nos-header title="Esketamin-Analgesie" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p class="nos-u">Vor Esketamingabe, zur Milderung psychischer UAW
        </p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Vorbereitung</div>
          <div>
            <span class="nos-mono">5mg</span>-Ampulle auf <span class="nos-mono">5ml</span> NaCl aufziehen.<br />
            <span class="nos-mono">&equals;1mg / ml</span>
          </div>
        </p>
        <nos-dose
          :items="[
            { label: 'Kinder / >60J', unit: '1mg (1ml)', color: 'teen' },
            { label: 'Alle Anderen', unit: '2mg (2ml)', color: 'adult' },]"
        ></nos-dose>
      </template>
    </nos-tab-row>
  </nos-table>
  <nos-header title="Sedierung" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Gegenatmen bei Beatmung</div>
          <div>Beim NotSan: Nach ROSC ohne Spontanes Erwachen</div>
        </p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(buccal)-Dosis</template>
      <template v-slot:content>
        <nos-dose
          :items="[
            { label: '> 50kg', unit: '5mg (1 Ampulle)', color: 'adult' },]"
        ></nos-dose>
        <v-divider class="my-2"></v-divider>
        <p>
          <div class="nos-u">Patienten unter 50kg</div>
          <div>
            <span class="nos-mono">5mg</span>-Ampulle auf <span class="nos-mono">5ml</span> NaCl aufziehen.<br />
            <span class="nos-mono">&equals;1mg / ml</span>
          </div>
        </p>
        <nos-dose :items="[
            { label: '< 50kg', unit: '1mg', per: '10kg', color: 'teen' }]"
        ></nos-dose>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~1min</template>
    <template v-slot:span>~45min</template>
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header>  
      Midazolam gehört zur Gruppe der Benzodiazepine.
    </template>
    <p>
      Midazolam bindet an GABA-Rezeptoren und beeinflusst diese dahingehend, dass sie 
      eine erhöhte Affinität für den Neurotransmitter Gamma-Aminobuttersäure (GABA) 
      aufweisen. Dieser bindet folglich in höherem Maße an den Rezeptor und sorgt für 
      eine verstärkte sedierende, anxiolytische, antikonvulsive und 
      muskelrelaxierende Wirkung. Midazolam wirkt zudem hypnotisch und kann zu 
      anterograden Amnesien führen.
    </p>
    <p>
      GABA führt zu einem vermehrten Einstrom von negativ geladenen Chloridionen in 
      die postsynaptischen Nervenzellen und sorgt so für eine Hyperpolarisation. 
      Dadurch wird die Erregungsschwelle, die zum Auslösen eines Aktionspotenzials 
      führt, erhöht und es werden weniger (oder gar keine) Aktionspotenziale mehr 
      weitergeleitet.
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
  name: "MedMidazolam",
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
      return this.$store.getters.getContentMeta("med-midazolam");
    },
  },
  methods: {},
};
</script>
