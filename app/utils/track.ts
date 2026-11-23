import posthog from 'posthog-js'

/** Funnel events: course_signup → course_qualified → diagnostic_request. Client only. */
export function track(event: string, properties?: Record<string, unknown>): void {
  if (import.meta.client) {
    posthog.capture(event, properties)
  }
}
