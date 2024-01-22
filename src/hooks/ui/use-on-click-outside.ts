import { RefObject, useEffect } from 'react'

type Event = MouseEvent | TouchEvent | KeyboardEvent

type UseOnClickOutSideOptions<R extends HTMLElement = HTMLElement> = {
  rootRef?: RefObject<R>
  escKey?: boolean
  spaceKey?: boolean
  enterKey?: boolean
  condition?: boolean | (() => boolean)
  exceptTarget?: RefObject<HTMLElement>[] | RefObject<HTMLElement>
}

export const useOnClickOutside = <T extends HTMLElement = HTMLElement, R extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: Event) => void,
  options?: UseOnClickOutSideOptions<R>
) => {
  let condition = options?.condition ?? true
  if (typeof condition === 'function') {
    condition = condition()
  }

  const escKey = options?.escKey ?? true
  const spaceKey = options?.spaceKey ?? true
  const enterKey = options?.enterKey ?? true
  const rootRef = options?.rootRef
  const exceptTarget = options?.exceptTarget

  useEffect(() => {
    const element = ref?.current
    if (!condition || !element) {
      return
    }

    const handleClick = (e: Event) => {
      const target = e.target as Node
      if (!element.contains(target)) {
        if (exceptTarget) {
          let isExcept = false
          if (Array.isArray(exceptTarget)) {
            isExcept = exceptTarget.some(
              (ref) => ref && ref.current && (ref.current === target || ref.current.contains(target))
            )
          } else {
            isExcept = exceptTarget.current === target || exceptTarget.current?.contains(target) || false
          }

          if (isExcept) {
            return
          }
        }
        handler(e)
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (escKey && e.code === 'Escape') {
        handler(e)
        return
      }

      if (!element.matches(':focus-within')) {
        const target = e.target as Node
        if (exceptTarget) {
          let isExcept = false
          if (Array.isArray(exceptTarget)) {
            isExcept = exceptTarget.some(
              (ref) => ref && ref.current && (ref.current === target || ref.current.contains(target))
            )
          } else {
            isExcept = exceptTarget.current === target || exceptTarget.current?.contains(target) || false
          }

          if (isExcept) {
            return
          }
        }

        if (spaceKey && e.code === 'Space') {
          handler(e)
          return
        }
        if (enterKey && e.code === 'Enter') {
          handler(e)
          return
        }
      }
    }

    const root = rootRef?.current

    if (root) {
      root.addEventListener('mousedown', handleClick)
      root.addEventListener('touchstart', handleClick)
      root.addEventListener('keydown', handleKeyDown)

      return () => {
        root.removeEventListener('mousedown', handleClick)
        root.removeEventListener('touchstart', handleClick)
        root.removeEventListener('keydown', handleKeyDown)
      }
    }

    document.addEventListener('mousedown', handleClick)
    document.addEventListener('touchstart', handleClick)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('touchstart', handleClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [condition, ref, handler, escKey, spaceKey, enterKey, rootRef, exceptTarget])
}
