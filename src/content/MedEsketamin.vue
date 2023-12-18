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
    <nos-li>Starke Schmerzen nach Trauma</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen" />
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Esketamin</nos-li>
    <nos-li>Einfluss psychoaktiver Substanzen (z.B. Opiate)</nos-li>
  </nos-list>
  <nos-list contragroup="acute">
    <nos-li>GCS &lt; 12</nos-li>
    <nos-li>Kardiales Ereignis (z.B. ACS)</nos-li>
    <nos-li>Hirndruckzeichen (Cushing-Reflex)</nos-li>
    <nos-li :decent="true">
      Hypertonie, Bradykardie, Dyspnoe
    </nos-li>
    <nos-li :decent="true">
      Anfangs: Erbrechen, Kopfschmerzen, Müdigkeit
    </nos-li>
    <nos-li>RR<sub>syst.</sub> &lt; 100mmHg / RR<sub>syst.</sub> &gt; 180mmHg</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Schwangerschaft</nos-li>
    <nos-li>Kinder &lt; 30kg (Freigabe ab <b>~8</b> Jahre)</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen" />
  <nos-list>
    <nos-li variant="cave">
      Vigilanzminderung
    </nos-li>
    <nos-li variant="cave">
      Ateminsuffizienz
    </nos-li>
    <nos-li>Speichelfluss</nos-li>
    <nos-li variant="todo">
      Engmaschige Überwachung
    </nos-li>
    <nos-li variant="todo">
      Sauerstoffgabe, ggf. Assistierte Beatmung
    </nos-li>
  </nos-list>
  <nos-list>
    <nos-li variant="cave">
      Panik, Erregung
    </nos-li>
    <nos-li>Unruhe, Albträume, Angst</nos-li>
    <nos-li>Euphorie &bdquo;Neben der Spur&rdquo;</nos-li>
    <nos-li variant="todo">
      Ruhige Atmosphäre schaffen
    </nos-li>
    <nos-li variant="todo">
      Ggf. Benzodiazepam-Repetition
    </nos-li>
    <nos-btn-link content="med-midazolam" />
  </nos-list>
  <nos-list>
    <nos-li variant="cave">
      Blutdruckanstieg, Herzfrequenzanstieg
    </nos-li>
    <nos-li>Übelkeit, Erbrechen</nos-li>
    <nos-li variant="todo">
      Keine Dosiserhöhung.
    </nos-li>
    <nos-li variant="todo">
      Blutdruckspitze nach 10min abwarten.
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
          1 Ampulle &bdquo;Ketanest S&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '25mg', per: '5ml' },
            { unit: '5mg', per: 'ml', prefix: '=' },
          ]"
        />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Stärkste Schmerzen"
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
        </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption group="l1">
      <template #caption>
        (i.v.)-Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div>Vor Esketamin-Gabe Ko-Medikation obligatorisch:</div>
          <nos-btn-link content="med-midazolam" />
        </div-paragraph>
        <div-paragraph>
          <div-u class="mt-4">
            Vorbereitung
          </div-u>
          <div><span-mono>25mg</span-mono>-Ampulle auf <span-mono>10ml</span-mono> aufziehen.</div>
          <div-mono><b>&equals;2,5mg / ml</b></div-mono>
          <div><span-mono>2,5 mg</span-mono> entsprechen der Maximaldosis pro 10kg.</div>
          <div><span-mono>1,25mg</span-mono> entsprechen der Initialdosis pro 10kg.</div>
        </div-paragraph>
        <div-paragraph>
          <div-u>Maximaldosis festlegen</div-u>
          <nos-med-dose
            :items="[
              { unit: '1ml', per: '10kg', color: 'adult' },
              { unit: '2,5mg', per: '10kg', color: 'adult', prefix: '=' },
            ]"
          />
          <div>
            Maximaldosis auf Spritze markieren.<br>
            Rest für NA in der Spritze lassen, <b>nicht verwerfen</b>.
          </div>
        </div-paragraph>
        <div-paragraph>
          <div-u>Initialdosis</div-u>
          <div>
            <b>Hälfte</b> der &bdquo;markierten Dosis&rdquo; spritzen.<br>
            Langsam spritzen.
          </div>
        </div-paragraph>
        <div-paragraph>
          <div-u>Repetition nach 4min</div-u>
          <div>
            Alle 60s &rArr; <span-mono>0,5ml</span-mono> spritzen,<br>
            bis Schmerzen gelindert, oder Maximum erreicht (Markierung).
          </div>
        </div-paragraph>
        <v-divider class="my-2" />
        <div-paragraph style="opacity: 0.6">
          <div-u>Beispiel</div-u>
          <div>z.B. 74kg Patient ≈ 70kg</div>
          <div><span-mono>&equals; 7ml</span-mono> Maximaldosis &rArr; <span-mono>7ml</span-mono> markieren.</div>
        </div-paragraph>
        <div-paragraph style="opacity: 0.6">
          <div>&rArr; Initialdosis ist die Hälfte, also <span-mono>3,5ml</span-mono></div>
          <div>
            &rArr; Initialdosis sind umgerechnet
            <span-mono>3,5ml x 2,5mg &equals; <b>8,75mg</b></span-mono>
          </div>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption group="l2">
      <template #caption>
        (i.m.)-Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Ko-Medikation optional (niedrigere Dosis)</div-u>
        </div-paragraph>
        <div-paragraph>
          <div-u class="mt-4">
            Vorbereitung
          </div-u>
          <div><span-mono>25mg</span-mono>-Ampulle pur (<span-mono>5ml</span-mono>) aufziehen.</div>
          <div-mono><b>&equals;5mg / ml</b></div-mono>
          <div><span-mono>5 mg</span-mono> entsprechen der Maximaldosis pro 10kg.</div>
          <div><span-mono>2,5mg</span-mono> entsprechen der Initialdosis pro 10kg.</div>
        </div-paragraph>
        <div-paragraph>
          <div-u>Equivalent zur i.v.-Gabe fortfahren.</div-u>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~1min
    </template>
    <template #span>
      ~20min
    </template>
  </nos-med-effects>

  <nos-header title="Wirkweise" />
  <nos-paragraphs>
    <template #heading>
      Reversible Schmerzausschaltung und Sedierung bei Vorhandenbleiben von Schutzreflexen.
    </template>
    <template #text>
      <div-paragraph>
        Dabei bindet Esketamin nur teilweise an den Opiatrezeptor, sondern blockiert vorrangig NMDA-Rezeptoren (N-Methyl-D-Aspartat). Die NMDA-Bindungsstelle sorgt für die
        Gedächnisfunktion und ist in die Schmerzinterpretation involviert. Als NMDA-Antagonist beeinflusst Esketamin das Lernverhalten und sorgt für analgetische, antiepileptische
        und „neuroprotektive“ Wirkung (Nervenzellen und Nervenfasern werden vor dem Absterben bewahrt). Die Herzkreislaufstimulation erfolgt durch eine Katecholaminfreisetzung,
        eine gehemmte periphere Wiederaufnahme von Katecholaminen und eine zentral-sympathische Stimulation.
      </div-paragraph>
      <div-paragraph>
        Bei kontrollierter Beatmung senkt Esketamin den Hirndruck und bietet sich somit bei der Narkose von Patienten mit Schädel-Hirn-Trauma (SHT) an (bei insuffizienter Beatmung
        steigt der Hirndruck!). Es bewirkt zudem eine zerebrale Vasodilatation und eine Zunahme des Hirnstoffwechsels bei herabgesetzter Hirndurchblutung.
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
  name: 'MedEsketamin',
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
      return this.$store.getters.getContentMeta('med-esketamin')
    }
  },
  methods: {}
}
</script>
