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
    <nos-li>Kolikartige Schmerzen</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen" />
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Butylscopolamin</nos-li>
  </nos-list>
  <nos-list contragroup="acute">
    <nos-li>Tachyarrhythmie</nos-li>
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
    <nos-li>Ileus (Stuhlverhalt)</nos-li>
  </nos-list>
  <nos-list contragroup="known">
    <nos-li>Myasthenia gravis</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Schwangerschaft</nos-li>
    <nos-li>Stillzeit</nos-li>
    <nos-li>Kinder &lt; 12 Jahre (durch SAA untersagt)</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen" />
  <nos-list>
    <nos-li variant="cave">
      Tachykardie
    </nos-li>
    <nos-li variant="cave">
      Blutdruckabfall
    </nos-li>
    <nos-li>Schwindel</nos-li>
    <nos-li variant="todo">
      Flüssigkeitsersatz, ggf. Schocklagerung
    </nos-li>
  </nos-list>
  <nos-list>
    <nos-li>Mundtrockenheit</nos-li>
    <nos-li>Sehstörungen</nos-li>
    <nos-li>Unruhe, Angst</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung" />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Größen
      </template>
      <template #content>
        <nos-med-label type="ampulle">
          1 Ampulle &bdquo;Buscopan&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '20mg', per: '1ml' }]"
        />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Kolikartiger Schmerz"
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
          <div-u>NRS &gt; 6</div-u>
          <div><i>Bei Nierenkolik kaum wirksam.</i></div>
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
            { label: 'Erwachsene', unit: '20mg (1 Ampulle)', color: 'adult' },
            { label: 'Jugendliche', unit: '15mg (¾ Ampulle)', color: 'teen' },
          ]"
        />
        <v-divider class="my-2" />
        <div-paragraph>
          Auf 20ml NaCl aufziehen, langsam spritzen<br>
          &amp; nachspülen.
        </div-paragraph>
        <div-paragraph> Herzfrequenz mit EKG oder SpO<sub>2</sub>-Sensor <b>überwachen</b>. </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~5min
    </template>
    <template #span>
      ~5h
    </template>
  </nos-med-effects>

  <nos-header title="Wirkweise" />
  <nos-paragraphs>
    <template #heading>
      Butylscopolamin ist ein Parasympatholytikum.
    </template>
    <template #text>
      <div-paragraph>
        Butylscopolamin wirkt anticholinerg und spasmolytisch auf die glatte Muskulatur des Verdauungs- und Urogenitaltrakts und der Gallenwege. Die Wirkung beruht auf der Hemmung
        von Muskarinrezeptoren der glatten Muskulatur und der Hemmung der ganglionären Übertragung durch Acetylcholin.
      </div-paragraph>
      <div-paragraph>
        <div class="font-italic">
          Laut S2k-Leitlinie zur Diagnostik, Therapie und Metaphylaxe der Urolithiasis ist Butylscopolamin in der Therapie von Harnleiterkoliken ineffektiv und sollte somit nicht
          zur Therapie verwendet werden. Die Dosis, welche zur Hemmung der Peristaltik von Harnleitern benötigt wird, sei demnach zu hoch.
        </div>
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
  name: 'MedBuscopan',
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
      return this.$store.getters.getContentMeta('med-buscopan')
    }
  },
  methods: {}
}
</script>
