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
    <nos-li>Reanimation als Amiodaron-Alternative</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen" />
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Lidocain</nos-li>
  </nos-list>
  <nos-list>
    <nos-li variant="cave">
      Nicht mehr als Analgesie beim i.o-Zugang für NotSan
    </nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen" />
  <nos-list>
    <nos-li variant="check">
      Irrelevant, weil Anwendung nur bei Lebensgefahr
    </nos-li>
  </nos-list>
  <nos-list>
    <nos-li>Bradykardie, Hypotonie</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung" />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Größen
      </template>
      <template #content>
        <nos-med-label type="ampulle">
          2 Ampullen Lidocain
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { label: '2%', unit: '100mg', per: '5ml' },
            { label: '1%', unit: '50mg', per: '5ml' },
          ]"
        />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Reanimation"
    :decent="true"
    icon="$hospitalBox"
  />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Einsatz &amp;<br>(i.v.)-Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Nach 3. Defibrillation</div-u>
        </div-paragraph>
        <nos-med-dose
          :items="[
            { label: 'Erwachsene', unit: '100mg (1 Ampulle-2%)', color: 'adult' },
            { label: 'Kind', unit: '10mg', per: '10kg', color: 'child' },
            { unit: '1ml', per: '10kg (2%)', color: 'child' },
            { unit: '0,5ml', per: '10kg (1%)', color: 'child' },
          ]"
        />
        <div-paragraph class="mt-2">
          <div-u>Nach 5. Defibrillation</div-u>
        </div-paragraph>
        <nos-med-dose
          :items="[
            { label: 'Erwachsene', unit: '50mg (½ Ampulle-2%)', color: 'adult' },
            { label: 'Kinder', unit: 'Keine Repetition', color: 'child' },
          ]"
        />
        <v-divider class="my-2" />
        <div-paragraph> Nachspülen. </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>
</template>

<script>
import NosTitle from '../components/NosTitle.vue'
import NosHeader from '../components/NosHeader.vue'
import NosList from '../components/NosList.vue'
import NosLi from '../components/NosLi.vue'
import NosTable from '../components/NosTable.vue'
import NosRowCaption from '../components/NosRowCaption.vue'
import NosMedLabel from '../components/NosMedLabel.vue'
import NosMedDose from '../components/NosMedDose.vue'

export default {
  name: 'MedLidocain',
  components: {
    NosTitle,
    NosHeader,
    NosList,
    NosLi,
    NosTable,
    NosRowCaption,
    NosMedLabel,
    NosMedDose
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('med-lidocain')
    }
  },
  methods: {}
}
</script>
