import styles from 'components/Main/Cart/cart.module.scss'
import CardProduct from 'components/Main/Cart/CartProduct'

const Cart = () => {
  return(
    <section className={`${styles.cart__container} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cart__title}>購物籃</h3>
        <CardProduct />
      <section className={`${styles.cart__info} shipping col col-12`}>
        <div className={styles.cart__text}>運費</div>
        <div className={styles.cart__price}>免費</div>
      </section>
      <section className={`${styles.cart__info} total col col-12`}>
        <div className={styles.cart__text}>小計</div>
        <div className={styles.cart__price}>$5,298</div>
      </section>
    </section>
  )
}

export default Cart
          