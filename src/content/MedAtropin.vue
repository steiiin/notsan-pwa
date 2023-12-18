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
    <nos-li>Instabile Bradykardie</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen" />
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Atropin</nos-li>
  </nos-list>
  <nos-list contragroup="acute">
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
    <nos-li>Keine Kinder (&lt; 18J durch SAA untersagt)</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen" />
  <nos-list>
    <nos-li>Anticholinerges Syndrom:</nos-li>
    <nos-li :decent="true">
      Mund-/Schleimhauttrockenheit
    </nos-li>
    <nos-li :decent="true">
      Sehstörung, Augeninnendruckerhöhung
    </nos-li>
    <nos-li :decent="true">
      Tachykardie, Blutdruckanstieg
    </nos-li>
    <nos-li :decent="true">
      Harnverhalt, Obstipation
    </nos-li>
    <nos-li :decent="true">
      Psychisch: Unruhe, Tremor, Bewusstseinsstörung
    </nos-li>
    <nos-li>Wirkungsverstärkung von Neuroleptika</nos-li>
    <nos-li>Bei Dosen &lt; 0,5mg auch paradoxe Bradykardie möglich</nos-li>
    <nos-li variant="todo">
      Anwendung von Atropin beenden &amp; Alternativen benutzen.
    </nos-li>
    <nos-btn-link list="list-bradykardie" />
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung" />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Größen
      </template>
      <template #content>
        <nos-med-label type="ampulle">
          1 Ampulle Atropin
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '0,5mg', per: '1ml' }]"
        />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Instabile Bradykardie"
    :decent="true"
    icon="$hospitalBox"
  />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        (i.v.)-Dosis
      </template>
      <template #content>
        <nos-med-dose :items="[{ label: 'Erwachsene', unit: '0,5mg (1 Ampulle)', color: 'adult' }]" />
        <div-paragraph class="mt-2">
          <div-u>Bei nachweisbarer, <br>aber unzureichender Wirkung:</div-u>
          <div>Wiederholung alle 3 Minuten bis Bradykardie ausreichend therapiert.</div>
        </div-paragraph>
        <div-paragraph>
          <div>Maximaldosis: <span-mono>3mg (6 Ampullen)</span-mono></div>
        </div-paragraph>
        <v-divider class="my-2" />
        <div-paragraph>
          <div-u>Wenn Wirkungslos, Alternativen benutzen:</div-u>
          <nos-btn-link list="list-bradykardie" />
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~10min
    </template>
    <template #span>
      ~3h
    </template>
  </nos-med-effects>

  <nos-header title="Wirkweise" />
  <nos-paragraphs>
    <template #heading>
      Atropin ist ein Parasympatholytikum.
    </template>
    <template #text>
      <div-paragraph> Es blockiert die muskarinergen Rezeptoren, auf die normalerweise das Acetylcholin des Parasympathikus wirkt. </div-paragraph>
      <div-paragraph>
        Diese Eigenschaft führt zu einer breiten Palette pharmakologischer Wirkungen:
        <ol class="ms-4">
          <li>Herzfrequenzsteigerung &amp; Beschleunigung der AV-Überleitungszeit</li>
          <li>Bronchodilatation</li>
          <li>Verminderung der Peristaltik &amp; Sekretion im Gastrointestinaltrakt</li>
          <li>Relaxation der glatten Muskulatur</li>
          <li>Auge: Akkomodationshemmung &amp; Mydriasis</li>
          <li>Verminderte Schweißproduktion</li>
          <li>Verminderte Speichelbildung</li>
        </ol>
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
  name: 'MedAspirin',
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
      return this.$store.getters.getContentMeta('med-atropin')
    }
  },
  methods: {}
}
</script>
