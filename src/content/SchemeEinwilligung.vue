<!-------------------------------------------------------------------------------------------------
{

}
-------------------------------------------------------------------------------------------------->
<template>
  <nos-title
    :headline="meta.title"
    :subtitle="meta.subtitle"
  />

  <nos-header title="Grundlage" />
  <nos-list>
    <nos-li>Informationsverständnis</nos-li>
    <nos-li>Informationsverarbeitung</nos-li>
    <nos-li>Bewertung erhaltener Informationen</nos-li>
    <nos-li>Bestimmbarkeit des eigenen Willens</nos-li>
  </nos-list>

  <nos-header title="Fehlende Einwilligungsfähigkeit" />
  <nos-header
    title="Psychische Ursachen"
    :decent="true"
  />
  <nos-list>
    <nos-li>Orientierungsstörung</nos-li>
    <nos-li :decent="true">
      Demenz, Delir
    </nos-li>

    <nos-li>Störung des formalen Denkens</nos-li>
    <nos-li :decent="true">
      Shizophrenie
    </nos-li>
    <nos-li :decent="true">
      Wahnhafte / Paranoide Gedanken
    </nos-li>

    <nos-li>Störung des Antriebs</nos-li>
    <nos-li :decent="true">
      Depression
    </nos-li>
    <nos-li :decent="true">
      Suizidalität
    </nos-li>
    <nos-li :decent="true">
      Manie
    </nos-li>
  </nos-list>

  <nos-header
    title="Somatische Ursachen"
    :decent="true"
  />
  <nos-list>
    <nos-li>Vigilanzminderung (GCS &lt; 15)</nos-li>
    <nos-li>Örtlich, Zeitlich oder Situativ desorientiert</nos-li>
    <nos-li>Intoxikation mit Alkohol, Drogen oder Arzneimitteln</nos-li>
  </nos-list>
  <nos-list>
    <nos-li>Krampfanfall (postkonvulsiv)</nos-li>
    <nos-li>Hypoglykämie</nos-li>
  </nos-list>

  <nos-header
    title="Minderjährigkeit"
    :decent="true"
  />
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph> Minderjährige sind grundsätzlich nicht einwilligungsfähig. </div-paragraph>
      <div-paragraph> Je älter die Person, desto eher sind Ausnahmen möglich. Eine Prüfung muss und kann nur im Einzelfall erfolgen. </div-paragraph>
      <div-paragraph>
        Bei einer Entscheidungsfindung sind sowohl das Alter wie auch die feststellbare Reife der Person und die Art und Schwere der Erkrankung bzw. Situation zu berücksichtigen.
      </div-paragraph>
      <div-paragraph> Eine feste Altersgrenze gibt es nicht, als Anhaltswerte gelten: </div-paragraph>
    </template>
  </nos-paragraphs>
  <nos-list class="mt-n3">
    <nos-li>Kinder &lt; 14J sind nicht einwilligungsfähig</nos-li>
    <nos-li>Jugendliche &gt; sind oft schon einwilligungsfähig</nos-li>
  </nos-list>
  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Besondere Konstellationen können sich ergeben, wenn die Eltern nicht einwilligungsfähiger Kinder und Jugendlicher anwesend sind, das Kind bzw. die / der Jugendliche aber
        ausdrücklich die Schweigepflicht bezüglich der erhobenen Befunde einfordert.
      </div-paragraph>
    </template>
  </nos-paragraphs>
  <nos-list class="mt-n3">
    <nos-li>Notarzt in diesem Falle hinzuziehen.</nos-li>
  </nos-list>

  <nos-paragraphs :decent="true">
    <template #text>
      <div-paragraph>
        Sind die <b>Eltern oder der Vormund</b> nicht einwilligungsfähiger Kinder und Jugendlicher nicht anwesend bzw. erreichbar, ist
        <b>wie bei Erwachsenen mit rechtlich nicht wirksamer Behandlungs- und/oder Transportverweigerung</b> zu verfahren.
      </div-paragraph>
    </template>
  </nos-paragraphs>
</template>

<script>
import NosTitle from '../components/NosTitle.vue'
import NosList from '../components/NosList.vue'
import NosLi from '../components/NosLi.vue'
import NosHeader from '../components/NosHeader.vue'
import NosParagraphs from '../components/NosParagraphs.vue'

export default {
  name: 'SchemeEinwilligung',
  components: {
    NosTitle,
    NosList,
    NosLi,
    NosHeader,
    NosParagraphs
  },
  data () {
    return {
      tgTvt: false,
      tgUnlikly: false,
      tgHf100: false,
      tgImmob: false,
      tgBefore: false,
      tgHaemoptyse: false,
      tgCa: false
    }
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('scheme-einwilligung')
    }
  }
}
</script>
