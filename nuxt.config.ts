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
    serviciosSheetId: '',
    serviciosAppsScriptUrl: '',
    public: {
      posthogPublicKey: 'phc_BsuMfyGxsBhDndFYyQNqoRzh5c9FzByrWxS6ZZ7mfTTN',
      posthogHost: 'https://us.i.posthog.com',
      posthogDefaults: '2026-08-30',
    },
  },
  routeRules: {
    // Old URLs already shared with attendees and clients.
    '/servicios': { redirect: { to: '/', statusCode: 301 } },
    '/claude': { redirect: { to: '/cursos/claude', statusCode: 301 } },
    '/agentes': { redirect: { to: '/cursos/agentes', statusCode: 301 } },
    '/claude/confirmacion': { redirect: { to: '/cursos', statusCode: 301 } },
    '/agentes/confirmacion': { redirect: { to: '/cursos', statusCode: 301 } },
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
      title: 'Business Context AI · Automatización de procesos con IA',
      script: [
        { innerHTML: 'document.documentElement.classList.add(\'reveal-on\')', tagPosition: 'head' },
      ],
      meta: [
        {
          name: 'description',
          content:
            'Automatizamos con IA los procesos repetitivos de su empresa en Guatemala: diagnóstico en 10 días con garantía, implementación, datos unificados y capacitaciones gratuitas de Claude y agentes.',
        },
        { name: 'theme-color', content: '#0a0a0a' },
        { property: 'og:site_name', content: 'Business Context AI' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/bcai-mark.svg', key: 'icon' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap',
        },
      ],
    },
  },
})
