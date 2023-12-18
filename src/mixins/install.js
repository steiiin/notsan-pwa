// src/mixins/install.js

export default {
  data () {
    return {
      installTarget: null,
      installPromoted: false
    }
  },

  created () {
    // Listen for browser for prompting install
    window.addEventListener('beforeinstallprompt', this.installPrompt)
  },

  methods: {

    installPrompt (event) {
      event.preventDefault()
      this.installTarget = event
      if (typeof (this.installTarget?.prompt) === 'function') {
        this.installPromoted = true
      } else {
        console.warn('notsan-pwa: Installation konnte nicht automatisch angeboten werden.')
      }
    },

    promptInstall () {
      this.installPromoted = false
      this.installTarget.prompt()
    }
  }
}
