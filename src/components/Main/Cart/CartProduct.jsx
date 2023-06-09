import { useState, useContext } from 'react'
import { CartContext } from 'components/CartContext.js';
import { ReactComponent as Minus} from 'assets/icons/minus.svg'
import { ReactComponent as Plus} from 'assets/icons/plus.svg'
import styles from 'components/Main/Cart/cartProduct.module.scss'

const ProductList = ({id, img, name, price, totalAmount, setTotalAmount, priceFormat, cartPayInfo, setCartPayInfo}) => {

  // 更新總金額
  const updateProductTotal = (price) => {
    // 判斷當前總金額+商品價錢來更新
    if ((totalAmount + price) >= 0) {
      setTotalAmount(totalAmount + price)

      setCartPayInfo({
        ...cartPayInfo,
        totalAmount: totalAmount + price
      })

    } else {
      return setTotalAmount(0)
    }
  }

  // 商品數量狀態  
  const [count, setCount] = useState(0)

  // 透過數量增減，傳入商品價錢更新總金額
  const handleAddClick = () => {
    setCount(count + 1)
    updateProductTotal(price)
  }

  const handleDeleteClick = () => {
    if (count > 0) {
      setCount(count - 1)
      updateProductTotal(-price)
    }
  }

  return (
    <div className={`${styles.product__container} col col-12`} data-count={count} data-price={price} key={id}>
      <img className={styles.img__container} src={img} alt={name} />
      <div className={styles.product__info}>
        <div className={styles.product__name}>{name}</div>
        <div className={styles.product__control__container}>
          <div className={styles.product__control}>
            <Minus className="cursor-point" onClick={handleDeleteClick} />
            <span className={styles.product__count}>{count}</span>
            <Plus className="cursor-point" onClick={handleAddClick} />
          </div>
        </div>
        <div className={styles.product__price}>${priceFormat(price)}</div>
      </div>
    </div>
  )
}

const CartProduct = ({totalAmount, setTotalAmount, priceFormat, cartPayInfo, setCartPayInfo}) => {
  const productData = useContext(CartContext)

  return(
    <section className={`${styles.product__list} col col-12`} data-total-price={"0"}>
      <CartContext.Provider value={productData}>
        {productData.map( product =>
          <ProductList {...product} key={product.id} totalAmount={totalAmount} setTotalAmount={setTotalAmount} priceFormat={priceFormat} cartPayInfo={cartPayInfo} setCartPayInfo={setCartPayInfo} />
          ) 
        }
      </CartContext.Provider>
    </section>
  )
}

export default CartProduct
