'use client'
import React from 'react'
import BottomNav from '~/modules/customize-case/bottom-nav'
import Editor from '~/modules/customize-case/editor'
import Layers from '~/modules/customize-case/layers'
import TopBar from '~/modules/customize-case/top-bar'
import classNames from 'classnames/bind'
import styles from './customize-case.module.scss'
import Templates from '~/modules/customize-case/templates'

const cx = classNames.bind(styles)

const CustomizeCasePageContent = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('inner')}>
        <Layers />
        <div className={cx('main')}>
          <TopBar />
          <Editor />
          <BottomNav />
        </div>
        <Templates />
      </div>
    </div>
  )
}

export default CustomizeCasePageContent
