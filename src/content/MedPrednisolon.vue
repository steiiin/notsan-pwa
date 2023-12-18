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
    <nos-li>Asthmaanfall / COPD</nos-li>
    <nos-li>Anaphylaxie</nos-li>
    <nos-li>Pseudokrupp</nos-li>
  </nos-list>
  <nos-header title="Kontraindikationen" />
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Prednisolon</nos-li>
  </nos-list>
  <nos-header title="Nebenwirkungen" />
  <nos-list>
    <nos-li variant="check">
      Präklinisch Irrelevant
    </nos-li>
    <nos-li>Blut- / Haut- / Skelettveränderungen</nos-li>
    <nos-li>Gewichtszunahme</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp; Anwendung" />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Größen
      </template>
      <template #content>
        <nos-med-label type="ampulle">
          Ampullen-Set &bdquo;Prednisolut&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '100mg (Pulver)' }, { unit: '5ml (Wasser)', prefix: '+' }]"
        />
        <nos-med-label
          type="suppositorium"
          class="mt-2"
        >
          1 Zäpfchen &bdquo;Rectodelt&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '100mg' }]"
        />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Asthmaanfall / COPD"
    :decent="true"
    icon="$hospitalBox"
  />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Einsatz
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Bronchialobstruktion &amp; Atemnot</div-u>
          <div>Giemen, Brummen. Verlängertes Exspirium.</div>
        </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (i.v.)-Dosis
      </template>
      <template #content>
        <nos-med-dose :items="[{ unit: '100mg (1 Ampulle)', color: 'adult' }]" />
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (rect.)-Dosis
      </template>
      <template #content>
        <nos-med-dose :items="[{ unit: '100mg (1 Zäpfchen)', color: 'baby' }]" />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Anaphylaxie"
    :decent="true"
    icon="$hospitalBox"
  />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Einsatz
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Jedes Stadium der Anaphylaxie</div-u>
        </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (i.v.)-Dosis
      </template>
      <template #content>
        <nos-med-dose
          :items="[
            { label: 'Ab 12 Jahren', unit: '250mg (2½ Ampullen)', color: 'adult' },
            { label: '<12 Jahre', unit: '100mg (1 Ampulle)', color: 'child' },
          ]"
        />
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (rect.)-Dosis
      </template>
      <template #content>
        <nos-med-dose :items="[{ label: '<12 Jahre', unit: '100mg (1 Zäpfchen)', color: 'child' }]" />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Pseudokrupp"
    :decent="true"
    icon="$hospitalBox"
  />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        (rect.)-Dosis
      </template>
      <template #content>
        <nos-med-dose :items="[{ unit: '100mg (1 Zäpfchen)', color: 'child' }]" />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~30min
    </template>
    <template #span>
      ~1Tag
    </template>
  </nos-med-effects>

  <nos-header title="Wirkweise" />
  <nos-paragraphs>
    <template #heading>
      Prednisolon ist ein Kortikosteroid.
    </template>
    <template #text>
      <div-paragraph>
        Prednisolon wirkt antiallergisch, entzündungshemmend, membranstabilisierend und antiödematös. Zudem verstärkt es die Wirkung von β2-Sympathomimetika.
      </div-paragraph>
      <div-paragraph>
        Bei Nahrungsmittelknappheit, bzw. Erkrankungen schüttet der Körper Kortison aus, damit der Körper trotz Schmerzen &amp; Entzündungsreaktionen funktionell bleibt.
        Rettungsdienstrelevant ist die entzündungshemmende &amp; membranstabilisierende Wirkung.
      </div-paragraph>
    </template>
  </nos-paragraphs>
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
  name: 'MedPrednisolon',
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
      return this.$store.getters.getContentMeta('med-prednisolon')
    }
  },
  methods: {}
}
</script>
