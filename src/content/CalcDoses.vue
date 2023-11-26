<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "25.11.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>

  <nos-header title="Einsatz"></nos-header>
  <nos-paragraphs :decent="true">
    <template v-slot:text>
      <p>Hier können gewichtsabhängige Dosierungshilfen ermittelt werden.</p>
    </template>
  </nos-paragraphs>

  <!-- STEP1 -->
  <nos-header :decent="true" title="Gewicht eingeben" icon="$weight"></nos-header>

  <div style="width: 10rem">
    <v-text-field
      id="id-input-weight"
      class="mt-2"
      v-model="weight"
      hide-details="auto"
      label="Gewicht"
      variant="solo"
      suffix="kg"
      type="tel"
      v-on:keypress="filterWeight($event)"
    ></v-text-field>
  </div>

  <!-- RESULT -->
  <template v-if="weight>0">
    <nos-header title="Ergebnis" icon="$hospitalBox" class="mt-4"></nos-header>
    <nos-header title="Reanimation" :decent="true" class="mt-2"></nos-header>
    <nos-table>
      <nos-row-caption v-if="weight<40">
        <template v-slot:caption >Defibrillation</template>
        <template v-slot:content>
          <p>
            <div class="nos-u">Schockenergie</div>
            <div>~ <span class="nos-mono">{{ this.roundUpToNextFive(weight * 4) }}</span> Joule</div>

            <v-divider class="my-2"></v-divider>

            <div class="nos-u">Erfolglose Schocks (&ge; 6)</div>
            <div>~ <span class="nos-mono">{{ this.roundUpToNextFive(weight * 8) }}</span> Joule</div>
          </p>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template v-slot:caption>Adrenalin</template>
        <template v-slot:content>
          <template v-if="adrenalinReaDose<1">
            <div class="nos-u">Vorbereitung</div>
            <div><span class="nos-mono">1 Ampulle</span> auf <span class="nos-mono">10ml</span> aufziehen.</div>
            <v-divider class="my-2"></v-divider>
            <div class="nos-u">Dosierung</div>
          </template>
          <div class="nos-mono">{{ this.roundToFixed(adrenalinReaDose,1) }} mg</div>
          <div v-if="adrenalinReaDose<1"><span class="nos-mono">{{ this.roundToFixed(this.roundUpToNextFive((adrenalinReaDose / 0.1)*10)/10,1) }}ml</span> von der 10er-Spritze.</div>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template v-slot:caption>Amiodaron</template>
        <template v-slot:content>
          <div v-if="amiodaronReaDose==0" class="nos-u">Nicht für Kinder &lt; 3 Jahre</div>
          <template v-else>
            <p>
              <div class="nos-u">Nach dem 3. Schock</div>
              <div v-if="amiodaronReaDose>=300"><span class="nos-mono">300mg (2 Ampullen)</span></div>
              <template v-else>
                <div class="nos-mono">{{ amiodaronReaDose }}mg</div>
                <div><span class="nos-mono">{{ this.roundToFixed(amiodaronReaDose/50,1) }}ml</span></div>
              </template>
            </p>
            <p>
              <div class="nos-u">Nach dem 5. Schock</div>
              <div v-if="amiodaronReaDose>=150"><span class="nos-mono">150mg (1 Ampulle)</span></div>
              <template v-else>
                <div class="nos-mono">{{ amiodaronReaDose }}mg</div>
                <div><span class="nos-mono">{{ this.roundToFixed(amiodaronReaDose/50,1) }}ml</span></div>
              </template>
            </p>
          </template>
        </template>
      </nos-row-caption>
    </nos-table>

    <nos-header title="Beatmung" :decent="true" class="mt-2"></nos-header>
    <nos-table>
      <nos-row-caption>
        <template v-slot:caption >(ET)-Tubus</template>
        <template v-slot:content>
            <div>Größe <span class="nos-mono">{{ tubeET.toFixed(1) }}</span> (+/- 1 Größe)</div>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template v-slot:caption >(iGel)-Tubus</template>
        <template v-slot:content>
            <div>Größe <span class="nos-mono">{{ tubeIGel.size }}</span><span class="nos-colorbox ms-2" :class="'bg-'+tubeIGel.color">&nbsp;</span></div>
        </template>
      </nos-row-caption>
    </nos-table>
  </template>
