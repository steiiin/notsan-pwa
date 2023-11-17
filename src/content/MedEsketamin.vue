<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Starke Schmerzen nach Trauma</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list-ci type="intolerable">
    <nos-li-point>Einfluss psychoaktiver Substanzen (z.B. Opiate)</nos-li-point>
    <nos-li-point>Unverträglichkeit ggb. Esketamin</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="acute">
    <nos-li-point>Kardiales Ereignis (z.B. ACS)</nos-li-point>
    <nos-li-point>Schlaganfall</nos-li-point>
    <nos-li-point>GCS &lt; 12</nos-li-point>
    <nos-li-point>RR<sub>syst.</sub> &lt; 100mmHg / RR<sub>syst.</sub> &gt; 180mmHg</nos-li-point>
    <nos-li-point>Atemfrequenz &lt; 10 / SpO<sub>2</sub> &lt; 90%</nos-li-point>
  </nos-list-ci>
  <nos-list-ci type="family">
    <nos-li-point>Schwangerschaft</nos-li-point>
    <nos-li-point>Kinder &lt; 30kg (Freigabe ab ~8 Jahre)</nos-li-point>
  </nos-list-ci>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-cave>Vigilanzminderung</nos-li-cave>
    <nos-li-cave>Panikattacken, Unruhe</nos-li-cave>
    <nos-li-cave>Blutdruckanstieg</nos-li-cave>
  </nos-list>
  <nos-list>
    <nos-li-point>Unruhe, Albträume</nos-li-point>
    <nos-li-point>Euphorie &bdquo;Neben der Spur&rdquo;</nos-li-point>
  </nos-list>
  <nos-list>
    <nos-li-todo> Unruhe: Ruhige Atmosphäre schaffen </nos-li-todo>
    <nos-li-todo> Vigilanz: Vitalzeichenüberwachung </nos-li-todo>
    <nos-li-todo> Panik, Erregung: Evtl. Benzodiazepam-Repetition </nos-li-todo>
    <div><v-btn>TODO: BPR Starke Schmerzen</v-btn></div>
  </nos-list>
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-ampul"
          >1 Ampulle &bdquo;Ketanest S&rdquo;</nos-content
        >
        <nos-content mode="med-size-mono">25mg / 5ml</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Stärkste Schmerzen" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p class="nos-u">NRS &gt; 6</p>
      </template>
    </nos-tab-row>
    <nos-tab-row group="l1">
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <p>
          <div>Vor Esketamin-Gabe Ko-Medikation obligatorisch:</div>
          <div><v-btn>TODO Med-Midazolam</v-btn></div>
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
          <div class="nos-mono">1ml / 10kgKG</div>
          <div>Maximaldosis nach Körpergewicht auf Spritze markieren.<br/>
          Rest für NA in der Spritze lassen, <b>nicht verwerfen</b>.</div>
        </p>
        <p>
          <div class="nos-u">Initialdosis</div>
          <div>
            Hälfte der &bdquo;markierten Dosis&rdquo; spritzen.<br />
            Langsam spritzen.
          </div>
        </p>
        <p>
          <div class="nos-u">Repetition</div>
          <div>
            Nach 60s &rArr; <span class="nos-mono">0,5ml</span> spritzen,<br />
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
    </nos-tab-row>
    <nos-tab-row group="l2">
      <template v-slot:caption>(i.m.)-Dosis</template>
      <template v-slot:content>
        <p class="nos-u">Ko-Medikation optional, aufgrund niedriger Dosis</p>
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
    </nos-tab-row>
    <nos-tab-row group="l3">
      <template v-slot:caption>(nasal)-Dosis</template>
      <template v-slot:content>
        <p class="nos-u">Ebenso Ko-Medikation (z.B. Midazolam nasal)</p>
        <p>
          <div class="nos-u mt-4">Nasenloch-Menge</div>
          <div><span class="nos-mono">2ml</span>/Nasenloch</div>
          <div><span class="nos-mono">20mg</span>Nasal möglich.</div>
          <div class="font-italic">Letztes Mittel, wenn nichts anderes möglich.</div>
        </p>
        <nos-dose
          :items="[
            { unit: '25mg', per: '10kg' },
            { label: 'Pro Nasenloch', unit: '2ml á 10mg', color: 'adult' }]"
        ></nos-dose>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~1min</template>
    <template v-slot:span>~5-10min</template>
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header>  
      Reversible Schmerzausschaltung und Sedierung bei 
      Vorhandenbleiben von Schutzreflexen. 
    </template>
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
  </nos-card>
</template>

<script>
import NosTitle from "../components/NosTitle.vue";
import NosHeader from "../components/NosHeader.vue";
import NosCard from "../components/NosCard.vue";
import NosList from "../components/NosList.vue";
import NosListCi from "../components/NosListCi.vue";
import NosLiNone from "../components/NosLiNone.vue";
import NosLiPoint from "../components/NosLiPoint.vue";
import NosLiCheck from "../components/NosLiCheck.vue";
import NosLiCave from "../components/NosLiCave.vue";
import NosLiTodo from "../components/NosLiTodo.vue";
import NosTable from "../components/NosTable.vue";
import NosTabRow from "../components/NosTabRow.vue";
import NosContent from "../components/NosContent.vue";
import NosDose from "../components/NosDose.vue";
import NosPharmakin from "../components/NosPharmakin.vue";

export default {
  name: "MedEsketamin",
  components: {
    NosTitle,
    NosHeader,
    NosCard,
    NosList,
    NosListCi,
    NosLiNone,
    NosLiPoint,
    NosLiCheck,
    NosLiCave,
    NosLiTodo,
    NosTable,
    NosTabRow,
    NosContent,
    NosDose,
    NosPharmakin
  },
  computed: {
    meta() {
      return this.$store.getters.getContentMeta("med-esketamin");
    },
  },
  methods: {},
};
</script>
