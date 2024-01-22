'use client'

import { RefObject, useEffect, useRef } from 'react'

interface Options {
  container?: RefObject<HTMLElement>
}

export const usePreventScroll = (enable?: boolean, options?: Options) => {
  const selectedContainerRef = options ? options.container : undefined

  const overflowStyle = useRef<any>()
  const scrollY = useRef<any>()

  useEffect(() => {
    const container = selectedContainerRef?.current || document.body
    overflowStyle.current = container.style.overflow
    scrollY.current = container.scrollTop
  }, [selectedContainerRef])

  useEffect(() => {
    const container = selectedContainerRef?.current || document.body

    if (enable) {
      overflowStyle.current = container.style.overflow
      container.style.overflow = 'hidden'
      container.scrollTop = scrollY.current
    } else {
      container.style.overflow = overflowStyle.current
    }
  }, [enable, selectedContainerRef])
}
