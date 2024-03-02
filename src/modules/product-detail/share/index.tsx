import classNames from 'classnames/bind'
import React, { useEffect } from 'react'
import Icon from '~/components/common/icon'
import styles from './share.module.scss'
import TextButton from '~/components/common/buttons/text-button'
import IconButton from '~/components/common/buttons/icon-button'

const cx = classNames.bind(styles)

const Share = () => {
  const [url, setUrl] = React.useState('')
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  return (
    <div className={cx('container')}>
      <TextButton
        className={cx('button')}
        icon="Share"
        iconOptions={{ size: 16 }}
        onClick={setOpen.bind(this, !open)}
      >
        Share
      </TextButton>

      {open && (
        <div className={cx('share')}>
          <p>{url}</p>
          <IconButton icon="Copy" />
        </div>
      )}
    </div>
  )
}

export default Share
