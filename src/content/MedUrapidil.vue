<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "20.11.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Hypertensiver Notfall</nos-li>
    <nos-li>Hypertonie bei Vd. Schlaganfall</nos-li>
    <nos-li>Hypertonie bei Vd. Aortensyndrom</nos-li>
  </nos-list>
  
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Urapidil</nos-li>
  </nos-list>
  <nos-list contragroup="known">
    <nos-li>Aortenisthmusstenose</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Schwangerschaft</nos-li>
    <nos-li>Stillzeit</nos-li>
    <nos-li>Kinder &lt; 12 Jahre (durch SAA untersagt)</nos-li>
  </nos-list>
  
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li variant="cave">Überschießender Blutdruckabfall</nos-li>
    <nos-li>Kopfschmerzen, Müdigkeit</nos-li>
    <nos-li>Schwindel, Übelkeit</nos-li>
    <nos-li variant="todo">Flachlagerung</nos-li>
    <nos-li variant="todo">Volumengabe</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle &bdquo;Ebrantil&rdquo;</nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '25mg', per: '5ml' },
            { unit: '5mg', per: 'ml', prefix: '=' },
          ]"
        ></nos-med-dose>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Blutdrucksenkung" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Blutdruck über Grenzwert</div>
          <div>RR<sub>syst.</sub> &gt; 220mmHg ODER<br/> RR<sub>dia.</sub> &gt; 120mmHg</div>
        </p>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
          <nos-med-dose
            :items="[{  unit: '5mg (1ml)', color: 'adult' },]"
          ></nos-med-dose>
        <v-divider class="my-2"></v-divider>
        <p>
          <div class="nos-u">Alle 5min: Repetition</div>
          <div>Wenn RR<sub>syst.</sub> weiterhin über 175mmHg.</div>
        </p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~5min</template>
    <template v-slot:span>~30min</template>
  </nos-med-effects>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs>
    <template v-slot:heading>
      Antagonist der α-Adrenozeptoren.
    </template>
    <template v-slot:text>
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
import NosRowCaption from "../components/NosRowCaption.vue";
import NosMedLabel from "../components/NosMedLabel.vue";
import NosMedDose from "../components/NosMedDose.vue";
import NosMedEffects from "../components/NosMedEffects.vue";

export default {
  name: "MedUrapidil",
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosList,
    NosLi,
    NosTable,
    NosRowCaption,
    NosMedLabel,
    NosMedDose,
    NosMedEffects
  },
  computed: {
    meta() {
      return this.$store.getters.getContentMeta("med-urapidil");
    },
  },
  methods: {},
};
</script>
