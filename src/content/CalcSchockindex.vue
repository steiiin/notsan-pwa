<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "15.12.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>

  <nos-header title="Einsatz"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>Der Schockindex soll als orientierender Paramter zur Beurteilung der Kreislaufsituation dienen. Eine zuverlässige Beurteilung eines Patienten erlaubt der Schockindex indes nicht, er wird als obsolet angesehen. Er ist in der Praxis jedoch immer noch verbreitet und als Begriff geläufig. </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Vitalparameter"></nos-header>
  <nos-table>
    <div style="max-width: 15rem">
      <v-text-field
        id="id-input-herzfrequenz"
        class="mt-2"
        v-model="herzfrequenz"
        hide-details="auto"
        label="Herzfrequenz"
        variant="solo"
        suffix="/min"
        type="tel"
        v-on:keypress="filterInt($event,herzfrequenz)"
      ></v-text-field>
      <v-text-field
        id="id-input-rrsyst"
        class="mt-2"
        v-model="rrsyst"
        hide-details="auto"
        label="Blutdruck (syst.)"
        variant="solo"
        suffix="mmHg"
        type="tel"
        v-on:keypress="filterInt($event,rrsyst)"
      ></v-text-field>
    </div>
  </nos-table>

  <template v-if="schockindex.index > 0">
    <nos-header title="Ergebnis"></nos-header>
    <nos-table>
      <nos-row-result :color="schockindex.color">
          <template v-slot:heading>{{ schockindex.title }}</template>
          <template v-slot:text>Schockindex: {{ schockindex.index }}</template>
        </nos-row-result>
    </nos-table>
  </template>

</template>

<script>
  import NosTitle from "../components/NosTitle.vue";
  import NosHeader from "../components/NosHeader.vue";
  import NosParagraphs from "../components/NosParagraphs.vue";
  import NosTable from "../components/NosTable.vue";
  import NosRowCaption from "../components/NosRowCaption.vue";
  import NosRowScore from "../components/NosRowScore.vue";
  import NosRowResult from "../components/NosRowResult.vue";
  import NosBtnLink from "../components/NosBtnLink.vue";
  import NosBtnToggle from "../components/NosBtnToggle.vue";
  import NosBtnGroup from "../components/NosBtnGroup.vue";
  import NosBtnChip from "../components/NosBtnChip.vue";

  export default {
    name: "CalcSchockindex",
    components: {
      NosTitle,
      NosHeader,
      NosParagraphs,
      NosTable,
      NosRowCaption,
      NosRowScore,
      NosRowResult,
      NosBtnLink,
      NosBtnToggle,
      NosBtnGroup,
      NosBtnChip,
    },
    data() {
      return {
        herzfrequenz: "",
        rrsyst: "",
        schockindex: -1
      };
    },
    computed: {
      meta() {
        return this.$store.getters.getContentMeta("calc-schockindex");
      },
      schockindex() {

        let schockindex = -1
        let valueHf = parseInt(this.herzfrequenz)
        let valueRr = parseInt(this.rrsyst)
        if (isNaN(valueHf) || isNaN(valueRr)) {} 
        else {
          schockindex = (valueHf / valueRr).toFixed(1);
        }
        
        if (schockindex < 0.8)
        {
          return {
          color: "success",
          title: "Normal",
          index: schockindex }
        }
        else if (schockindex < 1)
        {
          return {
          color: "warning",
          title: "Etwas hoch",
          index: schockindex }
        }
        else {
          return {
          color: "error",
          title: "Zu Hoch",
          index: schockindex }
        }

      }
    },
    methods: {
      filterInt(e,currentValue) {
        let char = String.fromCharCode(e.keyCode);
        if (/^[0-9]+$/.test(char)) {
          let number = parseInt(currentValue + char);
          if (isNaN(number)) {
            e.preventDefault();
            return;
          }

          // prevent over 3000
          if (number > 3000) {
            e.preventDefault();
          }

          return true;
        } else {
          e.preventDefault();
        }
      },

    },
  };
</script>
<style lang="scss" scoped>
.nos-doses-backlink {
  margin: -18px 0 0 0;
}
</style>