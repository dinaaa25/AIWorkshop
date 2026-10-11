export default defineNuxtPlugin(async () => {
  if (!('serviceWorker' in navigator)) {
    return
  }

  const registrations = await navigator.serviceWorker.getRegistrations()
  await Promise.all(registrations.map(registration => registration.unregister()))

  if ('caches' in window) {
    const keys = await caches.keys()
    await Promise.all(keys.map(key => caches.delete(key)))
  }

  if (registrations.length > 0 && sessionStorage.getItem('stale-sw-cleared') !== '1') {
    sessionStorage.setItem('stale-sw-cleared', '1')
    location.reload()
  }
})
