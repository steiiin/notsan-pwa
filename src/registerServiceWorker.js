/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log('NotSan-PWA: ServiceWorker bereit.')
    },
    registered () {
      console.log('NotSan-PWA: ServiceWorker wurde registriert.')
    },
    cached () {
      console.log('NotSan-PWA: Daten zwischengespeichert.')
    },
    updatefound () {
      console.log('NotSan-PWA: Neue Daten gefunden.')
    },
    updated () {
      console.log('NotSan-PWA: Neue Daten gespeichert. Bitte neuladen.')
      document.dispatchEvent(new CustomEvent('pwaUpdated'))
      console.warn('NotSan-PWA: Update-Event gesendet.')
    },
    offline () {
      console.log('NotSan-PWA: Offline-Modus.')
    },
    error (error) {
      console.error('NotSan-PWA: Fehler bei Registrierung: ', error)
    }
  })
}
