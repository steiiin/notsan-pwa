<template>
  <v-app>
    <v-main>
      <router-view />

      <nos-app-nag
        :show-update-nag="updateExists"
        :show-install-nag="installPromoted"
        @updateclick="refreshApp()"
        @installclick="promptInstall()"
      />
    </v-main>
  </v-app>
</template>

<script>
import NosAppNag from './components/NosAppNag.vue'
import update from './mixins/update'
import install from './mixins/install'
export default {
  name: 'App',
  components: {
    NosAppNag
  },
  mixins: [update, install],
  data () {
    return {}
  }
}
</script>

<style>
body {
  font-family: "Mukta";
}

/* special-tags */
div-paragraph {
  display: block;
  margin-top: 8px;
  &:first-child {
    margin-top: 0;
  }
}

span-u {
  display: inline;
  text-decoration: underline;
}
div-u {
  display: block;
  text-decoration: underline;
}

span-mono {
  display: inline;
  font-family: monospace;
  font-size: 0.9rem;
  line-height: 1.1rem;
}
div-mono {
  display: block;
  font-family: monospace;
  font-size: 0.9rem;
  line-height: 1.1rem;
}

q {
  opacity: 0.9;
  font-style: italic;
}

</style>
