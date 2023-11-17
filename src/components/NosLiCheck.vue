<template>
  <li class="nos-list-check text-light-green-darken-2">
    <v-icon size="small" color="light-green-darken-2"> mdi-check </v-icon>
    <span class="ms-1"><slot></slot></span>
  </li>
</template>

<script>
export default {
  name: "NosLiCheck",
  props: {},
};
</script>

<style>
:root {
}
</style>
<style lang="scss" scoped>
.nos-list-check {
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
