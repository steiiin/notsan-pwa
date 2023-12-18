<template>
  <v-fade-transition>
    <v-btn
      :color="color"
      icon=""
      :ripple="true"
      rounded="xl"
      :elevation="1"

      @click="$emit('click')"
    />
  </v-fade-transition>
</template>

<script>
export default {
  name: 'NosBtnChip',
  props: {
    color: {
      type: String,
      default: null
    }
  },
  emits: ['click']
}
</script>

<style>
:root {
}
</style>
<style lang="scss" scoped></style>
