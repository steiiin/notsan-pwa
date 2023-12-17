<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "16.12.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>

  <nos-header title="Anweisungen"></nos-header>
  <nos-header title="Indikation" :decent="true"></nos-header>
  <nos-list>
    <nos-li>Starke Dyspnoe &amp; Tachypnoe</nos-li>
    <nos-li>Zunehmende Schocksymptomatik</nos-li>
    <nos-li>Gestaute Halsvenen</nos-li>
    <nos-li>Einseitig abgeschwächtes Atemgeräusch</nos-li>
  </nos-list>

  <nos-header title="Hinweise" :decent="true"></nos-header>
  <nos-list>
    <nos-li>Nadel mit aufgesteckter 10ml-NaCl-Spritze verwenden</nos-li>
    <nos-li><b>Oberrand</b> der Rippe senkrecht zur Thoraxwand</nos-li>
  </nos-list>

  <nos-header title="Punktionsorte"></nos-header>
  <nos-header title="Bülau" :decent="true"></nos-header>
  <nos-list>
    <nos-li><b>Erste</b> Wahl</nos-li>
    <nos-li variant="cave">Organpunktion bei zu kaudaler Punktion</nos-li>
  </nos-list>
  <nos-img src="/img/res/image-te-monaldi.png"></nos-img>
  <nos-paragraphs :decent="true" class="mt-n1">
    <template v-slot:text>
      <p>
        Im &bdquo;safe triangle&rdquo; <br/>
        4.-5. ICR zwischen vorderer und mittlerer Axiliarlinie
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Monaldi" :decent="true"></nos-header>
  <nos-list>
    <nos-li><b>Zweite</b> Wahl</nos-li>
    <nos-li variant="cave">Arterienverletzung bei zu medialer Punktion</nos-li>
  </nos-list>
  <nos-img src="/img/res/image-te-buelau.png"></nos-img>
  <nos-paragraphs :decent="true" class="mt-n1">
    <template v-slot:text>
      <p>
        2. ICR in der Medioklavikularlinie
      </p>
    </template>
  </nos-paragraphs>

</template>

<script>
  import NosTitle from "../components/NosTitle.vue";
  import NosImg from "../components/NosImg.vue";
  import NosList from "../components/NosList.vue";
  import NosLi from "../components/NosLi.vue";
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
    name: "SchemeEntlastung",
    components: {
      NosTitle,
      NosList,
      NosLi,
      NosImg,
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
    data() {
      return {};
    },
    computed: {
      meta() {
        return this.$store.getters.getContentMeta("scheme-entlastung");
      },
    },
    methods: {},
  };
</script>