</template>

<script>
  import NosTitle from "../components/NosTitle.vue";
  import NosHeader from "../components/NosHeader.vue";
  import NosParagraphs from "../components/NosParagraphs.vue";
  import NosTable from "../components/NosTable.vue";
  import NosRowCaption from "../components/NosRowCaption.vue";
  import NosRowScore from "../components/NosRowScore.vue";
  import NosRowResult from "../components/NosRowResult.vue";
  import NosBtnLink from "../components/NosBtnLink.vue";
  import NosBtnToggle from "../components/NosBtnToggle.vue";
  import NosBtnGroup from "../components/NosBtnGroup.vue";
  import NosBtnChip from "../components/NosBtnChip.vue";

  export default {
    name: "CalcDoses",
    components: {
      NosTitle,
      NosHeader,
      NosParagraphs,
      NosTable,
      NosRowCaption,
      NosRowScore,
      NosRowResult,
      NosBtnLink,
      NosBtnToggle,
      NosBtnGroup,
      NosBtnChip,
    },
    data() {
      return {
        weight: "",
      };
    },
    computed: {
      meta() {
        return this.$store.getters.getContentMeta("calc-doses");
      },

      adrenalinReaDose() { 
        if (this.weight >= 50) { return 1; }
        else if (this.weight < 5) { return 0.05; }
        return this.weight * 0.01
      },
      amiodaronReaDose() { 
        if (this.weight < 10) { return 0; }
        return (this.roundUpToNextFive(this.weight) * 5)-25;
      },
      tubeET() {
        if (this.weight <= 10) { return 3.5 }
        else if (this.weight > 10 && this.weight <= 16) { return 4.0 }
        else if (this.weight > 16 && this.weight <= 18) { return 4.5 }
        else if (this.weight > 18 && this.weight <= 27) { return 5.0 }
        else if (this.weight > 27 && this.weight <= 30) { return 5.5 }
        else if (this.weight > 30 && this.weight <= 40) { return 6.0 }
        else if (this.weight > 40 && this.weight <= 47) { return 6.5 }
        else if (this.weight > 47 && this.weight <= 60) { return 7.0 }
        else if (this.weight > 60 && this.weight <= 70) { return 7.5 }
        else if (this.weight > 70 && this.weight <= 90) { return 8.0 }
        else { return 8.5 }
      },
      tubeIGel() {
        if (this.weight <= 5) { return { size: '1.0', color: 'pink-lighten-1' } }
        else if (this.weight > 5 && this.weight <= 12) { return { size: '1.5', color: 'blue-lighten-1' } }
        else if (this.weight > 12 && this.weight <= 25) { return { size: '2.0', color: 'grey-darken-1' } }
        else if (this.weight > 25 && this.weight <= 35) { return { size: '2.5', color: 'grey-lighten-5' } }
        else if (this.weight > 35 && this.weight <= 55) { return { size: '3.0', color: 'yellow-accent-3' } }
        else if (this.weight > 55 && this.weight <= 90) { return { size: '4.0', color: 'green-darken-1' } }
        else { return { size: '5.0', color: 'orange-darken-1' } }
      }
    },
    methods: {
      filterWeight(e) {
        let char = String.fromCharCode(e.keyCode);
        if (/^[0-9]+$/.test(char)) {
          // prevent zero
          if (char === "0" && this.weight === "") {
            e.preventDefault();
          }

          // prevent over 300
          if (parseInt(this.weight + char) > 300) {
            e.preventDefault();
          }

          return true;
        } else {
          e.preventDefault();
        }
      },

      roundUpToNextFive(num) {
        if (num <= 5) return 5;
        return Math.ceil(num / 5) * 5;
      },
      roundToFixed(num, places = 0) {
        return Number(Number(num).toFixed(places))
      },
    },
    mounted() {
      let weightQuery = this.$route.query.weight;
      if (weightQuery == null) {
        this.weight = "";
        this.$nextTick(() => document.getElementById('id-input-weight')?.focus() )
      }
      else {
        this.weight = this.roundToFixed(weightQuery);
        setTimeout(() => {
          window.scrollTo({ top: 300, behavior: 'smooth' }) 
        }, 500);
      }
    },
  };
</script>
