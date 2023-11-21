<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>

  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Starke Schmerzen nach Trauma</nos-li>
  </nos-list>
  
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Esketamin</nos-li>
    <nos-li>Einfluss psychoaktiver Substanzen (z.B. Opiate)</nos-li>
  </nos-list>
  <nos-list contragroup="acute">
    <nos-li>GCS &lt; 12</nos-li>
    <nos-li>Kardiales Ereignis (z.B. ACS)</nos-li>
    <nos-li>Hirndruckzeichen (Cushing-Reflex)</nos-li>
    <nos-li :decent="true">Hypertonie, Bradykardie, Dyspnoe</nos-li>
    <nos-li :decent="true">Anfangs: Erbrechen, Kopfschmerzen, Müdigkeit</nos-li>
    <nos-li>RR<sub>syst.</sub> &lt; 100mmHg / RR<sub>syst.</sub> &gt; 180mmHg</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Schwangerschaft</nos-li>
    <nos-li>Kinder &lt; 30kg (Freigabe ab <b>~8</b> Jahre)</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li variant="cave">Vigilanzminderung</nos-li>
    <nos-li variant="cave">Ateminsuffizienz</nos-li>
    <nos-li>Speichelfluss</nos-li>
    <nos-li variant="todo">Engmaschige Überwachung</nos-li>
    <nos-li variant="todo">Sauerstoffgabe, ggf. Assistierte Beatmung</nos-li>
  </nos-list>
  <nos-list>
    <nos-li variant="cave">Panik, Erregung</nos-li>
    <nos-li>Unruhe, Albträume, Angst</nos-li>
    <nos-li>Euphorie &bdquo;Neben der Spur&rdquo;</nos-li>
    <nos-li variant="todo">Ruhige Atmosphäre schaffen</nos-li>
    <nos-li variant="todo">Ggf. Benzodiazepam-Repetition</nos-li>
    <nos-btn-link content="med-midazolam"></nos-btn-link>
  </nos-list>
  <nos-list>
    <nos-li variant="cave">Blutdruckanstieg, Herzfrequenzanstieg</nos-li>
    <nos-li>Übelkeit, Erbrechen</nos-li>
    <nos-li variant="todo">Keine Dosiserhöhung.</nos-li>
    <nos-li variant="todo">Blutdruckspitze nach 10min abwarten.</nos-li>
  </nos-list>
  
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle &bdquo;Ketanest S&rdquo;</nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '25mg', per: '5ml' },
            { unit: '5mg', per: 'ml', prefix: '=' },
          ]"
        ></nos-med-dose>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Stärkste Schmerzen" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p class="nos-u">NRS &gt; 6</p>
      </template>
    </nos-row-caption>
    <nos-row-caption group="l1">
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <p>
          <div>Vor Esketamin-Gabe Ko-Medikation obligatorisch:</div>
          <nos-btn-link content="med-midazolam"></nos-btn-link>
        </p>
        <p>
          <div class="nos-u mt-4">Vorbereitung</div>
          <div>
            <span class="nos-mono">25mg</span>-Ampulle auf <span class="nos-mono">10ml</span> aufziehen.
          </div>
          <div class="nos-mono">
            <b>&equals;2,5mg / ml</b>
          </div>
          <div>
            <span class="nos-mono">2,5 mg</span> entsprechen der Maximaldosis pro 10kg.
          </div>
          <div>
            <span class="nos-mono">1,25mg</span> entsprechen der Initialdosis pro 10kg.
          </div>
        </p>
        <p>
          <div class="nos-u">Maximaldosis festlegen</div>
          <nos-med-dose :items="[
            { unit: '1ml', per: '10kg', color: 'adult' },
            { unit: '2,5mg', per: '10kg', color: 'adult', prefix: '=' }]">
          </nos-med-dose>
          <div>Maximaldosis auf Spritze markieren.<br/>
          Rest für NA in der Spritze lassen, <b>nicht verwerfen</b>.</div>
        </p>
        <p>
          <div class="nos-u">Initialdosis</div>
          <div>
            <b>Hälfte</b> der &bdquo;markierten Dosis&rdquo; spritzen.<br />
            Langsam spritzen.
          </div>
        </p>
        <p>
          <div class="nos-u">Repetition nach 4min</div>
          <div>
            Alle 60s &rArr; <span class="nos-mono">0,5ml</span> spritzen,<br />
            bis Schmerzen gelindert, oder Maximum erreicht (Markierung).
          </div>
        </p>
        <v-divider class="my-2"></v-divider>
        <p style="opacity:0.6">
          <div class="nos-u">Beispiel</div>
          <div>z.B. 74kg Patient ≈ 70kg</div>
          <div>
            <span class="nos-mono">&equals; 7ml</span> Maximaldosis &rArr; <span class="nos-mono">7ml</span> markieren.
          </div>
        </p>
        <p style="opacity:0.6">
          <div>
            &rArr; Initialdosis ist die Hälfte, also <span class="nos-mono">3,5ml</span>
          </div>
          <div>
            &rArr; Initialdosis sind umgerechnet 
            <span class="nos-mono">3,5ml x 2,5mg &equals; <b>8,75mg</b></span>
          </div>
        </p>
      </template>
    </nos-row-caption>

    <nos-row-caption group="l2">
      <template v-slot:caption>(i.m.)-Dosis</template>
      <template v-slot:content>
        <p class="nos-u">Ko-Medikation optional (niedrigere Dosis)</p>
        <p>
          <div class="nos-u mt-4">Vorbereitung</div>
          <div>
            <span class="nos-mono">25mg</span>-Ampulle pur (<span class="nos-mono">5ml</span>) aufziehen.
          </div>
          <div class="nos-mono">
            <b>&equals;5mg / ml</b>
          </div>
          <div>
            <span class="nos-mono">5 mg</span> entsprechen der Maximaldosis pro 10kg.
          </div>
          <div>
            <span class="nos-mono">2,5mg</span> entsprechen der Initialdosis pro 10kg.
          </div>
        </p>
        <p>
          <div class="nos-u">Equivalent zur i.v.-Gabe fortfahren.</div>
        </p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~1min</template>
    <template v-slot:span>~20min</template>
  </nos-med-effects>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs>
    <template v-slot:heading>  
      Reversible Schmerzausschaltung und Sedierung bei 
      Vorhandenbleiben von Schutzreflexen. 
    </template>
    <template v-slot:text>
      <p>
      Dabei bindet Esketamin nur teilweise an den Opiatrezeptor, sondern 
      blockiert vorrangig NMDA-Rezeptoren (N-Methyl-D-Aspartat). Die 
      NMDA-Bindungsstelle sorgt für die Gedächnisfunktion und ist in 
      die Schmerzinterpretation involviert. Als NMDA-Antagonist 
      beeinflusst Esketamin das Lernverhalten und sorgt für 
      analgetische, antiepileptische und „neuroprotektive“ Wirkung 
      (Nervenzellen und Nervenfasern werden vor dem Absterben bewahrt). 
      Die Herzkreislaufstimulation erfolgt durch eine Katecholaminfreisetzung, 
      eine gehemmte periphere Wiederaufnahme von Katecholaminen und eine 
      zentral-sympathische Stimulation. 
    </p>
    <p>
      Bei kontrollierter Beatmung senkt Esketamin den Hirndruck und bietet 
      sich somit bei der Narkose von Patienten mit Schädel-Hirn-Trauma (SHT) 
      an (bei insuffizienter Beatmung steigt der Hirndruck!). Es bewirkt 
      zudem eine zerebrale Vasodilatation und eine Zunahme des 
      Hirnstoffwechsels bei herabgesetzter Hirndurchblutung.
    </p>
    </template>
</nos-paragraphs>
</template>

<script>
import NosTitle from "../components/NosTitle.vue";
import NosHeader from "../components/NosHeader.vue";
import NosParagraphs from "../components/NosParagraphs.vue";
import NosList from "../components/NosList.vue";
import NosLi from "../components/NosLi.vue";
import NosTable from "../components/NosTable.vue";
import NosRowCaption from "../components/NosRowCaption.vue";
import NosMedLabel from "../components/NosMedLabel.vue";
import NosMedDose from "../components/NosMedDose.vue";
import NosMedEffects from "../components/NosMedEffects.vue";
import NosBtnLink from "../components/NosBtnLink.vue";

export default {
  name: "MedEsketamin",
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
    meta() {
      return this.$store.getters.getContentMeta("med-esketamin");
    },
  },
  methods: {},
};
</script>
