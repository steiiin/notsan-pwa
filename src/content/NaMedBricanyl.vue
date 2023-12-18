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
    <nos-li>Bronchospastischer Anfall / Status Asthmaticus</nos-li>
    <nos-li>Tokolyse</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Bei dem Terbutalin handelt es sich um ein hochwirksames β2-Mimetikum. Es hat somit eine ausgeprägte Wirkung auf sämtliche β2-Adrenozeptoren. Diese befinden sich in der
        glatten Muskulatur von Blutgefäßen, dem Uterus und den Bronchien. Die Wirkung auf die β1-Rezeptoren des Myokards ist relativ gering.
      </div-paragraph>
      <div-paragraph>
        Das Terbutalin-Molekül bindet sich fest an die Rezeptoren und bewirkt somit eine Entspannung bzw. Erschlaffung der genannten Strukturen. Im Bereich der Bronchien sinkt
        durch Anwendung des Arzneistoffes der respiratorische Widerstand und das Einatmen erleichtert sich sofort.
      </div-paragraph>
      <div-paragraph> Die Entspannung der glatten Muskulatur des Uterus sorgt für eine vorübergehende Verminderung der Wehentätigkeit. </div-paragraph>
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
          1 Ampulle &bdquo;Bricanyl&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '0,5mg', per: '1ml' }]"
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
          <nos-med-dose :items="[{ label: 'Subkutan', unit: '0,25mg (½ Ampulle)', color: 'adult' }]" />
          <v-divider class="my-2" />
          <div-u>Repetition nach 15min möglich</div-u>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~5min
    </template>
    <template #span>
      ~4h
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
  name: 'NaMedBricanyl',
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
      return this.$store.getters.getContentMeta('na-med-bricanyl')
    }
  },
  methods: {}
}
</script>
