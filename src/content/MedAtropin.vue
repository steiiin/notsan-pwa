<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Instabile Bradykardie</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list-ci type="intolerable">
    <nos-li-point>Unverträglichkeit ggb. Atropin</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="family">
    <nos-li-point>Keine Kinder (&lt; 18J durch SAA untersagt)</nos-li-point>
  </nos-list-ci>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-point>Anticholinerges Syndrom:</nos-li-point>
    <nos-li-point class="nos-li-decent">Mund-/Schleimhauttrockenheit</nos-li-point>
    <nos-li-point class="nos-li-decent">Sehstörung, Augeninnendruckerhöhung</nos-li-point>
    <nos-li-point class="nos-li-decent">Tachykardie, Blutdruckanstieg</nos-li-point>
    <nos-li-point class="nos-li-decent">Harnverhalt, Obstipation</nos-li-point>
    <nos-li-point class="nos-li-decent">Psychisch: Unruhe, Tremor, Bewusstseinsstörung</nos-li-point>
  </nos-list>
  <nos-list>
    <nos-li-point>Wirkungsverstärkung von Neuroleptika</nos-li-point>
    <nos-li-point>Bei Dosen &lt; 0,5mg auch paradoxe Bradykardie möglich</nos-li-point>
  </nos-list>
  <nos-list>
    <nos-li-todo> Anwendung von Atropin beenden &amp; Alternativen benutzen. </nos-li-todo>
    <div class="mt-1"><v-btn>TODO: BPR Bradykardie</v-btn></div>
  </nos-list>
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-ampul">1 Ampulle Atropin</nos-content>
        <nos-content mode="med-size-mono">0,5mg / 1ml</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Instabile Bradykardie" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-dose
          :items="[{ label: 'Erwachsene', unit: '0,5mg (1 Ampulle)', color: 'adult' }]"
        ></nos-dose>
        <p>
          <div class="nos-u mt-2">
            Bei nachweisbarer, <br />Aber unzureichender Wirkung:
          </div>
          Wiederholung alle 3 Minuten bis Bradykardie ausreichend therapiert.
        </p>
        <p>
          Maximaldosis: <span class="nos-mono">3mg (6 Ampullen)</span>
        </p>
        <v-divider class="my-2"></v-divider>
        <p>
          <div class="nos-u">
            Wenn Wirkungslos, Alternativen benutzen:
          </div>
          <div class="mt-1"><v-btn>TODO: BPR Bradykardie</v-btn></div>
        </p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~10min</template>
    <template v-slot:span>~3h</template>
  </nos-pharmakin>

  <nos-table>
    <nos-content iconPre="mdi-timer-outline"><i>Wirkeintritt:</i>&emsp;~10min</nos-content>
    <nos-content iconPre="mdi-timer"
      ><i>Wirkdauer:</i>&emsp;~3h</nos-content
    >
  </nos-table>
  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header> Atropin ist ein Parasympatholytikum. </template>
    <p>
      Es blockiert die muskarinergen Rezeptoren, auf die normalerweise das 
      Acetylcholin des Parasympathikus wirkt.
    </p>
    <p>
      Diese Eigenschaft führt zu einer breiten Palette pharmakologischer Wirkungen:
      <ol class="ms-4"> 
        <li>Herzfrequenzsteigerung &amp; Beschleunigung der AV-Überleitungszeit</li>
        <li>Bronchodilatation</li>
        <li>Verminderung der Peristaltik &amp; Sekretion im Gastrointestinaltrakt</li>
        <li>Relaxation der glatten Muskulatur</li>
        <li>Auge: Akkomodationshemmung &amp; Mydriasis</li>
        <li>Verminderte Schweißproduktion</li>
        <li>Verminderte Speichelbildung</li>
      </ol>
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
  name: "MedAspirin",
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
      return this.$store.getters.getContentMeta("med-atropin");
    },
  },
  methods: {},
};
</script>
