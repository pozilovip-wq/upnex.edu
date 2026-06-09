import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    function observe() {
      const els = document.querySelectorAll(
        '.reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible), .reveal-scale:not(.visible)'
      )

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
      )

      els.forEach((el) => observer.observe(el))
      return observer
    }

    // Run immediately and also after a short delay to catch
    // any elements that render after first paint
    let obs = observe()
    const t = setTimeout(() => {
      obs.disconnect()
      obs = observe()
    }, 300)

    return () => {
      clearTimeout(t)
      obs.disconnect()
    }
  }, [])
}
