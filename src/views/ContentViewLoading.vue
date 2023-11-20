<template>
  <div class="nos-loadingscreen">
    <v-progress-circular
      color="#666"
      indeterminate
      :size="75"
      :width="5"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "ContentViewLoading",
  components: {},
};
</script>

<style></style>
<style lang="scss" scoped>
.nos-loadingscreen {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
