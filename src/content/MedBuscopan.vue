<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Kolikartige Schmerzen</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list-ci type="intolerable">
    <nos-li-point>Unverträglichkeit ggb. Butylscopolamin</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="acute">
    <nos-li-point>Tachyarrhythmie</nos-li-point>
    <nos-li-point>Engwinkelglaukom (Glaukomanfall), d.h.:</nos-li-point>
    <nos-li-point class="nos-li-decent"
      >Sehstörungen / Farbspiele beim Sehen</nos-li-point
    >
    <nos-li-point class="nos-li-decent"
      >Starke Kopfschmerzen &amp; Erbrechen</nos-li-point
    >
    <nos-li-point class="nos-li-decent">Gerötetes Auge</nos-li-point>
    <nos-li-point>Ileus (Stuhlverhalt)</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="known">
    <nos-li-point>Myasthenia gravis</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="family">
    <nos-li-point>Schwangerschaft</nos-li-point>
    <nos-li-point>Stillzeit</nos-li-point>
    <nos-li-point>Kinder &lt; 12 Jahre</nos-li-point>
  </nos-list-ci>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-cave>Tachykardie</nos-li-cave>
    <nos-li-cave>Blutdruckabfall</nos-li-cave>
  </nos-list>
  <nos-list>
    <nos-li-point>Schwindel</nos-li-point>
    <nos-li-point>Mundtrockenheit</nos-li-point>
    <nos-li-point>Sehstörungen</nos-li-point>
    <nos-li-point>Unruhe, Angst</nos-li-point>
  </nos-list>
  <nos-list>
    <nos-li-todo>
      Bei Blutdruckabfall: Flüssigkeitsersatz, <br />ggf. Schocklagerung
    </nos-li-todo>
  </nos-list>
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-ampul">1 Ampulle &bdquo;Buscopan&rdquo;</nos-content>
        <nos-content mode="med-size-mono">20mg</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Kolikartiger Schmerz" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p class="nos-u">NRS &gt; 6</p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-dose
          :items="[
            { label: 'Jugendliche', unit: '15mg (¾ Ampulle)', color: 'teen' },
            { label: 'Erwachsene', unit: '20mg (1 Ampulle)', color: 'adult' },
          ]"
        ></nos-dose>
        <v-divider class="my-2"></v-divider>
        <p>
          Auf 20ml NaCl aufziehen, langsam spritzen<br />
          &amp; nachspülen
        </p>
        <p>Herzfrequenz mit EKG oder SpO<sub>2</sub>-Sensor überwachen.</p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~5min</template>
    <template v-slot:span>~5h</template>
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header> Butylscopolamin ist ein Parasympatholytikum. </template>
    <p>
      Butylscopolamin wirkt anticholinerg und spasmolytisch auf die glatte Muskulatur des
      Verdauungs- und Urogenitaltrakts und der Gallenwege. Die Wirkung beruht auf der
      Hemmung von Muskarinrezeptoren der glatten Muskulatur und der Hemmung der
      ganglionären Übertragung durch Acetylcholin.
    </p>
    <p class="font-italic">
      Laut S2k-Leitlinie zur Diagnostik, Therapie und Metaphylaxe der Urolithiasis ist
      Butylscopolamin in der Therapie von Harnleiterkoliken ineffektiv und sollte somit
      nicht zur Therapie verwendet werden. Die Dosis, welche zur Hemmung der Peristaltik
      von Harnleitern benötigt wird, sei demnach zu hoch.
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
  name: "MedBuscopan",
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
      return this.$store.getters.getContentMeta("med-buscopan");
    },
  },
  methods: {},
};
</script>
