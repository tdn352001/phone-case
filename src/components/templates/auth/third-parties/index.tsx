import classNames from 'classnames/bind'
import Google from '~/components/common/svgs/google'
import styles from './third-parties.module.scss'

const cx = classNames.bind(styles)

const ThirdParties = () => {
  return (
    <div className={cx('container')}>
      <div className={cx('separate')}>OR</div>
      <div className={cx('main')}>
        <button className={cx('btn-login')}>
          <Google />
          <span>Google</span>
        </button>
      </div>
    </div>
  )
}

export default ThirdParties
