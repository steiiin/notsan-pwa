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
    <nos-li>Akuter psychomotorischer Erregungszustände</nos-li>
    <nos-li>Akutbehandlung des Deliriums</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Haldol, bekannt als Haloperidol, ist ein typisches Antipsychotikum, das auf das zentrale Nervensystem wirkt. Es blockiert Dopaminrezeptoren im Gehirn, insbesondere die
        D2-Rezeptoren, was zu einer Reduzierung von psychotischen Symptomen führt.
      </div-paragraph>
      <div-paragraph>
        Durch die Blockade dieser Dopaminrezeptoren verringert Haldol die Wirkung von Dopamin, einem Neurotransmitter, der bei psychischen Erkrankungen wie Schizophrenie und akuten
        psychotischen Zuständen oft im Ungleichgewicht ist. Diese Reduzierung hilft, Halluzinationen, Wahnvorstellungen und Denkstörungen zu kontrollieren.
      </div-paragraph>
      <div-paragraph>
        Haldol wird hauptsächlich zur Behandlung von Schizophrenie, akuten psychotischen Zuständen und manchmal bei schweren Verhaltensstörungen eingesetzt. Es ist bekannt für
        seine schnelle Wirkung bei der Beruhigung agitierter Patienten und die Kontrolle schwerer psychotischer Symptome.
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
          1 Ampulle &bdquo;Haldol&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '5mg', per: '1ml' }]"
        />
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (i.m.)-Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div>Ampulle auf <span-mono>10ml</span-mono> aufziehen.</div>
          <nos-med-dose :items="[{ label: 'Erwachsene', unit: '5mg (1 Ampulle)', color: 'adult' }]" />
        </div-paragraph>
        <div-paragraph>
          <div-u>Keine Repetition.</div-u>
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
  name: 'NaMedHaloperidol',
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
      return this.$store.getters.getContentMeta('na-med-haloperidol')
    }
  },
  methods: {}
}
</script>
