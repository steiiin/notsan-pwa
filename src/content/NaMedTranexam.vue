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
    <nos-li>Blutungen unter fibrinolytischer Therapie</nos-li>
    <nos-li>Lebensbedrohliche innere &amp; äußere Blutungen (Polytrauma)</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph> Tranexamsäure ist ein Antifibrinolytikum, das heißt, es verhindert den Abbau von Fibrin, einem Schlüsselelement im Blutgerinnungsprozess. </div-paragraph>
      <div-paragraph>
        Fibrin bildet ein Netzwerk, das zur Bildung eines Blutgerinnsels beiträgt, um Blutungen zu stoppen. Tranexamsäure wirkt, indem es die Bindung des Plasminogens an Fibrin
        hemmt und so den Abbau des Gerinnsels verlangsamt oder verhindert. Dies führt zu einer verbesserten Blutgerinnung und einer reduzierten Blutung.
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
        <nos-med-label type="iv">
          1 Ampulle &bdquo;Cyklokapron&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '500mg', per: '5ml' }]"
        />
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        Dosis
      </template>
      <template #content>
        <div-paragraph>
          <nos-med-dose :items="[{ unit: '1ml (100mg)', per: '10kg', color: 'adult' }]" />
        </div-paragraph>
        <div-paragraph>
          <div>Langsam spritzen (max. <b>1ml/min</b>)</div>
          <div>Am Besten per Kurzinfusion verabreichen.</div>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      Sofort
    </template>
    <template #span>
      ~5h
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
  name: 'NaMedTranexam',
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
      return this.$store.getters.getContentMeta('na-med-tranexam')
    }
  },
  methods: {}
}
</script>
