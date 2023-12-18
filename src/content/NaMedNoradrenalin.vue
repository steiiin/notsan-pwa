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
    <nos-li>Kreislaufunterstützung im Schock / ROSC</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Stimuliert vorrangig α-Adrenorezeptoren in der glatten Gefäßmuskulatur, was den systemischen vaskulären Widerstand erhöht und den Blutdruck steigert.
      </div-paragraph>
      <div-paragraph>
        Hauptsächlich verwendet bei septischem Schock und anderen Formen von hypotensiven Zuständen, wo eine Erhöhung des Blutdrucks erforderlich ist. Noradrenalin ist effektiv bei
        Patienten, die eine Vasokonstriktion benötigen, um den Blutdruck zu stabilisieren.
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
          1 Ampulle &bdquo;Arterenol&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '1mg', per: '1ml' }]"
        />
        <nos-med-label
          class="mt-2"
          type="infusion"
        >
          1 Durchstechflasche &bdquo;Arterenol&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '25mg', per: '25ml' }]"
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
          <div>
            <span-mono>0,01µg - 1µg / kg / min</span-mono>
          </div>
        </div-paragraph>
        <div-paragraph>
          <div-u>Perfusor</div-u>
          <div><span-mono>1mg</span-mono> Noradrenalin auf <span-mono>50ml = 20µg / ml</span-mono></div>
          <div>
            <span-mono>1µg/min = <b>3ml/h</b></span-mono>
          </div>
        </div-paragraph>
        <div-paragraph>
          <div><span-mono>5mg</span-mono> Noradrenalin auf <span-mono>50ml = 100µg / ml</span-mono></div>
          <div>
            <span-mono>1µg/min = <b>0,6ml/h</b></span-mono>
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
      ~3min
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
  name: 'NaMedNoradrenalin',
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
      return this.$store.getters.getContentMeta('na-med-noradrenalin')
    }
  },
  methods: {}
}
</script>
