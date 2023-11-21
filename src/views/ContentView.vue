<template>
  <NosAppbar
    :title="contenttitle"
    :showBack="true"
    :hideActions="hideAppbarActions"
    @goback="goBack()"
  />
  <component :is="dynamicContent"></component>
</template>

<script>
import NosAppbar from "../components/NosAppbar.vue";
import { mapState } from "vuex";
export default {
  name: "ContentView",
  components: {
    NosAppbar,
  },
  data() {
    return {
      contenttitle: "",
      hideAppbarActions: false,

      history: {}
    };
  },
  computed: {
    ...mapState({
      content: (state) => state.content,
    }),
    dynamicContent() {
      // load content from store
      let contentKey = this.$route.params?.key ?? "";
      const contentItem = this.content[contentKey];

      // redirect to mainmenu if nothin found
      if (!contentItem) {
        this.$router.replace("/");
        return null;
      }

      // update ui
      this.contenttitle = contentItem.title;
      return contentItem.component;
    },
  },
  watch: {
    $route(to, from) {

      this.history[from.fullPath] = window.scrollY;
      let scrollY = 0;
      if (this.history.hasOwnProperty(to.fullPath))
      {
        scrollY = this.history[to.fullPath];
      }

      this.$nextTick(()=>{ window.scrollTo(0, scrollY) });

      // setTimeout(()=>{
      //   window.scrollTo(0, scrollY)
      // }, 100);

    }
  },
  methods: {
    goBack: function () {
      setTimeout(() => {
        this.$router.back();
      }, 0); // RouteDelay
    },
  },
  mounted: function () {
    let fromSearch = this.$route.query.search != null;
    if (fromSearch) {
      this.hideAppbarActions = true;
    }
    window.scrollTo(0,0) /* reset scroll */
  },
};
</script>
