<template>
  <div class="mt-2 mb-4 mx-4">
    <div class="nos-pharmakin-row">
      <div class="nos-pharmakin-row__caption">
        <v-icon icon="mdi-timer-outline" size="small"></v-icon>
        <span class="nos--obsolete">Wirkeintritt:</span>
      </div>
      <div class="nos-pharmakin-row__content"><slot name="onset"></slot></div>
    </div>
    <div class="nos-pharmakin-row">
      <div class="nos-pharmakin-row__caption">
        <v-icon icon="mdi-timer" size="small"></v-icon>
        <span class="nos--obsolete">Wirkdauer:</span>
      </div>
      <div class="nos-pharmakin-row__content"><slot name="span"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NosPharmakin",
  props: {},
};
</script>

<style>
:root {
}
</style>
<style lang="scss" scoped>
.nos-pharmakin-row {
  display: grid;
  grid-template-columns: 125px auto;
  &__caption {
    display: flex;
    font-size: 1rem;
    font-style: italic;
    line-height: 1.5;
    align-items: center;
  }
  &__content {
    display: flex;
    font-size: 1rem;
    line-height: 1.5;
    align-items: center;
    flex-wrap: wrap;
  }
}
@media only screen and (max-width: 600px) {
  .nos-pharmakin-row {
    grid-template-columns: 110px auto;
  }
}
@media only screen and (max-width: 550px) {
  .nos-pharmakin-row {
    grid-template-columns: 45px auto;
    &__caption {
      justify-content: center;
      & .nos--obsolete {
        display: none;
      }
    }
  }
}
</style>
