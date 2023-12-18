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
    <nos-li>Reanimation</nos-li>
    <nos-li>Instabile Bradykardie</nos-li>
    <nos-li>Bedrohliche Anaphylaxie</nos-li>
    <nos-li>Pseudokrupp</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen" />
  <nos-list>
    <nos-li variant="check">
      Keine, da nur bei Lebensgefahr indiziert
    </nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen" />
  <nos-list>
    <nos-li variant="cave">
      Herzfrequenzanstieg
    </nos-li>
    <nos-li variant="cave">
      Blutdruckanstieg
    </nos-li>
    <nos-li variant="cave">
      Angina Pectoris (durch erhöhten Sauerstoffbedarf am Herzen)
    </nos-li>
    <nos-li>Herzrhythmusstörungen</nos-li>
    <nos-li>Unruhe, Angst</nos-li>
    <nos-li variant="todo">
      Anwendung abbrechen
    </nos-li>
    <nos-li variant="todo">
      Wirk-Ende abwarten (bereits nach Sekunden Besserung)
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
          1 Ampulle Adrenalin
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '1mg', per: '1ml' }]"
        />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Reanimation"
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
          <div-u>Schockbar (<b>VF</b>, <b>VT</b>)</div-u>
          <div>Nach dem 3. Schock</div>
        </div-paragraph>
        <div-paragraph>
          <div-u>Nicht Schockbar (<b>PEA</b>, <b>Asystolie</b>)</div-u>
          <div>So Schnell, wie möglich</div>
        </div-paragraph>
        <div-paragraph>
          <div-u>Repetition, alle 2 Zyklen (4min)</div-u>
        </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (i.v.)-Dosis
      </template>
      <template #content>
        <nos-med-dose :items="[{ label: 'Erwachsene', unit: '1mg (1 Ampulle)', color: 'adult' }]" />
        <v-divider class="my-2" />
        <nos-med-dose
          :items="[
            { hint: 'Bei Kindern Adrenalin auf 20ml NaCl aufziehen, dann:' },
            { label: 'Kinder', unit: '0,01mg', per: 'kg', color: 'child' },
            { unit: '1ml', per: '5kg', color: 'child' },
          ]"
        />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Bedrohliche Anaphylaxie"
    :decent="true"
    icon="$hospitalBox"
  />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Einsatz
      </template>
      <template #content>
        <div-paragraph> Bei <span-u>ausgeprägter allergischer Reaktion</span-u>, d.h. Schockzeichen, Atemnot, Schleimhautödem der oberen Atemwege. </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (i.m.)-Dosis
      </template>
      <template #content>
        <nos-med-dose
          :items="[
            { label: 'Ab 12 Jahren', unit: '0,5mg (½ Ampulle)', color: 'adult' },
            { label: 'Kind (6-12)', unit: '0,3mg', color: 'teen' },
            { label: 'Kind (<6)', unit: '0,15mg', color: 'child' },
          ]"
        />
        <v-divider class="my-2" />
        <div-paragraph> Nicht mehr als die benötigte Menge aufziehen. Bei intramuskulärer Gabe kommt es sonst leicht zur Überdosierung. </div-paragraph>
        <div-paragraph> Am besten <b>1ml</b>-Spritze benutzen. </div-paragraph>
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
        Einsatz
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Herzfrequenz unter 40min<sup>-1</sup></div-u>
        </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (i.v.)-Dosis
      </template>
      <template #content>
        <nos-med-dose :items="[{ unit: '2-10µg', per: 'min' }]" />
        <div-paragraph class="mt-2">
          <div-u>Wenn es schnell gehen muss</div-u>
          <div>
            <span-mono>1mg (1 Ampulle)</span-mono> in 500ml Infusion geben &amp; langsam tropfen lassen.
            <span-mono><b>&equals; 2µg/ml</b></span-mono>
          </div>
        </div-paragraph>
        <div-paragraph>
          <div-u>Mit dem Perfusor</div-u>
          <span-mono>1mg (1 Ampulle)</span-mono> auf 50ml Spritze aufziehen.<br>
          <span-mono><b>&equals; 20µg/ml</b></span-mono>
        </div-paragraph>
        <div>Im Perfusor einstellen:</div>
        <nos-med-dose
          :items="[
            { unit: '0,1 - 0,5ml', per: 'min' },
            { unit: '6 -  30ml', per: 'h' },
          ]"
        />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Pseudokrupp"
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
          <div-u>Obstruktion der oberen Atemwege</div-u>
          <div>SpO<sub>2</sub> &lt; 90%, trotz Sauerstoff- &amp; Kortisongabe</div>
        </div-paragraph>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template #caption>
        (p.i.)-Dosis
      </template>
      <template #content>
        <nos-med-dose :items="[{ unit: '2mg (2 Ampullen)' }]" />
        <div><span-mono>+2ml NaCl</span-mono> in Vernebelungsmaske</div>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~30s
    </template>
    <template #span>
      ~2min
    </template>
  </nos-med-effects>

  <nos-header title="Wirkweise" />
  <nos-paragraphs>
    <template #heading>
      Katecholamin, verengt kleine Blutgefäße &amp; erweitert große, zentrale Gefäße.
    </template>
    <template #text>
      <div-paragraph>
        Adrenalin ist ein Stresshormon und schafft als solches die Voraussetzungen für die rasche Bereitstellung von Energiereserven, die in gefährlichen Situationen das Überleben
        sichern sollen (Kampf oder Flucht).
      </div-paragraph>
      <div-paragraph>
        Von besonderer Wichtigkeit ist die Wirkung von Adrenalin auf das Herz-Kreislauf-System. Hierzu zählt u. a. der Anstieg des zentralen Blutvolumens, der durch Kontraktion
        kleiner Blutgefäße, insbesondere in der Haut und in den Nieren, über die Aktivierung von α1-Adrenozeptoren geschieht. Zugleich wird eine β2-Adrenozeptor-vermittelte
        Erweiterung zentraler und muskelversorgender Blutgefäße beobachtet.
      </div-paragraph>
      <div-paragraph>
        Die Anwendung des Adrenalins bei Atemwegserkrankungen basiert auf seiner bronchienrelaxierenden Wirkung, die über eine Aktivierung von β2-Adrenozeptoren vermittelt wird.
        Systemische Nebenwirkungen nach Resorption müssen jedoch in Kauf genommen werden.
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
  name: 'MedAdrenalin',
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
      return this.$store.getters.getContentMeta('med-adrenalin')
    }
  },
  methods: {}
}
</script>
