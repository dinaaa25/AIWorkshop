export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined

  function getObserver() {
    observer ??= new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer?.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    return observer
  }

  const delayStyle = (delay?: number) => (delay ? { '--reveal-delay': `${delay}ms` } : undefined)

  nuxtApp.vueApp.directive<HTMLElement, number | undefined>('reveal', {
    getSSRProps: binding => ({ 'data-reveal': '', 'style': delayStyle(binding.value) }),
    mounted(el, binding) {
      el.dataset.reveal = ''
      if (binding.value) {
        el.style.setProperty('--reveal-delay', `${binding.value}ms`)
      }
      getObserver().observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    },
  })
})
