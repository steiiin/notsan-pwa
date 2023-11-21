// src/mixins/update.js

export default {
    data() {
      return {
        swTarget: null,
        updateExists: false,
      }
    },
    created() {
      // Listen for our custom event from the SW registration
      document.addEventListener('swUpdated', this.updateAvailable, { once: true })
    },
    methods: {
      
      updateAvailable(event) {

        let target = event?.detail?.target;
        if (typeof (target.messageSkipWaiting) === 'function')
        {
          this.swTarget = target;
          this.updateExists = true;
        } 
        else
        {
          console.warn('notsan-pwa: ServiceWorker konnte nicht automatisch aktualisiert werden.')
        }
      },
  
      refreshApp() {
        this.updateExists = false
        this.swTarget.messageSkipWaiting();
      },
    },
  }
  