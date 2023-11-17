<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Hypertensiver Notfall</nos-li-point>
    <nos-li-point>Hypertonie bei Vd. Schlaganfall</nos-li-point>
    <nos-li-point>Hypertonie bei Vd. Aortensyndrom</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list-ci type="intolerable">
    <nos-li-point>Unverträglichkeit ggb. Urapidil</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="known">
    <nos-li-point>Aortenisthmusstenose</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="family">
    <nos-li-point>Schwangerschaft</nos-li-point>
    <nos-li-point>Stillzeit</nos-li-point>
    <nos-li-point>Kinder &lt; 12 Jahre (durch SAA untersagt)</nos-li-point>
  </nos-list-ci>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-cave>Überschießender Blutdruckabfall</nos-li-cave>
  </nos-list>
  <nos-list>
    <nos-li-point>Kopfschmerzen, Müdigkeit</nos-li-point>
    <nos-li-point>Schwindel, Übelkeit</nos-li-point>
  </nos-list>
  <nos-list>
    <nos-li-todo>Flachlagerung</nos-li-todo>
    <nos-li-todo>Volumengabe</nos-li-todo>
  </nos-list>
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-ampul"
          >1 Ampulle &bdquo;Ebrantil&rdquo;</nos-content
        >
        <nos-content mode="med-size-mono">25mg / 5ml</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Blutdrucksenkung" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Blutdruck über Grenzwert</div>
          <div>RR<sub>syst.</sub> &gt; 220mmHg ODER<br/> RR<sub>dia.</sub> &gt; 120mmHg</div>
        </p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
          <nos-dose
            :items="[{  unit: '5mg (1ml)', color: 'adult' },]"
          ></nos-dose>
        <v-divider class="my-2"></v-divider>
        <p>
          <div class="nos-u">Alle 5min: Repetition</div>
          <div>Wenn RR<sub>syst.</sub> weiterhin über 175mmHg.</div>
        </p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~5min</template>
    <template v-slot:span>~30min</template>
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header>
      Antagonist der α-Adrenozeptoren.
    </template>
    <p>
      Urapidil blockiert selektiv postsynaptische adrenerge α1-Rezeptoren in der 
      Peripherie und hemmt so die vasokonstriktorische Wirkung der Katecholamine. 
      Der Wirkstoff hat also peripher vasodilatierende Effekte und senkt sowohl den 
      systolischen als auch diastolischen Blutdruck durch Verminderung des 
      peripheren Widerstandes.
    </p>
    <p>
      Hinzu kommt eine zentrale Wirkung durch Stimulation von 5-HT1A-Rezeptoren. 
      Diese führt zur Modulation der Kreislaufregulationszentren, sodass es zur 
      Senkung des Sympathikustonus mit Verhinderung einer reflektorischen 
      Sympathikusaktivierung kommt.
    </p>
    <p>
      Urapidil senkt über diese beiden Mechanismen den Blutdruck und kann daher bei 
      Hypertonie sowie allen Komplikationen eines hypertensiven Notfalls angewendet 
      werden.
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
  name: "MedUrapidil",
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
      return this.$store.getters.getContentMeta("med-urapidil");
    },
  },
  methods: {},
};
</script>
