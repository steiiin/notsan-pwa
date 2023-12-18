<!-------------------------------------------------------------------------------------------------
{

}
-------------------------------------------------------------------------------------------------->
<template>
  <nosAppbar
    :title="contentTitle"
    :show-back="true"
    :hide-actions="hideAppbarActions"
    @goback="goBack()"
  />
  <component :is="contentComponent" />
</template>

<script>
import NosAppbar from '../components/NosAppbar.vue'
import { mapState } from 'vuex'
export default {
  name: 'ContentView',
  components: {
    NosAppbar
  },
  data () {
    return {
      hideAppbarActions: false,
      history: {}
    }
  },
  computed: {
    ...mapState({
      content: (state) => state.content
    }),
    dynamicContentItem () {
      // load content from store
      const contentKey = this.$route.params?.key ?? ''
      const contentItem = this.content[contentKey]

      // redirect to mainmenu if nothin found
      if (!contentItem) {
        this.$router.replace('/')
        return null
      }

      return contentItem
    },
    contentComponent () {
      return this.dynamicContentItem.component
    },
    contentTitle () {
      return this.dynamicContentItem.title
    }
  },
  watch: {
    $route (to, from) {
      this.history[from.fullPath] = window.scrollY
      let scrollY = 0
      if (Object.prototype.hasOwnProperty.call(this.history, to.fullPath)) {
        scrollY = this.history[to.fullPath]
      }

      this.$nextTick(() => { window.scrollTo(0, scrollY) })

      // setTimeout(()=>{
      //   window.scrollTo(0, scrollY)
      // }, 100);
    }
  },
  mounted: function () {
    const fromSearch = this.$route.query.search != null
    if (fromSearch) {
      this.hideAppbarActions = true
    }
    window.scrollTo(0, 0) /* reset scroll */
  },
  methods: {
    goBack: function () {
      setTimeout(() => {
        this.$router.back()
      }, 0) // RouteDelay
    }
  }
}
</script>
