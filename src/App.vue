<template>
  <v-app>
    <v-main>
      <router-view></router-view>

      <v-dialog v-model="updateExists" width="auto">
        <v-card class="mx-auto">
          <template v-slot:title>Neue Version!</template>
          <template v-slot:text>
            Aktualisiere die App, um die Inhalte auf dem Neusten Stand zu halten.
          </template>
          <v-card-actions class="ma-2">
            <v-btn color="error" text="Später" @click="updateExists = false"></v-btn>
            <v-spacer></v-spacer>
            <v-btn text="Jetzt Neuladen" @click="refreshApp()"></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      
      <v-dialog v-model="installPromoted" width="auto">
        <v-card class="mx-auto">
          <template v-slot:title>App installieren</template>
          <template v-slot:text>
            Installiere die App, um schneller auf die Inhalte zuzugreifen.
          </template>
          <v-card-actions class="ma-2">
            <v-btn color="error" text="Später" @click="installPromoted = false"></v-btn>
            <v-spacer></v-spacer>
            <v-btn text="Installieren" @click="promptInstall()"></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </v-main>
  </v-app>
</template>

<script>
import update from "./mixins/update";
import install from "./mixins/install";
export default {
  name: "App",
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
