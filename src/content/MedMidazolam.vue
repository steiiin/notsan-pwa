<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Krampfdurchbrechung</nos-li>
    <nos-li>Fieberkrampf</nos-li>
    <nos-li>Analgosedierung mit Esketamin</nos-li>
    <nos-li>Sedierung</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen"></nos-header>
  <nos-header title="Zur Krampfdurchbrechung" :decent="true" icon="$databaseOutline" />
  <nos-list contragroup="intolerable">
    <nos-li>Überempfindlichkeit ggb. Midazolam oder Benzodiazepine</nos-li>
  </nos-list>
  <nos-list contragroup="acute">
    <nos-li>Akute Ateminsuffizienz</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Kinder &lt; 3 Monate</nos-li>
  </nos-list>

  <nos-header title="Zur Sedierung zusätzlich" :decent="true" icon="$databasePlusOutline" />
  <nos-list contragroup="known">
    <nos-li>Schlafapnoe-Syndrom</nos-li>
    <nos-li>Myasthenia gravis</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Schwangerschaft</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li variant="cave">Atemdepression</nos-li>
    <nos-li variant="todo">Erwecken, zum Atmen animieren</nos-li>
    <nos-li variant="todo">Sauerstoffgabe, evtl. assistierte Beatmung</nos-li>
  </nos-list>
  <nos-list>
    <nos-li>Müdigkeit, Amnesie</nos-li>
    <nos-li>Muskelschwäche &rarr; Sturzgefahr</nos-li>
    <nos-li>Möglich: paradoxe Erregungszustände</nos-li>
    <nos-li variant="todo">Engmaschige Überwachung</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle Midazolam</nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '5mg', per: '1ml' },
          ]"
        ></nos-med-dose>
        <nos-med-label type="nadel" class="mt-2">
          4 Spritzen &bdquo;Buccolam&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '2,5mg (Gelb)'},
            { unit: '5mg (Blau)' },
            { unit: '7,5mg (Lila)' },
            { unit: '10mg (Rot)' },
          ]"
        ></nos-med-dose>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Krampfdurchbrechung" :decent="true" icon="$hospitalBox" />
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
        <nos-med-dose
          :items="[
            { label: 'Erwachsene', unit: '10mg (Rot)', color: 'child' },
            { label: 'Ab 10 Jahren', unit: '10mg (Rot)', color: 'child' },
            { label: 'Grundschule', unit: '7,5mg (Lila)', color: 'baby' },
            { label: 'Kindergarten', unit: '5mg (Blau)', color: 'adult' },
            { label: '<1 Jahr', unit: '2,5mg (Gelb)', color: 'teen' },]"
        ></nos-med-dose>
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
  <nos-header title="Esketamin-Analgesie" :decent="true" icon="$hospitalBox" />
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
        <nos-med-dose
          :items="[
            { label: 'Kinder / >60J', unit: '1mg (1ml)', color: 'teen' },
            { label: 'Alle Anderen', unit: '2mg (2ml)', color: 'adult' },]"
        ></nos-med-dose>
      </template>
    </nos-tab-row>
  </nos-table>
  <nos-header title="Sedierung" :decent="true" icon="$hospitalBox" />
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
        <nos-med-dose
          :items="[
            { label: '> 50kg', unit: '5mg (1 Ampulle)', color: 'adult' },]"
        ></nos-med-dose>
        <v-divider class="my-2"></v-divider>
        <p>
          <div class="nos-u">Patienten unter 50kg</div>
          <div>
            <span class="nos-mono">5mg</span>-Ampulle auf <span class="nos-mono">5ml</span> NaCl aufziehen.<br />
            <span class="nos-mono">&equals;1mg / ml</span>
          </div>
        </p>
        <nos-med-dose :items="[
            { label: '< 50kg', unit: '1mg', per: '10kg', color: 'teen' }]"
        ></nos-med-dose>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~1min</template>
    <template v-slot:span>~45min</template>
  </nos-med-effects>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs>
    <template v-slot:heading>  
      Midazolam gehört zur Gruppe der Benzodiazepine.
    </template>
    <template v-slot:text>
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
  name: "MedMidazolam",
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
      return this.$store.getters.getContentMeta("med-midazolam");
    },
  },
  methods: {},
};
</script>
