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
    <nos-li>Starke Schmerzen</nos-li>
    <nos-li>Fiebersenkung</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen" />
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. NSAR</nos-li>
  </nos-list>
  <nos-list contragroup="acute">
    <nos-li>Aktive Blutung, Blutungsneigung</nos-li>
    <nos-li>SHT / Vd. auf Hirnblutung</nos-li>
    <nos-li>Akute Herzbeschwerden</nos-li>
    <nos-li>Schwere Dehydratation</nos-li>
    <nos-li>Akute Magen-Darm-Geschwüre</nos-li>
  </nos-list>
  <nos-list contragroup="known">
    <nos-li>Blutbildungsstörungen</nos-li>
    <nos-li>Schwere Leber- oder Niereninsuffizienz</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Schwangerschaft</nos-li>
    <nos-li>Kinder &lt; 6 Monate (durch SAA untersagt)</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen" />
  <nos-list>
    <nos-li variant="cave">
      Anaphylaxie
    </nos-li>
    <nos-li variant="todo">
      Andere Algorithmen beachten:
    </nos-li>
    <nos-btn-link list="list-anaphylaxie" />
  </nos-list>
  <nos-list>
    <nos-li>Magendarmbeschwerden</nos-li>
    <nos-li>Kopfschmerzen, Schwindel, Ödeme</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung" />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Größen
      </template>
      <template #content>
        <nos-med-label type="saft">
          Fiebersaft
        </nos-med-label>
        <div-mono>20mg/ml, 40mg/ml, o.ä.</div-mono>
        <nos-med-label
          type="suppositorium"
          class="mt-2"
        >
          Zäpfchen &amp; Tabletten
        </nos-med-label>
        <div-mono> 75mg, 125mg, 250mg, 200mg, 400mg, 600mg, 800mg, o.ä. </div-mono>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Schmerzen &amp; Fiebersenkung"
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
          <div><span-u>NRS &gt; 6</span-u> oder</div>
          <div-u>Fieberkrampf</div-u>
        </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        Dosis
      </template>
      <template #content>
        <div-paragraph> Per Oral oder Zäpfchen ist dosisgleich: </div-paragraph>
        <nos-med-dose
          :items="[
            { label: 'Ab 12 Jahre', unit: '400mg', color: 'adult' },
            { label: 'Kind (6-12)', unit: '200mg', color: 'teen' },
            { label: 'Kind (3-6)', unit: '150mg', color: 'young' },
            { label: 'Kind (1-3)', unit: '100mg', color: 'child' },
            { label: '< 1 Jahr', unit: '50mg', color: 'baby' },
          ]"
        />
        <v-divider class="my-2" />
        <div-paragraph> Keine Repetition vorgesehen. </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~30min
    </template>
    <template #span>
      ~6h
    </template>
  </nos-med-effects>

  <nos-header title="Wirkweise" />
  <nos-paragraphs>
    <template #heading>
      NSAR-Schmerzmittel
    </template>
    <template #text>
      <div-paragraph>
        Ibuprofen greift in das Entzündungsgeschehen und die Schmerzwahrnehmung ein indem es die Cyclooxygenasen (COX) COX-1 und COX-2 hemmt und damit die Bildung von
        Prostaglandinen stoppt. Diese Botenstoffe sind wesentlich an Entzündungsgeschehen sowie an der Weiterleitung und Wahrnehmung von Schmerzsignalen beteiligt.
      </div-paragraph>
      <div-paragraph>
        Allerdings bauen Prostaglandine auch die schützende Magenschleimhaut auf, weshalb es bei Einnahme von Ibuprofen zu einer Reduktion der schützenden Schleimschicht innerhalb
        des Magens kommen kann. Ein Nebeneffekt der COX-Hemmung ist eine vermehrte Bildung von Leukotrienen, die für Asthmatiker problematisch sein kann, da diese zu einer
        Bronchokonstriktion führen können.
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
import NosBtnLink from '../components/NosBtnLink.vue'
import NosMedLabel from '../components/NosMedLabel.vue'
import NosMedDose from '../components/NosMedDose.vue'
import NosMedEffects from '../components/NosMedEffects.vue'

export default {
  name: 'MedIbuprofen',
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosList,
    NosLi,
    NosTable,
    NosRowCaption,
    NosBtnLink,
    NosMedLabel,
    NosMedDose,
    NosMedEffects
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('med-ibuprofen')
    }
  },
  methods: {}
}
</script>
