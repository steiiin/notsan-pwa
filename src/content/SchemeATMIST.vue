<!-------------------------------------------------------------------------------------------------
{

}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title
    :headline="meta.title"
    :subtitle="meta.subtitle"
  />

  <nos-header title="Einsatz" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph> Das ATMIST-Schema erleichtert die strukturierte Übergabe von Traumapatienten im Schockraum. </div-paragraph>
    </template>
  </nos-paragraphs>

  <nos-header title="Schema" />
  <nos-table>
    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="A"
          meaning="Age"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Alter &amp; Name</div-u>
          <div>
            Als erste wichtige Information werden Alter und Name genannt; zum einen werden Verwechslungen vermieden und auch weitere Verfahrensweise eingegrenzt (z.B. geriatrische
            Patienten, Kinder).
          </div>
          <v-divider class="my-2" />
          <q>Frau Walter, 27 Jahre alt, ...</q>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="T"
          meaning="Time"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Zeitpunkt des Unfalls</div-u>
          <div>Als nächstes wird die eigentliche Unfallbeschreibung aber mit dem genauen Unfallzeitpunkt eingeleitet.</div>
          <div>Gerade beim Trauma entscheidet die Zeit bis zur Therapie über das Outcome und hilft während der Übergabe die weitere Behandlung zu planen.</div>
          <v-divider class="my-2" />
          <q>... ist vor einer halben Stunde, gegen 12:00 Uhr ...</q>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="M"
          meaning="Mechanism"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Angaben zum Unfallablauf</div-u>
          <div>Hier folgt eine KURZE Beschreibung des Unfalls, insbesondere die Mechanismen, die zu den Verletzungen des Patienten geführt haben.</div>
        </div-paragraph>
        <div-paragraph>
          <div>Bei einem Schockraumpatienten sollte hier die Schockraumanmeldung begründet werden.</div>
          <v-divider class="my-2" />
          <q>... auf dem Fahrrad unterwegs, dabei von einem abbiegendem PKW frontal erfasst worden, gegen die Frontscheibe geschleudert und danach am Boden liegen geblieben. Der
            PKW fuhr ca. 40km/h. ...</q>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="I"
          meaning="Injuries"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Verletzungen</div-u>
          <div>Im Rahmen der Versorgung an der Einsatzstelle festgestellte Verletzungen, werden hier kurz beschrieben. Idealerweise geschieht dies von Kopf bis Fuß.</div>
        </div-paragraph>
        <div-paragraph>
          <div>
            Am Besten werden die Verletzungen aufgezählt, denn primär soll hier ein Eindruck des Gesamtzustandes entstehen und verhindert werden, dass der Patient
            <i>falsch</i> angefasst wird.
          </div>
          <v-divider class="my-2" />
          <q>... Festgestellt wurden eine Kopfplatzwunde, Blut aus den Ohren; Nacken- und Rückenschmerzen; Schmerzen linkes Handgelenk und Fehlstellung Sprunggelenk links ...</q>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="S"
          meaning="Signs"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Untersuchungsbefunde &amp; Symptome</div-u>
          <div>Hier wird anhand des ABCDE-Schemas kurz ein Überblick über die Erstuntersuchung gegeben, bzw. auf Anzeichen oder Veränderungen bei der Behandlung hingewiesen.</div>
          <v-divider class="my-2" />
          <q>
            ... Kein A- oder B-Problem, Haut blass und kalt, Blutdruck systolisch 100, Tachykard mit 110/min; <br>
            Frau Walter war initial bewusstlos, bei unserem Eintreffen wach, allerdings verlangsamt und desorientiert.<br>
            Inzwischen zumindest situativ orientiert, keine neurol. Ausfälle. ...
          </q>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="T"
          meaning="Threatment"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Angaben zur Behandlung</div-u>
          <div>Hier folgt schlussendlich die Beschreibung der Behandlung vor Ort und etwaige Änderungen des Zustandes während des Transports.</div>
        </div-paragraph>
        <div-paragraph>
          <div>Sollte eine relevante Vorgeschichte (z.B. Blutverdünnereinnahme, Drogen, Allergien) bestehen, sollte das hier zum Schluss erwähnt werden.</div>
          <div>Auch können hier weitere die Behandlung betreffende Infos gegeben werden, z.B. Dolmetscher, oder alte Unfälle.</div>
          <v-divider class="my-2" />
          <q>
            ... Aufgrund der Unfallmechanik immobilisierten wir die Patientin zusammen mit Beckenschlinge, legten einen großlumige Zugang und forderten den Notarzt nach - der
            allerdings nicht verfügbar war.<br>
            Relevant hier noch die Einnahme von Xarelto und eine Hüft-TEP links vor zwei Jahren.
          </q>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>
</template>

<script>
import NosTitle from '../components/NosTitle.vue'
import NosHeader from '../components/NosHeader.vue'
import NosParagraphs from '../components/NosParagraphs.vue'
import NosTable from '../components/NosTable.vue'
import NosRowCaption from '../components/NosRowCaption.vue'
import NosCaptionAkronym from '../components/NosCaptionAkronym.vue'

export default {
  name: 'SchemeATMIST',
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosTable,
    NosRowCaption,
    NosCaptionAkronym
  },
  data () {
    return {
      tgTvt: false,
      tgUnlikly: false,
      tgHf100: false,
      tgImmob: false,
      tgBefore: false,
      tgHaemoptyse: false,
      tgCa: false
    }
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('scheme-atmist')
    }
  }
}
</script>
