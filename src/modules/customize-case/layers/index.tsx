import React from 'react'
import { useDeviceType } from '~/hooks/device'
import { useAppSelector } from '~/hooks/redux'
import { customizeSelectors } from '~/store/slices/customize'

const elements = [
  {
    id: 1,
    name: 'Layer 1',
    type: 'text',
    content: 'Hello World',
    color: 'red',
    fontSize: 16,
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: 2,
    name: 'Layer 2',
    type: 'image',
    content: 'https://via.placeholder.com/150',
    position: {
      x: 0,
      y: 0,
    },
  },
]

const Layers = () => {
  const { isDesktop } = useDeviceType()
  const isShowingModal = useAppSelector(customizeSelectors.isLayersModal)

  const isShowing = isDesktop || isShowingModal

  if (!isShowing) return null

  return <div></div>
}

export default Layers
