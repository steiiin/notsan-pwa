<template>
  <div class="nos-btn-link">
    <v-btn
      v-if="backLink"
      color="black"
      variant="tonal"
      block
      prepend-icon="$link"
      @click="delayedRoute(meta.route)"
    >
      {{ meta.title }}
    </v-btn>
    <v-btn
      v-else
      color="info"
      @click="delayedRoute(meta.route)"
    >
      {{ meta.title }}
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'NosBtnLink',
  props: {
    content: {
      type: String,
      required: false,
      default: null
    },
    list: {
      type: String,
      required: false,
      default: null
    },
    backLink: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    meta () {
      if (this.content) {
        const content = this.$store.state.content[this.content]
        return { title: content.title, route: '/content/' + this.content }
      } else if (this.list) {
        const list = this.$store.state.submenu[this.list]
        return { title: list.title, route: '/submenu/' + this.list }
      }
      return { title: '', route: '' }
    }
  },
  methods: {
    delayedRoute: function (route) {
      setTimeout(() => {
        this.$router.push(route)
      }, 0) // RouteDelay
    }
  }
}

// items: { label: '', unit: '', per: '', color: '' }
</script>

<style>
:root {
}

.nos-list .nos-btn-link {
  margin: 4px 0 0 20px;
}

span-u + .nos-btn-link,
div-u + .nos-btn-link {
  margin: 4px 0 0 0;
}
</style>
