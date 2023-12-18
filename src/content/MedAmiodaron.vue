<!-------------------------------------------------------------------------------------------------
{

}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title
    :headline="meta.title"
    :subtitle="meta.subtitle"
  />

  <nos-header title="Indikationen" />
  <nos-list>
    <nos-li>Reanimation</nos-li>
  </nos-list>

  <nos-header title="Kontraindikationen" />
  <nos-list contragroup="intolerable">
    <nos-li>Allergie ggb. Jod</nos-li>
    <nos-li>Unverträglichkeit ggb. Amiodaron</nos-li>
  </nos-list>
  <nos-list contragroup="family">
    <nos-li>Keine Säuglinge (&lt; 3J wg. Gehalt von Benzylalkohol)</nos-li>
  </nos-list>

  <nos-header title="Nebenwirkungen" />
  <nos-list>
    <nos-li variant="check">
      Irrelevant, weil Anwendung nur bei Lebensgefahr
    </nos-li>
  </nos-list>
  <nos-list>
    <nos-li>Bradykardie, Hypotonie</nos-li>
    <nos-li>Schilddrüsenfunktionsstörungen</nos-li>
  </nos-list>

  <nos-header title="Dosierung &amp;Anwendung" />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Größen
      </template>
      <template #content>
        <nos-med-label type="ampulle">
          1 Ampulle &bdquo;Cordarex&rdquo;
        </nos-med-label>
        <nos-med-dose
          :decent="true"
          :items="[
            { unit: '150mg', per: '3ml' },
            { unit: '50mg', per: 'ml', prefix: '=' },
          ]"
        />
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="Reanimation"
    :decent="true"
    icon="$hospitalBox"
  />
  <nos-table>
    <nos-row-caption>
      <template #caption>
        Einsatz &amp;<br>(i.v.)-Dosis
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Nach 3. Defibrillation</div-u>
        </div-paragraph>
        <nos-med-dose
          :items="[
            { label: 'Erwachsene', unit: '300mg (2 Ampullen)', color: 'adult' },
            { label: 'Kind (>3)', unit: '50mg', per: '10kg', color: 'child' },
            { unit: '1ml', per: '10kg', color: 'child' },
            { unit: '300mg maximal (2 Ampullen)', color: 'child' },
          ]"
        />
        <div-paragraph class="mt-2">
          <div-u>Nach 5. Defibrillation</div-u>
        </div-paragraph>
        <nos-med-dose
          :items="[
            { label: 'Erwachsene', unit: '150mg (1 Ampulle)', color: 'adult' },
            { hint: 'Dosierung beim Kinder wieder wie oben, aber: ' },
            { unit: '150mg maximal (1 Ampulle)', color: 'child' },
          ]"
        />
        <v-divider class="my-2" />
        <div-paragraph> Langsam spritzen &amp; Nachspülen. </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header title="Pharmakokinetik" />
  <nos-med-effects>
    <template #onset>
      ~5min
    </template>
    <template #span>
      ~15min
    </template>
  </nos-med-effects>

  <nos-header title="Wirkweise" />
  <nos-paragraphs>
    <template #heading>
      Amiodaron gehört zu den wichtigsten Medikamenten zur Behandlung einiger Herzrhythmusstörungen.
    </template>
    <template #text>
      <div-paragraph>
        Die Wirkungsweise von Amiodaron leider noch nicht vollständig bekannt. Allerdings wird es durch die von ihm induzierte Verlängerung des Aktionspotentials und der
        Refraktärzeit im Myokard den Klasse III-Antiarrhythmika zugeordnet.
      </div-paragraph>
      <div-paragraph>
        Amiodaron hemmt spannungssensitive Kaliumkanäle im Myokard, wodurch es zu einem verzögerten Kaliumausstrom während der Repolarisationsphase des Aktionspotenzials kommt.
        Hierdurch wird die Repolarisationsdauer und die Refraktärzeit ebendieses verlängert und Re-Entry-Mechanismen unterbunden.
      </div-paragraph>
      <div-paragraph>
        Die Herzfrequenz sinkt, im Rahmen der Reanimation steigt die Chance auf eine erfolgreiche Defibrillation mit Erreichen eines ROSC (return of spontaneous circulation).
      </div-paragraph>
    </template>
  </nos-paragraphs>
</template>

<script>
import NosTitle from '../components/NosTitle.vue'
import NosHeader from '../components/NosHeader.vue'
import NosParagraphs from '../components/NosParagraphs.vue'
import NosList from '../components/NosList.vue'
import NosLi from '../components/NosLi.vue'
import NosTable from '../components/NosTable.vue'
import NosRowCaption from '../components/NosRowCaption.vue'
import NosMedLabel from '../components/NosMedLabel.vue'
import NosMedDose from '../components/NosMedDose.vue'
import NosMedEffects from '../components/NosMedEffects.vue'

export default {
  name: 'MedAmiodaron',
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
    NosMedEffects
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('med-amiodaron')
    }
  },
  methods: {}
}
</script>
