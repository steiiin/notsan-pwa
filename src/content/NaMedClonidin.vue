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
    <nos-li>Hypertensive Krise</nos-li>
    <nos-li>Unterstützend bei Drogenentzugssymptomatik</nos-li>
    <nos-li>Augeninnendrucksenkung (Glaukom)</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Clonidin stimuliert α2-Adrenozeptoren im Gehirn, was die Freisetzung von Noradrenalin verringert. Dies führt zu einer Abnahme des peripheren Gefäßwiderstands und der
        Herzfrequenz.
      </div-paragraph>
      <div-paragraph>
        Clonidin ist besonders nützlich in Situationen, in denen eine Senkung des Blutdrucks gewünscht wird, ohne die Herzfrequenz signifikant zu erhöhen, und hat auch eine
        beruhigende Wirkung.
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
          1 Ampulle &bdquo;Paracefan&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '0,15mg', per: '1ml' }]"
        />
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        Anwendung
      </template>
      <template #content>
        <div-paragraph>
          <div-u>(s.c.)-Dosis</div-u>
          <div>½<span-mono> / 1 Ampulle</span-mono> subkutan oder intramuskulär</div>
        </div-paragraph>
        <div-paragraph>
          <div-u>(i.v.)-Dosis</div-u>
          <div>
            <div>Auf <span-mono>10ml</span-mono> aufziehen. Nicht unverdünnt.</div>
            ½<span-mono> / 1 Ampulle</span-mono> sehr langsam spritzen. (10min!)
          </div>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~15min
    </template>
    <template #span>
      ~10h
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
  name: 'NaMedClonidin',
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
      return this.$store.getters.getContentMeta('na-med-clonidin')
    }
  },
  methods: {}
}
</script>
