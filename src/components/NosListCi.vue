<template>
  <ul
    class="mt-2 mb-4 mx-4"
    :class="{
      'text-light-blue-darken-4': type === 'intolerable',
      'text-red-accent-3': type === 'acute',
      'text-light-green-darken-2': type === 'family',
      'text-amber-darken-3': type === 'known',
      'nos-list-ci-known': type === 'known',
    }"
  >
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "NosListCi",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
:root {
}
</style>
<style lang="scss" scoped></style>
