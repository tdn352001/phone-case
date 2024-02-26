'use client'

import classNames from 'classnames/bind'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { forwardRef, useRef, useState } from 'react'
import UserActions from '~/app/(base)/_components/header/user-actions'
import Icon from '~/components/common/icon'
import { routers } from '~/configs/routers'
import { useDesktopScreen } from '~/hooks/device/use-desktop-screen'
import { useOnClickOutside } from '~/hooks/ui'
import styles from './navbar.module.scss'

const cx = classNames.bind(styles)

interface NavbarProps {
  className?: string | string[]
  show?: boolean
  onCloseNav?: () => void
}

export interface NavItem {
  id: number
  label: string
  link: string
  children?: Omit<NavItem, 'children' | 'id'>[]
}

const Navbar = ({ className, show, onCloseNav }: NavbarProps, ref: any) => {
  const [expandedId, setExpandedId] = useState<number>()
  const isDesktop = useDesktopScreen()

  const timeoutRef = useRef(0)

  const handleSetExpandedId = (id: number) => {
    window.clearTimeout(timeoutRef.current)

    if (isDesktop && expandedId && id !== expandedId) {
      setExpandedId(undefined)
      timeoutRef.current = window.setTimeout(() => {
        setExpandedId(id)
      }, 400)
    } else {
      setExpandedId(id === expandedId ? undefined : id)
    }
  }

  const handleHiddenExpandedItem = () => {
    setExpandedId(undefined)
    onCloseNav?.()
  }

  useOnClickOutside(
    ref,
    () => {
      setExpandedId(undefined)
    },
    {
      condition: !!expandedId && isDesktop,
    }
  )

  return (
    <nav className={cx('container', { show }, className)}>
      <div className={cx('inner', { show })} ref={ref}>
        <ul className={cx('list')}>
          {navs.map((nav, index) => {
            const selected = nav.id === expandedId
            const childrenTabIndex = selected ? undefined : -1

            return (
              <li key={index} className={cx('item')}>
                {nav.children ? (
                  <>
                    <button
                      className={cx('item-main', 'item-main--button', { selected })}
                      onClick={handleSetExpandedId.bind(this, nav.id)}
                    >
                      <span>{nav.label}</span>
                      <Icon name="ChevronDown" aria-hidden="true" />
                    </button>
                    <motion.div
                      className={cx('item-sub')}
                      animate={{
                        height: selected ? 'auto' : 0,
                        opacity: selected ? 1 : 0,
                      }}
                    >
                      <motion.div className={cx('item-sub-list')}>
                        {nav.children.map((child, index) => (
                          <Link
                            key={index}
                            className={cx('item-main', 'item-main--link')}
                            href={child.link}
                            tabIndex={childrenTabIndex}
                            onClick={handleHiddenExpandedItem}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    </motion.div>
                  </>
                ) : (
                  <Link
                    className={cx('item-main', 'item-main--link')}
                    href={nav.link}
                    onClick={handleHiddenExpandedItem}
                  >
                    {nav.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>

        <UserActions className={cx('user')} onCloseNav={onCloseNav} />
      </div>
    </nav>
  )
}

const navs: NavItem[] = [
  // {
  //   id: 1,
  //   label: "Valentine's Deal",
  //   link: '#',
  // },
  {
    id: 2,
    label: 'New',
    link: routers.new,
  },
  {
    id: 3,
    label: 'Phone Case',
    link: '#',
  },
  {
    id: 4,
    label: 'Customize',
    link: '#',
    children: [
      {
        label: 'Custom Your Case',
        link: '#',
      },
      {
        label: 'Design Inspo',
        link: '#',
      },
    ],
  },
  {
    id: 5,
    label: 'Collection',
    link: '#',
    children: [
      {
        label: '⋆₊⊹Furry Whimsy ⊹₊⋆',
        link: '#',
      },
      {
        label: '❀Classic Floral Pattern❀',
        link: '#',
      },
      {
        label: 'Influencer Designers',
        link: '#',
      },
    ],
  },
  {
    id: 6,
    label: 'Other Accessories',
    link: '#',
  },
  {
    id: 7,
    label: 'Tattoo',
    link: '#',
    children: [
      {
        label: 'SHOP ALL',
        link: '#',
      },
      {
        label: '2*2inch',
        link: '#',
      },
      {
        label: '2*4inch',
        link: '#',
      },
      {
        label: '4*4inch',
        link: '#',
      },
      {
        label: 'HOW TATTOO WORKS',
        link: '#',
      },
    ],
  },
]

export default forwardRef(Navbar)
