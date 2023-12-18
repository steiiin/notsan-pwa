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
    <nos-li>Antidot bei Parasympathomimetika-Vergiftung</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph> Es blockiert die muskarinergen Rezeptoren, auf die normalerweise das Acetylcholin des Parasympathikus wirkt. </div-paragraph>
      <div-paragraph>
        Diese Eigenschaft führt zu einer breiten Palette pharmakologischer Wirkungen:
        <ol class="ms-4">
          <li>Herzfrequenzsteigerung &amp; Beschleunigung der AV-Überleitungszeit</li>
          <li>Bronchodilatation</li>
          <li>Verminderung der Peristaltik &amp; Sekretion im Gastrointestinaltrakt</li>
          <li>Relaxation der glatten Muskulatur</li>
          <li>Auge: Akkomodationshemmung &amp; Mydriasis</li>
          <li>Verminderte Schweißproduktion</li>
          <li>Verminderte Speichelbildung</li>
        </ol>
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
          1 Ampulle Atropin
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '100mg', per: '10ml' },
            { unit: '10mg', per: '  ml' },
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
          <div-u>Initialdosis</div-u>
          <nos-med-dose :items="[{ label: 'Erwachsene', unit: '5mg (½ml)', per: '10min', color: 'adult' }]" />
        </div-paragraph>
        <div-paragraph>
          <div>Für Kinder <span-mono>1ml</span-mono> auf <span-mono>10ml</span-mono> aufziehen.</div>
          <nos-med-dose :items="[{ label: 'Kinder', unit: '1mg (1ml)', per: '10min', color: 'child' }]" />
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~10min
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
  name: 'MedAspirin',
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
      return this.$store.getters.getContentMeta('med-atropin')
    }
  },
  methods: {}
}
</script>
