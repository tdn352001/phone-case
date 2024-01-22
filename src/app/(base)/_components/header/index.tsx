'use client'

import classNames from 'classnames/bind'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'
import Navbar from '~/app/(base)/_components/header/navbar'
import UserActions from '~/app/(base)/_components/header/user-actions'
import { Images } from '~/assets/images'
import IconButton from '~/components/common/buttons/icon-button'
import { routers } from '~/configs/routers'
import { useMobileScreen } from '~/hooks/device'
import { useOnClickOutside, usePreventScroll } from '~/hooks/ui'
import styles from './header.module.scss'

const cx = classNames.bind(styles)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobileScreen()

  const navRef = useRef<any>(null)
  const toggleRef = useRef<any>(null)
  usePreventScroll(isMenuOpen && isMobile)

  useOnClickOutside(
    navRef,
    () => {
      setIsMenuOpen(false)
    },
    {
      condition: isMenuOpen,
      exceptTarget: toggleRef,
    }
  )

  return (
    <header className={cx('header')}>
      <div className={cx('inner')}>
        <IconButton
          className={cx('menu-icon')}
          ref={toggleRef}
          icon={isMenuOpen ? 'X' : 'Menu'}
          onClick={setIsMenuOpen.bind(this, !isMenuOpen)}
        />
        <UserActions />
        <Link href={routers.home}>
          <Image src={Images.logoWebp} alt="Logo" />
        </Link>
        <IconButton icon="Search" />
      </div>
      <Navbar show={isMenuOpen} ref={navRef} />
    </header>
  )
}

export default Header
