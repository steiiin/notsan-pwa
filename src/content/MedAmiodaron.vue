<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Reanimation</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list-ci type="intolerable">
    <nos-li-point>Allergie gegen Jod</nos-li-point>
    <nos-li-point>Unverträglichkeit ggb. Amiodaron</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="family">
    <nos-li-point>Keine Säuglinge (&lt; 3J wg. Gehalt von Benzylalkohol)</nos-li-point>
  </nos-list-ci>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-check>Irrelevant, weil Anwendung nur bei Lebensgefahr</nos-li-check>
  </nos-list>
  <nos-list>
    <nos-li-point>Bradykardie, Hypotonie</nos-li-point>
    <nos-li-point>Schilddrüsenfunktionsstörungen</nos-li-point>
  </nos-list>
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-ampul">
          1 Ampulle &bdquo;Cordarex&rdquo;
        </nos-content>
        <nos-content mode="med-size-mono">150mg / 3ml</nos-content>
        <nos-content mode="med-size-mono">=50mg / ml</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Reanimation" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz &amp;<br />(i.v.)-Dosis</template>
      <template v-slot:content>
        <p class="nos-u">Nach 3. Defibrillation</p>
        <nos-dose
          :items="[
            { label: 'Erwachsene', unit: '300mg (2 Ampullen)', color: 'adult' },
            { label: 'Kind (>3)', unit: '50mg', per: '10kg', color: 'child' },
            { unit: '1ml', per: '10kg', color: 'child' },
            { unit: '300mg maximal (2 Ampullen)', color: 'child' },
          ]"
        >
        </nos-dose>
        <p class="nos-u mt-2">Nach 5. Defibrillation</p>
        <nos-dose
          :items="[
            { label: 'Erwachsene', unit: '150mg (1 Ampulle)', color: 'adult' },
            { hint: 'Dosierung beim Kinder wieder wie oben, aber: ' },
            { unit: '150mg maximal (1 Ampulle)', color: 'child' },
          ]"
        >
        </nos-dose>
        <v-divider class="my-2"></v-divider>
        <p>Langsam spritzen &amp; Nachspülen.</p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~5min</template>
    <template v-slot:span>~15min</template>
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header>
      Amiodaron gehört zu den wichtigsten Medikamenten zur Behandlung einiger
      Herzrhythmusstörungen.
    </template>
    <p>
      Die Wirkungsweise von Amiodaron leider noch nicht vollständig bekannt. Allerdings
      wird es durch die von ihm induzierte Verlängerung des Aktionspotentials und der
      Refraktärzeit im Myokard den Klasse III-Antiarrhythmika zugeordnet.
    </p>
    <p>
      Amiodaron hemmt spannungssensitive Kaliumkanäle im Myokard, wodurch es zu einem
      verzögerten Kaliumausstrom während der Repolarisationsphase des Aktionspotenzials
      kommt. Hierdurch wird die Repolarisationsdauer und die Refraktärzeit ebendieses
      verlängert und Re-Entry-Mechanismen unterbunden.
    </p>
    <p>
      Die Herzfrequenz sinkt, im Rahmen der Reanimation steigt die Chance auf eine
      erfolgreiche Defibrillation mit Erreichen eines ROSC (return of spontaneous
      circulation).
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
  name: "MedAmiodaron",
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
      return this.$store.getters.getContentMeta("med-amiodaron");
    },
  },
  methods: {},
};
</script>
