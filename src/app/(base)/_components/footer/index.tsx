import classNames from 'classnames/bind'
import Link from 'next/link'
import Icon from '~/components/common/icon'
import Facebook from '~/components/common/svgs/facebook'
import Instagram from '~/components/common/svgs/instagram'
import Pinterest from '~/components/common/svgs/pinterest'
import Shop from '~/components/common/svgs/shop'
import Tiktok from '~/components/common/svgs/tiktok'
import Twitter from '~/components/common/svgs/twitter'
import Youtube from '~/components/common/svgs/youtube'
import styles from './footer.module.scss'

const cx = classNames.bind(styles)

const Footer = () => {
  return (
    <footer className={cx('footer', 'color-inverse')}>
      <nav className={cx('nav')}>
        <div className={cx('nav-list')}>
          {navList.map((item, index) => (
            <div key={index} className={cx('nav-group')}>
              {item.title && <h2 className={cx('nav-title')}>{item.title}</h2>}
              {item.links.map((item, index) => (
                <Link key={index} className={cx('nav-link')} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className={cx('socials')}>
          <button className={cx('btn-follow')}>
            <Icon name="Heart" size={16} />
            <span>Follow on</span>
            <Shop />
          </button>

          <div className={cx('socials-list')}>
            {socials.map((item, index) => (
              <Link key={index} className={cx('socials-item')} href={item.href} aria-label={item.label}>
                {<item.icon />}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </footer>
  )
}

const navList = [
  {
    title: 'About',
    links: [
      {
        label: 'About Us',
        href: '#',
      },
      {
        label: 'Sustainability',
        href: '#',
      },
      {
        label: 'Customer Review',
        href: '#',
      },
    ],
  },
  {
    title: 'Brand',
    links: [
      {
        label: 'Affiliate Program',
        href: '#',
      },
      {
        label: 'PR/Collab',
        href: '#',
      },
      {
        label: 'Artist Collab',
        href: '#',
      },
    ],
  },
  {
    title: 'Help',
    links: [
      {
        label: 'Need Help',
        href: '#',
      },
      {
        label: 'FAQ',
        href: '#',
      },
      {
        label: '180 Day Guarantee',
        href: '#',
      },
    ],
  },
  {
    links: [
      {
        label: 'Shipping Policy',
        href: '#',
      },
      {
        label: 'Return Policy',
        href: '#',
      },
    ],
  },
]

const socials = [
  {
    href: '#',
    label: 'Facebook',
    icon: Facebook,
  },
  {
    href: '#',
    label: 'Instagram',
    icon: Instagram,
  },
  {
    href: '#',
    label: 'Youtube',
    icon: Youtube,
  },
  {
    href: '#',
    label: 'Tiktok',
    icon: Tiktok,
  },
  {
    href: '#',
    label: 'Twitter',
    icon: Twitter,
  },
  {
    href: '#',
    label: 'Pinterest',
    icon: Pinterest,
  },
]

export default Footer
