import classNames from 'classnames/bind'
import { PropsWithChildren } from 'react'
import Footer from '~/app/(base)/_components/footer'
import Header from './_components/header'
import styles from './layout.module.scss'

const cx = classNames.bind(styles)

const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className={cx('container')}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default BaseLayout
