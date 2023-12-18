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
    <nos-li>Kreislaufunterstützung im kardiogenen Schock</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #heading />
    <template #text>
      <div-paragraph> Stimuliert hauptsächlich β1-Adrenorezeptoren im Herzen, was die Kontraktilität und Herzfrequenz erhöht. </div-paragraph>
      <div-paragraph>
        Verwendet bei Herzinsuffizienz und kardiogenem Schock, da es die Herzleistung verbessert, ohne den peripheren Widerstand signifikant zu erhöhen. Ideal für Patienten, die
        eine verbesserte Herzpumpleistung benötigen, ohne den Blutdruck wesentlich zu steigern.
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
          1 Ampulle Dobutamin
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '250mg' }]"
        />
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (i.v.)-Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Dosierung</div-u>
          <div>
            <span-mono>2,5µg - 10µg / kg / min</span-mono>
          </div>
        </div-paragraph>
        <div-paragraph>
          <div-u>Perfusor</div-u>
          <div><span-mono>250mg</span-mono> Dobutamin auf <span-mono>50ml = 5mg / ml</span-mono></div>
          <div>
            <span-mono>1µg/min = <b>0,012ml/h</b></span-mono>
          </div>
        </div-paragraph>
        <div-paragraph>
          <div><span-mono>500mg</span-mono> Noradrenalin auf <span-mono>50ml = 10mg / ml</span-mono></div>
          <div>
            <span-mono>1µg/min = <b>0,006ml/h</b></span-mono>
          </div>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      sofort
    </template>
    <template #span>
      ~3h
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
  name: 'NaMedDobutamin',
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
      return this.$store.getters.getContentMeta('na-med-dobutamin')
    }
  },
  methods: {}
}
</script>
