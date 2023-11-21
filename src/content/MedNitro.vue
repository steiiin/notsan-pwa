<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>
  
  <nos-header title="Indikationen"></nos-header>
  <nos-list>
    <nos-li>Akutes Koronarsyndrom</nos-li>
    <nos-li>Kardiales Lungenödem</nos-li>
    <nos-li>Hypertensiver Notfall mit kardialer Symptomatik</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen"></nos-header>
  <nos-list contragroup="intolerable">
    <nos-li>Unverträglichkeit ggb. Nitraten</nos-li>
    <nos-li>Gleichzeitige Einnahme von PDE-5-Hemmern, z.B.:</nos-li>
    <nos-li :decent="true">Sildenafil (24h): Viagra, Silde, Sildaristo</nos-li>
    <nos-li :decent="true">Vardenafil (24h): Levitra, Vardenaristo, Vardegn</nos-li>
    <nos-li :decent="true">Tadalafil (72h): Cialis, Tadagis, Adcirca, Tadal</nos-li>
  </nos-list>
  <nos-list contragroup="acute">
    <nos-li>ST-Streckenhebung in II, III oder aVF</nos-li>
    <nos-li>Schock (insb. Herzfrequenz &gt; 120min<sup>-1</sup> / RR<sub>syst.</sub> &le; 120mmHg)</nos-li>
    <nos-li>Verdacht auf Hirnblutung</nos-li>
  </nos-list>
  <nos-list contragroup="known">
    <nos-li>Schwere Herzklappenstenose</nos-li>
    <nos-li>Hypertrophe Obstruktive Kardiomyopathie</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Schwangerschaft</nos-li>
    <nos-li>Kinder &lt; 12 Jahre (durch SAA untersagt)</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen"></nos-header>
  <nos-list>
    <nos-li variant="cave">Starker Blutdruckabfall (Synkope mgl.)</nos-li>
    <nos-li>Tachykardie</nos-li>
    <nos-li>Schwindel</nos-li>
    <nos-li variant="todo">ZUVOR: Anlage eines sicheren i.v.-Zugangs</nos-li>
    <nos-li variant="todo">Flach- ggf. Schocklagerung</nos-li>
    <nos-li variant="todo">Volumengabe</nos-li>
  </nos-list>
  <nos-list>
    <nos-li>Kopfschmerzen</nos-li>
    <nos-li variant="todo">Abwarten: Nach ca. 5min Besserung</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung"></nos-header>
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Größen</template>
      <template v-slot:content>
        <nos-med-label type="spray">1 Pumpspray</nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[{ unit: '0,4mg', per: 'Hub' }]"
        ></nos-med-dose>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="ACS &amp;Kardiales Lungenödem" :decent="true" icon="$hospitalBox" />
  <nos-table>
    <nos-row-caption>
      <template v-slot:caption>Einsatz</template>
      <template v-slot:content>
        <p class="nos-u">Vor Anwendung sicheren i.v.-Zugang anlegen</p>
      </template>
    </nos-row-caption>
    <nos-row-caption>
      <template v-slot:caption>(s.l.)-Dosis</template>
      <template v-slot:content>
        <nos-med-dose
          :items="[{ label: 'Ab 12J', unit: '1 Hub', color: 'adult' }]"
        ></nos-med-dose>
        <v-divider class="my-2"></v-divider>
        <p>Sublinguale Anwendung. <br/>Spray zuvor Nicht schütteln.</p>
        <p class="nos-u">Einmalige Repetition nach 5min möglich</p>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik"></nos-header>
  <nos-med-effects>
    <template v-slot:onset>~1min</template>
    <template v-slot:span>~5min</template>
  </nos-med-effects>

  <nos-header title="Wirkweise"></nos-header>
  <nos-paragraphs>
    <template v-slot:heading>Das Nitrat bewirkt eine Gefäßweitung.</template>
    <template v-slot:text>
      <p>
        Blutgefäße werden einerseits zentral (hormonell &amp;vegetatives NS) reguliert.
        Anderseits durch sich selbst (Autoregulation) bei Kälte, Verletzungen,
        Sauerstoffmangel, usw.
      </p>
      <p>
        Nitroglycerin zerfällt im Körper und setzt dabei Stickstoffmonoxid frei.
        Stickstoffmonoxid wirkt auf glatte Muskelzellen entspannend (dilatierend). Durch
        die Wirkung auf die glatten Muskelzellen in den Wänden der Blutgefäße wirkt es
        gefäßerweiternd. Die Wirkung ist besonders stark in großen Venen und großen
        Arterien und weniger ausgeprägt in Widerstandsgefäßen.
      </p>
      <p>
        Durch die Erweiterung der Venen wird der Füllungsdruck des Herzens (Vorlast)
        verringert, durch die Erweiterung der großen Arterien steigt deren Compliance, der
        Blutdruck sinkt, und damit der Druck, gegen den das Herz das Blut auswerfen muss
        (Nachlast). Beides führt dazu, dass das Herz weniger stark arbeiten muss und
        weniger Sauerstoff verbraucht.
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
  name: "MedNitro",
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
  },
  computed: {
    meta() {
      return this.$store.getters.getContentMeta("med-nitro");
    },
  },
  methods: {},
};
</script>
