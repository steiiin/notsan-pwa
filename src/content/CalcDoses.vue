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
      <div-paragraph> Hier können gewichtsabhängige Dosierungshilfen ermittelt werden. </div-paragraph>
    </template>
  </nos-paragraphs>

  <!-- STEP1 -->
  <nos-header
    :decent="true"
    title="Gewicht eingeben"
    icon="$weight"
  />

  <div style="width: 10rem">
    <v-text-field
      id="id-input-weight"
      v-model="weight"
      class="mt-2"
      hide-details="auto"
      label="Gewicht"
      variant="solo"
      suffix="kg"
      type="tel"
      @keypress="filterWeight($event)"
    />
  </div>

  <!-- RESULT -->
  <template v-if="weight > 0">
    <nos-header
      title="Ergebnis"
      icon="$hospitalBox"
      class="mt-4"
    />
    <nos-header
      title="Reanimation"
      :decent="true"
      class="mt-2"
    />
    <nos-table>
      <nos-row-caption v-if="weight < 40">
        <template #caption>
          Defibrillation
        </template>
        <template #content>
          <div-paragraph>
            <div-u>Schockenergie</div-u>
            <div>
              ~ <span-mono>{{ roundUpToNextFive(weight * 4) }}</span-mono> Joule
            </div>

            <v-divider class="my-2" />

            <div-u>Erfolglose Schocks (&ge; 6)</div-u>
            <div>
              ~ <span-mono>{{ roundUpToNextFive(weight * 8) }}</span-mono> Joule
            </div>
          </div-paragraph>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template #caption>
          Adrenalin
        </template>
        <template #content>
          <template v-if="adrenalinReaDose < 1">
            <div-u>Vorbereitung</div-u>
            <div><span-mono>1 Ampulle</span-mono> auf <span-mono>10ml</span-mono> aufziehen.</div>
            <v-divider class="my-2" />
            <div-u>Dosierung</div-u>
          </template>
          <div-mono>{{ roundToFixed(adrenalinReaDose, 1) }} mg</div-mono>
          <div v-if="adrenalinReaDose < 1">
            <span-mono>
              <b>{{ roundToFixed(roundUpToNextFive((adrenalinReaDose / 0.1) * 10) / 10, 1) }}ml</b>
            </span-mono>
            von der 10er-Spritze.
          </div>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template #caption>
          Amiodaron
        </template>
        <template #content>
          <div-u v-if="amiodaronReaDose == 0">
            Nicht für Kinder &lt; 3 Jahre
          </div-u>
          <template v-else>
            <div-paragraph>
              <div-u>Nach dem 3. Schock</div-u>
              <div v-if="amiodaronReaDose >= 300">
                <span-mono>300mg (2 Ampullen)</span-mono>
              </div>
              <template v-else>
                <div-mono>{{ amiodaronReaDose }}mg</div-mono>
                <div>
                  <span-mono>
                    <b>{{ roundToFixed(amiodaronReaDose / 50, 1) }}ml</b>
                  </span-mono>
                </div>
              </template>
            </div-paragraph>
            <div-paragraph>
              <div-u>Nach dem 5. Schock</div-u>
              <div v-if="amiodaronReaDose >= 150">
                <span-mono>150mg (1 Ampulle)</span-mono>
              </div>
              <template v-else>
                <div-mono>{{ amiodaronReaDose }}mg</div-mono>
                <div>
                  <span-mono>
                    <b>{{ roundToFixed(amiodaronReaDose / 50, 1) }}ml</b>
                  </span-mono>
                </div>
              </template>
            </div-paragraph>
          </template>
        </template>
      </nos-row-caption>
    </nos-table>

    <nos-header
      title="Beatmung"
      :decent="true"
      class="mt-2"
    />
    <nos-table>
      <nos-row-caption>
        <template #caption>
          (ET)-Tubus
        </template>
        <template #content>
          <div>
            Größe
            <span-mono>
              <b>{{ tubeET.toFixed(1) }}</b>
            </span-mono>
            (+/- 1 Größe)
          </div>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template #caption>
          (iGel)-Tubus
        </template>
        <template #content>
          <div>
            Größe
            <span-mono>
              <b>{{ tubeIGel.size }}</b>
            </span-mono><nos-colorbox
              class="ms-2"
              :color="tubeIGel.color"
            />
          </div>
        </template>
      </nos-row-caption>
    </nos-table>

    <nos-header
      title="Adrenalin"
      class="mt-2"
    />
    <nos-header
      title="Anaphylaxie"
      :decent="true"
    />
    <nos-table>
      <nos-row-caption>
        <template #caption>
          Vorbereitung
        </template>
        <template #content>
          <div><span-mono>1 Ampulle</span-mono> auf <span-mono>10ml</span-mono> aufziehen.</div>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template #caption>
          (i.m.)-Dosis
        </template>
        <template #content>
          <div-mono v-if="weight <= 20">
            1,5ml
          </div-mono>
          <div-mono v-else-if="weight > 20 && weight <= 40">
            3ml
          </div-mono>
          <div-mono v-else>
            5ml
          </div-mono>
        </template>
      </nos-row-caption>
    </nos-table>
    <nos-btn-link
      content="med-adrenalin"
      :back-link="true"
      class="nos-doses-backlink"
    />

    <nos-header
      title="Butylscopulamin"
      class="mt-2"
    />
    <nos-table>
      <nos-row-caption>
        <template #caption>
          Vorbereitung
        </template>
        <template #content>
          <div><span-mono>1 Ampulle</span-mono> auf <span-mono>20ml</span-mono> aufziehen.</div>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template #caption>
          (i.v.)-Dosis
        </template>
        <template #content>
          <div-mono>{{ buscopanDose }}mg</div-mono>
          <div>
            <span-mono>
              <b>{{ roundToFixed(buscopanDose / 2, 1) }}ml</b>
            </span-mono>
            von der 20er-Spritze.
          </div>
        </template>
      </nos-row-caption>
    </nos-table>
    <nos-btn-link
      content="med-buscopan"
      :back-link="true"
      class="nos-doses-backlink"
    />

    <nos-header
      title="Dimetinden (Fenistil)"
      class="mt-2"
    />
    <nos-table>
      <nos-row-caption>
        <template #caption>
          Vorbereitung
        </template>
        <template #content>
          <div><span-mono>1 Ampulle</span-mono> auf <span-mono>20ml</span-mono> aufziehen.</div>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template #caption>
          (i.v.)-Dosis
        </template>
        <template #content>
          <div-mono>{{ dimetindenDose }}mg</div-mono>
          <div>
            <span-mono>
              <b>{{ roundToFixed(dimetindenDose / 0.2) }}ml</b>
            </span-mono>
            von der 20er-Spritze.
          </div>
        </template>
      </nos-row-caption>
    </nos-table>
    <nos-btn-link
      content="med-dimetinden"
      :back-link="true"
      class="nos-doses-backlink"
    />

    <nos-header
      title="Esketamin"
      class="mt-2"
    />
    <nos-table>
      <nos-row-caption>
        <template #caption>
          Vorbereitung
        </template>
        <template #content>
          <div><span-mono>1 Ampulle</span-mono> auf <span-mono>10ml</span-mono> aufziehen.</div>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template #caption>
          (i.v.)-Dosis
        </template>
        <template #content>
          <div-u>Initialdosis</div-u>
          <div-mono>{{ ketanestDose.init }}mg</div-mono>
          <div>
            <span-mono>
              <b>{{ roundToFixed(ketanestDose.init / 2.5, 1) }}ml</b>
            </span-mono>
            von der 10er-Spritze.
          </div>
          <v-divider class="my-2" />
          <div-u>Maximaldosis</div-u>
          <div-mono>{{ ketanestDose.max }}mg</div-mono>
          <div>
            <span-mono>
              <b>{{ roundToFixed(ketanestDose.max / 2.5) }}ml</b>
            </span-mono>
            von der 10er-Spritze.
          </div>
        </template>
      </nos-row-caption>
    </nos-table>
    <nos-btn-link
      content="med-esketamin"
      :back-link="true"
      class="nos-doses-backlink"
    />

    <nos-header
      title="Glukose"
      class="mt-2"
    />
    <nos-table>
      <nos-row-caption>
        <template #caption>
          (i.v.)-Dosis
        </template>
        <template #content>
          <div-u>Einzeldosis</div-u>
          <div-mono>{{ roundToFixed(glucoseDose) }}g</div-mono>
          <div>
            <span-mono>
              <b>{{ roundToFixed(glucoseDose / 2) }}</b> Ampullen G20
            </span-mono>
          </div>
        </template>
      </nos-row-caption>
    </nos-table>
    <nos-btn-link
      content="med-glucose"
      :back-link="true"
      class="nos-doses-backlink"
    />

    <nos-header
      title="Glucagon"
      class="mt-2"
    />
    <nos-table>
      <nos-row-caption>
        <template #caption>
          (i.m.)-Dosis
        </template>
        <template #content>
          <div-mono>
            {{ weight >= 25 ? "1mg (1 Ampulle)" : "0,5mg (½ Ampulle)" }}
          </div-mono>
        </template>
      </nos-row-caption>
    </nos-table>
    <nos-btn-link
      content="med-glucagon"
      :back-link="true"
      class="nos-doses-backlink"
    />

    <nos-header
      title="Ibuprofen"
      class="mt-2"
    />
    <nos-table>
      <nos-row-caption>
        <template #caption>
          Dosis
        </template>
        <template #content>
          <div-u>Maximale Einzeldosis</div-u>
          <div-mono>{{ ibuprofenDose }}mg</div-mono>
        </template>
      </nos-row-caption>
    </nos-table>
    <nos-btn-link
      content="med-ibuprofen"
      :back-link="true"
      class="nos-doses-backlink"
    />

    <nos-header
      title="Midazolam"
      class="mt-2"
    />
    <nos-table>
      <nos-row-caption>
        <template #caption>
          Buccolam
        </template>
        <template #content>
          <div>
            <span-mono>{{ midazolamDose.buccolam.dose }}mg</span-mono><nos-colorbox
              class="ms-2"
              :color="midazolamDose.buccolam.color"
            />
          </div>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template #caption>
          nasal (MAD)
        </template>
        <template #content>
          <div-mono>{{ midazolamDose.nasal.dose }}mg</div-mono>
          <div-mono>{{ midazolamDose.nasal.amp }}</div-mono>
        </template>
      </nos-row-caption>
    </nos-table>
    <nos-btn-link
      content="med-midazolam"
      :back-link="true"
      class="nos-doses-backlink"
    />

    <nos-header
      title="Paracetamol"
      class="mt-2"
    />
    <nos-table>
      <nos-row-caption v-if="weight < 40">
        <template #caption>
          Rektal
        </template>
        <template #content>
          <div>
            <span-mono>{{ weight <= 10 ? "125" : "250" }}mg</span-mono> Zäpfchen
          </div>
        </template>
      </nos-row-caption>
      <nos-row-caption>
        <template #caption>
          (i.v.)-Dosis
        </template>
        <template #content>
          <div>
            <span-mono>{{ weight < 50 ? "½" : "1" }}</span-mono> Kurzinfusion
          </div>
        </template>
      </nos-row-caption>
    </nos-table>
    <nos-btn-link
      content="med-paracetamol"
      :back-link="true"
      class="nos-doses-backlink"
    />
  </template>
