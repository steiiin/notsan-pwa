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
  </nos-list>

  <nos-header title="Kontraindikationen" />
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Ipratropiumbromid</nos-li>
  </nos-list>
  <nos-list contragroup="acute">
    <nos-li>Tachykardie / Tachyarrhythmie (symptomatisch)</nos-li>
    <nos-li>Engwinkelglaukom (Glaukomanfall), d.h.:</nos-li>
    <nos-li :decent="true">
      Sehstörungen / Farbspiele beim Sehen
    </nos-li>
    <nos-li :decent="true">
      Starke Kopfschmerzen &amp; Erbrechen
    </nos-li>
    <nos-li :decent="true">
      Gerötetes Auge
    </nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Schwangerschaft</nos-li>
    <nos-li>Stillzeit</nos-li>
    <nos-li>Kinder &lt; 12 Jahre (durch SAA untersagt)</nos-li>
  </nos-list>
  <nos-header title="Nebenwirkungen" />
  <nos-list>
    <nos-li>Brennt im Auge</nos-li>
    <nos-li>Anticholinerge Symptome:</nos-li>
    <nos-li :decent="true">
      Mund- / Schleimhauttrockenheit
    </nos-li>
    <nos-li :decent="true">
      Auge: Sehstörungen / Innendruckerhöhung
    </nos-li>
    <nos-li :decent="true">
      Kardio: Tachykardie, Blutdruckanstieg
    </nos-li>
    <nos-li :decent="true">
      Magendarm: Harnverhaltung, Magenschmerzen
    </nos-li>
    <nos-li :decent="true">
      Psychisch: Unruhe, Tremor, Angst
    </nos-li>
    <nos-li variant="todo">
      Bei zunehmender Verschlechterung: Anwendung abbrechen
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
          1 Phiole Ipratropiumbromid
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '0,5mg' }]"
        />
        <v-divider class="my-2" />
        <div-paragraph>
          <div-u>Im LK Meißen durch Kombipräparat ersetzt:</div-u>
          <nos-btn-link content="med-ipramol" />
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Asthmaanfall / Exarzerbierte COPD"
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
        (p.i.)-Dosis
      </template>
      <template #content>
        <nos-med-dose :items="[{ unit: '0,5mg (1 Phiole)' }]" />
        <v-divider class="my-2" />
        <div-paragraph>
          <span-mono>+2ml</span-mono> NaCl in Vernebelungsmaske.<br>
          Mit <span-mono>6-9l</span-mono> Sauerstoff vernebeln.
        </div-paragraph>
        <div-paragraph>
          <div-u>Repetition nach 30min möglich</div-u>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~30s
    </template>
    <template #span>
      ~4h
    </template>
  </nos-med-effects>

  <nos-header title="Wirkweise" />
  <nos-paragraphs>
    <template #heading>
      Ipratropiumbromid ist ein Derivat von Atropin.
    </template>
    <template #text>
      <div-paragraph>
        Ipratropiumbromid ist ein Parasympatholytikum und wird auch als SAMA (Short Acting Muscarinic Antagonist) bezeichnet. Es wirkt antagonistisch an den muskarinischen
        Acetylcholinrezeptoren (mACh) und führt zu einer Bronchodilatation. Zudem fördert es den Abtransport von Schleim aus den Bronchien.
      </div-paragraph>
      <div-paragraph>
        Die Wirkung ist lokal auf die Lunge begrenzt, Ipratropiumbromid gelangt nicht in das ZNS und beeinflusst die Herzfrequenz nur gering. Bei einer Überdosierung zeigen sich
        anticholinerge Symptome.
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
  name: 'MedIpratropium',
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
      return this.$store.getters.getContentMeta('med-ipratropium')
    }
  },
  methods: {}
}
</script>
