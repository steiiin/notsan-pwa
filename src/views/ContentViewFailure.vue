<template>
  <v-sheet
    width="300"
    class="px-4 pt-12 text-center mx-auto"
  >
    <v-icon
      icon="$cloudOffOutline"
      size="100px"
    />
    <div class="text-overline search-c-title">
      Keine Verbindung
    </div>
    <div class="text-caption search-c-subtitle">
      Das ist doof, für deinen Patienten, aber du hast kein Netz und die Seite wurde noch
      nicht gespeichert.
    </div>
    <v-btn
      class="mt-4"
      @click="reload()"
    >
      Neu laden
    </v-btn>
  </v-sheet>
</template>

<script>
export default {
  name: 'ContentViewLoading',
  components: {},
  methods: {
    reload: function () {
      window.location.reload()
    }
  }
}
</script>

<style></style>
<style lang="scss" scoped>
.nos-loadingscreen {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
</style>
