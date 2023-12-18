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
    <nos-li>Antidot für Cyanid-Vergiftung</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Natriumthiosulfat wirkt, indem es mit Cyanid zu Thiozyanat reagiert, einer weniger toxischen Verbindung, die vom Körper leichter ausgeschieden werden kann.
      </div-paragraph>
      <div-paragraph>
        Die Wirkung von Natriumthiosulfat tritt nicht sofort ein. Es dauert einige Zeit, bis sich ausreichend Thiozyanat gebildet hat und die Cyanidtoxizität reduziert wird. Daher
        wird Natriumthiosulfat oft als zweiter Schritt nach der Verabreichung eines schneller wirkenden Antidots wie 4-DMAP eingesetzt.
      </div-paragraph>
      <div-paragraph>
        <b>4-DMAP</b> wirkt schnell, indem es Methämoglobin bildet, das Cyanidionen bindet. <br>
        <b>Natriumthiosulfat</b> bietet eine längerfristige Lösung, indem es Cyanid in eine weniger toxische Form umwandelt.
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
          1 Ampulle &bdquo;Natriumthiosulfat 10%&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '1g', per: '10ml' }]"
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
          <nos-med-dose :items="[{ unit: '1ml', per: 'kg', color: 'adult' }]" />
        </div-paragraph>
        <div-paragraph>
          <div-u>Immer zuerst <b>4-DMAP</b> anwenden.</div-u>
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
  name: 'NaMedNathiosulfat',
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
      return this.$store.getters.getContentMeta('na-med-nathiosulfat')
    }
  },
  methods: {}
}
</script>
