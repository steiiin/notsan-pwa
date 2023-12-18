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
    <nos-li>Beendigung einer durch Benzos induzierten Sedierung</nos-li>
    <nos-li>Antidot für Benzodiazepin-Überdosierung</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Anexate (Flumazenil) ist ein spezifischer Antagonist für Benzodiazepine und wird verwendet, um deren sedative Wirkungen schnell aufzuheben. Seine schnelle Wirkung und kurze
        Wirkdauer machen es zu einem wertvollen Medikament in der Notfallmedizin und Anästhesiologie.
      </div-paragraph>
      <div-paragraph>
        Durch diese Bindung verdrängt Flumazenil die Benzodiazepine von ihren Bindungsstellen und blockiert deren Effekte. Dies führt zu einer raschen Umkehr der Sedierung,
        Anxiolyse (Angstlösung), Muskelrelaxation und antikonvulsiven Effekte, die durch Benzodiazepine verursacht werden.
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
          1 Ampulle &bdquo;Anexate&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '0,5mg', per: '5ml' },
            { unit: '0,1mg', per: ' ml' },
          ]"
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
          <nos-med-dose :items="[{ unit: '0,1mg', per: 'min', color: 'adult' }]" />
          <div>Flumazenil schnell spritzen (15s)</div>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~1min
    </template>
    <template #span>
      ~45min
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
  name: 'NaMedAnexate',
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
      return this.$store.getters.getContentMeta('na-med-anexate')
    }
  },
  methods: {}
}
</script>
