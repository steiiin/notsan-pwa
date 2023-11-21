<template>
  <div class="nos-tab-row-multi">
    <div class="nos-tab-row-multi__caption">
      <slot name="caption"></slot>
    </div>
    <div class="nos-tab-row-multi__slot">
      <slot name="t1"></slot>
    </div>
    <div class="nos-tab-row-multi__slot">
      <slot name="t2"></slot>
    </div>
    <div class="nos-tab-row-multi__slot">
      <slot name="t3"></slot>
    </div>
    <div class="nos-tab-row-multi__slot">
      <slot name="t4"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NosRowCaptionMulti",
    computed: {},
  };
</script>

<style>
  /* alternierende reihen */
  .nos-tab-row-multi:nth-child(even) {
    background-color: #eee;
  }

  /* spezielle stile */
  .nos-score-point {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 0.9rem;
    line-height: 0.9;
    text-align: center;
    width: 60px;
  }
</style>
<style lang="scss" scoped>
  .nos-tab-row-multi {
    display: flex;
    align-items: center;
    margin-left: -16px;
    margin-right: -16px;
    padding-left: 16px;
    padding-right: 16px;
    justify-content: center;

    &__caption {
      flex: 1 1;
      max-width: 450px;
      font-style: italic;
    }
    &__slot {
      margin-left: 8px;
    }
    &__slot:empty {
      display: none;
    }
    &__slot:first-child {
      margin-left: 0;
    }
  }

  .nos-tab-row {
    display: grid;
    grid-template-columns: 200px auto;
    grid-column-gap: 8px;
    margin-bottom: 0px;
    font-size: 1rem;
    line-height: 1.1rem;
    &__caption {
      font-style: italic;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 12px 0;
    }
    &__content {
      padding: 12px 0;
    }
  }
  .nos-tab-row:first-child {
    .nos-tab-row__caption {
      padding: 0 0 12px 0;
    }
    .nos-tab-row__content {
      padding: 0 0 12px 0;
    }
  }
  .nos-tab-row:last-child {
    margin-bottom: 0;
  }
  @media only screen and (max-width: 750px) {
    .nos-tab-row {
      grid-template-columns: 155px auto;
    }
  }
  @media only screen and (max-width: 700px) {
    .nos-tab-row {
      grid-template-columns: 140px auto;
      grid-column-gap: 4px;
    }
  }
  @media only screen and (max-width: 650px) {
    .nos-tab-row {
      grid-template-columns: 125px auto;
    }
  }
  @media only screen and (max-width: 600px) {
    .nos-tab-row {
      grid-template-columns: 110px auto;
    }
  }
  @media only screen and (max-width: 550px) {
    .nos-tab-row {
      grid-template-columns: 95px auto;
      &__caption {
        font-size: 0.95rem;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .nos-tab-row {
      grid-template-columns: 80px auto;
      &__caption {
        font-size: 0.9rem;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    .nos-tab-row {
      grid-template-columns: 65px auto;
      &__caption {
        font-size: 0.85rem;
      }
    }
  }
  @media only screen and (max-width: 400px) {
    .nos-tab-row {
      grid-template-columns: 50px auto;
      &__caption {
        font-size: 0.8rem;
      }
    }
  }
</style>
