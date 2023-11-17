<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Hypoglykämie</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list-ci>
    <nos-li-point>
      Keine i.v.-Gabe, wenn Wach und &bdquo;Schluckfähig&rdquo;
    </nos-li-point>
    <nos-li-todo>Orale Gabe bevorzugen</nos-li-todo>
  </nos-list-ci>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-cave>Venenreizung, Nekrose bei Parasavat</nos-li-cave>
  </nos-list>
  <nos-list>
    <nos-li-todo> Bei Parasavat: Infusion entfernen, im Krankenhaus melden </nos-li-todo>
    <nos-li-todo> Maximal 20%ige Lösung </nos-li-todo>
    <nos-li-todo> Bei laufender Infusion spritzen &amp; nachspülen </nos-li-todo>
  </nos-list>
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-ampul">1 Ampulle G20</nos-content>
        <nos-content mode="med-size-mono">2g / 10ml</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Hypoglykämie" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">BZ &lt; <span class="nos-mono">3,3mmol/l</span></div>
          <div>Bzw. &lt; <span class="nos-mono">60mg/dl</span></div>
        </p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-dose
          :items="[
            { label: 'Ab 30kg', unit: '10g (5 Ampullen)', color: 'adult' },
            { label: 'Kindergarten', unit: '4g (2 Ampullen)', color: 'child' },
            { label: 'Kleinkind', unit: '2g (2 Ampullen)', color: 'baby' }
          ]"
        ></nos-dose>
        <v-divider class="my-2"></v-divider>
        <p class="nos-u">Nach 5min Kontrollmessung &amp; Repetition</p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~3min</template>
    <template v-slot:span>wenige Minuten bis 1h (je nach Stoffwechsel)</template>
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header>
      Glucose ist Zucker.
    </template>
    <p>
      In jeder Form der Gabe (intravenös oder oral) bewirkt der Einsatz 
      von Glukose eine Erhöhung der Blutglukosekonzentration und stellt 
      dem Körper somit ausreichend Zucker für die Aufrechterhaltung des 
      Stoffwechsels bereit. Bei einer intravenösen Gabe wird Glukose direkt 
      im Blut aufgenommen und von dort verteilt, bei der oralen Gabe wird 
      die Glukose über den Darm aufgenommen und von hier in die Blutbahn 
      abgegeben.
    </p>
    <p>
      Da die vom Rettungsdienst gegebene Glukose nur kurz wirkt, sollte der 
      Patient ergänzend auch langsam wirksame Kohlenhydrate 
      (Brot, Kräcker etc.) zu sich nehmen, um einem folgenden 
      BZ-Abfall entgegenzuwirken.
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
  name: "MedGlucose",
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
      return this.$store.getters.getContentMeta("med-glucose");
    },
  },
  methods: {},
};
</script>
