<template>
  <v-fade-transition>
    <v-btn 
      :color="color" 
      icon=""
      :ripple="true"
      rounded="xl"
      :elevation="1"

      @click="$emit('click')"
    ></v-btn>
  </v-fade-transition>
</template>

<script>
export default {
  name: "NosBtnChip",
  emits: [ 'click' ],
  props: {
    color: String,
  },
};
</script>

<style>
:root {
}
</style>
<style lang="scss" scoped></style>
