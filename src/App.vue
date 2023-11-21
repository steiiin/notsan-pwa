<template>
  <v-app>
    <v-main>
      <router-view></router-view>

      <nos-app-nag 
        :showUpdateNag="updateExists"
        :showInstallNag="installPromoted"
        @updateclick="refreshApp()"
        @installclick="promptInstall()"></nos-app-nag>
    </v-main>
  </v-app>
</template>

<script>
import NosAppNag from "./components/NosAppNag.vue"
import update from "./mixins/update";
import install from "./mixins/install";
export default {
  name: "App",
  components: {
    NosAppNag
  },
  data() {
    return {};
  },
  mixins: [update, install],
};
</script>

<style>
body {
  font-family: "Mukta";
}
.nos-u {
  text-decoration: underline;
}
.nos-mono {
  font-family: monospace;
  font-size: 0.9rem;
  line-height: 1.1rem;
}
</style>
