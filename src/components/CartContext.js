import { createContext } from 'react'
import product1 from 'assets/images/product-1.jpg'
import product2 from 'assets/images/product-2.jpg'

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

export const CartContext = createContext(productData)

