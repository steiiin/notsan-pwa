<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Asthmaanfall / COPD</nos-li>
    <nos-li>Anaphylaxie</nos-li>
    <nos-li>Pseudokrupp</nos-li>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Prednisolon</nos-li>
  </nos-list>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li variant="check">Präklinisch Irrelevant</nos-li>
    <nos-li>Blut- / Haut- / Skelettveränderungen</nos-li>
    <nos-li>Gewichtszunahme</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp; Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle"
          >Ampullen-Set &bdquo;Prednisolut&rdquo;</nos-med-label
        >
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '100mg (Pulver)' },
            { unit: '5ml (Wasser)', prefix: '+' },
          ]"
        ></nos-med-dose>
        <nos-med-label type="suppositorium" class="mt-2"
          >1 Zäpfchen &bdquo;Rectodelt&rdquo;</nos-med-label
        >
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '100mg' },
          ]"
        ></nos-med-dose>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Asthmaanfall / COPD" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Bronchialobstruktion &amp; Atemnot</div>
          <div>Giemen, Brummen. Verlängertes Exspirium.</div>
        </p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-med-dose
          :items="[
            { unit: '100mg (1 Ampulle)', color: 'adult' },
          ]"
        ></nos-med-dose>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(rect.)-Dosis</template>
      <template v-slot:content>
        <nos-med-dose
          :items="[
            { unit: '100mg (1 Zäpfchen)', color: 'baby' },
          ]"
        ></nos-med-dose>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Anaphylaxie" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Jedes Stadium der Anaphylaxie</div>
        </p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-med-dose
          :items="[
            { label: 'Ab 12 Jahren', unit: '250mg (2½ Ampullen)', color: 'adult' },
            { label: '<12 Jahre', unit: '100mg (1 Ampulle)', color: 'child' }
          ]"
        ></nos-med-dose>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(rect.)-Dosis</template>
      <template v-slot:content>
        <nos-med-dose
          :items="[
            { label: '<12 Jahre', unit: '100mg (1 Zäpfchen)', color: 'child' }
          ]"
        ></nos-med-dose>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pseudokrupp" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>(rect.)-Dosis</template>
      <template v-slot:content>
        <nos-med-dose
          :items="[
            { unit: '100mg (1 Zäpfchen)', color: 'child' }
          ]"
        ></nos-med-dose>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~30min</template>
    <template v-slot:span>~1Tag</template>
  </nos-med-effects>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs>
    <template v-slot:heading>
      Prednisolon ist ein Kortikosteroid.
    </template>
    <template v-slot:text>
      <p>
        Prednisolon wirkt antiallergisch, entzündungshemmend, membranstabilisierend 
        und antiödematös. Zudem verstärkt es die Wirkung von β2-Sympathomimetika.
      </p>
      <p>
        Bei Nahrungsmittelknappheit, bzw. Erkrankungen schüttet der Körper Kortison 
        aus, damit der Körper trotz Schmerzen &amp; Entzündungsreaktionen funktionell 
        bleibt. Rettungsdienstrelevant ist die entzündungshemmende &amp; 
        membranstabilisierende Wirkung.
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
  name: "MedPrednisolon",
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
    NosMedEffects,
  },
  computed: {
    meta() {
      return this.$store.getters.getContentMeta("med-prednisolon");
    },
  },
  methods: {},
};
</script>
