<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Asthmaanfall / COPD</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list-ci type="intolerable">
    <nos-li-point>Unverträglichkeit ggb. Ipratropiumbromid</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="acute">
    <nos-li-point>Tachykardie / Tachyarrhythmie (symptomatisch)</nos-li-point>
    <nos-li-point>Engwinkelglaukom (Glaukomanfall), d.h.:</nos-li-point>
    <nos-li-point class="nos-li-decent"
      >Sehstörungen / Farbspiele beim Sehen</nos-li-point
    >
    <nos-li-point class="nos-li-decent"
      >Starke Kopfschmerzen &amp; Erbrechen</nos-li-point
    >
    <nos-li-point class="nos-li-decent">Gerötetes Auge</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="family">
    <nos-li-point>Schwangerschaft</nos-li-point>
    <nos-li-point>Stillzeit</nos-li-point>
    <nos-li-point>Kinder &lt; 12 Jahre (durch SAA untersagt)</nos-li-point>
  </nos-list-ci>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-point>Brennt im Auge</nos-li-point>
    <nos-li-point>Anticholinerge Symptome:</nos-li-point>
    <nos-li-point class="nos-li-decent"> Mund- / Schleimhauttrockenheit </nos-li-point>
    <nos-li-point class="nos-li-decent"
      >Auge: Sehstörungen / Innendruckerhöhung</nos-li-point
    >
    <nos-li-point class="nos-li-decent"
      >Kardio: Tachykardie, Blutdruckanstieg</nos-li-point
    >
    <nos-li-point class="nos-li-decent"
      >Magendarm: Harnverhaltung, Magenschmerzen</nos-li-point
    >
    <nos-li-point class="nos-li-decent">Psychisch: Unruhe, Tremor, Angst</nos-li-point>
  </nos-list>
  <nos-list>
    <nos-li-todo>Bei zunehmender Verschlechterung: Anwendung abbrechen</nos-li-todo>
  </nos-list>
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-ampul">1 Phiole Ipratropiumbromid</nos-content>
        <nos-content mode="med-size-mono">0,5mg</nos-content>
        <v-divider class="my-2"></v-divider>
        <p>
          <div class="nos-u">Im LK Meißen durch Kombipräparat ersetzt:</div>
          <div><v-btn>TODO MedIpramol</v-btn></div>
        </p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Asthmaanfall / Exarzerbierte COPD" :decent="true" icon="mdi-hospital-box" />
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
      <template v-slot:caption>(p.i.)-Dosis</template>
      <template v-slot:content>
        <nos-dose
          :items="[{ unit: '0,5mg (1 Phiole)' }]"
        ></nos-dose>
        <v-divider class="my-2"></v-divider>
        <p>
          <span class="nos-mono">+2ml</span> NaCl in Vernebelungsmaske.<br/>
          Mit <span class="nos-mono">6-9l</span> Sauerstoff vernebeln.
        </p>
        <p class="nos-u">Repetition nach 30min möglich</p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~30s</template>
    <template v-slot:span>~4h</template>
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header>
      Ipratropiumbromid ist ein Derivat von Atropin.
    </template>
    <p>
      Ipratropiumbromid ist ein Parasympatholytikum und wird auch als 
      SAMA (Short Acting Muscarinic Antagonist) bezeichnet. Es wirkt 
      antagonistisch an den muskarinischen Acetylcholinrezeptoren (mACh) 
      und führt zu einer Bronchodilatation. Zudem fördert es den Abtransport 
      von Schleim aus den Bronchien.
    </p>
    <p>
      Die Wirkung ist lokal auf die Lunge begrenzt, Ipratropiumbromid gelangt 
      nicht in das ZNS und beeinflusst die Herzfrequenz nur gering. 
      Bei einer Überdosierung zeigen sich anticholinerge Symptome.
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
  name: "MedIpratropium",
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
      return this.$store.getters.getContentMeta("med-ipratropium");
    },
  },
  methods: {},
};
</script>