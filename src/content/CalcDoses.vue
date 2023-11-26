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
          <div v-if="adrenalinReaDose<1"><span class="nos-mono"><b>{{ this.roundToFixed(this.roundUpToNextFive((adrenalinReaDose / 0.1)*10)/10,1) }}ml</b></span> von der 10er-Spritze.</div>
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
                <div><span class="nos-mono"><b>{{ this.roundToFixed(amiodaronReaDose/50,1) }}ml</b></span></div>
              </template>
            </p>
            <p>
              <div class="nos-u">Nach dem 5. Schock</div>
              <div v-if="amiodaronReaDose>=150"><span class="nos-mono">150mg (1 Ampulle)</span></div>
              <template v-else>
                <div class="nos-mono">{{ amiodaronReaDose }}mg</div>
                <div><span class="nos-mono"><b>{{ this.roundToFixed(amiodaronReaDose/50,1) }}ml</b></span></div>
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
            <div>Größe <span class="nos-mono"><b>{{ tubeET.toFixed(1) }}</b></span> (+/- 1 Größe)</div>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template v-slot:caption >(iGel)-Tubus</template>
        <template v-slot:content>
            <div>Größe <span class="nos-mono"><b>{{ tubeIGel.size }}</b></span><span class="nos-colorbox ms-2" :class="'bg-'+tubeIGel.color">&nbsp;</span></div>
        </template>
      </nos-row-caption>
    </nos-table>

    <nos-header title="Adrenalin" class="mt-2"></nos-header>
    <nos-header title="Anaphylaxie" :decent="true"></nos-header>
    <nos-table>
      <nos-row-caption>
        <template v-slot:caption>Vorbereitung</template>
        <template v-slot:content>
          <div><span class="nos-mono">1 Ampulle</span> auf <span class="nos-mono">10ml</span> aufziehen.</div>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template v-slot:caption >(i.m.)-Dosis</template>
        <template v-slot:content>
          <div v-if="weight<=20" class="nos-mono">1,5ml</div>
          <div v-else-if="weight>20&&weight<=40" class="nos-mono">3ml</div>
          <div v-else class="nos-mono">5ml</div>
        </template>
      </nos-row-caption>
    </nos-table>
    <nos-btn-link content="med-adrenalin" :backLink="true" class="nos-doses-backlink"></nos-btn-link>

    <nos-header title="Butylscopulamin" class="mt-2"></nos-header>
    <nos-table>
      <nos-row-caption>
        <template v-slot:caption>Vorbereitung</template>
        <template v-slot:content>
          <div><span class="nos-mono">1 Ampulle</span> auf <span class="nos-mono">20ml</span> aufziehen.</div>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template v-slot:caption >(i.v.)-Dosis</template>
        <template v-slot:content>
          <div class="nos-mono">{{ buscopanDose }}mg</div>
          <div><span class="nos-mono"><b>{{ this.roundToFixed(buscopanDose/2,1) }}ml</b></span> von der 20er-Spritze.</div>
        </template>
      </nos-row-caption>
    </nos-table>
    <nos-btn-link content="med-buscopan" :backLink="true" class="nos-doses-backlink"></nos-btn-link>

    <nos-header title="Dimetinden (Fenistil)" class="mt-2"></nos-header>
    <nos-table>
      <nos-row-caption>
        <template v-slot:caption>Vorbereitung</template>
        <template v-slot:content>
          <div><span class="nos-mono">1 Ampulle</span> auf <span class="nos-mono">20ml</span> aufziehen.</div>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template v-slot:caption >(i.v.)-Dosis</template>
        <template v-slot:content>
          <div class="nos-mono">{{ dimetindenDose }}mg</div>
          <div><span class="nos-mono"><b>{{ this.roundToFixed(dimetindenDose/0.2) }}ml</b></span> von der 20er-Spritze.</div>
        </template>
      </nos-row-caption>
    </nos-table>
    <nos-btn-link content="med-dimetinden" :backLink="true" class="nos-doses-backlink"></nos-btn-link>

    <nos-header title="Esketamin" class="mt-2"></nos-header>
    <nos-table>
      <nos-row-caption>
        <template v-slot:caption>Vorbereitung</template>
        <template v-slot:content>
          <div><span class="nos-mono">1 Ampulle</span> auf <span class="nos-mono">10ml</span> aufziehen.</div>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template v-slot:caption >(i.v.)-Dosis</template>
        <template v-slot:content>
          <div class="nos-u">Initialdosis</div>
          <div class="nos-mono">{{ ketanestDose.init }}mg</div>
          <div><span class="nos-mono"><b>{{ this.roundToFixed(ketanestDose.init/2.5,1) }}ml</b></span> von der 10er-Spritze.</div>
          <v-divider class="my-2"></v-divider>
          <div class="nos-u">Maximaldosis</div>
          <div class="nos-mono">{{ ketanestDose.max }}mg</div>
          <div><span class="nos-mono"><b>{{ this.roundToFixed(ketanestDose.max/2.5) }}ml</b></span> von der 10er-Spritze.</div>
        </template>
      </nos-row-caption>
    </nos-table>
    <nos-btn-link content="med-esketamin" :backLink="true" class="nos-doses-backlink"></nos-btn-link>

    <nos-header title="Glukose" class="mt-2"></nos-header>
    <nos-table>
      <nos-row-caption>
        <template v-slot:caption >(i.v.)-Dosis</template>
        <template v-slot:content>
          <div class="nos-u">Einzeldosis</div>
          <div class="nos-mono">{{ roundToFixed(glucoseDose) }}g</div>
          <div><span class="nos-mono"><b>{{ this.roundToFixed(glucoseDose/2) }}</b> Ampullen G20</span></div>
        </template>
      </nos-row-caption>
    </nos-table>
    <nos-btn-link content="med-glucose" :backLink="true" class="nos-doses-backlink"></nos-btn-link>

    <nos-header title="Glucagon" class="mt-2"></nos-header>
    <nos-table>
      <nos-row-caption>
        <template v-slot:caption >(i.m.)-Dosis</template>
        <template v-slot:content>
          <div class="nos-mono">{{ (weight>=25 ? '1mg (1 Ampulle)' : '0,5mg (½ Ampulle)') }}</div>
        </template>
      </nos-row-caption>
    </nos-table>
    <nos-btn-link content="med-glucagon" :backLink="true" class="nos-doses-backlink"></nos-btn-link>

    <nos-header title="Ibuprofen" class="mt-2"></nos-header>
    <nos-table>
      <nos-row-caption>
        <template v-slot:caption >Dosis</template>
        <template v-slot:content>
          <div class="nos-u">Maximale Einzeldosis</div>
          <div class="nos-mono">{{ ibuprofenDose }}mg</div>
        </template>
      </nos-row-caption>
    </nos-table>
    <nos-btn-link content="med-ibuprofen" :backLink="true" class="nos-doses-backlink"></nos-btn-link>

    <nos-header title="Midazolam" class="mt-2"></nos-header>
    <nos-table>
      <nos-row-caption>
        <template v-slot:caption>Buccolam</template>
        <template v-slot:content>
          <div class="nos-mono">{{ midazolamDose.buccolam.dose }}mg<span class="nos-colorbox ms-2" :class="'bg-'+midazolamDose.buccolam.color">&nbsp;</span></div>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template v-slot:caption>nasal (MAD)</template>
        <template v-slot:content>
          <div class="nos-mono">{{ midazolamDose.nasal.dose }}mg</div>
          <div class="nos-mono">{{ midazolamDose.nasal.amp }}</div>
        </template>
      </nos-row-caption>
    </nos-table>
    <nos-btn-link content="med-midazolam" :backLink="true" class="nos-doses-backlink"></nos-btn-link>

    <nos-header title="Paracetamol" class="mt-2"></nos-header>
    <nos-table>
      <nos-row-caption v-if="weight<40">
        <template v-slot:caption>Rektal</template>
        <template v-slot:content>
          <div><span class="nos-mono">{{ weight<=10 ? '125' : '250' }}mg</span> Zäpfchen</div>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template v-slot:caption>(i.v.)-Dosis</template>
        <template v-slot:content>
          <div><span class="nos-mono">{{ weight<50 ? '½' : '1' }}</span> Kurzinfusion</div>
        </template>
      </nos-row-caption>
    </nos-table>
    <nos-btn-link content="med-paracetamol" :backLink="true" class="nos-doses-backlink"></nos-btn-link>
    
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
      },
      buscopanDose() { 
        return Math.min(this.roundUpToNextFive(this.weight*0.3),20)
      },
      dimetindenDose() { 
        return Math.min(this.roundToFixed(this.weight*0.1,1),8)
      },
      ketanestDose() { 
        let dose = (Math.ceil(this.weight/10)*10)*0.25
        return {
          init: Math.min(dose/2,25),
          max: Math.min(dose, 25)
        }
      },
      glucoseDose() {
        return Math.min(this.weight*0.2, 10)
      },
      ibuprofenDose() {
        if (this.weight<10) { return 50 }
        else if (this.weight<15) { return 100 }
        else if (this.weight<20) { return 150 }
        else if (this.weight<40) { return 200 }
        return Math.ceil((this.weight*10)/10)*10
      },
      midazolamDose() {
        // buccolam
        let buccolam = { dose: 10, color: 'red-darken-3' }
        if (this.weight <= 10) {
          buccolam = { dose: 2.5, color: 'yellow-darken-1' }
        }
        else if (this.weight < 25) {
          buccolam = { dose: 5.0, color: 'blue-darken-4' }
        }
        else if (this.weight < 40) {
          buccolam = { dose: 7.5, color: 'deep-purple-darken-1' }
        }
        // nasal
        let nasal = { dose: 10, amp: '2 Ampullen' }
        if (this.weight < 10) {
          nasal = { dose: 2.5, amp: '½ Ampulle' }
        }
        else if (this.weight < 20) {
          nasal = { dose: 5, amp: '1 Ampulle' }
        }
        // i.v.
        let iv = this.weight*0.1
        
        return { iv: iv, buccolam: buccolam, nasal: nasal }
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
          let lastScroll = this.$router.options?.history?.state?.scroll?.top ?? 0 
          window.scrollTo({ top: lastScroll == 0 ? 300 : lastScroll, behavior: 'smooth' }) 
        }, 500);
      }
    },
  };
</script>
<style lang="scss" scoped>
.nos-doses-backlink {
  margin: -18px 0 0 0;
}
</style>