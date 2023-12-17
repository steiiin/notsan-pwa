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
        Das (S)AMPLER-Schema geht auf alle relevanten Fragestellungen einer kurzen Notfallanamnese ein und ist als Ergänzung des ABCDE-Schemas zu sehen. Zur Not kann das SAMPLER-Schema als Fremdanamnese erhoben werden. 
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Schema"></nos-header>
  <nos-table>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="S" meaning="Symptome" color="red-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Aktuelle Symptome</div>
          <div>Beim Trauma obsolet.</div>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="A" meaning="Allergien" color="red-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Allergien &amp; Unverträglichkeiten</div>
          <div>- Medikamente</div>
          <div>- Pflaster</div>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="P" meaning="Patientengeschichte" color="red-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Medizinische Vorgeschichte</div>
          <div>- Operationen</div>
          <div>- Vordiagnosen</div>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="L" meaning="Letzte ..." color="red-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Letzte ...</div>
          <div>- Mahlzeit</div>
          <div>- Stuhlgang / Miktion</div>
          <div>- Krankenhausaufenthalt</div>
          <div>- Regelblutung</div>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="E" meaning="Ereignisse" color="red-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Ereignisse</div>
          <div>- Auslösende Faktoren zum Vorfall</div>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center ">
      <template v-slot:caption>
        <nos-caption-akronym
          letter="R" meaning="Risikofaktoren" color="red-darken-1">
        </nos-caption-akronym>
      </template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Risikofaktoren</div>
          <div>- Raucher</div>
          <div>- Diabetiker</div>
          <div>- Schwangere</div>
          <div>- Alkoholiker</div>
        </p>
      </template>
    </nos-row-caption>

  </nos-table>
</template>

<script>
  import NosTitle from "../components/NosTitle.vue";
  import NosHeader from "../components/NosHeader.vue";
  import NosParagraphs from "../components/NosParagraphs.vue";
  import NosTable from "../components/NosTable.vue";
  import NosRowCaption from "../components/NosRowCaption.vue";
  import NosRowScore from "../components/NosRowScore.vue";
  import NosRowResult from "../components/NosRowResult.vue";
  import NosCaptionAkronym from "../components/NosCaptionAkronym.vue";
  import NosBtnLink from "../components/NosBtnLink.vue";
  import NosBtnToggle from "../components/NosBtnToggle.vue";

  export default {
    name: "SchemeSAMPLER",
    components: {
      NosTitle,
      NosHeader,
      NosParagraphs,
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
        return this.$store.getters.getContentMeta("scheme-sampler");
      },
    },
    methods: {},
  };
</script>
