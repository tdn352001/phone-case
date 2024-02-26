import React from 'react'
import classNames from 'classnames/bind'
import styles from './controls.module.scss'
import IconButton from '~/components/common/buttons/icon-button'

const cx = classNames.bind(styles)

interface ControlsProps {
  className?: string
  step?: number
  total?: number
  onNextStep?: () => void
  onPrevStep?: () => void
  pauseControl?: boolean
  isPlaying?: boolean
  onPlayChange?: () => void
  separator?: boolean
}

const Controls = ({
  className,
  separator,
  step,
  total,
  onNextStep,
  onPrevStep,
  pauseControl,
  isPlaying,
  onPlayChange,
}: ControlsProps) => {
  return (
    <div className={cx('controls', { separator }, className)}>
      <IconButton icon="ChevronLeft" iconOptions={{ size: 12 }} onClick={onPrevStep} />
      <span className={cx('progress')}>
        <span className={cx('step')}>{step}</span> / {total}
      </span>
      <IconButton icon="ChevronRight" iconOptions={{ size: 12 }} onClick={onNextStep} />
      {pauseControl && (
        <IconButton className={cx('btn-playing')} onClick={onPlayChange}>
          {isPlaying ? (
            <svg
              width="8"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              focusable="false"
              aria-hidden="true"
            >
              <path
                d="M1.2 0.75C0.813401 0.75 0.5 0.985051 0.5 1.275V10.725C0.5 11.0149 0.813401 11.25 1.2 11.25C1.5866 11.25 1.9 11.0149 1.9 10.725V1.275C1.9 0.985051 1.5866 0.75 1.2 0.75Z"
                fill="currentColor"
                fillOpacity={0.9}
              ></path>
              <path
                d="M6.8 0.75C6.4134 0.75 6.1 0.985051 6.1 1.275V10.725C6.1 11.0149 6.4134 11.25 6.8 11.25C7.1866 11.25 7.5 11.0149 7.5 10.725V1.275C7.5 0.985051 7.1866 0.75 6.8 0.75Z"
                fill="currentColor"
                fillOpacity={0.9}
              ></path>
            </svg>
          ) : (
            <svg
              width="8"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              fill="none"
              viewBox="0 0 10 14"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.48177 0.814643C0.81532 0.448245 0 0.930414 0 1.69094V12.2081C0 12.991 0.858787 13.4702 1.52503 13.0592L10.5398 7.49813C11.1918 7.09588 11.1679 6.13985 10.4965 5.77075L1.48177 0.814643Z"
                fill="currentColor"
                fillOpacity={0.9}
              ></path>
            </svg>
          )}
        </IconButton>
      )}
    </div>
  )
}

export default Controls
