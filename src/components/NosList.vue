<template>
  <ul
    class="nos-list mt-2 mb-4 mx-4"
    :class="{
      'text-light-blue-darken-4': contragroup === 'intolerable',
      'text-red-accent-3': contragroup === 'acute',
      'text-light-green-darken-2': contragroup === 'family',
      'text-amber-darken-3': contragroup === 'known',
      'nos-list-ci-known': contragroup === 'known',
    }"
  >
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "NosList",
  props: {
    contragroup: {
      type: String,
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped></style>
