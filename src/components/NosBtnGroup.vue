<template>
  <v-btn-toggle :rounded="0" :elevation="1" color="#000" mandatory divided>
    <v-btn v-for="(item, index) in items" 
      :ripple="true" @click="setState(item.state)"
    >{{ item.label }}</v-btn>
  </v-btn-toggle>
</template>

<script>
  export default {
    name: "NosBtnGroup",
    emits: ["update:modelValue"],
    props: {
      modelValue: String,
      items: Array
    },
    methods: {
      setState: function (state) {
        this.$emit("update:modelValue", state);
      },
    },
  };
</script>

<style>
  :root {
  }
</style>
<style lang="scss" scoped></style>
