<!-------------------------------------------------------------------------------------------------
{

}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title
    :headline="meta.title"
    :subtitle="meta.subtitle"
  />

  <nos-header title="Einsatz" />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Der Schockindex soll als orientierender Paramter zur Beurteilung der Kreislaufsituation dienen. Eine zuverlässige Beurteilung eines Patienten erlaubt der Schockindex indes
        nicht, er wird als obsolet angesehen. Er ist in der Praxis jedoch immer noch verbreitet und als Begriff geläufig.
      </div-paragraph>
    </template>
  </nos-paragraphs>

  <nos-header title="Vitalparameter" />
  <nos-table>
    <div style="max-width: 15rem">
      <v-text-field
        id="id-input-herzfrequenz"
        v-model="herzfrequenz"
        class="mt-2"
        hide-details="auto"
        label="Herzfrequenz"
        variant="solo"
        suffix="/min"
        type="tel"
        @keypress="filterInt($event, herzfrequenz)"
      />
      <v-text-field
        id="id-input-rrsyst"
        v-model="rrsyst"
        class="mt-2"
        hide-details="auto"
        label="Blutdruck (syst.)"
        variant="solo"
        suffix="mmHg"
        type="tel"
        @keypress="filterInt($event, rrsyst)"
      />
    </div>
  </nos-table>

  <template v-if="schockindex.index > 0">
    <nos-header title="Ergebnis" />
    <nos-table>
      <nos-row-result :color="schockindex.color">
        <template #heading>
          {{ schockindex.title }}
        </template>
        <template #text>
          Schockindex: {{ schockindex.index }}
        </template>
      </nos-row-result>
    </nos-table>
  </template>
</template>

<script>
import NosTitle from '../components/NosTitle.vue'
import NosHeader from '../components/NosHeader.vue'
import NosParagraphs from '../components/NosParagraphs.vue'
import NosTable from '../components/NosTable.vue'
import NosRowResult from '../components/NosRowResult.vue'

export default {
  name: 'CalcSchockindex',
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosTable,
    NosRowResult
  },
  data () {
    return {
      herzfrequenz: '',
      rrsyst: ''
    }
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('calc-schockindex')
    },
    schockindex () {
      let schockindex = -1
      const valueHf = parseInt(this.herzfrequenz)
      const valueRr = parseInt(this.rrsyst)
      if (isNaN(valueHf) || isNaN(valueRr)) {
        schockindex = -1
      } else {
        schockindex = (valueHf / valueRr).toFixed(1)
      }

      if (schockindex < 0.8) {
        return {
          color: 'success',
          title: 'Normal',
          index: schockindex
        }
      } else if (schockindex < 1) {
        return {
          color: 'warning',
          title: 'Etwas hoch',
          index: schockindex
        }
      } else {
        return {
          color: 'error',
          title: 'Zu Hoch',
          index: schockindex
        }
      }
    }
  },
  methods: {
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
