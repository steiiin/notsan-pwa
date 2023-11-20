<template>
  <v-app-bar color="#000000" density="default" scroll-behavior="elevate">
    <v-app-bar-nav-icon v-if="showBack">
      <v-btn icon="$chevronLeft" @click="goBack()"></v-btn>
    </v-app-bar-nav-icon>
    <v-toolbar-title class="font-appbar">{{ title }}</v-toolbar-title>
    <v-btn v-if="!hideActions" icon="$magnify" @click="goSearch()"></v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "NosAppbar",
  emits: ["searchchanged", "goback"],
  props: {
    title: {
      type: String,
      required: false,
      default: "NotSan-Taschenbuch",
    },
    showBack: {
      type: Boolean,
      required: false,
      default: false,
    },
    hideActions: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    goBack: function () {
      this.$emit("goback");
    },
    goSearch: function (route) {
      setTimeout(() => {
        this.$router.push("/search");
      }, 100); // RouteDelay
    },
  },
};
</script>

<style>
.font-appbar {
  font-family: "Teko";
  font-size: 1.6rem !important;
}
</style>
