<template>
  <ol v-if="numeric" class="nos-list nos-list-numeric mt-2 mb-4 mx-4">
    <slot></slot>
  </ol>

  <ul
    v-else
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
      numeric: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
  };
</script>
<style lang="scss">
  .nos-list-numeric {
    counter-reset: item;
    margin-left: 0;
    padding-left: 0;

    & li {
      display: block;
      margin-left: 2em;
    }

    & li::before {
      display: inline-block;
      content: counter(item) ".";
      counter-increment: item;
      width: 20px;
      margin-left: -2em;
      font-weight: bold;
    }
  }
</style>
<style lang="scss" scoped></style>
