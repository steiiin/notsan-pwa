<template>
  <NosAppbar
    :title="submenutitle"
    :showBack="true"
    :hideActions="hideAppbarActions"
    @goback="goBack()"
  />
  <v-list class="my-2">
    <template v-for="(item, index) in loadMenu" :key="item.key">
      <v-list-subheader v-if="item.header" :title="item.header"></v-list-subheader>
      <v-list-item v-else :value="item" color="#000" @click="delayedRoute(item.route)">
        <v-list-item-title v-text="item.title"></v-list-item-title>
        <v-list-item-subtitle
          v-if="item.subtitle"
          v-text="item.subtitle"
        ></v-list-item-subtitle>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import NosAppbar from "../components/NosAppbar.vue";
import { mapStoreDataToListItem, groupListItems, sortListItems } from "@/plugins/storeworker";
export default {
  name: "MenuSubView",
  components: {
    NosAppbar,
  },
  props: ["menu", "submenu"],
  data() {
    return {
      submenutitle: "",
      hideAppbarActions: false,
      groupItems: true,
    };
  },
  computed: {
    loadMenu() {
      // load items
      let storeItems = this.submenu
        ? this.loadFromSubMenu(this.menu)
        : this.loadFromMainMenu(this.menu);
      if (!storeItems) {
        debugger;
        this.$router.replace("/");
        return null;
      }

      // map items to listitems
      let menuItems = this.mapStoreDataToListItem(this.$store.state, storeItems);
      return this.groupItems ? this.groupListItems(menuItems, "title", "title", true, true) : this.sortListItems(menuItems, "title");
    },
  },
  methods: {
    loadFromMainMenu: function (name) {
      if (this.$store.state.menu.hasOwnProperty(name)) {
        let branch = this.$store.state.menu[name];
        this.submenutitle = branch.name;
        return branch.items;
      }
      return null;
    },
    loadFromSubMenu: function (name) {
      if (this.$store.state.submenu.hasOwnProperty(name)) {
        let branch = this.$store.state.submenu[name];
        this.submenutitle = branch.title;
        if (branch.nogroups) { this.groupItems = false; }
        return branch.items;
      }
      return null;
    },
    mapStoreDataToListItem,
    groupListItems,
    sortListItems,

    goBack: function () {
      setTimeout(() => {
        this.$router.back();
      }, 100); // RouteDelay
    },
    delayedRoute: function (route) {
      setTimeout(() => {
        this.$router.push(route);
      }, 250); // RouteDelay
    },
  },
  mounted: function () {
    let fromSearch = this.$route.query.search != null;
    if (fromSearch) {
      this.hideAppbarActions = true;
    }
  },
};
</script>
