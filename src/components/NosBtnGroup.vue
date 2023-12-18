<template>
  <v-btn-toggle
    :rounded="0"
    :elevation="1"
    color="#000"
    mandatory
    divided
  >
    <v-btn
      v-for="(item) in items"
      :key="item.label"
      :ripple="true"
      @click="setState(item.state)"
    >
      {{ item.label }}
    </v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  name: 'NosBtnGroup',
  props: {
    modelValue: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  emits: ['update:modelValue'],
  methods: {
    setState: function (state) {
      this.$emit('update:modelValue', state)
    }
  }
}
</script>

<style>
  :root {
  }
</style>
<style lang="scss" scoped></style>
