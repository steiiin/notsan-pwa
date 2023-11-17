<template>
  <div
    class="d-flex px-4 nos-header"
    :class="{
      'nos-header-normal': !decent,
      'nos-header-decent': decent,
      'bg-grey-lighten-1': !decent,
      'bg-grey-lighten-3': decent,
    }"
  >
    <v-icon v-if="icon" :icon="icon" size="small" class="ms-n1 me-1 nos-header__image" />
    <span>{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: "NosHeader",
  props: {
    title: {
      type: String,
      required: true,
    },
    decent: {
      type: Boolean,
      required: false,
      default: false,
    },
    icon: {
      type: String,
      required: false,
      default: null,
    },
  },
};
</script>

<style>
:root {
  --nos-header-size: 48px;
  --nos-header-decent: 0.9;
}
</style>
<style lang="scss" scoped>
.nos-header {
  font-weight: normal;
  text-transform: uppercase;
  &__image {
    position: relative;
  }
  & > span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.nos-header-normal {
  height: var(--nos-header-size);
  letter-spacing: 1px;
  font-size: 1.1rem;
  & > span {
    line-height: calc(var(--nos-header-size) + 2px);
  }
  .nos-header__image {
    top: 13px;
  }
}
.nos-header-decent {
  height: calc(var(--nos-header-decent) * var(--nos-header-size));
  letter-spacing: 0;
  font-size: 1rem;
  & > span {
    line-height: calc(var(--nos-header-decent) * var(--nos-header-size) + 1px);
  }
  .nos-header__image {
    top: 12px;
  }
}
</style>
