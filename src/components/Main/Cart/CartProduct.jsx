import product1 from 'assets/images/product-1.jpg'
import product2 from 'assets/images/product-2.jpg'
import { ReactComponent as Minus} from 'assets/icons/minus.svg'
import { ReactComponent as Plus} from 'assets/icons/plus.svg'
import styles from 'components/Main/Cart/cartProduct.module.scss'

const productData = [
  {
    id: 1,
    img: product1,
    name:'破壞補丁修身牛仔褲',
    price: 3999,
    quantity: 1
  },
  {
    id: 2,
    img: product2,
    name: '刷色直筒牛仔褲',
    price: 1299,
    quantity: 1
  }
]

// 千分位分隔符號
const formatPrice = ( number =>
  number.toLocaleString('en-US')
)

const ProductList = ({id, img, name, price, quantity}) => {
  return (
    <div className={`${styles.product__container} col col-12`} data-count={quantity} data-price={price} key={id}>
      <img className={styles.img__container} src={img} alt={name} />
      <div className={styles.product__info}>
        <div className={styles.product__name}>{name}</div>
        <div className={styles.product__control__container}>
          <div className={styles.product__control}>
            <Minus />
            <span className={styles.product__count}>{quantity}</span>
            <Plus />
          </div>
        </div>
        <div className={styles.product__price}>${formatPrice(price)}</div>
      </div>
    </div>
  )
}

const CartProduct = () => {
  return(
    <section className={`${styles.product__list} col col-12`} data-total-price="0"> 
      {productData.map( product =>
        <ProductList {...product} key={product.id} />
        )  
      }
    </section>
  )
}

export default CartProduct
