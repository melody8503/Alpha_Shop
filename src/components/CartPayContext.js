import { createContext } from 'react'

const cartPayInit = {
  cardHolder: '',
  cardNumber: 0,
  expireDate: '',
  ccvCode: 0,
  totalAmount: 0
}

export const CartPayContext = createContext(cartPayInit)
