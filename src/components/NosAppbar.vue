<template>
  <v-app-bar color="#000000" density="default" scroll-behavior="elevate">
    <v-app-bar-nav-icon v-if="showBack && !showSearch">
      <v-btn icon="mdi-chevron-left" @click="goBack()"></v-btn>
    </v-app-bar-nav-icon>

    <v-toolbar-title v-if="showSearch" class="me-2">
      <v-text-field
        v-model="searchtext"
        id="nos-searchbar-id"
        hide-details
        placeholder="Suchen ..."
        single-line
      ></v-text-field>
    </v-toolbar-title>
    <v-toolbar-title v-else class="font-appbar">{{ title }}</v-toolbar-title>

    <template v-slot:append v-if="!hideActions">
      <v-btn v-if="showSearch" icon="mdi-close" @click="goBack()"></v-btn>
      <v-btn v-else icon="mdi-magnify" to="/search"></v-btn>
    </template>
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
    showSearch: {
      type: Boolean,
      required: false,
      default: false,
    },
    initialSearchQuery: {
      type: String,
      required: false,
      default: "",
    },
    hideActions: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      searchtext: "",
    };
  },
  watch: {
    searchtext(newValue, oldValue) {
      this.$emit("searchchanged", newValue);
    },
  },
  methods: {
    goBack: function () {
      this.$emit("goback");
    },
  },
  mounted() {
    this.$nextTick(() => {
      let searchbar = document.getElementById("nos-searchbar-id");
      if (searchbar) {
        this.searchtext = this.initialSearchQuery;
        searchbar.focus();
      }
    });
  },
};
</script>

<style>
.font-appbar {
  font-family: "Teko";
  font-size: 1.6rem !important;
}
</style>
