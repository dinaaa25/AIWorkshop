import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    googleSheetId: '1B3UhsQG6u5M-euundej28Yia2fR5Mjt0err5fg1vXsw',
    googleClientEmail: '',
    googlePrivateKey: '',
    googleAppsScriptUrl: '',
    googleSheetRange: 'A:E',
    claudeSheetId: '17cuqf_ER5ZL_wrS-6WsJVLwXmqJ3no9cUSFDov1wLuM',
    claudeAppsScriptUrl: '',
    public: {
      posthogPublicKey: 'phc_BsuMfyGxsBhDndFYyQNqoRzh5c9FzByrWxS6ZZ7mfTTN',
      posthogHost: 'https://us.i.posthog.com',
      posthogDefaults: '2026-08-30',
    },
  },
  routeRules: {
    '/dev-sw.js': {
      headers: {
        'Cache-Control': 'no-store',
        'Service-Worker-Allowed': '/',
      },
    },
    '/sw.js': {
      headers: {
        'Cache-Control': 'no-store',
        'Service-Worker-Allowed': '/',
      },
    },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Taller Ejecutivo de IA · Guatemala',
      script: [
        { innerHTML: 'document.documentElement.classList.add(\'reveal-on\')', tagPosition: 'head' },
      ],
      meta: [
        {
          name: 'description',
          content:
            'Taller presencial de un día en Guatemala para CEOs y dueños de empresa. Aprenda a usar la IA para ahorrar horas y dinero, con un plan claro y un kit de herramientas. $799 USD.',
        },
        { name: 'theme-color', content: '#0a0a0a' },
        { property: 'og:title', content: 'Taller Ejecutivo de IA · Guatemala' },
        {
          property: 'og:description',
          content:
            'Un día para que su empresa empiece a ahorrar horas y dinero con IA. Compre su entrada: $799 USD. 5 de diciembre, Ciudad de Guatemala. La hora y el lugar exacto se envían por correo.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap',
        },
      ],
    },
  },
})
