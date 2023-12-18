<!-------------------------------------------------------------------------------------------------
{

}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title
    :headline="meta.title"
    :subtitle="meta.subtitle"
  />

  <nos-header title="Alkohol" />
  <nos-table>
    <div style="max-width: 15rem">
      <v-text-field
        id="id-input-alk-mg"
        v-model="alkAtem"
        class="mt-2"
        hide-details="auto"
        label="Atemalkohol"
        variant="solo"
        suffix="mg/l"
        type="tel"
        @keypress="
          alkActive = 'atem';
          filterFloat($event, alkAtem);
        "
      />
      <v-text-field
        id="id-input-alk-promille"
        v-model="alkBlut"
        class="mt-2"
        hide-details="auto"
        label="Blutalkohol"
        variant="solo"
        suffix="‰"
        type="tel"
        @keypress="
          alkActive = 'blut';
          filterFloat($event, alkBlut);
        "
      />
    </div>
  </nos-table>

  <nos-header title="Blutzucker" />
  <nos-table>
    <div style="max-width: 15rem">
      <v-text-field
        id="id-input-bz-mg"
        v-model="bzMg"
        class="mt-2"
        hide-details="auto"
        label="Blutzucker (mg/dl)"
        variant="solo"
        suffix="mg/dl"
        type="tel"
        @keypress="
          bzActive = 'mg';
          filterInt($event, bzMg);
        "
      />
      <v-text-field
        id="id-input-bz-mmol"
        v-model="bzMmol"
        class="mt-2"
        hide-details="auto"
        label="Blutzucker (mmol/l)"
        variant="solo"
        suffix="mmol/l"
        type="tel"
        @keypress="
          bzActive = 'mmol';
          filterFloat($event, bzMmol);
        "
      />
    </div>
  </nos-table>
</template>

<script>
import NosTitle from '../components/NosTitle.vue'
import NosHeader from '../components/NosHeader.vue'
import NosTable from '../components/NosTable.vue'

export default {
  name: 'CalcConverter',
  components: {
    NosTitle,
    NosHeader,
    NosTable
  },
  data () {
    return {
      alkBlut: '',
      alkAtem: '',
      alkActive: '',

      bzMg: '',
      bzMmol: '',
      bzActive: ''
    }
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('calc-converter')
    }
  },
  watch: {
    alkBlut (newValue, oldValue) {
      if (this.alkActive !== 'blut') {
        return
      }
      if (newValue === '') {
        this.alkAtem = ''
        return
      }
      const value = parseFloat(newValue)
      this.alkAtem = (value / 2).toFixed(1)
    },
    alkAtem (newValue, oldValue) {
      if (this.alkActive !== 'atem') {
        return
      }
      if (newValue === '') {
        this.alkBlut = ''
        return
      }
      const value = parseFloat(newValue)
      this.alkBlut = (value * 2).toFixed(1)
    },

    bzMg (newValue, oldValue) {
      if (this.bzActive !== 'mg') {
        return
      }
      if (newValue === '') {
        this.bzMmol = ''
        return
      }
      const value = parseInt(newValue)
      this.bzMmol = (value * 0.0555).toFixed(1)
    },
    bzMmol (newValue, oldValue) {
      if (this.bzActive !== 'mmol') {
        return
      }
      if (newValue === '') {
        this.bzMg = ''
        return
      }
      const value = parseFloat(newValue)
      this.bzMg = (value * 18.02).toFixed(0)
    }
  },
  methods: {
    filterFloat (e, currentValue) {
      const char = String.fromCharCode(e.keyCode)
      if (/^[0-9.]+$/.test(char)) {
        const number = parseFloat(currentValue + char)
        if (isNaN(number)) {
          e.preventDefault()
          return
        }

        // prevent over 300
        if (number > 300) {
          e.preventDefault()
        }

        return true
      } else {
        e.preventDefault()
      }
    },
    filterInt (e, currentValue) {
      const char = String.fromCharCode(e.keyCode)
      if (/^[0-9]+$/.test(char)) {
        const number = parseInt(currentValue + char)
        if (isNaN(number)) {
          e.preventDefault()
          return
        }

        // prevent over 3000
        if (number > 3000) {
          e.preventDefault()
        }

        return true
      } else {
        e.preventDefault()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .nos-doses-backlink {
    margin: -18px 0 0 0;
  }
</style>
