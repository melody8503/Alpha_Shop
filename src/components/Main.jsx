import { useState } from 'react'
import Register from 'components/Main/Steps/Register'
import Cart from 'components/Main/Cart/Cart'
import ProgressControl from 'components/Main/Steps/ProgressControl'
import styles from 'components/Main.module.scss'

const Main = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNextClick = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

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
          nextClick={handleNextClick}
          preClick={handlePreClick}
        />
      </div>
    </main>
  )
}

export default Main








    

      


    
