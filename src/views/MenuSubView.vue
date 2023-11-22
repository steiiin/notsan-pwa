<!-------------------------------------------------------------------------------------------------
{ 
  "Revision": "20.11.2023"
}
-------------------------------------------------------------------------------------------------->
<template>
  <nosAppbar
    :title="submenutitle"
    :showBack="true"
    :hideActions="hideAppbarActions"
    @goback="goBack()"
  />
  <v-list class="my-2">
    <template v-for="(item, index) in loadMenu" :key="item.key">
      <v-list-subheader v-if="item.header" :title="item.header"></v-list-subheader>
      <v-list-item v-else :value="item" color="#333" @click="delayedRoute(item.route)">
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
    };
  },
  computed: {
    loadMenu() {
      // load items
      let branch = this.submenu
        ? this.loadFromSubMenu(this.menu)
        : this.loadFromMainMenu(this.menu);
      if (!branch || branch.items.length == 0) {
        debugger;
        this.$router.replace("/");
        return null;
      }

      let groupList = true;
      let sortItems = true;
      if (branch.nogroups) { groupList = false; }
      if (branch.nosort) { sortItems = false; }

      // map items to listitems
      let menuItems = this.mapStoreDataToListItem(this.$store.state, branch.items ?? []);
      
      return groupList ? 
        this.groupListItems(menuItems, {
            group: { prop: 'title', sort: sortItems, onlyFirst: true },
            items: { sort: sortItems, prop: 'title' }
          }) : (sortItems ? this.sortListItems(menuItems, 'title') : menuItems);
    },
  },
  methods: {
    loadFromMainMenu: function (name) {
      if (this.$store.state.menu.hasOwnProperty(name)) {
        let branch = this.$store.state.menu[name];
        this.submenutitle = branch.name;
        return branch
      }
      return null;
    },
    loadFromSubMenu: function (name) {
      if (this.$store.state.submenu.hasOwnProperty(name)) {
        let branch = this.$store.state.submenu[name];
        this.submenutitle = branch.title;
        return branch;
      }
      return null;
    },
    mapStoreDataToListItem,
    groupListItems,
    sortListItems,

    goBack: function () {
      setTimeout(() => {
        this.$router.back();
      }, 0); // RouteDelay
    },
    delayedRoute: function (route) {
      setTimeout(() => {
        this.$router.push(route);
      }, 0); // RouteDelay
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
