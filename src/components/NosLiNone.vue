<template>
  <li class="nos-list-none">
    <span><slot></slot></span>
  </li>
</template>

<script>
export default {
  name: "NosLiNo",
  props: {},
};
</script>

<style>
:root {
}
</style>
<style lang="scss" scoped>
.nos-list-none {
  list-style-type: none;
  min-height: 1.5rem;
  & > span {
    line-height: 1.05;
  }
}
</style>
