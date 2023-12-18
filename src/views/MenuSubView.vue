<!-------------------------------------------------------------------------------------------------
{

}
-------------------------------------------------------------------------------------------------->
<template>
  <nosAppbar
    :title="submenutitle"
    :show-back="true"
    :hide-actions="hideAppbarActions"
    @goback="goBack()"
  />
  <v-list class="my-2">
    <template
      v-for="(item) in loadMenu"
      :key="item.key"
    >
      <v-list-subheader
        v-if="item.header"
        :title="item.header"
      />
      <v-list-item
        v-else
        :value="item"
        color="#333"
        @click="delayedRoute(item.route)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
        <v-list-item-subtitle v-if="item.subtitle">
          {{ item.subtitle }}
        </v-list-item-subtitle>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
import NosAppbar from '../components/NosAppbar.vue'
import { mapStoreDataToListItem, groupListItems, sortListItems } from '@/plugins/storeworker'
export default {
  name: 'MenuSubView',
  components: {
    NosAppbar
  },
  props: {
    menu: {
      type: String,
      default: null
    },
    submenu: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      submenutitle: '',
      hideAppbarActions: false
    }
  },
  computed: {
    loadMenu () {
      // load items
      const branch = this.submenu
        ? this.loadFromSubMenu(this.menu)
        : this.loadFromMainMenu(this.menu)
      if (!branch || branch.items.length === 0) {
        this.$router.replace('/')
        return null
      }

      let groupList = true
      let sortItems = true
      if (branch.nogroups) { groupList = false }
      if (branch.nosort) { sortItems = false }

      // map items to listitems
      const menuItems = this.mapStoreDataToListItem(this.$store.state, branch.items ?? [])

      return groupList
        ? this.groupListItems(menuItems, {
          group: { prop: 'title', sort: sortItems, onlyFirst: true },
          items: { sort: sortItems, prop: 'title' }
        })
        : (sortItems ? this.sortListItems(menuItems, 'title') : menuItems)
    }
  },
  mounted: function () {
    const fromSearch = this.$route.query.search != null
    if (fromSearch) {
      this.hideAppbarActions = true
    }
  },
  methods: {
    loadFromMainMenu: function (name) {
      if (Object.prototype.hasOwnProperty.call(this.$store.state.menu, name)) {
        const branch = this.$store.state.menu[name]
        this.submenutitle = branch.name
        return branch
      }
      return null
    },
    loadFromSubMenu: function (name) {
      if (Object.prototype.hasOwnProperty.call(this.$store.state.submenu, name)) {
        const branch = this.$store.state.submenu[name]
        this.submenutitle = branch.title
        return branch
      }
      return null
    },
    mapStoreDataToListItem,
    groupListItems,
    sortListItems,

    goBack: function () {
      setTimeout(() => {
        this.$router.back()
      }, 0) // RouteDelay
    },
    delayedRoute: function (route) {
      setTimeout(() => {
        this.$router.push(route)
      }, 0) // RouteDelay
    }
  }
}
</script>
