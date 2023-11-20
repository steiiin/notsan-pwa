<template>
  <div class="nos-btn-link">
    <v-btn color="info" @click="delayedRoute(meta.route)">{{ meta.title }}</v-btn>
  </div>
</template>

<script>
export default {
  name: "NosBtnLink",
  props: {
    content: {
      type: String,
      required: false,
    },
    list: {
      type: String,
      required: false,
    },
  },
  computed: {
    meta() {
      if (this.content) {
        let content = this.$store.state.content[this.content];
        return { title: content.title, route: "/content/" + this.content };
      } else if (this.list) {
        let list = this.$store.state.submenu[this.list];
        return { title: list.title, route: "/submenu/" + this.list };
      }
      return { title: "", route: "" };
    },
  },
  methods: {
    delayedRoute: function (route) {
      setTimeout(() => {
        this.$router.push(route);
      }, 250); // RouteDelay
    },
  },
};

// items: { label: '', unit: '', per: '', color: '' }
</script>

<style>
:root {
}
.nos-list .nos-btn-link {
  margin: 4px 0 0 20px;
}
.nos-u + .nos-btn-link {
  margin: 4px 0 0 0;
}
</style>
