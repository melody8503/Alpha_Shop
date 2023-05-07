import { ReactComponent as Logo} from 'assets/icons/logo.svg'
import { ReactComponent as Facebook} from 'assets/icons/facebook.svg'
import { ReactComponent as Instagram} from 'assets/icons/instagram.svg'
import { ReactComponent as Whatsapp} from 'assets/icons/whatsapp.svg'
import styles from 'components/Footer/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.site__footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logo__container}>
          <Logo className={styles.icon__logo} />
        </div>
        <section className={styles.footer__section}>
          <h2 className={styles.section__title}>客戶服務</h2>
          <div className={styles.section__content}>
            <a className={styles.page__link} href="/shipping-information">運送說明</a>
            <a className={styles.page__link} href="/return-and-exchange-policy">退換貨相關</a>
            <a className={styles.page__link} href="/payment-details">付款資訊</a>
            <a className={styles.page__link} href="/faq">FAQ</a>
          </div>
        </section>
        <section className={styles.footer__section}>
          <h2 className={styles.section__title}>關於我們</h2>
          <div className={styles.section__content}>
            <a className={styles.page__link} href="/story">品牌故事</a>
            <a className={styles.page__link} href="/contact">媒體聯繫</a>
            <a className={styles.page__link} href="/press-kit">Press kit</a>
          </div>
        </section>
        <section className={styles.footer__section}>
          <h2 className={styles.section__title}>資訊</h2>
          <div className={styles.section__content}>
            <a className={styles.page__link} href="/privacy-policy">隱私權政策</a>
            <a className={styles.page__link} href="/cookie">Cookie</a>
            <a className={styles.page__link} href="/gdpr">GDPR</a>
          </div>
        </section>
        <section className={styles.footer__section}>
          <h2 className={styles.section__title}>追蹤 ALPHA Shop</h2>
          <div className={styles.section__content}>
            <div className={styles.tel__info}>+886 02123-45678</div>
            <div className={styles.social__icon__group}>
              <Facebook className={`${styles.social__icon} cursor-point`} />
              <Instagram className={`${styles.social__icon} cursor-point`} />
              <Whatsapp className={`${styles.social__icon} cursor-point`} />
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer