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
      <div-paragraph>WASB &amp; GCS - Schema dienen der Beurteilung der Bewusstseinslage.</div-paragraph>
    </template>
  </nos-paragraphs>

  <nos-header
    title="WASB"
    :decent="true"
  />
  <nos-table>
    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="W"
          meaning="Wach"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Wach</div-u>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="A"
          meaning="Ansprache"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Reaktion auf Ansprache</div-u>
          <div><b>Somnolenz</b></div>
          <div>ggf. verwirrt</div>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="S"
          meaning="Schmerzreiz"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Reaktion auf Schmerzreiz</div-u>
          <div><b>Sopor</b></div>
        </div-paragraph>
      </template>
    </nos-row-caption>

    <nos-row-caption class="align-center">
      <template #caption>
        <nos-caption-akronym
          letter="B"
          meaning="Bewusstlosigkeit"
          color="red-darken-1"
        />
      </template>
      <template #content>
        <div-paragraph>
          <div-u>Keine Reaktion</div-u>
          <div><b>Koma</b></div>
          <div>Keine Schutzreflexe</div>
        </div-paragraph>
      </template>
    </nos-row-caption>
  </nos-table>

  <nos-header
    title="GCS"
    :decent="true"
  />
  <nos-table class="nos-gcstable">
    <div class="nos-gcstable__column">
      <div class="head">
        Augen
      </div>
      <div class="head points" />

      <div class="body odd">
        Spontan
      </div>
      <div class="body odd points">
        4
      </div>
      <div class="body even">
        Auf Aufforderung
      </div>
      <div class="body even points">
        3
      </div>
      <div class="body odd">
        Auf Schmerzreiz
      </div>
      <div class="body odd points">
        2
      </div>
      <div class="body even">
        Keine Reaktion
      </div>
      <div class="body even points">
        1
      </div>
      <div class="body odd collapsable">
&nbsp;
      </div>
      <div class="body odd points collapsable" />
      <div class="body odd collapsable">
&nbsp;
      </div>
      <div class="body odd points collapsable" />
    </div>

    <div class="nos-gcstable__column">
      <div class="head">
        Verbal
      </div>
      <div class="head points" />

      <div class="body odd">
        Orientiert
      </div>
      <div class="body odd points">
        5
      </div>
      <div class="body even">
        Desorientiert
      </div>
      <div class="body even points">
        4
      </div>
      <div class="body odd">
        Wortsalat
      </div>
      <div class="body odd points">
        3
      </div>
      <div class="body even">
        Unverst. Laute
      </div>
      <div class="body even points">
        2
      </div>
      <div class="body odd">
        Keine Reaktion
      </div>
      <div class="body odd points">
        1
      </div>
      <div class="body odd collapsable">
&nbsp;
      </div>
      <div class="body odd points collapsable" />
    </div>

    <div class="nos-gcstable__column">
      <div class="head">
        Motorik
      </div>
      <div class="head points" />

      <div class="body odd">
        Auf Aufforderung
      </div>
      <div class="body odd points">
        6
      </div>
      <div class="body even">
        Gezielte Abwehr
      </div>
      <div class="body even points">
        5
      </div>
      <div class="body odd">
        Ungezielte Abwehr
      </div>
      <div class="body odd points">
        4
      </div>
      <div class="body even">
        Beugesynergismen
      </div>
      <div class="body even points">
        3
      </div>
      <div class="body odd">
        Strecksynergismen
      </div>
      <div class="body odd points">
        2
      </div>
      <div class="body even">
        Keine Reaktion
      </div>
      <div class="body even points">
        1
      </div>
    </div>
  </nos-table>

  <nos-header
    title="pGCS (Kinder < 3 Jahre)"
    :decent="true"
  />
  <nos-table class="nos-gcstable">
    <div class="nos-gcstable__column">
      <div class="head">
        Augen
      </div>
      <div class="head points" />

      <div class="body odd">
        Spontan
      </div>
      <div class="body odd points">
        4
      </div>
      <div class="body even">
        Auf Schreien
      </div>
      <div class="body even points">
        3
      </div>
      <div class="body odd">
        Auf Schmerzreiz
      </div>
      <div class="body odd points">
        2
      </div>
      <div class="body even">
        Keine Reaktion
      </div>
      <div class="body even points">
        1
      </div>
      <div class="body odd collapsable">
&nbsp;
      </div>
      <div class="body odd points collapsable" />
      <div class="body odd collapsable">
&nbsp;
      </div>
      <div class="body odd points collapsable" />
    </div>

    <div class="nos-gcstable__column">
      <div class="head">
        Verbal
      </div>
      <div class="head points" />

      <div class="body odd">
        Plappern, Brabbeln
      </div>
      <div class="body odd points">
        5
      </div>
      <div class="body even">
        Tröstbar Schreien
      </div>
      <div class="body even points">
        4
      </div>
      <div class="body odd">
        Untröstbar Schreien
      </div>
      <div class="body odd points">
        3
      </div>
      <div class="body even">
        Unverst. Laute
      </div>
      <div class="body even points">
        2
      </div>
      <div class="body odd">
        Keine Reaktion
      </div>
      <div class="body odd points">
        1
      </div>
      <div class="body odd collapsable">
&nbsp;
      </div>
      <div class="body odd points collapsable" />
    </div>

    <div class="nos-gcstable__column">
      <div class="head">
        Motorik
      </div>
      <div class="head points" />

      <div class="body odd">
        Spontane Bewegungen
      </div>
      <div class="body odd points">
        6
      </div>
      <div class="body even">
        Gezielte Abwehr
      </div>
      <div class="body even points">
        5
      </div>
      <div class="body odd">
        Ungezielte Abwehr
      </div>
      <div class="body odd points">
        4
      </div>
      <div class="body even">
        Beugesynergismen
      </div>
      <div class="body even points">
        3
      </div>
      <div class="body odd">
        Strecksynergismen
      </div>
      <div class="body odd points">
        2
      </div>
      <div class="body even">
        Keine Reaktion
      </div>
      <div class="body even points">
        1
      </div>
    </div>
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
  name: 'SchemeVigilanz',
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
      return this.$store.getters.getContentMeta('scheme-vigilanz')
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
  .nos-gcstable {
    display: grid;
    grid-gap: 4px;
    grid-template-columns: auto auto auto;

    & div {
      text-align: center;
    }

    &__column {
      display: grid;
      grid-template-columns: auto 20px;

      & .head {
        line-height: 2;
        font-size: 1.1em;
        font-family: "Teko";
        border-bottom: 1px solid #ccc;
      }

      & .body {
        text-align: right;
        line-height: 2em;
        padding-right: 8px;

        &.even {
          background-color: #efefef;
        }
        &.points {
          border-left: 1px solid #ccc;
          text-align: center;
          padding-right: 0;
          font-weight: bold;
        }
        &.points:empty {
          border-left: 1px solid transparent;
        }
      }
    }
  }

  @media only screen and (max-width: 525px) {
    .nos-gcstable {
      grid-template-columns: auto auto;
    }
  }

  @media only screen and (max-width: 360px) {
    .nos-gcstable {
      grid-template-columns: auto;
      & .collapsable {
        display: none;
      }
    }
  }
</style>
