import { ReactComponent as Toggle} from 'assets/icons/toggle.svg'
import { ReactComponent as Search} from 'assets/icons/search.svg'
import { ReactComponent as Cart} from 'assets/icons/cart.svg'
import { ReactComponent as Moon} from 'assets/icons/moon.svg'
// import { ReactComponent as Sun} from 'assets/icons/sun.svg'
import { ReactComponent as Logo} from 'assets/icons/logo.svg'
import styles from 'components/Header/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.site__header}>
      <div className={`${styles.header__container} mx-auto`}>

        <input id={styles.navbar__toggle} className={styles.navbar__toggle} type="checkbox" />
        <label for={styles.navbar__toggle} className={styles.burger__container}>
          <Toggle className={`${styles.icon__toggle} cursor-point`} />
        </label>

        <nav className={styles.navbar__menu}>
          <ul className={`${styles.nav__list} ${styles.site__menu__list} mr-auto`}>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="/men">男款</a>
            </li>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="/women">女款</a>
            </li>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="/news">最新消息</a>
            </li>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="/custom">客製商品</a>
            </li>
            <li className={styles.nav__item}>
              <a className={styles.nav__link} href="/contact">聯絡我們</a>
            </li>
          </ul>
          <ul className={`${styles.nav__list} ${styles.site__action__list}`}>
            <li className={styles.nav__item}>
              <Search className={`${styles.nav__icon} cursor-point`} />
            </li>
            <li className={styles.nav__item}>
              <Cart className={`${styles.nav__icon} cursor-point`} />   
            </li>
            <li id="theme-toggle" className={styles.nav__item}>
              <Moon className={`${styles.nav__icon} cursor-point`} />    
              {/* <Sun className={`${styles.nav__icon} cursor-point`} />          */}
            </li>
          </ul>
        </nav>
        <a className={styles.header__logo__container} href="/">
          <Logo className="cursor-point" />
        </a>
      </div>
    </header>
  )
}

export default Header