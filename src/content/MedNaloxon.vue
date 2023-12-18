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
    <nos-li>Opiod-Intoxikation</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen" />
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Naloxon</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Kinder &lt; 12 Jahre (durch SAA untersagt)</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen" />
  <nos-list>
    <nos-li>Starke Entzugsreaktion</nos-li>
    <nos-li :decent="true">
      Tremor, Muskelkrämpfe
    </nos-li>
    <nos-li :decent="true">
      Tachykardie, Blutdruckanstieg
    </nos-li>
    <nos-li :decent="true">
      Unruhe, Aggressivität
    </nos-li>
    <nos-li variant="todo">
      Vorsichtig Titrieren
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
          1 Ampulle Naloxon
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '0,4mg', per: '1ml' }]"
        />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Opioid-Intoxikation"
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
          <div-u>Intoxikation mit <b>nicht lösbarem</b> A / B-Problem.</div-u>
        </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (i.v.)-Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Vorbereitung</div-u>
          <div>
            Ampulle auf <span-mono>10ml</span-mono> NaCl aufziehen.<br>
            <span-mono>&equals;0,04mg / ml</span-mono>
          </div>
        </div-paragraph>
        <div-paragraph>
          <div-u>Initialdosis</div-u>
          <nos-med-dose
            :items="[
              { unit: '2,5ml (¼ Spritze)', color: 'adult' },
              { unit: '0,1mg', color: 'adult' },
            ]"
          />
        </div-paragraph>
        <v-divider class="my-2" />
        <div-paragraph>
          <div-u>Alle 2min: Repetition</div-u>
          <nos-med-dose :items="[{ unit: '1ml (0,04mg)', color: 'adult' }]" />
          <div>
            Sehr langsam über die 2min spritzen.<br>
            Bis Schutzreflexe vorhanden &amp; Atmung suffizient.
          </div>
        </div-paragraph>
        <div-paragraph>
          <b>Patient muss nicht zwingend erwachen</b>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~2min
    </template>
    <template #span>
      ~30min
    </template>
  </nos-med-effects>

  <nos-header title="Wirkweise" />
  <nos-paragraphs>
    <template #heading>
      Kompetitiver Opioid-Antagonist an den zentralen Opioid-Rezeptoren.
    </template>
    <template #text>
      <div-paragraph>
        Naloxon hat eine höhere Affinität zu den Opioidrezeptorstellen als sämtliche Opioid-Agonisten und partielle Antagonisten, es verdrängt andere Moleküle vom Rezeptor und
        blockiert deren Wirkung.
      </div-paragraph>
      <div-paragraph>
        In Abwesenheit von Opioiden oder agonistischen Effekten anderer Opioid-Antagonisten zeigt Naloxon im Wesentlichen keine pharmakologische Eigenwirkung, so dass eine Gabe bei
        Verdacht auf eine Opiatintoxikation keine negativen Folgen hat, sollte sich der Verdacht nicht bestätigen.
      </div-paragraph>
      <div-paragraph>
        Aufgrund der kürzeren Wirkdauer als andere Opioide kann es nach 15-45min zu einer erneuten Opioid-Intoxikation kommen <b>(Rebound-Effekt)</b>.
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
  name: 'MedNaloxon',
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
      return this.$store.getters.getContentMeta('med-naloxon')
    }
  },
  methods: {}
}
</script>
