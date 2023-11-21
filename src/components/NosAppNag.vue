<template>
  <footer v-if="showUpdateNag || showInstallNag"
    class="nos-appnag">
    <v-btn v-if="showUpdateNag"
      color="success" 
      class="my-2"
      @click="$emit('updateclick')"
    >Neue Version installieren</v-btn>
    <v-btn v-if="showInstallNag"
      color="error" 
      class="my-2"
      @click="$emit('installclick')"
    >Als App installieren</v-btn>
  </footer>
</template>

<script>
export default {
  name: "NosAppNag",
  emits: [
    'updateclick',
    'installclick'
  ],
  props: {
    showUpdateNag: {
      type: Boolean,
      required: false,
      default: false
    },
    showInstallNag: {
      type: Boolean,
      required: false,
      default: false
    }
  },
};
</script>

<style lang="scss" scoped>
.nos-appnag {
  position: absolute;
  bottom: 1px;
  text-align: center;
  width: 100%;
  background: #eee;
  padding: 8px;
  font-size: 0.8rem;
  color: #999;
  &__code {
    font-family: monospace;
    color: #777;
  }
}
</style>
