<template>
  <v-app-bar color="#000000" density="default" scroll-behavior="elevate">
    <v-toolbar-title class="me-2">
      <v-text-field
        v-model="currentQuery"
        id="nos-searchbar-id"
        hide-details
        placeholder="Suchen ..."
        single-line
        variant="plain"
      ></v-text-field>
    </v-toolbar-title>

    <v-btn icon="$close" @click="goBack()"></v-btn>
  </v-app-bar>
  <template v-if="noResults">
    <v-sheet v-if="searchedOnce" width="300" class="px-4 pt-12 text-center mx-auto">
      <v-icon color="red-accent-1" icon="$textBoxRemoveOutline" size="100px"></v-icon>
      <div class="text-overline search-c-title">Keine Ergebnisse</div>
      <div class="text-caption search-c-subtitle">
        Versuche einen anderen Suchbegriff. <br />Halte es einfach, oder benutze das
        Hauptmenü
      </div>
    </v-sheet>
    <v-sheet v-else width="200" class="px-4 pt-12 text-center mx-auto">
      <v-icon color="grey-lighten-3" icon="$textBoxSearchOutline" size="100px"></v-icon>
    </v-sheet>
  </template>
  <template v-else>
    <v-list class="my-2">
      <template v-for="(item, index) in searchResults" :key="item.key">
        
        <template v-if="item.header">
          <!-- <div style="display:none"></div> -->
          <v-divider v-if="index > 0" class="mt-2"></v-divider>
          <v-list-subheader v-if="item.header" :title="item.header"></v-list-subheader>
        </template>
        <v-list-item
          v-else
          :value="item"
          color="#000"
          @click="delayedRoute(item.route + resultParam)"
        >
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
import { mapStoreDataToListItem, groupListItems, sortListItems } from "@/plugins/storeworker";
export default {
  name: "SearchView",
  components: {},
  computed: {
    noResults() {
      return this.searchResults.length === 0;
    },
  },
  watch: {
    currentQuery(newValue, oldValue) {
      this.searchChanged(newValue);
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
      menuItems = this.sortListItems(menuItems, 'accuracy');

      this.searchResults = this.groupListItems(menuItems, {
          group: { prop: 'category', sort: false, onlyFirst: false },
          items: { sort: true, prop: 'accuracy' }
        }
      );

    },
    searchContent: function (query) {
      let result = [];
      for (const [contentKey, item] of Object.entries(this.$store.state.content)) {
        let searchAccuracy = this.searchItem(item, query)
        if (searchAccuracy > 0)
        {
          result.push({ content: contentKey, accuracy: searchAccuracy });
        }
      }
      return result;
    },
    searchSubmenu: function (query) {
      let result = [];
      for (const [listKey, item] of Object.entries(this.$store.state.submenu)) {
        let searchAccuracy = this.searchItem(item, query)
        if (searchAccuracy > 0)
        {
          result.push({ list: listKey, accuracy: searchAccuracy });
        }
      }
      return result;
    },
    searchItem: function (item, query) {

      // title = 3
      // subtitle = 2
      // hint = 1

      if (item.ignoreAtSearch) { return 0; }
      
      let title = 3 * this.getTextAccuracy(item.title, query);
      let subtitle = 2 * this.getTextAccuracy(item.subtitle, query);
      let hint = 1 * this.getTextAccuracy(item.hint, query);
      return  Math.max(Math.max(title, subtitle), hint);

    },
    getTextAccuracy: function (text, search) {
      if (!text || text.length === 0) { return 0; }

      // text == search: 1.5
      // perc of match = 0-1
      // if startswith *= 3

      text = text.trim().toLowerCase();

      if (text.trim().toLowerCase() === search.trim().toLowerCase()) { return 3; }
      if (!text.includes(search)) { return 0; }

      // calc percentage
      let replaced = text.length - text.replace(search, '').length;
      let perc = replaced / text.length;

      return text.startsWith(search) ? perc*3 : perc;
    },

    mapStoreDataToListItem,
    groupListItems,
    sortListItems,

    goBack: function () {
      setTimeout(() => {
        if (!this.currentQuery) {
          this.$router.back();
        } else {
          this.$router.replace("/");
        }
      }, 0); // RouteDelay
    },
    delayedRoute: function (route) {
      setTimeout(() => {
        this.$router.push(route);
      }, 0); // RouteDelay
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
.search-c-title {
  opacity: 0.8;
}
.search-c-subtitle {
  opacity: 0.5;
}
#nos-searchbar-id {
  padding: 0;
}
</style>
