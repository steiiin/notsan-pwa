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
    <nos-li>Übelkeit durch Chemo- / Strahlentherapie</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph> Im Brechzentrum setzen eine Vielzahl von Neurotransmittern an, um Übelkeit auszulösen. </div-paragraph>
      <div-paragraph>
        Ondansetron ist ein selektiver 5-HT3-Rezeptorantagonist. Es wirkt, indem es die Aktivität des Neurotransmitters Serotonin blockiert, der eine Schlüsselrolle bei der
        Auslösung von Übelkeit und Erbrechen spielt.
      </div-paragraph>
      <div-paragraph>
        Insbesondere blockiert Ondansetron die Serotonin-Rezeptoren in dem Bereich des Gehirns, der als Area postrema bekannt ist, sowie im Magen-Darm-Trakt. Dies hilft, das Gefühl
        von Übelkeit zu reduzieren und verhindert das Einsetzen von Erbrechen.
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
          1 Ampulle &bdquo;Zofran&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '4mg', per: '2ml' },
            { unit: '2mg', per: ' ml' },
          ]"
        />
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div-u>i.v. / i.m.-Gabe möglich</div-u>
          <nos-med-dose
            :items="[
              { label: '> 10kg', unit: '4mg (1 Ampulle)', color: 'adult' },
              { label: '< 10kg', unit: '2mg (½ Ampulle)', color: 'baby' },
            ]"
          />
          <div>i.v.-Gabe langsam spritzen &amp; nachspülen.</div>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~30min
    </template>
    <template #span>
      Mehrere Stunden
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
  name: 'NaMedOndansetron',
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
      return this.$store.getters.getContentMeta('na-med-ondansetron')
    }
  },
  methods: {}
}
</script>
