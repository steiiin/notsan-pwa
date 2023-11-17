<template>
  <li class="nos-list-cave text-red-accent-4">
    <v-icon size="small" color="red-accent-4">mdi-chevron-double-right</v-icon>
    <span class="ps-1"><slot></slot></span>
  </li>
</template>

<script>
export default {
  name: "NosLiCave",
  props: {},
};
</script>

<style>
:root {
}
</style>
<style lang="scss" scoped>
.nos-list-cave {
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
</style>
