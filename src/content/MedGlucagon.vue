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
    <nos-li>Hypoglykämie (intramuskuläre Therapie)</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen" />
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Glucagon</nos-li>
  </nos-list>
  <nos-list contragroup="known">
    <nos-li>Phäochromocytom (vgl. Nieren-Ca)</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen" />
  <nos-list>
    <nos-li variant="cave">
      Übelkeit, Erbrechen
    </nos-li>
    <nos-li variant="todo">
      Andere Algorithmen beachten:
    </nos-li>
    <nos-btn-link content="med-vomex" />
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung" />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Größen
      </template>
      <template #content>
        <nos-med-label type="ampulle">
          1 Ampulle Glucagon
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '1mg (Pulver)' }]"
        />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Hypoglykämie"
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
          <div-u>BZ &lt; <span-mono>3,3mmol/l</span-mono></div-u>
          <div>Bzw. &lt; <span-mono>60mg/dl</span-mono></div>
        </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (i.m.)-Dosis
      </template>
      <template #content>
        <nos-med-dose
          :items="[
            { label: 'Ab 8 Jahren', unit: '1mg (i.m.)', color: 'adult' },
            { label: '< 8 Jahren', unit: '0,5mg (i.m.)', color: 'child' },
          ]"
        />
        <v-divider class="my-2" />
        <div-paragraph>
          <div-u>Nach 5min Kontrollmessung</div-u>
          <div>Keine Repetition vorgesehen.</div>
          <nos-btn-link content="med-glucose" />
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
      ~30min
    </template>
  </nos-med-effects>

  <nos-header title="Wirkweise" />
  <nos-paragraphs>
    <template #heading>
      Glucagon wirkt im Körper entgegengesetzt zu Insulin.
    </template>
    <template #text>
      <div-paragraph>
        Glucagon führt zu einer Erhöhung der Blutglucose-Konzentration durch Aktivierung der Glucagon-Rezeptoren in der Leber. Die Rezeptor-Aktivierung bedingt wiederum den
        Glykogen-Abbau und die Glucose-Freisetzung. Das Hormon wirkt somit als Antagonist von Insulin.
      </div-paragraph>
      <div-paragraph>
        Glucagon ist nur dann bei der Behandlung einer Hypoglykämie wirksam, wenn genügend Leber-Glykogen vorhanden ist. Da Glucagon im Falle von Hunger, Nebenniereninsuffizienz,
        chronischem Alkoholmissbrauch oder chronischer Hypoglykämie wenig bis gar nicht wirkt, sollte in solchen Fällen mit Glucose behandelt werden.
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
import NosBtnLink from '../components/NosBtnLink.vue'

export default {
  name: 'MedGlucagon',
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
    NosMedEffects,
    NosBtnLink
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('med-glucagon')
    }
  },
  methods: {}
}
</script>
