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
    <nos-li>Unspezifische Kreislaufunterstützung</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #heading />
    <template #text>
      <div-paragraph>
        Akrinor wirkt hauptsächlich auf β-Adrenorezeptoren und in geringerem Maße auf α-Adrenorezeptoren. Es steigert die Herzleistung und bewirkt eine mäßige Vasokonstriktion.
      </div-paragraph>
      <div-paragraph>
        Primär eingesetzt bei Hypotonie und Kreislaufstörungen. Es erhöht den Blutdruck und das Herzminutenvolumen, ohne die Herzfrequenz stark zu beeinflussen.
      </div-paragraph>
      <div-paragraph>
        Akrinor ist besonders nützlich in Situationen, in denen ein schneller und kontrollierter Anstieg des Blutdrucks erforderlich ist, ohne eine ausgeprägte Tachykardie zu
        verursachen.
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
          1 Ampulle &bdquo;Akrinor&rdquo;
        </nos-med-label>
        <div>
          <span-mono>&nbsp;200mg</span-mono> Cafedrin<br>
          <span-mono>+10mg</span-mono> Theodrenalin
        </div>
        <div-mono>&nbsp;2ml Ampulle</div-mono>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (i.v.)-Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Fraktioniert nach Wirkung</div-u>
          <div>Ampulle auf <span-mono>10ml</span-mono> aufziehen.</div>
          <div>
            Initial <span-mono><b>2ml</b></span-mono>
          </div>
          <div>Alle 60s repetieren.</div>
        </div-paragraph>
        <div-paragraph>
          <div-u>Intramuskuläre Gabe</div-u>
          <div>
            <span-mono><b>2ml</b> (1 Ampulle)</span-mono> i.m.
          </div>
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
      ~1h
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
import NosMedEffects from '../components/NosMedEffects.vue'

export default {
  name: 'NaMedAkrinor',
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosList,
    NosLi,
    NosTable,
    NosRowCaption,
    NosMedLabel,
    NosMedEffects
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('na-med-akrinor')
    }
  },
  methods: {}
}
</script>
