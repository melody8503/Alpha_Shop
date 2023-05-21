import { createContext } from 'react'

const cardInfo = {
  cardHolderName: '',
  cardNumber: 0,
  expirationDate: '',
  ccvCode: 0,
  totalAmount: 0
}

export const FormContext = createContext(cardInfo)