<template>
  <NosAppbar :showBack="false" />
  <v-list class="my-2">
    <template v-for="(entry, index) in mainmenu" :key="entry.key">
      <v-list-item
        :value="entry"
        color="#000"
        class="nos-mainmenu-item"
        :to="entry.route"
      >
        <template v-slot:prepend>
          <v-icon :icon="entry.icon"></v-icon>
        </template>
        <v-list-item-title v-text="entry.name"></v-list-item-title>
      </v-list-item>
      <v-divider v-if="index < mainmenu.length - 1"></v-divider>
    </template>
  </v-list>
  <nos-footer></nos-footer>
</template>

<script>
import NosAppbar from "../components/NosAppbar.vue";
import NosFooter from "../components/NosFooter.vue";
export default {
  name: "MenuMainView",
  components: {
    NosAppbar,
    NosFooter,
  },
  computed: {
    mainmenu() {
      return Object.entries(this.$store.state.menu).map(([key, value]) => ({
        key,
        name: value.name,
        icon: value.icon,
        route: "/menu/" + key,
      }));
    },
  },
};
</script>

<style>
.v-list-item__prepend > .v-icon {
  opacity: 1;
}
</style>
<style lang="scss" scoped>
.nos-mainmenu-item {
  min-height: 60px;
}
</style>
