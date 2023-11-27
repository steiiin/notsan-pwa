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
      <p>Hier können alters-/gewichtsabhängie Parameter zu Kindern ermittelt werden.</p>
    </template>
  </nos-paragraphs>

  <!-- STEP1 -->
  <nos-header :decent="true" title="Gewicht schätzen oder Eingeben" icon="$weight"></nos-header>
  <nos-btn-group
    v-model="step1"
    :items="[
      { label: 'Schätzen', state: 'estimate' },
      { label: 'Eingeben', state: 'input' },
    ]"
  ></nos-btn-group>

  <!-- STEP1-ESTIMATE -->
  <template v-if="step1 === 'estimate'">
    <nos-header
      :decent="true"
      title="Gewicht anhand Alter oder Größe ermitteln"
      icon="$formatParagraphSpacing"
      class="mt-2"
    ></nos-header>
    <nos-btn-group
      v-model="step2"
      :items="[
        { label: 'Alter', state: 'age' },
        { label: 'Größe', state: 'height' },
      ]"
    ></nos-btn-group>

    <!-- STEP2-HEIGHT -->
    <template v-if="step2 === 'height'">
      <div class="nos-forms-textfield-block">
        <v-text-field
          id="id-input-height"
          class="mt-2"
          v-model="height"
          hide-details="auto"
          label="Größe"
          variant="solo"
          :suffix="heightSuffix"
          type="tel"
          v-on:keypress="filterHeight($event)"
        ></v-text-field>
      </div>
    </template>

    <!-- STEP2-AGE -->
    <template v-else-if="step2 === 'age'">
      <nos-header
        :decent="true"
        title="Das Alter eingeben oder grob schätzen"
        icon="$formatParagraphSpacing"
        class="mt-2"
      ></nos-header>
      <div class="mt-2">
        <nos-btn-group
          v-model="step3"
          :items="[
            { label: 'Jahre+Monate', state: 'input' },
            { label: 'Ganz Grob', state: 'estimate' },
          ]"
        ></nos-btn-group>
      </div>

      <!-- STEP3-AGE-INPUT -->
      <template v-if="step3 === 'input'">
        <div>
          <div class="nos-forms-textfield-inline">
            <v-text-field
              id="id-input-age-year"
              class="mt-2"
              v-model="ageYears"
              hide-details="auto"
              label="Jahre"
              variant="solo"
              :suffix="parseInt(ageYears) === 1 ? 'Jahr' : 'Jahre'"
              type="tel"
              v-on:keypress="filterYear($event)"
            ></v-text-field>
          </div>
          <div class="nos-forms-textfield-inline">
            <v-text-field
              v-show="ageYears === '0'"
              id="id-input-age-month"
              class="mt-2 ms-2"
              v-model="ageMonths"
              hide-details="auto"
              label="Monate"
              variant="solo"
              :suffix="parseInt(ageMonths) === 1 ? 'Monat' : 'Monate'"
              type="tel"
              v-on:keypress="filterMonths($event, true)"
            ></v-text-field>
          </div>
        </div>
      </template>

      <!-- STEP3-AGE-ESTIMATE -->
      <template v-else-if="step3 === 'estimate'">
        <div class="mt-2" style="width: 16rem">
          <v-select
            label="Altersgruppe"
            :items="ageGroups"
            :item-props="ageGroupSelectProps"
            ref="vselectAgeEstimate"
            id="id-input-age-estimate"
            hide-details="auto"
            variant="solo"
            @update:modelValue="ageGroupSelectChanged"
          >
          </v-select>
        </div>
      </template>
    </template>
  </template>

  <!-- STEP1-INPUT -->
  <template v-else-if="step1 === 'input'">
    <div class="nos-forms-textfield-block">
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
  </template>

  <!-- RESULT -->
  <template v-if="weightValue > 0">
    <nos-header title="Ergebnis" icon="$hospitalBox" class="mt-4"></nos-header>
    <nos-table>
      <nos-row-result :color="weightResult.broselow.color">
        <template v-slot:heading>{{ weightResult.broselow.title }}</template>
        <template v-slot:text>{{ weightResult.broselow.range }}</template>
      </nos-row-result>
      <nos-row-caption>
        <template v-slot:caption>Puls</template>
        <template v-slot:content>
          <span class="nos-mono">{{ weightResult.vitals.pulse }}</span>/min
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template v-slot:caption>Blutdruck</template>
        <template v-slot:content>
          <div class="nos-u">Durchschnittsdruck</div>
          <div><span class="nos-mono">{{ weightResult.vitals.rrNorm }}</span>mmHg</div>

          <v-divider class="my-2"></v-divider>

          <div class="nos-u text-blue-darken-3">Untere Warnschwelle</div>
          <div class="text-blue-darken-3"><span class="nos-mono">{{ weightResult.vitals.rrLow }}</span>mmHg</div>

          <v-divider class="my-2"></v-divider>

          <div class="nos-u text-red-darken-4">Obere Warnschwelle</div>
          <div class="text-red-darken-4"><span class="nos-mono">{{ weightResult.vitals.rrHigh }}</span>mmHg</div>

        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template v-slot:caption>Atemfrequenz</template>
        <template v-slot:content>
          <span class="nos-mono">{{ weightResult.vitals.breath }}</span>/min
        </template>
      </nos-row-caption>
    </nos-table>
    <v-btn :to="'/content/calc-doses?weight='+weightValue" color="error" size="large"
      prepend-icon="$alarmPanelOutline" class="mx-2 my-2">Dosisrechner mit {{ weightValue }}kg aufrufen</v-btn>
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
    name: "CalcChildSpecs",
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
        step1: "",
        step2: "",
        step3: "",

        heightSuffix: "m",
        height: "",

        ageYears: "",
        ageMonths: "",

        weight: "",

        inputTimeout: 0,
        weightValue: 0,
      };
    },
    watch: {
      step1(newValue, oldValue) {
        this.step2 = "";
        this.step3 = "";
        this.weight = "";
        this.height = "";

        if (newValue === "input") {
          this.$nextTick(() => {
            document.getElementById("id-input-weight")?.focus();
          });
        } else {
          this.$nextTick(() => {
            window.scrollTo({ top: 280, behavior: 'smooth' }) 
          })
        }
      },
      step2(newValue, oldValue) {
        this.step3 = "";
        this.weight = "";
        this.height = "";

        if (newValue === "height") {
          this.$nextTick(() => {
            document.getElementById("id-input-height")?.focus();
          });
        } else {
          this.$nextTick(() => {
            window.scrollTo({ top: 380, behavior: 'smooth' }) 
          })
        }
      },
      step3(newValue, oldValue) {
        this.weight = "";
        this.height = "";
        this.ageYears = "";
        this.ageMonths = "";

        if (newValue === "input") {
          this.$nextTick(() => {
            document.getElementById("id-input-age-year")?.focus();
          });
        } 
        else if (newValue === "estimate") {
          this.$nextTick(() => {
            this.$refs.vselectAgeEstimate.menu = true;
          });
        }
      },

      height(newValue, oldValue) {
        let number = parseFloat(newValue);
        if (newValue.includes(".") || (number <= 2 && newValue.length === 1)) {
          number = number * 100;
        }
        this.weightValue = this.getFromHeight(number);
      },
      ageYears(newValue, oldValue) {
        if (newValue === "0") {
          this.$nextTick(() => {
            document.getElementById("id-input-age-month")?.focus();
          });
        } else {
          let age = parseInt(!newValue ? "0" : newValue) + parseInt(!this.ageMonths ? "0" : this.ageMonths) / 12;
          this.weightValue = this.getFromAge(age);
        }
      },
      ageMonths(newValue, oldValue) {
        let age = parseInt(!this.ageYears ? "0" : this.ageYears) + parseInt(!newValue ? "0" : newValue) / 12;
        this.weightValue = this.getFromAge(age);
      },

      weight(newValue, oldValue) {
        if (newValue === '') { this.weightValue = 0; return }
        this.weightValue = parseInt(newValue)
      },

      weightValue(newValue, oldValue) {
        this.decideScrollToResult(newValue>0)
      },
    },
    computed: {
      meta() {
        return this.$store.getters.getContentMeta("calc-childspecs");
      },

      calcTable() {
        return [
          { height: 45, weight: 3, age: 0.0 },
          { height: 54, weight: 4.1, age: 0.083 },
          { height: 57, weight: 4.95, age: 0.167 },
          { height: 60, weight: 5.6, age: 0.25 },
          { height: 63, weight: 6.3, age: 0.333 },
          { height: 66, weight: 6.95, age: 0.417 },
          { height: 68, weight: 7.65, age: 0.5 },
          { height: 70, weight: 8.2, age: 0.583 },
          { height: 72, weight: 8.65, age: 0.667 },
          { height: 73, weight: 9.05, age: 0.75 },
          { height: 74, weight: 9.5, age: 0.833 },
          { height: 75, weight: 9.9, age: 0.917 },
          { height: 76, weight: 10.1, age: 1 },
          { height: 87, weight: 12.45, age: 2 },
          { height: 97, weight: 14.5, age: 3 },
          { height: 105, weight: 16.8, age: 4 },
          { height: 112, weight: 18.9, age: 5 },
          { height: 120, weight: 20, age: 6 },
          { height: 124, weight: 25, age: 7 },
          { height: 130, weight: 28, age: 8 },
          { height: 135, weight: 31, age: 9 },
          { height: 141, weight: 35, age: 10 },
          { height: 147, weight: 39, age: 11 },
          { height: 152, weight: 44, age: 12 },
          { height: 158, weight: 49, age: 13 },
          { height: 164, weight: 54, age: 14 },
          { height: 167, weight: 58, age: 15 },
          { height: 170, weight: 62, age: 16 },
          { height: 173, weight: 66, age: 17 },
          { height: 176, weight: 70, age: 18 },
        ];
      },
      ageGroups() {
        return [
          { title: "Frisch Geboren", subtitle: "0-1 Monat alt", age: 0.083 },
          { title: "Kleinkind", subtitle: "Noch nicht im Kindergarten", age: 1.5 },
          { title: "Kindergarten (1/2)", subtitle: "Frisch im Kindergarten", age: 4.5 },
          { title: "Kindergarten (2/2)", subtitle: "Bald in der Schule", age: 5.5 },
          { title: "Grundschule (1/2)", subtitle: "1. / 2. Klasse", age: 7.0 },
          { title: "Grundschule (2/2)", subtitle: "3. / 4. Klasse", age: 9.0 },
          { title: "Oberschule (Anfang)", subtitle: "5. / 6. Klasse", age: 11.5 },
          { title: "Frühe Jugendliche", subtitle: '"Halbstarke"', age: 14.0 },
          { title: "Kleine Erwachsene", subtitle: "Können wie Senioren behandelt werden", age: 16.5, disabled: true },
        ];
      },

      weightResult() {
        // get vitals
        let vitals = {
          rrNorm: "120/80",
          rrLow: "115/75",
          rrHigh: "150/100",
          pulse: "60-100",
          breath: "12-18",
        };
        if (this.weightValue <= 5) {
          vitals = {
            rrNorm: "70/50",
            rrLow: "70/45",
            rrHigh: "100/65",
            pulse: "120-160",
            breath: "30-60",
          };
        } else if (this.weightValue > 5 && this.weightValue <= 7.5) {
          vitals = {
            rrNorm: "80/55",
            rrLow: "75/50",
            rrHigh: "105/70",
            pulse: "120-160",
            breath: "30-50",
          };
        } else if (this.weightValue > 7.5 && this.weightValue <= 10) {
          vitals = {
            rrNorm: "85/60",
            rrLow: "80/55",
            rrHigh: "110/75",
            pulse: "100-140",
            breath: "24-40",
          };
        } else if (this.weightValue > 10 && this.weightValue <= 12.5) {
          vitals = {
            rrNorm: "85/55",
            rrLow: "80/50",
            rrHigh: "110/70",
            pulse: "100-140",
            breath: "22-34",
          };
        } else if (this.weightValue > 12.5 && this.weightValue <= 15) {
          vitals = {
            rrNorm: "90/60",
            rrLow: "85/55",
            rrHigh: "115/75",
            pulse: "80-120",
            breath: "18-30",
          };
        } else if (this.weightValue > 15 && this.weightValue <= 18.5) {
          vitals = {
            rrNorm: "95/65",
            rrLow: "90/60",
            rrHigh: "120/80",
            pulse: "80-120",
            breath: "18-30",
          };
        } else if (this.weightValue > 18.5 && this.weightValue <= 23.5) {
          vitals = {
            rrNorm: "100/65",
            rrLow: "95/60",
            rrHigh: "125/85",
            pulse: "70-110",
            breath: "16-22",
          };
        } else if (this.weightValue > 23.5 && this.weightValue <= 29) {
          vitals = {
            rrNorm: "105/70",
            rrLow: "100/65",
            rrHigh: "130/85",
            pulse: "70-110",
            breath: "16-22",
          };
        } else if (this.weightValue > 29 && this.weightValue <= 36) {
          vitals = {
            rrNorm: "110/75",
            rrLow: "105/70",
            rrHigh: "140/95",
            pulse: "60-100",
            breath: "12-20",
          };
        } else if (this.weightValue > 36 && this.weightValue <= 40) {
          vitals = {
            rrNorm: "115/75",
            rrLow: "110/70",
            rrHigh: "145/95",
            pulse: "60-100",
            breath: "12-20",
          };
        }

        // get broselow-code
        let broselow = {
          title: "Größer als das Kinderlineal",
          range: this.weightValue + " kg (der grüne Broselow-Code endet ab 36kg)",
          color: "grey-lighten-5",
        };
        if (this.weightValue <= 5) {
          broselow = {
            title: "Broselow: Grau",
            range: "3 - 5kg",
            color: "grey-lighten-2",
          };
        } else if (this.weightValue > 5 && this.weightValue <= 7.5) {
          broselow = {
            title: "Broselow: Pink",
            range: "6 - 7kg",
            color: "pink-lighten-3",
          };
        } else if (this.weightValue > 7.5 && this.weightValue <= 9.5) {
          broselow = {
            title: "Broselow: Rot",
            range: "8 - 9kg",
            color: "red-accent-1",
          };
        } else if (this.weightValue > 9.5 && this.weightValue <= 11.5) {
          broselow = {
            title: "Broselow: Lila",
            range: "10 - 11kg",
            color: "purple-lighten-4",
          };
        } else if (this.weightValue > 11.5 && this.weightValue <= 14.5) {
          broselow = {
            title: "Broselow: Gelb",
            range: "12 - 14kg",
            color: "yellow-lighten-2",
          };
        } else if (this.weightValue > 14.5 && this.weightValue <= 18.5) {
          broselow = {
            title: "Broselow: Weiß",
            range: "15 - 18kg",
            color: "grey-lighten-5",
          };
        } else if (this.weightValue > 18.5 && this.weightValue <= 23.5) {
          broselow = {
            title: "Broselow: Blau",
            range: "19 - 23kg",
            color: "blue-lighten-2",
          };
        } else if (this.weightValue > 23.5 && this.weightValue <= 29.5) {
          broselow = {
            title: "Broselow: Orange",
            range: "24 - 29kg",
            color: "orange-lighten-1",
          };
        } else if (this.weightValue > 29.5 && this.weightValue <= 36) {
          broselow = {
            title: "Broselow: Grün",
            range: "30 - 36kg",
            color: "green-lighten-2",
          };
        }

        return { broselow: broselow, vitals: vitals };
      },
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
      filterYear(e) {
        let char = String.fromCharCode(e.keyCode);
        if (/^[0-9]+$/.test(char)) {
          let year = parseInt(this.ageYears + char);

          // prevent over 17
          if (year > 17) {
            e.preventDefault();
          }

          return true;
        } else {
          e.preventDefault();
        }
      },
      filterMonths(e) {
        let char = String.fromCharCode(e.keyCode);
        if (/^[0-9]+$/.test(char)) {
          let months = parseInt(this.ageMonths + char);

          // prevent zero
          if (char === "0" && this.ageMonths === "") {
            e.preventDefault();
          }

          // prevent over 12
          if (months >= 12) {
            e.preventDefault();
          }

          return true;
        } else {
          e.preventDefault();
        }
      },
      filterHeight(e) {
        let char = String.fromCharCode(e.keyCode);
        if (/^[0-9.]+$/.test(char)) {
          let number = parseFloat(this.height + char);
          if (isNaN(number)) {
            e.preventDefault();
            return;
          }

          // suffix
          if (number > 2.5) {
            this.heightSuffix = "cm";
          } else {
            this.heightSuffix = "m";
          }

          // prevent over 300
          if (number > 250) {
            e.preventDefault();
          }

          // prevent double decimal
          if (char === "." && this.height.includes(".")) {
            e.preventDefault();
          }

          // prevent decimal over 2.5
          if (char === "." && number > 2.5) {
            e.preventDefault();
          }

          // prevent too many digits
          if (this.height.includes(".") && this.height.length > 3) {
            e.preventDefault();
          }

          return true;
        } else {
          e.preventDefault();
        }
      },

      getFromHeight(height) {
        let under = this.calcTable.findLast((e) => height >= e.height);
        let over = this.calcTable.find((e) => height < e.height);
        if (under && !over) {
          return under.weight;
        } else if (!under && over) {
          return over.weight;
        } else if (!under && !over) {
          return 0;
        }
        return Math.floor((under.weight + over.weight) / 2);
      },
      getFromAge(age) {
        if (age <= 0) { return 0; }
        let under = this.calcTable.findLast((e) => age >= e.age);
        let over = this.calcTable.find((e) => age < e.age);
        if (under && !over) {
          return under.weight;
        } else if (!under && over) {
          return over.weight;
        } else if (!under && !over) {
          return 0;
        }
        return Math.floor((under.weight + over.weight) / 2);
      },

      ageGroupSelectProps(item) {
        return {
          title: item.title,
          subtitle: item.subtitle,
          disabled: item.disabled ?? false,
          value: item,
        };
      },
      ageGroupSelectChanged(item) {
        this.weightValue = this.getFromAge(item.age);
      },

      decideScrollToResult(restart=true) {
        clearTimeout(this.inputTimeout)
        if (!restart) { return }

        this.inputTimeout = setTimeout(() => {

          window.scrollTo({ top: 555, behavior: 'smooth' }) 

        }, 1000)
      }
    },
  };
</script>
<style lang="scss" scoped>
  .nos-forms-textfield-block,
  .nos-forms-textfield-inline {
    width: 10rem;
  }

  .nos-forms-textfield-inline {
    display: inline-block;
  }
</style>
