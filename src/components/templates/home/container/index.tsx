import React from 'react'
import classNames from 'classnames/bind'
import styles from './container.module.scss'
import PageContainer from '~/components/templates/page/container'

const cx = classNames.bind(styles)

type HomeSectionContainerProps = JSX.IntrinsicElements['div']

const HomeSectionContainer = ({ className, ...props }: HomeSectionContainerProps) => {
  return <PageContainer className={cx('container', className)} as="section" {...props} />
}

export default HomeSectionContainer
