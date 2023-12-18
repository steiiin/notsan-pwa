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
    <nos-li>Akute orale Vergiftung</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Medizinische Kohle, auch bekannt als Aktivkohle, ist ein häufig verwendetes Mittel bei der Behandlung von Vergiftungen und Überdosierungen. Sie ist besonders wirksam bei
        der Absorption von vielen oral eingenommenen Toxinen und wird daher häufig in Notaufnahmen und bei der Ersten Hilfe eingesetzt.
      </div-paragraph>
      <div-paragraph>
        Aktivkohle wirkt durch Adsorption, was bedeutet, dass sie Toxine und Chemikalien an ihrer Oberfläche bindet. Dies verhindert, dass die Toxine vom Magen-Darm-Trakt
        absorbiert werden und in den Blutkreislauf gelangen. Aufgrund ihrer porösen Oberfläche bietet Aktivkohle eine sehr große Oberfläche, die viele Toxine binden kann.
      </div-paragraph>
      <div-paragraph>
        Die Wirkung von medizinischer Kohle tritt fast sofort nach der Einnahme ein, da sie unmittelbar beginnt, Toxine im Magen-Darm-Trakt zu binden. Die Wirkdauer hängt von
        verschiedenen Faktoren ab, wie der Art und Menge des aufgenommenen Toxins und der Menge der eingenommenen Aktivkohle.
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
          1 Flasche Kohle-Pulvis
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '50g' }]"
        />
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (p.o.)-Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Vorbereitung</div-u>
          <div>Pulver in 400ml Wasser auflösen.</div>
        </div-paragraph>
        <div-paragraph>
          <div-u>Dosierung</div-u>
          <nos-med-dose
            :items="[
              { label: '> 12 Jahre', unit: '50g (1 Flasche)', color: 'adult' },
              { label: '< 12 Jahre', unit: '25g (½ Flasche)', color: 'child' },
              { label: '< 4 Jahre', unit: '12,25g (¼ Flasche)', color: 'baby' },
            ]"
          />
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      Innerhalb weniger Sekunden
    </template>
    <template #span>
      ~10min
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
  name: 'NaMedKohle',
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
      return this.$store.getters.getContentMeta('na-med-kohle')
    }
  },
  methods: {}
}
</script>
