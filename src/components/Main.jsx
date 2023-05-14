import { useState } from 'react'
import Register from 'components/Main/Steps/Register'
import Cart from 'components/Main/Cart/Cart'
import ProgressControl from 'components/Main/Steps/ProgressControl'
import styles from 'components/Main.module.scss'

const Main = () => {
  // 步驟狀態
  const [currentStep, setCurrentStep] = useState(1)

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

  return(
    <main className={styles.site__main}>
      <div className={styles.main__container}>
        <Register currentStep={currentStep} />
        <Cart />
        <ProgressControl 
          currentStep={currentStep} 
          handleNextClick={handleNextClick}
          handlePreClick={handlePreClick}
        />
      </div>
    </main>
  )
}

export default Main








    

      


    
