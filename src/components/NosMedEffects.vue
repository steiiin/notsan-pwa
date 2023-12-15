<template>
  <div class="mt-2 mb-4 mx-4">
    <div class="nos-medeffects-row" v-if="hasOnSet">
      <div class="nos-medeffects-row__caption">
        <v-icon icon="$timerOutline" size="small"></v-icon>
        <span class="nos--obsolete">Wirkeintritt:</span>
      </div>
      <div class="nos-medeffects-row__content"><slot name="onset"></slot></div>
    </div>
    <div class="nos-medeffects-row" v-if="hasSpan">
      <div class="nos-medeffects-row__caption">
        <v-icon icon="$timer" size="small"></v-icon>
        <span class="nos--obsolete">Wirkdauer:</span>
      </div>
      <div class="nos-medeffects-row__content"><slot name="span"></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NosMedEffects",
  props: {},
  computed: {
    hasOnSet() { return this.$slots.hasOwnProperty('onset'); },
    hasSpan() { return this.$slots.hasOwnProperty('span'); }
  },
};
</script>

<style>
:root {
}
</style>
<style lang="scss" scoped>
.nos-medeffects-row {
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
  .nos-medeffects-row {
    grid-template-columns: 110px auto;
  }
}
@media only screen and (max-width: 550px) {
  .nos-medeffects-row {
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
