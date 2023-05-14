import { useState } from 'react'
import CartProduct from 'components/Main/Cart/CartProduct'
import styles from 'components/Main/Cart/cart.module.scss'

const Cart = () => {
  // 總金額狀態，建立在父層，透過子層來更新
  const [totalAmount, setTotalAmount] = useState(0)

  return(
    <section className={`${styles.cart__container} col col-lg-5 col-sm-12`}>
      <h3 className={styles.cart__title}>購物籃</h3>     
      <CartProduct totalAmount={totalAmount} setTotalAmount={setTotalAmount} />
      <section className={`${styles.cart__info} shipping col col-12`}>
        <div className={styles.cart__text}>運費</div>
        <div className={styles.cart__price}>免費</div>
      </section>
      <section className={`${styles.cart__info} total col col-12`}>
        <div className={styles.cart__text}>小計</div>
        <div className={styles.cart__price}>{totalAmount}</div>
      </section>
    </section>
  )
}

export default Cart
          