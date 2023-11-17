<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Asthmaanfall / COPD</nos-li-point>
    <nos-li-point>Anaphylaxie</nos-li-point>
    <nos-li-point>Pseudokrupp</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list-ci type="intolerable">
    <nos-li-point>Unverträglichkeit ggb. Prednisolon</nos-li-point>
  </nos-list-ci>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-check>Präklinisch Irrelevant</nos-li-check>
  </nos-list>
  <nos-list>
    <nos-li-point>Blut- / Haut- / Skelettveränderungen</nos-li-point>
    <nos-li-point>Gewichtszunahme</nos-li-point>
  </nos-list>

  <nos-header title="Dosierung &amp; Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-ampul"
          >Ampullen-Set &bdquo;Prednisolut&rdquo;</nos-content
        >
        <nos-content mode="med-size-mono">100mg Pulver</nos-content>
        <nos-content mode="med-size-mono">&nbsp;&nbsp;5ml Wasser</nos-content>
        <nos-content mode="med-size-supp" class="mt-2"
          >1 Zäpfchen &bdquo;Rectodelt&rdquo;</nos-content
        >
        <nos-content mode="med-size-mono">100mg</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Asthmaanfall / COPD" :decent="true" icon="mdi-hospital-box" />
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
        <nos-dose
          :items="[
            { unit: '100mg (1 Ampulle)', color: 'adult' },
          ]"
        ></nos-dose>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(rect.)-Dosis</template>
      <template v-slot:content>
        <nos-dose
          :items="[
            { unit: '100mg (1 Zäpfchen)', color: 'baby' },
          ]"
        ></nos-dose>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Anaphylaxie" :decent="true" icon="mdi-hospital-box" />
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
        <nos-dose
          :items="[
            { label: 'Ab 12J', unit: '250mg (2½ Ampullen)', color: 'adult' },
            { label: '< 12J', unit: '100mg (1 Ampulle)', color: 'child' }
          ]"
        ></nos-dose>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(rect.)-Dosis</template>
      <template v-slot:content>
        <nos-dose
          :items="[
            { label: '< 12J', unit: '100mg (1 Zäpfchen)', color: 'child' }
          ]"
        ></nos-dose>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pseudokrupp" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>(rect.)-Dosis</template>
      <template v-slot:content>
        <nos-dose
          :items="[
            { unit: '100mg (1 Zäpfchen)', color: 'child' }
          ]"
        ></nos-dose>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~30min</template>
    <template v-slot:span>~1Tag</template>
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header>
      Prednisolon ist ein Kortikosteroid.
    </template>
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
  name: "MedPrednisolon",
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
      return this.$store.getters.getContentMeta("med-prednisolon");
    },
  },
  methods: {},
};
</script>
