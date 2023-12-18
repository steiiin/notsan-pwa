<template>
  <li
    class="nos-li"
    :class="{
      'text-light-green-darken-2': variant === 'check',
      'text-red-accent-4': variant === 'cave',
      'nos-li-decent': decent === true,
    }"
  >
    <v-icon size="small">
      {{ symbol }}
    </v-icon>
    <span class="nos-li-ci-wrapper"><span><slot /></span><span
      class="nos-li-ci-known"
    >&nbsp;(i.d.R. bekannt)</span></span>
  </li>
</template>

<script>
export default {
  name: 'NosLi',
  props: {
    variant: {
      type: String,
      required: false,
      default: 'point'
    },
    decent: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    symbol () {
      switch (this.variant) {
        case 'check':
          return '$check'
        case 'todo':
          return '$arrowRight'
        case 'cave':
          return '$chevronDoubleRight'
        default:
          return '$chevronRight'
      }
    }
  }
}
</script>

<style>
  /* special styles */
  .nos-li-decent {
    border-left: 24px solid transparent;
    opacity: 0.5;
  }

  /* postfix */
  .nos-li-ci-known {
    display: none;
  }
  .nos-list-ci-known .nos-li-ci-known {
    display: inline;
  }
</style>
<style lang="scss" scoped>
  .nos-li {
    margin-left: calc(-1 * 4px); /* mx-4 zu mx-3 machen */
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: nowrap;
    flex-direction: row;
    min-height: 1.5rem;
    & > span {
      line-height: 1.05;
    }
  }
  .nos-li-ci-wrapper {
    padding-left: 4px;
    line-height: 1 !important;
  }
</style>
