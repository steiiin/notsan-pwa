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
    <nos-li>Krampfdurchbrechung</nos-li>
    <nos-li>Fieberkrampf</nos-li>
    <nos-li>Analgosedierung mit Esketamin</nos-li>
    <nos-li>Sedierung</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen" />
  <nos-header
    title="Zur Krampfdurchbrechung"
    :decent="true"
    icon="$databaseOutline"
  />
  <nos-list contragroup="intolerable">
    <nos-li>Überempfindlichkeit ggb. Midazolam oder Benzodiazepine</nos-li>
  </nos-list>
  <nos-list contragroup="acute">
    <nos-li>Akute Ateminsuffizienz</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Kinder &lt; 3 Monate</nos-li>
  </nos-list>

  <nos-header
    title="Zur Sedierung zusätzlich"
    :decent="true"
    icon="$databasePlusOutline"
  />
  <nos-list contragroup="known">
    <nos-li>Schlafapnoe-Syndrom</nos-li>
    <nos-li>Myasthenia gravis</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Schwangerschaft</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen" />
  <nos-list>
    <nos-li variant="cave">
      Atemdepression
    </nos-li>
    <nos-li variant="todo">
      Erwecken, zum Atmen animieren
    </nos-li>
    <nos-li variant="todo">
      Sauerstoffgabe, evtl. assistierte Beatmung
    </nos-li>
  </nos-list>
  <nos-list>
    <nos-li>Müdigkeit, Amnesie</nos-li>
    <nos-li>Muskelschwäche &rarr; Sturzgefahr</nos-li>
    <nos-li>Möglich: paradoxe Erregungszustände</nos-li>
    <nos-li variant="todo">
      Engmaschige Überwachung
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
          1 Ampulle Midazolam
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '5mg', per: '1ml' }]"
        />
        <nos-med-label
          type="nadel"
          class="mt-2"
        >
          4 Spritzen &bdquo;Buccolam&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '2,5mg (Gelb)' }, { unit: '5mg (Blau)' }, { unit: '7,5mg (Lila)' }, { unit: '10mg (Rot)' }]"
        />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Krampfdurchbrechung"
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
          <div-u>Rezidiver Krampf, oder Anfallsdauer &gt; 5min</div-u>
          <div>Bei Kindern &gt; 2min</div>
        </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption group="l3">
      <template #caption>
        (buccal)-Dosis
      </template>
      <template #content>
        <nos-med-dose
          :items="[
            { label: 'Erwachsene', unit: '10mg (Rot)', color: 'child' },
            { label: 'Ab 10 Jahren', unit: '10mg (Rot)', color: 'child' },
            { label: 'Grundschule', unit: '7,5mg (Lila)', color: 'baby' },
            { label: 'Kindergarten', unit: '5mg (Blau)', color: 'adult' },
            { label: '<1 Jahr', unit: '2,5mg (Gelb)', color: 'teen' },
          ]"
        />
        <v-divider class="my-2" />
        <div-paragraph>
          <div-u>Keine Repetition der buccalen Gabe.</div-u>
        </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption group="l2">
      <template #caption>
        (i.v.)-Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Vorbereitung</div-u>
          <div>
            <span-mono>5mg</span-mono>-Ampulle auf <span-mono>5ml</span-mono> NaCl aufziehen.<br>
            <span-mono>&equals;1mg / ml</span-mono>
          </div>
        </div-paragraph>
        <div-paragraph>
          <div-u>Bis zur Krampfdurchbrechung</div-u>
          <div-mono><b>1mg / 30s</b></div-mono>
        </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption group="l1">
      <template #caption>
        (nasal)-Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Vorbereitung</div-u>
          <div>
            <span-mono>5mg</span-mono>-Ampulle (bzw. 2 davon) in LuerLock-Spritze aufziehen.
          </div>
          <div>MAD aufdrehen.</div>
        </div-paragraph>
        <div-paragraph>
          <nos-med-dose
            :items="[
              { label: 'Erwachsene', unit: '10mg (2 Ampullen)', color: 'adult' },
              { label: 'Ab Grundschule', unit: '10mg (2 Ampullen)', color: 'adult' },
              { label: 'Ab 1 Jahr', unit: '5mg (1 Ampulle)', color: 'child' },
              { label: '< 1 Jahr', unit: '2,5mg (½ Ampulle)', color: 'baby' },
            ]"
          />
        </div-paragraph>
        <v-divider class="my-2" />
        <div-paragraph>
          <div-u>Repetition dosisgleich. Erst ab <b>10kg</b>.</div-u>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>
  <nos-header
    title="Esketamin-Analgesie"
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
          <div-u>Vor Esketamingabe, zur Milderung psychischer UAW</div-u>
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
            <span-mono>5mg</span-mono>-Ampulle auf <span-mono>5ml</span-mono> NaCl aufziehen.<br>
            <span-mono>&equals;1mg / ml</span-mono>
          </div>
        </div-paragraph>
        <nos-med-dose
          :items="[
            { label: 'Kinder / >60J', unit: '1mg (1ml)', color: 'teen' },
            { label: 'Alle Anderen', unit: '2mg (2ml)', color: 'adult' },
          ]"
        />
      </template>
    </nos-row-caption>
  </nos-table>
  <nos-header
    title="Sedierung"
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
          <div-u>Gegenatmen bei Beatmung</div-u>
          <div>Beim NotSan: Nach ROSC ohne Spontanes Erwachen</div>
        </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (buccal)-Dosis
      </template>
      <template #content>
        <nos-med-dose :items="[{ label: '> 50kg', unit: '5mg (1 Ampulle)', color: 'adult' }]" />
        <v-divider class="my-2" />
        <div-paragraph>
          <div-u>Patienten unter 50kg</div-u>
          <div>
            <span-mono>5mg</span-mono>-Ampulle auf <span-mono>5ml</span-mono> NaCl aufziehen.<br>
            <span-mono>&equals;1mg / ml</span-mono>
          </div>
        </div-paragraph>
        <nos-med-dose :items="[{ label: '< 50kg', unit: '1mg', per: '10kg', color: 'teen' }]" />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~1min
    </template>
    <template #span>
      ~45min
    </template>
  </nos-med-effects>

  <nos-header title="Wirkweise" />
  <nos-paragraphs>
    <template #heading>
      Midazolam gehört zur Gruppe der Benzodiazepine.
    </template>
    <template #text>
      <div-paragraph>
        Midazolam bindet an GABA-Rezeptoren und beeinflusst diese dahingehend, dass sie eine erhöhte Affinität für den Neurotransmitter Gamma-Aminobuttersäure (GABA) aufweisen.
        Dieser bindet folglich in höherem Maße an den Rezeptor und sorgt für eine verstärkte sedierende, anxiolytische, antikonvulsive und muskelrelaxierende Wirkung. Midazolam
        wirkt zudem hypnotisch und kann zu anterograden Amnesien führen.
      </div-paragraph>
      <div-paragraph>
        GABA führt zu einem vermehrten Einstrom von negativ geladenen Chloridionen in die postsynaptischen Nervenzellen und sorgt so für eine Hyperpolarisation. Dadurch wird die
        Erregungsschwelle, die zum Auslösen eines Aktionspotenzials führt, erhöht und es werden weniger (oder gar keine) Aktionspotenziale mehr weitergeleitet.
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
  name: 'MedMidazolam',
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
      return this.$store.getters.getContentMeta('med-midazolam')
    }
  },
  methods: {}
}
</script>
