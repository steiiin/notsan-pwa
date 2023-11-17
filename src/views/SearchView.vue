<template>
  <NosAppbar
    title="Suche"
    :showSearch="true"
    :initialSearchQuery="currentQuery"
    @searchchanged="searchChanged"
    @goback="goBack()"
  ></NosAppbar>
  <template v-if="noResults">
    <v-sheet v-if="searchedOnce" width="400" class="px-4 pt-12 text-center mx-auto">
      <v-icon
        color="red-accent-1"
        icon="mdi-text-box-remove-outline"
        size="100px"
      ></v-icon>
      <div class="text-overline search-c-title">Keine Ergebnisse</div>
      <div class="text-caption search-c-subtitle">
        Versuche einen anderen Suchbegriff. <br />Halte es einfach, oder benutze das
        Hauptmenü
      </div>
    </v-sheet>
    <v-sheet v-else width="400" class="px-4 pt-12 text-center mx-auto">
      <v-icon
        color="grey-lighten-3"
        icon="mdi-text-box-search-outline"
        size="100px"
      ></v-icon>
    </v-sheet>
  </template>
  <template v-else>
    <v-list class="my-2">
      <template v-for="(item, index) in searchResults" :key="item.key">
        <v-list-subheader v-if="item.header" :title="item.header"></v-list-subheader>
        <v-list-item v-else :value="item" color="#000" :to="item.route + resultParam">
          <v-list-item-title v-text="item.title"></v-list-item-title>
          <v-list-item-subtitle
            v-if="item.subtitle"
            v-text="item.subtitle"
          ></v-list-item-subtitle>
        </v-list-item>
      </template>
    </v-list>
  </template>
</template>

<script>
import NosAppbar from "@/components/NosAppbar.vue";
import { mapStoreDataToListItem, groupListItems } from "@/plugins/storeworker";
export default {
  name: "SearchView",
  components: {
    NosAppbar,
  },
  computed: {
    noResults() {
      return this.searchResults.length === 0;
    },
  },
  data() {
    return {
      currentQuery: "",
      searchedOnce: false,
      searchResults: [],
      resultParam: "",
    };
  },
  methods: {
    searchChanged: function (query) {
      this.searchedOnce = !query ? false : true;
      query = query.trim().toLowerCase();

      // search
      let result = [];
      this.resultParam = !query ? "" : "?search=" + encodeURI(query);

      if (!query) {
        this.searchResults = result;
        return;
      }

      result = result.concat(this.searchContent(query));
      result = result.concat(this.searchSubmenu(query));

      let menuItems = this.mapStoreDataToListItem(this.$store.state, result);
      this.searchResults = this.groupListItems(menuItems, "category", "title", false);
    },

    searchContent: function (query) {
      let result = [];
      for (const [contentKey, item] of Object.entries(this.$store.state.content)) {
        if (
          (item.title?.toLowerCase().includes(query) ?? false) ||
          (item.subtitle?.toLowerCase().includes(query) ?? false) ||
          (item.hint?.toLowerCase().includes(query) ?? false)
        ) {
          result.push({ content: contentKey });
        }
      }
      return result;
    },
    searchSubmenu: function (query) {
      let result = [];
      for (const [listKey, item] of Object.entries(this.$store.state.submenu)) {
        if (
          (item.title?.toLowerCase().includes(query) ?? false) ||
          (item.subtitle?.toLowerCase().includes(query) ?? false) ||
          (item.hint?.toLowerCase().includes(query) ?? false)
        ) {
          result.push({ list: listKey });
        }
      }
      return result;
    },

    mapStoreDataToListItem,
    groupListItems,

    goBack: function () {
      if (!this.currentQuery) {
        this.$router.back();
      } else {
        this.$router.replace("/");
      }
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      let searchQuery = from.query.search;
      let fromSearch = searchQuery != null;
      if (fromSearch) {
        vm.currentQuery = searchQuery;
      }
    });
  },
};
</script>
<style>
.search-c-title {
  opacity: 0.8;
}
.search-c-subtitle {
  opacity: 0.5;
}
</style>
