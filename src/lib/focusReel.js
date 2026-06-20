import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { Observer } from 'gsap/Observer'

gsap.registerPlugin(Flip, Observer)

const defaultConfig = {
  '(min-width:1200px)': {
    basis: '23%',
    height: '30vw',
    focusedHeight: '40vw',
    focusedBasis: '56%',
  },
  '(min-width:640px) and (max-width:1199px)': {
    basis: '56%',
    height: 'calc(70vw - 220px)',
    focusedHeight: '70vw',
    focusedBasis: '56%',
  },
  '(max-width:639px)': {
    basis: '92%',
    height: '460px',
    focusedHeight: '460px',
    focusedBasis: '92%',
  },
}

function matchConfig(config, cb) {
  const mm = gsap.matchMedia()
  Object.entries(config).forEach(([k, v]) => {
    mm.add(k, () => cb(v))
  })
  return mm
}

export function focusReel(container, signal, config = defaultConfig) {
  let slides = gsap.utils.toArray(container.children),
    gap = parseFloat(getComputedStyle(container).columnGap) ?? 25,
    idx = 0,
    currProps,
    restProps,
    moving,
    tl,
    prevClone

  slides.forEach((s, i) => {
    s.style.order = i
  })

  let mm = matchConfig(config, ({ height, basis, focusedHeight, focusedBasis }) => {
    currProps = { flex: `0 0 ${focusedBasis}`, height: focusedHeight }
    restProps = { flex: `0 0 ${basis}`, height }

    let focused = slides.find((s) => s.style.order == 0) ?? slides[0]

    gsap.set(focused, currProps)
    gsap.set(
      slides.filter((s) => s !== focused),
      restProps,
    )
  })

  function move(delta) {
    if (moving) return
    moving = true
    let forward = delta < 0,
      fst = slides.find((s) => s.style.order == 0) ?? slides[0],
      lst = slides.find((s) => s.style.order == slides.length - 1) ?? slides[slides.length - 1],
      prev = forward ? fst : lst,
      rest = slides.filter((s) => s !== prev),
      state = Flip.getState(rest),
      prevState = Flip.getState(fst),
      newIdx = idx + delta

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.order = gsap.utils.wrap(0, slides.length, i + newIdx)
    }

    fst = slides.find((s) => s.style.order == 0)

    for (const [k, v] of Object.entries(currProps)) {
      fst.style.setProperty(k, v)
    }

    if (!forward) {
      let snd = slides.find((s) => s.style.order == 1)
      if (snd) {
        for (const [k, v] of Object.entries(restProps)) {
          snd.style.setProperty(k, v)
        }
      }
    }

    prevClone = prev.cloneNode(true)
    prevClone.style.position = 'absolute'
    prevClone.style.willChange = 'transform'
    prev.parentNode.appendChild(prevClone)
    Flip.fit(prevClone, prevState)

    const defaults = { duration: 0.8, ease: 'power2.inOut' },
      wrapPos = { xPercent: -100, x: -gap } // start/end position of wrapping element

    tl = gsap.timeline({
      defaults,
      onComplete: () => {
        if (forward) {
          gsap.set(prev, restProps)
        } else {
          gsap.set(prev, currProps)
        }
        gsap.set(prev, { clearProps: 'opacity' })
        idx = newIdx
        prevClone.remove()
        moving = false
      },
    })
    tl.add(
      Flip.from(state, {
        absolute: true,
        ...defaults,
        targets: rest,
      }),
    )
    tl.set(prev, { opacity: 0 }, 0.02)

    if (forward) {
      tl.to(prevClone, wrapPos, 0)
    } else {
      tl.from(prevClone, wrapPos, 0)
    }
  }

  const obs = Observer.create({
    target: container,
    type: 'touch,pointer',
    onLeft: () => move(-1), // Swipe left = Next
    onRight: () => move(1), // Swipe right = Prev
    wheelSpeed: -1, // Reverses wheel direction if it feels "inverted"
    tolerance: 20, // Higher tolerance prevents accidental triggers
    lockAxis: true, // Prevents horizontal swipe while scrolling vertically
    capture: true, // Ensures it catches events early
    // ignore: 'button, a', // Don't trigger swipe when clicking buttons/links
  })

  function cleanup() {
    tl?.kill()
    prevClone?.remove()
    mm?.revert()
    obs?.kill()
  }

  if (signal) {
    if (signal.aborted) cleanup()
    else signal.addEventListener('abort', cleanup, { once: true })
  }

  return move
}
