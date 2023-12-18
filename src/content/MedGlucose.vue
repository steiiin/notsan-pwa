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
    <nos-li>Hypoglykämie</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen" />
  <nos-list>
    <nos-li> Keine i.v.-Gabe, wenn Wach und &bdquo;Schluckfähig&rdquo; </nos-li>
    <nos-li variant="todo">
      Orale Gabe bevorzugen
    </nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen" />
  <nos-list>
    <nos-li variant="cave">
      Venenreizung, Nekrose bei Parasavat
    </nos-li>
    <nos-li variant="todo">
      Bei Parasavat: Infusion entfernen, im Krankenhaus melden
    </nos-li>
    <nos-li variant="todo">
      Maximal 20%ige Lösung
    </nos-li>
    <nos-li variant="todo">
      Bei laufender Infusion spritzen &amp; nachspülen
    </nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung" />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Größen
      </template>
      <template #content>
        <nos-med-label type="ampulle">
          1 Ampulle G20
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '2g', per: '10ml' }]"
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
        (i.v.)-Dosis
      </template>
      <template #content>
        <nos-med-dose
          :items="[
            { label: 'Ab 30kg', unit: '10g (5 Ampullen)', color: 'adult' },
            { label: 'Kindergarten', unit: '4g (2 Ampullen)', color: 'child' },
            { label: 'Kleinkind', unit: '2g (2 Ampullen)', color: 'baby' },
          ]"
        />
        <v-divider class="my-2" />
        <div-paragraph>
          <div-u>Nach 5min Kontrollmessung</div-u>
          <div>Ggf. Repetition</div>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~3min
    </template>
    <template #span>
      wenige Minuten bis 1h (je nach Stoffwechsel)
    </template>
  </nos-med-effects>

  <nos-header title="Wirkweise" />
  <nos-paragraphs>
    <template #heading>
      Glucose ist Zucker.
    </template>
    <template #text>
      <div-paragraph>
        In jeder Form der Gabe (intravenös oder oral) bewirkt der Einsatz von Glukose eine Erhöhung der Blutglukosekonzentration und stellt dem Körper somit ausreichend Zucker für
        die Aufrechterhaltung des Stoffwechsels bereit. Bei einer intravenösen Gabe wird Glukose direkt im Blut aufgenommen und von dort verteilt, bei der oralen Gabe wird die
        Glukose über den Darm aufgenommen und von hier in die Blutbahn abgegeben.
      </div-paragraph>
      <div-paragraph>
        Da die vom Rettungsdienst gegebene Glukose nur kurz wirkt, sollte der Patient ergänzend auch langsam wirksame Kohlenhydrate (Brot, Kräcker etc.) zu sich nehmen, um einem
        folgenden BZ-Abfall entgegenzuwirken.
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
  name: 'MedGlucose',
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
      return this.$store.getters.getContentMeta('med-glucose')
    }
  },
  methods: {}
}
</script>
