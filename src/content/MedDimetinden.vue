<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>

  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Anaphylaxie</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Dimetinden</nos-li>
  </nos-list>
  <nos-list contragroup="acute">
    <nos-li>Engwinkelglaukom (Glaukomanfall), d.h.:</nos-li>
    <nos-li :decent="true">Sehstörungen / Farbspiele beim Sehen</nos-li>
    <nos-li :decent="true">Starke Kopfschmerzen &amp; Erbrechen</nos-li>
    <nos-li :decent="true">Gerötetes Auge</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Schwangerschaft</nos-li>
    <nos-li>Stillzeit</nos-li>
    <nos-li>Kinder &lt; 12 Jahre (durch SAA untersagt)</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li variant="cave">Sedierung, insb. bei Alkoholeinfluss</nos-li>
    <nos-li>Müdigkeit (bis 24h: <b>Aufklärung des Patienten</b>)</nos-li>
    <nos-li variant="todo"> Verstärkte Vigilanzkontrolle </nos-li>
  </nos-list>
  <nos-list>
    <nos-li>Sehstörungen</nos-li>
    <nos-li>Mund- &amp; Hauttrockenheit</nos-li>
    <nos-li>Gastrointestinale Beschwerden</nos-li>
    <nos-li>Unruhe, Angst</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle &bdquo;Histakut&rdquo;</nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '4mg', per: '4ml' },
            { unit: '1mg', per: 'ml', prefix: '=' },
          ]"
        ></nos-med-dose>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="ANAPHYLAXIE" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p class="nos-u">Jegliches Stadium d. Anaphylaxie</p>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-med-dose
          :items="[
          { label: 'Ab 12 Jahren', unit: '1mg', per: '10kg', color: 'adult' }, 
          { unit: '8mg maximal' }]"
        ></nos-med-dose>
        <v-divider class="my-2"></v-divider>
        <p>Langsam spritzen. <br /><b>Keine</b> Wiederholungsgabe nach SAA.</p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~15min</template>
    <template v-slot:span>~12h (<b>cave:</b>&nbsp;24h vermindetes Reaktionsvermögen)</template>
  </nos-med-effects>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs>
    <template v-slot:heading> Dimetinden ist ein Antihistaminikum. </template>
    <template v-slot:text>
      <p>
        Dimetinden ist ein nichtkompetitiver Histamin-Antagonist am H1-Rezeptor und wirkt nicht auf H2-Rezeptoren. Erst
        in Kombination mit einem H2-Blocker (z.B. Ranitidin) kann die gesamte Wirkung des Histamins unterdrückt werden.
      </p>
      <p>
        Im Gegensatz zu anderen Antihistaminika blockiert Dimetinden bereits mit Histamin besetzte H1-Rezeptoren. Es
        nimmt damit eine Sonderstellung unter den Antihistaminika ein, da diese sonst nur die noch nicht besetzte
        Rezeptoren blockieren.
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
    name: "MedDimetinden",
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
      NosMedEffects,
    },
    computed: {
      meta() {
        return this.$store.getters.getContentMeta("med-dimetinden");
      },
    },
    methods: {},
  };
</script>
