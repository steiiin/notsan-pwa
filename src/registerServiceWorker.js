import {Workbox} from 'workbox-window';

if ('serviceWorker' in navigator) {
  const wb = new Workbox(`${process.env.BASE_URL}service-worker.js`);

  wb.addEventListener('activated', event => {

    console.log('notsan-pwa: ServiceWorker ' + (event.isUpdate ? 'aktualisiert & ' : '') + 'gestartet.')

  });
  wb.addEventListener('waiting', event => {
    console.log('notsan-pwa: ServiceWorker wartet auf Aktivierung.')
    document.dispatchEvent(
      new CustomEvent('swUpdated', { detail: event })
    )
  });
  wb.addEventListener('controlling', () => {
    console.log('notsan-pwa: App lädt neu.')
    window.location.replace("/")
  });


  wb.register();
}