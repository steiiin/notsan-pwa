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
    <nos-li>Paroxysmale Supraventrikuläre Tachykardie</nos-li>
    <nos-li>VHF mit schneller AV-Überleitung (cave: WPW!)</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Verapamil, ein Kalziumkanalblocker, wirkt, indem es Kalziumkanäle in der Herzmuskulatur und den Blutgefäßen blockiert. Diese Blockade verringert die Stärke der
        Herzkontraktionen und fördert die Erweiterung der Blutgefäße.
      </div-paragraph>
      <div-paragraph>
        Durch die Reduzierung des Kalziumeinstroms in die Herzmuskelzellen verlangsamt Verapamil die Herzfrequenz und senkt den Blutdruck, was zu einer geringeren Belastung des
        Herzens führt.
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
        <nos-med-label type="ampulle">
          1 Ampulle Verapamil
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '5mg', per: '2ml' }]"
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
          <nos-med-dose
            :items="[
              { label: 'Ab 14 Jahren', unit: '5mg (1 Ampulle)', color: 'adult' },
              { label: 'Kind (1-14)', unit: '2,5mg (½ Ampulle)', color: 'child' },
            ]"
          />
          <v-divider class="my-2" />
          <div>Langsam über 2min spritzen.</div>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~3min
    </template>
    <template #span>
      ~2h
    </template>
  </nos-med-effects>
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
import NosMedEffects from '../components/NosMedEffects.vue'

export default {
  name: 'NaMedVerapamil',
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
    meta () {
      return this.$store.getters.getContentMeta('na-med-verapamil')
    }
  },
  methods: {}
}
</script>
