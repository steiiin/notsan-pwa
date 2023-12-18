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
    <nos-li>Tachykardien</nos-li>
    <nos-li>Akuter Myokardinfarkt</nos-li>
    <nos-li>Eklampsie</nos-li>
  </nos-list>

  <nos-header title="Wirkweise" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Mg2+ kontrolliert u.a. über die Na+-K+-ATPase (einige werden sich aus dem Studium noch erinnern) den transmembralen Ionentransport von Natrium, Kalium und Calcium und wirkt
        somit membranstabilisierend.
      </div-paragraph>
      <div-paragraph>
        Magnesium kann über eine verzögerte AV-Überleitung zur Herzfrequenzstabilisierung und über die Reduktion früher Nachdepolarisationen zur Rhythmusstabilisierung eingesetzt
        werden, wirkt also antiarrhythmogen.
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
          1 Ampulle &bdquo;Cormagnesin&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '200mg', per: '10ml' }]"
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
          <nos-med-dose :items="[{ unit: '200mg (1 Ampulle)', color: 'adult' }]" />
          <v-divider class="my-2" />
          <div>Langsam spritzen. Über 3min.</div>
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
  name: 'NaMedMagnesium',
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
      return this.$store.getters.getContentMeta('na-med-magnesium')
    }
  },
  methods: {}
}
</script>
