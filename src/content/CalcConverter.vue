<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "27.11.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title :headline="meta.title" :subtitle="meta.subtitle"></nos-title>

  <nos-header title="Alkohol"></nos-header>
  <nos-table>
    <div style="max-width: 15rem">
      <v-text-field
        id="id-input-alk-mg"
        class="mt-2"
        v-model="alkAtem"
        hide-details="auto"
        label="Atemalkohol"
        variant="solo"
        suffix="mg/l"
        type="tel"
        v-on:keypress="alkActive='atem'; filterFloat($event,alkAtem)"
      ></v-text-field>
      <v-text-field
        id="id-input-alk-promille"
        class="mt-2"
        v-model="alkBlut"
        hide-details="auto"
        label="Blutalkohol"
        variant="solo"
        suffix="‰"
        type="tel"
        v-on:keypress="alkActive='blut';filterFloat($event,alkBlut)"
      ></v-text-field>
    </div>
  </nos-table>

  <nos-header title="Blutzucker"></nos-header>
  <nos-table>
    <div style="max-width: 15rem">
      <v-text-field
        id="id-input-bz-mg"
        class="mt-2"
        v-model="bzMg"
        hide-details="auto"
        label="Blutzucker (mg/dl)"
        variant="solo"
        suffix="mg/dl"
        type="tel"
        v-on:keypress="bzActive='mg'; filterInt($event,bzMg)"
      ></v-text-field>
      <v-text-field
        id="id-input-bz-mmol"
        class="mt-2"
        v-model="bzMmol"
        hide-details="auto"
        label="Blutzucker (mmol/l)"
        variant="solo"
        suffix="mmol/l"
        type="tel"
        v-on:keypress="bzActive='mmol';filterFloat($event,bzMmol)"
      ></v-text-field>
    </div>
  </nos-table>

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
    name: "CalcConverter",
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
        alkBlut: "",
        alkAtem: "",
        alkActive: "",

        bzMg: "",
        bzMmol: "",
        bzActive: "",
      };
    },
    watch: {
      alkBlut(newValue, oldValue) {
        if (this.alkActive !== 'blut') { return; }
        if (newValue === '') { this.alkAtem = ''; return; }
        let value = parseFloat(newValue);
        this.alkAtem = (value/2).toFixed(1)
      },
      alkAtem(newValue, oldValue) {
        if (this.alkActive !== 'atem') { return; }
        if (newValue === '') { this.alkBlut = ''; return; }
        let value = parseFloat(newValue);
        this.alkBlut = (value*2).toFixed(1)
      },

      bzMg(newValue, oldValue) {
        if (this.bzActive !== 'mg') { return; }
        if (newValue === '') { this.bzMmol = ''; return; }
        let value = parseInt(newValue);
        this.bzMmol = (value*0.0555).toFixed(1)
      },
      bzMmol(newValue, oldValue) {
        if (this.bzActive !== 'mmol') { return; }
        if (newValue === '') { this.bzMg = ''; return; }
        let value = parseFloat(newValue);
        this.bzMg = (value*18.020).toFixed(0)
      },
    },
    computed: {
      meta() {
        return this.$store.getters.getContentMeta("calc-converter");
      },

    },
    methods: {
      filterFloat(e,currentValue) {
        let char = String.fromCharCode(e.keyCode);
        if (/^[0-9.]+$/.test(char)) {
          let number = parseFloat(currentValue + char);
          if (isNaN(number)) {
            e.preventDefault();
            return;
          }

          // prevent over 300
          if (number > 300) {
            e.preventDefault();
          }

          return true;
        } else {
          e.preventDefault();
        }
      },
      filterInt(e,currentValue) {
        let char = String.fromCharCode(e.keyCode);
        if (/^[0-9]+$/.test(char)) {
          let number = parseInt(currentValue + char);
          if (isNaN(number)) {
            e.preventDefault();
            return;
          }

          // prevent over 3000
          if (number > 3000) {
            e.preventDefault();
          }

          return true;
        } else {
          e.preventDefault();
        }
      },

    },
  };
</script>
<style lang="scss" scoped>
.nos-doses-backlink {
  margin: -18px 0 0 0;
}
</style>