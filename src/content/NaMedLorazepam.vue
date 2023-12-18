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
    <nos-li>Akuter Erregungszustände</nos-li>
    <nos-li>Status Epilepticus</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Lorazepam bindet an GABA-Rezeptoren und beeinflusst diese dahingehend, dass sie eine erhöhte Affinität für den Neurotransmitter Gamma-Aminobuttersäure (GABA) aufweisen.
      </div-paragraph>
      <div-paragraph>
        Dieser bindet folglich in höherem Maße an den Rezeptor und sorgt für eine verstärkte sedierende, anxiolytische, antikonvulsive und muskelrelaxierende Wirkung.
      </div-paragraph>
      <div-paragraph> Lorazepam wirkt zudem hypnotisch und kann zu anterograden Amnesien führen. </div-paragraph>
    </template>
  </nos-paragraphs>

  <nos-header title="Anwendung" />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Größen
      </template>
      <template #content>
        <nos-med-label type="suppositorium">
          2 Tabletten &bdquo;Tavor Expidet&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '1mg' }, { unit: '2,5mg' }]"
        />
        <nos-med-label
          type="ampulle"
          class="mt-2"
        >
          1 Ampulle &bdquo;Tavor pro injectione&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '2mg', per: '1ml' }]"
        />
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (i.m.)-Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div>
            Ampulle auf <span-mono><b>4ml</b></span-mono> aufziehen.
          </div>
          <nos-med-dose
            :items="[
              { label: 'Erwachsene', unit: '2mg (1 Ampulle)', color: 'adult' },
              { label: 'Kinder', unit: '0,5mg', per: '10kg', color: 'child' },
              { unit: '1ml', per: '10kg', color: 'child' },
            ]"
          />
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
      ~6h
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
  name: 'NaMedLorazepam',
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
      return this.$store.getters.getContentMeta('na-med-lorazepam')
    }
  },
  methods: {}
}
</script>
