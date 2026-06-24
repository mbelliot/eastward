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

export function clamp(edge0, edge1, x) {
  let t = (x - edge0) / (edge1 - edge0)
  return Math.max(0, Math.min(1, t))
}

export function lerp(edge0, edge1, t) {
  return edge0 + (edge1 - edge0) * t
}

export function formatDate(date) {
  const dateObj = new Date(date)

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(dateObj)
}