</template>

<script>
import NosTitle from '../components/NosTitle.vue'
import NosHeader from '../components/NosHeader.vue'
import NosParagraphs from '../components/NosParagraphs.vue'
import NosTable from '../components/NosTable.vue'
import NosRowCaption from '../components/NosRowCaption.vue'
import NosBtnLink from '../components/NosBtnLink.vue'
import NosColorbox from '../components/NosColorbox.vue'

export default {
  name: 'CalcDoses',
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosTable,
    NosRowCaption,
    NosBtnLink,
    NosColorbox
  },
  data () {
    return {
      weight: ''
    }
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('calc-doses')
    },

    adrenalinReaDose () {
      if (this.weight >= 50) {
        return 1
      } else if (this.weight < 5) {
        return 0.05
      }
      return this.weight * 0.01
    },
    amiodaronReaDose () {
      if (this.weight < 10) {
        return 0
      }
      return this.roundUpToNextFive(this.weight) * 5 - 25
    },
    tubeET () {
      if (this.weight <= 10) {
        return 3.5
      } else if (this.weight > 10 && this.weight <= 16) {
        return 4.0
      } else if (this.weight > 16 && this.weight <= 18) {
        return 4.5
      } else if (this.weight > 18 && this.weight <= 27) {
        return 5.0
      } else if (this.weight > 27 && this.weight <= 30) {
        return 5.5
      } else if (this.weight > 30 && this.weight <= 40) {
        return 6.0
      } else if (this.weight > 40 && this.weight <= 47) {
        return 6.5
      } else if (this.weight > 47 && this.weight <= 60) {
        return 7.0
      } else if (this.weight > 60 && this.weight <= 70) {
        return 7.5
      } else if (this.weight > 70 && this.weight <= 90) {
        return 8.0
      } else {
        return 8.5
      }
    },
    tubeIGel () {
      if (this.weight <= 5) {
        return { size: '1.0', color: 'pink-lighten-1' }
      } else if (this.weight > 5 && this.weight <= 12) {
        return { size: '1.5', color: 'blue-lighten-1' }
      } else if (this.weight > 12 && this.weight <= 25) {
        return { size: '2.0', color: 'grey-darken-1' }
      } else if (this.weight > 25 && this.weight <= 35) {
        return { size: '2.5', color: 'grey-lighten-5' }
      } else if (this.weight > 35 && this.weight <= 55) {
        return { size: '3.0', color: 'yellow-accent-3' }
      } else if (this.weight > 55 && this.weight <= 90) {
        return { size: '4.0', color: 'green-darken-1' }
      } else {
        return { size: '5.0', color: 'orange-darken-1' }
      }
    },
    buscopanDose () {
      return Math.min(this.roundUpToNextFive(this.weight * 0.3), 20)
    },
    dimetindenDose () {
      return Math.min(this.roundToFixed(this.weight * 0.1, 1), 8)
    },
    ketanestDose () {
      const dose = Math.ceil(this.weight / 10) * 10 * 0.25
      return {
        init: Math.min(dose / 2, 25),
        max: Math.min(dose, 25)
      }
    },
    glucoseDose () {
      return Math.min(this.weight * 0.2, 10)
    },
    ibuprofenDose () {
      if (this.weight < 10) {
        return 50
      } else if (this.weight < 15) {
        return 100
      } else if (this.weight < 20) {
        return 150
      } else if (this.weight < 40) {
        return 200
      }
      return Math.ceil((this.weight * 10) / 10) * 10
    },
    midazolamDose () {
      // buccolam
      let buccolam = { dose: 10, color: 'red-darken-3' }
      if (this.weight <= 10) {
        buccolam = { dose: 2.5, color: 'yellow-darken-1' }
      } else if (this.weight < 25) {
        buccolam = { dose: 5.0, color: 'blue-darken-4' }
      } else if (this.weight < 40) {
        buccolam = { dose: 7.5, color: 'deep-purple-darken-1' }
      }
      // nasal
      let nasal = { dose: 10, amp: '2 Ampullen' }
      if (this.weight < 10) {
        nasal = { dose: 2.5, amp: '½ Ampulle' }
      } else if (this.weight < 20) {
        nasal = { dose: 5, amp: '1 Ampulle' }
      }
      // i.v.
      const iv = this.weight * 0.1

      return { iv: iv, buccolam: buccolam, nasal: nasal }
    }
  },
  mounted () {
    const weightQuery = this.$route.query.weight
    if (weightQuery == null) {
      this.weight = ''
      this.$nextTick(() => document.getElementById('id-input-weight')?.focus())
    } else {
      this.weight = this.roundToFixed(weightQuery)
      setTimeout(() => {
        const lastScroll = this.$router.options?.history?.state?.scroll?.top ?? 0
        window.scrollTo({ top: lastScroll === 0 ? 300 : lastScroll, behavior: 'smooth' })
      }, 500)
    }
  },
  methods: {
    filterWeight (e) {
      const char = String.fromCharCode(e.keyCode)
      if (/^[0-9]+$/.test(char)) {
        // prevent zero
        if (char === '0' && this.weight === '') {
          e.preventDefault()
        }

        // prevent over 300
        if (parseInt(this.weight + char) > 300) {
          e.preventDefault()
        }

        return true
      } else {
        e.preventDefault()
      }
    },

    roundUpToNextFive (num) {
      if (num <= 5) return 5
      return Math.ceil(num / 5) * 5
    },
    roundToFixed (num, places = 0) {
      return Number(Number(num).toFixed(places))
    }
  }
}
</script>
<style lang="scss" scoped>
  .nos-doses-backlink {
    margin: -18px 0 0 0;
  }
</style>
