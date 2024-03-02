import { set } from 'lodash'
import React, { useEffect } from 'react'
import Icon from '~/components/common/icon'

const Share = () => {
  const [url, setUrl] = React.useState('')
  const [open, setOpen] = React.useState(false)

  useEffect(() => {
    setUrl(window.location.href)
  }, [])

  return (
    <div>
      <button>
        <Icon name="Share" />
        <span>Share</span>
      </button>

      {open && (
        <div>
          <p>{url}</p>
          <button>
            <Icon name="Copy" />
          </button>
        </div>
      )}
    </div>
  )
}

export default Share
