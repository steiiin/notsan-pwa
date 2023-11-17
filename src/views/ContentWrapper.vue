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
import { defineAsyncComponent } from "vue";
import { kebabToPascalCase } from "../plugins/storeworker";
export default {
  name: "ContentWrapper",
  components: {
    NosAppbar,
  },
  data() {
    return {
      contenttitle: "",
      hideAppbarActions: false,
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
  methods: {
    goBack: function () {
      this.$router.back();
    },
    kebabToPascalCase,
  },
  mounted: function () {
    let fromSearch = this.$route.query.search != null;
    if (fromSearch) {
      this.hideAppbarActions = true;
    }
  },
};
</script>
