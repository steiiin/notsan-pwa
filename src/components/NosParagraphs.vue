<template>
  <div
    class="nos-paragraphs"
    :class="{ 'nos-paragraphs-decent': decent }"
  >
    <div
      v-if="headingExisting"
      class="nos-paragraphs-heading"
    >
      <slot name="heading" />
    </div>
    <div class="nos-paragraphs-text">
      <slot name="text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'NosParagraphs',
  props: {
    decent: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    headingExisting () { return Object.prototype.hasOwnProperty.call(this.$slots, 'heading') }
  }
}
</script>

<style lang="scss" scoped>
.nos-paragraphs {

  margin: 16px;

  & .nos-paragraphs-heading {
    font-size: 1.2rem;
    font-weight: normal;
    line-height: 1.1;
  }
  & .nos-paragraphs-text {
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.3;
  }
  & .nos-paragraphs-text :deep(div-paragraph) {
    margin-top: 12px;
  }

}

.nos-paragraphs-decent {

  & .nos-paragraphs-heading {
    text-decoration: underline;
    line-height: 1.1;
    font-size: 1rem;
    font-weight: normal;
  }
  & .nos-paragraphs-text {
    line-height: 1.2;
    font-size: 1rem;
    font-weight: normal;
  }
  & .nos-paragraphs-text :deep(p) {
    margin-top: 6px;
  }

}

</style>
