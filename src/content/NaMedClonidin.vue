<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "20.11.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Hypertensive Krise</nos-li>
    <nos-li>Unterstützend bei Drogenentzugssymptomatik</nos-li>
    <nos-li>Augeninnendrucksenkung (Glaukom)</nos-li>
  </nos-list>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>
        Clonidin stimuliert α2-Adrenozeptoren im Gehirn, was die Freisetzung von Noradrenalin verringert. Dies führt zu einer Abnahme des peripheren Gefäßwiderstands und der Herzfrequenz.
      </p>
      <p>
        Clonidin ist besonders nützlich in Situationen, in denen eine Senkung des Blutdrucks gewünscht wird, ohne die Herzfrequenz signifikant zu erhöhen, und hat auch eine beruhigende Wirkung.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle &bdquo;Paracefan&rdquo;</nos-med-label>
        <nos-med-dose :decent="true" :items="[{ unit: '0,15mg', per: '1ml' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>Anwendung</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">(s.c.)-Dosis</div>
          <div>
            ½<span class="nos-mono"> / 1 Ampulle</span> subkutan oder intramuskulär
          </div>
        </p>
        <p>
          <div class="nos-u">(i.v.)-Dosis</div>
          <div>
            <div>Auf <span class="nos-mono">10ml</span> aufziehen. Nicht unverdünnt.</div>
            ½<span class="nos-mono"> / 1 Ampulle</span> sehr langsam spritzen. (10min!)
          </div>
        </p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~15min</template>
    <template v-slot:span>~10h</template>
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
import NosMedLabel from "../components/NosMedLabel.vue";
import NosMedDose from "../components/NosMedDose.vue";
import NosMedEffects from "../components/NosMedEffects.vue";

export default {
  name: "NaMedClonidin",
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
      return this.$store.getters.getContentMeta("na-med-clonidin");
    },
  },
  methods: {},
};
</script>