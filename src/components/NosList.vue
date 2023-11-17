<template>
  <ul class="mt-2 mb-4 mx-4">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "NosList",
  props: {},
};
</script>

<style>
:root {
}

.nos-li-decent {
  border-left: 24px solid transparent;
  opacity: 0.5;
}
</style>
<style lang="scss" scoped></style>
