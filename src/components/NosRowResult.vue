<template>
  <div class="nos-row-result"
    :class="'bg-'+color">
    <div class="nos-row-result__heading">
      <slot name="heading"></slot>
    </div>
    <div class="nos-row-result__text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NosRowCaptionResult",
    props: {
      color: {
        type: String,
        required: false,
        default: 'grey-lighten-1'
      }
    }
  };
</script>

<style lang="scss" scoped>
.nos-row-result {
  margin: 8px -16px 0 -16px;
  padding: 12px 16px;
  line-height: 1.1;

  &__heading {
    font-size: 1.2rem;
    font-weight: bold;
  }
  &__text {
    opacity: 0.8;
  }
}
</style>