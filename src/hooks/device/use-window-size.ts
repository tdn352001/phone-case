import { debounce } from 'lodash'
import { useEffect, useState } from 'react'

export interface WindowSize {
  width: number
  height: number
}

export const useWindowSize = (defaultSize?: WindowSize) => {
  const _defaultSize = defaultSize ?? {
    width: 1600,
    height: 960,
  }

  const [size, setSize] = useState(_defaultSize)

  useEffect(() => {
    const handleWindowResize = debounce(() => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }, 100)

    handleWindowResize()

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return size
}
