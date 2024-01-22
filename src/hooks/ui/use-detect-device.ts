// create hook to detect device: mobile, tablet, desktop

import { useEffect, useState } from 'react'

const MOBILE_MAX_WIDTH = 767
const TABLET_MAX_WIDTH = 1119

type Device = 'mobile' | 'tablet' | 'desktop'

export const useDetectDevice = () => {
  const [device, setDevice] = useState<Device>('desktop')
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window

      setIsMobile(innerWidth < 768)
      setIsTablet(innerWidth >= 768 && innerWidth < 1024)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { isMobile, isTablet }
}
