import { useState, useContext } from 'react'
import Register from 'components/Main/Steps/Register'
import Cart from 'components/Main/Cart/Cart'
import ProgressControl from 'components/Main/Steps/ProgressControl'
import { CartPayContext } from 'components/CartPayContext.js';
import styles from 'components/Main.module.scss'

const Main = () => {
  // 步驟狀態
  const [currentStep, setCurrentStep] = useState(1)

  // CartPayInfo 狀態
  const cartPayInit = useContext(CartPayContext);
  const [cartPayInfo, setCartPayInfo] = useState(cartPayInit);

  // 下一頁
  const handleNextClick = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  // 上一頁
  const handlePreClick = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }
  
  // 確認訂單
  const handleSubmit = (e) => {
    const keyChart = {
      cardHolder: '持卡人姓名',
      cardNumber: '卡號',
      expireDate: '有效期限',
      ccvCode: 'CVC/CCV',
      totalAmount: '總金額(小計)'
    }
    if (currentStep === 3) {
      for (let [key, value] of Object.entries(cartPayInfo)) {
        console.log(`${keyChart[key]}: ${value}`);
      }
    }
  }

  return(
    <main className={styles.site__main}>
      <div className={styles.main__container}>
        <Register currentStep={currentStep} cartPayInfo={cartPayInfo} setCartPayInfo={setCartPayInfo} />
        <Cart cartPayInfo={cartPayInfo} setCartPayInfo={setCartPayInfo} />
        <ProgressControl 
          currentStep={currentStep} 
          handleNextClick={handleNextClick}
          handlePreClick={handlePreClick}
          handleSubmit={handleSubmit}
        />
      </div>
    </main>
  )
}

export default Main

