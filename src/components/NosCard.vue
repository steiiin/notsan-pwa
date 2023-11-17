<template>
  <div class="pa-4">
    <div class="nos-text-card-title">
      <slot name="header"></slot>
    </div>
    <div class="nos-text-card-text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NosCard",
};
</script>

<style lang="scss" scoped>
.nos-text-card-title {
  font-size: 1.2rem;
  font-weight: normal;
  line-height: 1.1;
}
.nos-text-card-text {
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.3;
}
.nos-text-card-text ::v-deep p {
  margin-top: 12px;
}
</style>
