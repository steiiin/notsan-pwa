<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "22.11.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Reanimation</nos-li>
    <nos-li>Instabile Bradykardie</nos-li>
    <nos-li>Bedrohliche Anaphylaxie</nos-li>
    <nos-li>Pseudokrupp</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list>
    <nos-li variant="check">Keine, da nur bei Lebensgefahr indiziert</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li variant="cave">Herzfrequenzanstieg</nos-li>
    <nos-li variant="cave">Blutdruckanstieg</nos-li>
    <nos-li variant="cave">Angina Pectoris (durch erhöhten Sauerstoffbedarf am Herzen)</nos-li>
    <nos-li>Herzrhythmusstörungen</nos-li>
    <nos-li>Unruhe, Angst</nos-li>
    <nos-li variant="todo">Anwendung abbrechen</nos-li>
    <nos-li variant="todo">Wirk-Ende abwarten (bereits nach Sekunden Besserung)</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Ampulle Adrenalin</nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '1mg', per: '1ml' },
          ]"
        ></nos-med-dose>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Reanimation" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Schockbar (<b>VF</b>, <b>VT</b>)</div>
          <div>Nach dem 3. Schock</div>
        </p>
        <p>
          <div class="nos-u">Nicht Schockbar (<b>PEA</b>, <b>Asystolie</b>)</div>
          <div>So Schnell, wie möglich</div>
        </p>
        <p>
          <div class="nos-u">Repetition, alle 2 Zyklen (4min)</div>
        </p>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-med-dose 
          :items="[{ label: 'Erwachsene', unit: '1mg (1 Ampulle)', color: 'adult' }]"></nos-med-dose>
        <v-divider class="my-2"></v-divider>
        <nos-med-dose 
          :items="[
            { hint: 'Bei Kindern Adrenalin auf 20ml NaCl aufziehen, dann:' },
            { label: 'Kinder', unit: '0,01mg', per: 'kg', color: 'child' },
            { unit: '1ml', per: '5kg', color: 'child' }]"></nos-med-dose>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Bedrohliche Anaphylaxie" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          Bei <span class="nos-u">ausgeprägter allergischer Reaktion</span>, d.h. Schockzeichen, 
          Atemnot, Schleimhautödem der oberen Atemwege.
        </p>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(i.m.)-Dosis</template>
      <template v-slot:content>
        <nos-med-dose 
          :items="[
            { label: 'Ab 12 Jahren', unit: '0,5mg (½ Ampulle)', color: 'adult' },
            { label: 'Kind (6-12)', unit: '0,3mg', color: 'teen' },
            { label: 'Kind (<6)', unit: '0,15mg', color: 'child' },
          ]"></nos-med-dose>
        <v-divider class="my-2"></v-divider>
        <p>Nicht mehr als die benötigte Menge aufziehen. 
        Bei intramuskulärer Gabe kommt es sonst leicht zur Überdosierung.</p>
        <p>Am besten <b>1ml</b>-Spritze benutzen.</p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Instabile Bradykardie" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p class="nos-u">
          Herzfrequenz unter 40min<sup>-1</sup>
        </p>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-med-dose 
          :items="[
            { unit: '2-10µg', per: 'min' },
          ]"></nos-med-dose>
        <p class="mt-2">
          <div class="nos-u">Wenn es schnell gehen muss</div>
          <span class="nos-mono">1mg (1 Ampulle)</span> in 500ml Infusion geben &amp;
          langsam tropfen lassen. <span class="nos-mono"><b>&equals; 2µg/ml</b></span>
        </p>
        <p>
          <div class="nos-u">Mit dem Perfusor</div>
          <span class="nos-mono">1mg (1 Ampulle)</span> auf 50ml Spritze aufziehen.<br />
          <span class="nos-mono"><b>&equals; 20µg/ml</b></span>
        </p>
        <div>Im Perfusor einstellen:</div>
        <nos-med-dose 
          :items="[
            { unit: '0,1 - 0,5ml', per: 'min' },
            { unit: '6 -  30ml', per: 'h' }
          ]"></nos-med-dose>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pseudokrupp" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Obstruktion der oberen Atemwege</div>
          <div>SpO<sub>2</sub> &lt; 90%, trotz Sauerstoff- &amp; Kortisongabe</div>
        </p>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(p.i.)-Dosis</template>
      <template v-slot:content>
        <nos-med-dose 
          :items="[
            { unit: '2mg (2 Ampullen)' },
          ]"></nos-med-dose>
          <div><span class="nos-mono">+2ml NaCl</span> in Vernebelungsmaske</div>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~30s</template>
    <template v-slot:span>~2min</template>
  </nos-med-effects>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs>
    <template v-slot:heading>
      Katecholamin, verengt kleine Blutgefäße &amp; erweitert große, zentrale Gefäße.
    </template>
    <template v-slot:text>
      <p>
        Adrenalin ist ein Stresshormon und schafft als solches die Voraussetzungen für die
        rasche Bereitstellung von Energiereserven, die in gefährlichen Situationen das
        Überleben sichern sollen (Kampf oder Flucht).
      </p>
      <p>
        Von besonderer Wichtigkeit ist die Wirkung von Adrenalin auf das
        Herz-Kreislauf-System. Hierzu zählt u. a. der Anstieg des zentralen Blutvolumens,
        der durch Kontraktion kleiner Blutgefäße, insbesondere in der Haut und in den
        Nieren, über die Aktivierung von α1-Adrenozeptoren geschieht. Zugleich wird eine
        β2-Adrenozeptor-vermittelte Erweiterung zentraler und muskelversorgender Blutgefäße
        beobachtet.
      </p>
      <p>
        Die Anwendung des Adrenalins bei Atemwegserkrankungen basiert auf seiner
        bronchienrelaxierenden Wirkung, die über eine Aktivierung von β2-Adrenozeptoren
        vermittelt wird. Systemische Nebenwirkungen nach Resorption müssen jedoch in Kauf
        genommen werden.
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

export default {
  name: "MedAdrenalin",
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
    meta() {
      return this.$store.getters.getContentMeta("med-adrenalin");
    },
  },
  methods: {},
};
</script>