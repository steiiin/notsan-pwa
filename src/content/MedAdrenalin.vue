<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li-point>Reanimation</nos-li-point>
    <nos-li-point>Instabile Bradykardie</nos-li-point>
    <nos-li-point>Bedrohliche Anaphylaxie</nos-li-point>
    <nos-li-point>Pseudokrupp</nos-li-point>
  </nos-list>
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list>
    <nos-li-check>Keine, da nur bei Lebensgefahr indiziert</nos-li-check>
  </nos-list>
  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li-cave>Herzfrequenzanstieg</nos-li-cave>
    <nos-li-cave>Blutdruckanstieg</nos-li-cave>
    <nos-li-cave>Angina Pectoris (durch erhöhten Sauerstoffbedarf am Herzen)</nos-li-cave>
    <nos-li-point>Herzrhythmusstörungen</nos-li-point>
    <nos-li-point>Unruhe, Angst</nos-li-point>
    <nos-li-todo class="mt-2">Anwendung abbrechen</nos-li-todo>
    <nos-li-todo>
      Wirk-Ende abwarten (HWZ 2min - bereits nach Sekunden Besserung)
    </nos-li-todo>
  </nos-list>
  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-content mode="med-size-ampul">1 Ampulle Adrenalin</nos-content>
        <nos-content mode="med-size-mono">1mg / 1ml</nos-content>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Reanimation" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Schockbar (<b>VF</b>, <b>VT</b>)</div>
          Nach dem 3. Schock
        </p>
        <p>
          <div class="nos-u">Nicht Schockbar (<b>PEA</b>, <b>Asystolie</b>)</div>
          So Schnell, wie möglich
        </p>
        <p><div class="nos-u">Repetition, alle 2 Zyklen (4min)</div></p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-dose 
          :items="[{ label: 'Erwachsene', unit: '1mg (1 Ampulle)', color: 'adult' }]"></nos-dose>
        <v-divider class="my-2"></v-divider>
        <nos-dose 
          :items="[
          { label: 'Kinder', unit: '0,01mg', per: 'kg', color: 'child' },
          { hint: 'Bei Kindern Adrenalin auf 20ml NaCl aufziehen, dann:' },
          { unit: '1ml', per: '5kg', color: 'child' }]"></nos-dose>
      </template>
    </nos-tab-row>
  </nos-table>
  <nos-header title="Bedrohliche Anaphylaxie" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          Bei ausgeprägter allergischer Reaktion, d.h. Schockzeichen, 
          Atemnot, Schleimhautödem der oberen Atemwege.
        </p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(i.m.)-Dosis</template>
      <template v-slot:content>
        <nos-dose 
          :items="[
            { label: 'Ab 12 Jahren', unit: '0,5mg (½ Ampulle)', color: 'adult' },
            { label: 'Kind (6-12)', unit: '0,3mg', color: 'teen' },
            { label: 'Kind (<6)', unit: '0,15mg', color: 'child' },
          ]"></nos-dose>
        <v-divider class="my-2"></v-divider>
        <p>Nicht mehr als die benötigte Menge aufziehen. 
        Bei intramuskulärer Gabe kommt es sonst leicht zur Überdosierung.</p>
        <p>Am besten <b>1ml</b>-Spritze benutzen.</p>
      </template>
    </nos-tab-row>
  </nos-table>
  <nos-header title="Instabile Bradykardie" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          Herzfrequenz unter 40min<sup>-1</sup>
        </p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(i.v.)-Dosis</template>
      <template v-slot:content>
        <nos-dose 
          :items="[
            { unit: '2-10µg', per: 'min' },
          ]"></nos-dose>
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
        <nos-dose 
          :items="[
            { hint: 'Im Perfusor einstellen:' },
            { unit: '0,1 - 0,5ml', per: 'min' },
            { unit: '6 -  30ml', per: 'h' }
          ]"></nos-dose>
      </template>
    </nos-tab-row>
  </nos-table>
  <nos-header title="Pseudokrupp" :decent="true" icon="mdi-hospital-box" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Obstruktion der oberen Atemwege</div>
          SpO<sub>2</sub> &lt; 90%, trotz Sauerstoff- &amp; Kortisongabe
        </p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(p.i.)-Dosis</template>
      <template v-slot:content>
        <nos-dose 
          :items="[
            { unit: '2mg (2 Ampullen)' },
            { hint: '+ 2ml NaCl in Vernebelungsmaske' }
          ]"></nos-dose>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-pharmakin>
    <template v-slot:onset>~30s</template>
    <template v-slot:span>~2min</template>
  </nos-pharmakin>

  <nos-header title="Wirkweise"></nos-header>
  <nos-card>
    <template v-slot:header>
      Katecholamin, verengt kleine Blutgefäße &amp; erweitert große, zentrale Gefäße.
    </template>
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
  </nos-card>
</template>

<script>
import NosTitle from "../components/NosTitle.vue";
import NosHeader from "../components/NosHeader.vue";
import NosCard from "../components/NosCard.vue";
import NosList from "../components/NosList.vue";
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
  name: "MedAdrenalin",
  components: {
    NosTitle,
    NosHeader,
    NosCard,
    NosList,
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
      return this.$store.getters.getContentMeta("med-adrenalin");
    },
  },
  methods: {},
};
</script>