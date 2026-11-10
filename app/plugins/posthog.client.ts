import posthog from 'posthog-js'
import type { ConfigDefaults } from 'posthog-js'

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()
  const posthogClient = posthog.init(runtimeConfig.public.posthogPublicKey, {
    api_host: runtimeConfig.public.posthogHost,
    defaults: runtimeConfig.public.posthogDefaults as ConfigDefaults,
    loaded: (client) => {
      if (import.meta.dev) client.debug()
    },
  })

  return {
    provide: {
      posthog: () => posthogClient,
    },
  }
})
