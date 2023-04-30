import product1 from 'assets/images/product-1.jpg'
import product2 from 'assets/images/product-2.jpg'
import { ReactComponent as Minus} from 'assets/icons/minus.svg'
import { ReactComponent as Plus} from 'assets/icons/plus.svg'
import styles from './product.module.scss'

const Step2 = () => {
  return(
    <section className={`${styles.product__list} col col-12`} data-total-price="0">
      <div className={`${styles.product__container} col col-12`} data-count="0" data-price="3999">
        <img className={styles.img__container} src={product1} alt="Product1" />
        <div className={styles.product__info}>
          <div className={styles.product__name}>破壞補丁修身牛仔褲</div>
          <div className={styles.product__control__container}>
            <div className={styles.product__control}>
              <Minus />
              <span className={styles.product__count}>1</span>
              <Plus />
            </div>
          </div>
          <div className={styles.product__price}>$3,999</div>
        </div>
      </div>
      <div className={`${styles.product__container} col col-12`} data-count="0" data-price="1299">
        <img className={styles.img__container} src={product2} alt="Product2" />
        <div className={styles.product__info}>
          <div className={styles.product__name}>刷色直筒牛仔褲</div>
          <div className={styles.product__control__container}>
            <div className={styles.product__control}>
              <Minus />
              <span className="product__count">1</span>
              <Plus />
            </div>
          </div>
          <div className={styles.product__price}>$1,299</div>
        </div>
      </div>
    </section>
  )
}

export default Step2