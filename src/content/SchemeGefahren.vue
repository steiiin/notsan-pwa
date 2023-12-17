<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "16.12.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>

  <nos-header title="Einsatz"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Gefahrenbeurteilung ist Teil jedes Einsatzes.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Eigen- &amp; Patientenschutz"></nos-header>
  <nos-header title="Beurteilung &amp; Abwehr" :decent="true"></nos-header>
  <nos-list>
    <nos-li>Dynamisch</nos-li>
    <nos-li :decent="true">Auf Anfahrt</nos-li>
    <nos-li :decent="true">Auf Sicht</nos-li>
    <nos-li :decent="true">Im Einsatz</nos-li>

    <nos-li>Wirkkette</nos-li>
    <nos-li :decent="true">Ursache</nos-li>
    <nos-li :decent="true">Wirkung</nos-li>
    <nos-li :decent="true">Bedrohtes Objekt</nos-li>

    <nos-li>Priorisierung</nos-li>
    <nos-li :decent="true">&bdquo;Welche Gefahr muss zuerst bekämpft werden?&rdquo;</nos-li>

    <nos-li>Gefahrenabwehr</nos-li>
    <nos-li :decent="true">Ursache bekämpfen</nos-li>
    <nos-li :decent="true">Wirkung unterbrechen</nos-li>
    <nos-li :decent="true">Objekt entfernen</nos-li>
    <nos-li :decent="true">Rückzug bei unkalkulierbarem Risiko</nos-li>
  </nos-list>

  <nos-header title="Aufstellung" :decent="true"></nos-header>
  <nos-list>
    <nos-li>Außerhalb vom Gefahrenbereich</nos-li>
    <nos-li>Außerhalb der Zufahrtswege</nos-li>
    <nos-li>Außerhalb von Stellflächen für Facheinsatzmittel</nos-li>
    <nos-li :decent="true">z.B. Kran, Drehleiter, Polizei</nos-li>
    <nos-li>Gleiche Rettungsmittel gesammelt, nicht verteilt</nos-li>
  </nos-list>

  <nos-header title="Merkregeln"></nos-header>
  <nos-list>
    <nos-li><span class="nos-gef-A">W</span>asser</nos-li>
    <nos-li><span class="nos-gef-A">W</span>etter</nos-li>
    <nos-li><span class="nos-gef-B">V</span>erkehr</nos-li>
    <nos-li><span class="nos-gef-C">D</span>unkelheit</nos-li>
    <v-divider class="my-2"></v-divider>
    <nos-li><span class="nos-gef-A">A</span>temgifte</nos-li>
    <nos-li><span class="nos-gef-A">A</span>tomare Gefahren</nos-li>
    <nos-li><span class="nos-gef-A">A</span>usbreitung</nos-li>
    <nos-li><span class="nos-gef-A">A</span>ngstreaktion</nos-li>
    <v-spacer class="my-1"></v-spacer>
    <nos-li><span class="nos-gef-C">C</span>hemische/Biologische Gefahrstoffe</nos-li>
    <v-spacer class="my-1"></v-spacer>
    <nos-li><span class="nos-gef-B">E</span>xplosion &amp; Brand</nos-li>
    <nos-li><span class="nos-gef-B">E</span>rkrankungen</nos-li>
    <nos-li><span class="nos-gef-B">E</span>lektrizität</nos-li>
    <nos-li><span class="nos-gef-B">E</span>insturz &amp; Absturz</nos-li>
  </nos-list>

</template>

<script>
  import NosTitle from "../components/NosTitle.vue";
  import NosHeader from "../components/NosHeader.vue";
  import NosParagraphs from "../components/NosParagraphs.vue";
  import NosList from "../components/NosList.vue";
  import NosLi from "../components/NosLi.vue";
  import NosTable from "../components/NosTable.vue";
  import NosRowCaption from "../components/NosRowCaption.vue";
  import NosRowScore from "../components/NosRowScore.vue";
  import NosRowResult from "../components/NosRowResult.vue";
  import NosCaptionAkronym from "../components/NosCaptionAkronym.vue";
  import NosBtnLink from "../components/NosBtnLink.vue";
  import NosBtnToggle from "../components/NosBtnToggle.vue";

  export default {
    name: "SchemeGefahren",
    components: {
      NosTitle,
      NosHeader,
      NosParagraphs,
      NosList,
      NosLi,
      NosTable,
      NosRowCaption,
      NosRowScore,
      NosRowResult,
      NosCaptionAkronym,
      NosBtnLink,
      NosBtnToggle,
    },
    computed: {
      meta() {
        return this.$store.getters.getContentMeta("scheme-gefahren");
      },
    },
    methods: {},
  };
</script>

<style lang="scss" scoped>

[class^="nos-gef"] {

  font-weight: bold;
  font-family: monospace;

}
.nos-gef {

  &-A {
    color: #F71C1C;
  }
  &-B {
    color: #3D47A1;
  }
  &-C {
    color: #FF6F00;
  }

}

</style>
