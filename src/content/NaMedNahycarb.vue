<!-------------------------------------------------------------------------------------------------
{

}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title
    :headline="meta.title"
    :subtitle="meta.subtitle"
  />

  <nos-header title="Indikationen" />
  <nos-list>
    <nos-li>Metabolische Azidose (V.a. nach Reanimation)</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph> Natriumhydrogencarbonat ist eine schwache Lauge und somit in der Lage, Säuren zu neutralisieren. </div-paragraph>
      <div-paragraph>
        Infolge eines Kreislaufversagens kommt es aufgrund der anaeroben Stoffwechsellage zur Anhäufung von Stoffwechselprodukten, wie zum Beispiel Milchsäure.
      </div-paragraph>
      <div-paragraph>
        Der pH-Wert im Blut sinkt - eine Azidose. Durch die Gabe von NaBi (nach dem Trivialnamen NatriumBiCarbonat) werden die sauren Metabolite unter Abgabe von CO<sub>2</sub> und
        Wasser neutralisiert (<b>Pufferung</b>).
      </div-paragraph>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung" />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Größen
      </template>
      <template #content>
        <nos-med-label type="infusion">
          1 Durchstechflasche NaBi
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '100mmol', per: '100ml' }]"
        />
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        Anwendung
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Dosierung</div-u>
          <nos-med-dose :items="[{ unit: '1ml', per: 'kg', color: 'adult' }]" />
          <v-divider class="my-2" />
          <div>Langsam spritzen.</div>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>
</template>

<script>
import NosTitle from '../components/NosTitle.vue'
import NosHeader from '../components/NosHeader.vue'
import NosParagraphs from '../components/NosParagraphs.vue'
import NosList from '../components/NosList.vue'
import NosLi from '../components/NosLi.vue'
import NosTable from '../components/NosTable.vue'
import NosRowCaption from '../components/NosRowCaption.vue'
import NosMedLabel from '../components/NosMedLabel.vue'
import NosMedDose from '../components/NosMedDose.vue'

export default {
  name: 'NaMedNahycarb',
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosList,
    NosLi,
    NosTable,
    NosRowCaption,
    NosMedLabel,
    NosMedDose
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('na-med-nahycarb')
    }
  },
  methods: {}
}
</script>
