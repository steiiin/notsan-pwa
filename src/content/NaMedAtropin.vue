<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "11.12.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>

  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Antidot bei Parasympathomimetika-Vergiftung</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
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
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle Atropin</nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '100mg', per: '10ml' },
            { unit: '10mg', per: '  ml' }, 
          ]"
        ></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Initialdosis</div>
          <nos-med-dose :items="[
            { label: 'Erwachsene', unit: '5mg (½ml)', per: '10min', color: 'adult' },
          ]"></nos-med-dose>
        </p>
        <p>
          <div>Für Kinder <span class="nos-mono">1ml</span> auf <span class="nos-mono">10ml</span> aufziehen.</div>
          <nos-med-dose :items="[
            { label: 'Kinder', unit: '1mg (1ml)', per: '10min', color: 'child' },
          ]"></nos-med-dose>
        </p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~10min</template>
    <template v-slot:span>~3h</template>
  </nos-med-effects>

</template>

<script>
import NosTitle from "../components/NosTitle.vue";
import NosHeader from "../components/NosHeader.vue";
import NosParagraphs from "../components/NosParagraphs.vue";
import NosList from "../components/NosList.vue";
import NosLi from "../components/NosLi.vue";
import NosTable from "../components/NosTable.vue";
import NosRowCaption from "../components/NosRowCaption.vue";
import NosBtnLink from "../components/NosBtnLink.vue";
import NosMedLabel from "../components/NosMedLabel.vue";
import NosMedDose from "../components/NosMedDose.vue";
import NosMedEffects from "../components/NosMedEffects.vue";

export default {
  name: "MedAspirin",
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosList,
    NosLi,
    NosTable,
    NosRowCaption,
    NosBtnLink,
    NosMedLabel,
    NosMedDose,
    NosMedEffects
  },
  computed: {
    meta() {
      return this.$store.getters.getContentMeta("med-atropin");
    },
  },
  methods: {},
};
</script>
