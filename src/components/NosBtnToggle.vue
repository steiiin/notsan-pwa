<template>
  <v-fade-transition>
    <v-btn
      :icon="icon"
      :color="color"

      :ripple="true"
      :rounded="0"
      :elevation="1"

      @click="toggleState()"
    />
  </v-fade-transition>
</template>

<script>
export default {
  name: 'NosBtnToggle',
  props: {
    modelValue: Boolean
  },
  emits: ['update:modelValue'],
  data () {
    return {
      selected: this.modelValue
    }
  },
  computed: {
    icon () { return this.selected ? '$checkBold' : '$closeThick' },
    color () { return this.selected ? 'success' : '' }
  },
  methods: {
    toggleState: function () {
      this.selected = !this.selected
      this.$emit('update:modelValue', this.selected)
    }
  }
}
</script>

<style>
:root {
}
</style>
<style lang="scss" scoped></style>
