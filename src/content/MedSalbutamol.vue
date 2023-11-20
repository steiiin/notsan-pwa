<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Asthmaanfall / COPD</nos-li>
    <nos-li>Inhalationstrauma mit Bronchospastik</nos-li>
  </nos-list>
  
  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Salbutamol</nos-li>
  </nos-list>
  <nos-list contragroup="acute">
    <nos-li>Tachykardie / Tachyarrhythmie (symptomatisch)</nos-li>
    <nos-li>Akutes Koronarsyndrom</nos-li>
  </nos-list>
  <nos-list contragroup="known">
    <nos-li>Schwere KHK</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Kinder &lt; 4 Jahre (durch SAA untersagt)</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li>Tachykardie</nos-li>
    <nos-li>Schwindel</nos-li>
    <nos-li>Unruhe</nos-li>
    <nos-li variant="todo">Bei zunehmender Verschlechterung: Anwendung abbrechen</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="ampulle">1 Phiole Salbutamol</nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '2,5mg'},
          ]"
        ></nos-med-dose>
        <v-divider class="my-2"></v-divider>
        <p>
          <div class="nos-u">Im LK Meißen durch Kombipräparat ersetzt:</div>
          <nos-btn-link content="med-ipramol"></nos-btn-link>
        </p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Asthmaanfall, COPD &amp; Inhalationstrauma" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-tab-row>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p>
          <div class="nos-u">Bronchialobstruktion &amp; Atemnot</div>
          <div>Giemen, Brummen. Verlängertes Exspirium.</div>
        </p>
      </template>
    </nos-tab-row>
    <nos-tab-row>
      <template v-slot:caption>(p.i.)-Dosis</template>
      <template v-slot:content>
        <nos-med-dose
          :items="[{ label: 'Ab 12 Jahren', unit: '2,5mg (1 Phiole)', color: 'adult' },
          { label: '< 12 Jahre', unit: '1,25mg (½ Phiole)', color: 'child' }]"
        ></nos-med-dose>
        <v-divider class="my-2"></v-divider>
        <p>
          <span class="nos-mono">+2ml</span> NaCl in Vernebelungsmaske.<br/>
          Mit <span class="nos-mono">6-9l</span> Sauerstoff vernebeln.
        </p>
        <p class="nos-u">Repetition nach 10min möglich</p>
      </template>
    </nos-tab-row>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~2min</template>
    <template v-slot:span>~4h</template>
  </nos-med-effects>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs>
    <template v-slot:heading>
      Salbutamol ist ein β₂-Sympathomimetikum.
    </template>
    <template v-slot:text>
      <p>
        Salbutamol wirkt an der Bronchialmuskulatur und sorgt für eine 
        Bronchodilatation und Bronchospasmolyse. Es hemmt die Freisetzung von 
        broncho-konstriktorischen Mediatoren bei allergischen Reaktionen und führt so 
        zu einer Beendigung des Asthmaanfalls bzw. der allergischen Reaktion. Durch 
        die Förderung der Flimmerbewegung des Flimmerepithels sorgt es zusätzlich für 
        einen leichteren Schleimauswurf.
      </p>
      <p>
        β2-Rezeptoren sind in vielen glatten Muskelzellen des Körpers vorhanden, u.a. 
        am Uterus. In der Schwangerschaft ist eine strenge Indikationsstellung nötig, 
        um eine Erschlaffung des Uterus und eine damit einhergehende Wehenhemmung 
        (Tokolyse) zu verhindern. Die Wirkung ist allerdings nicht vollständig 
        selektiv, es werden auch β1-Rezeptoren am Herzen stimuliert, weshalb es zur 
        Steigerung der Herzfrequenz kommt.
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
import NosTabRow from "../components/NosTabRow.vue";
import NosMedLabel from "../components/NosMedLabel.vue";
import NosMedDose from "../components/NosMedDose.vue";
import NosMedEffects from "../components/NosMedEffects.vue";
import NosBtnLink from "../components/NosBtnLink.vue";

export default {
  name: "MedSalbutamol",
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosList,
    NosLi,
    NosTable,
    NosTabRow,
    NosMedLabel,
    NosMedDose,
    NosMedEffects,
    NosBtnLink,
  },
  computed: {
    meta() {
      return this.$store.getters.getContentMeta("med-salbutamol");
    },
  },
  methods: {},
};
</script>
