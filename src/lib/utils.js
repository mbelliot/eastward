import Lenis from 'lenis'

export function videoReady(el, readyState = 3) {
  return new Promise((resolve) => {
    if (!el || el.readyState >= readyState) {
      resolve(true)
    } else {
      el.addEventListener('canplaythrough', resolve, { once: true })
    }
  })
}

export function waitFor(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export function clamp(a, b, x) {
  let t = (x - a) / (b - a)
  return Math.max(0, Math.min(1, t))
}

export function lerp(a, b, t) {
  return a + (b - a) * t
}

export function formatDate(date) {
  const dateObj = new Date(date)

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(dateObj)
}

let _lenis
export function lenis() {
  if (!_lenis) _lenis = new Lenis()
  return _lenis
}

export function lockScroll() {
  let _lenis = lenis()
  if (_lenis) {
    _lenis.stop()
    return
  }

  let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth,
    props = { overflow: 'hidden', paddingRight: `${scrollbarWidth}px` }
  for (let [k, v] of Object.entries(props)) {
    document.body.style.setProperty(k, v)
  }
}

export function releaseScroll() {
  let _lenis = lenis()
  if (_lenis) {
    _lenis.start()
    return
  }

  document.body.style.removeProperty('overflow')
  document.body.style.removeProperty('paddingRight')
}
