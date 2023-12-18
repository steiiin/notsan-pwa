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
      <p>
        Das (S)AMPLER-Schema geht auf alle relevanten Fragestellungen einer kurzen Notfallanamnese ein und ist als Ergänzung des ABCDE-Schemas zu sehen. Zur Not kann das
        SAMPLER-Schema als Fremdanamnese erhoben werden.
      </p>
    </template>
  </nos-paragraphs>

  <nos-header title="Schema" />
  <nos-table>
    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="S"
          meaning="Symptome"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div class="nos-u">
            Aktuelle Symptome
          </div>
          <div>Beim Trauma obsolet.</div>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="A"
          meaning="Allergien"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div class="nos-u">
            Allergien &amp; Unverträglichkeiten
          </div>
          <div>- Medikamente</div>
          <div>- Pflaster</div>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="P"
          meaning="Patientengeschichte"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div class="nos-u">
            Medizinische Vorgeschichte
          </div>
          <div>- Operationen</div>
          <div>- Vordiagnosen</div>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="L"
          meaning="Letzte ..."
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div class="nos-u">
            Letzte ...
          </div>
          <div>- Mahlzeit</div>
          <div>- Stuhlgang / Miktion</div>
          <div>- Krankenhausaufenthalt</div>
          <div>- Regelblutung</div>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="E"
          meaning="Ereignisse"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div class="nos-u">
            Ereignisse
          </div>
          <div>- Auslösende Faktoren zum Vorfall</div>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="R"
          meaning="Risikofaktoren"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div class="nos-u">
            Risikofaktoren
          </div>
          <div>- Raucher</div>
          <div>- Diabetiker</div>
          <div>- Schwangere</div>
          <div>- Alkoholiker</div>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>
</template>

<script>
import NosTitle from '../components/NosTitle.vue'
import NosHeader from '../components/NosHeader.vue'
import NosParagraphs from '../components/NosParagraphs.vue'
import NosTable from '../components/NosTable.vue'
import NosRowCaption from '../components/NosRowCaption.vue'
import NosCaptionAkronym from '../components/NosCaptionAkronym.vue'

export default {
  name: 'SchemeSAMPLER',
  components: {
    NosTitle,
    NosHeader,
    NosParagraphs,
    NosTable,
    NosRowCaption,
    NosCaptionAkronym
  },
  computed: {
    meta () {
      return this.$store.getters.getContentMeta('scheme-sampler')
    }
  },
  methods: {}
}
</script>
