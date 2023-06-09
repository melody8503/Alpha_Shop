import styles from 'components/Main/Steps/steps.module.scss'

import Step1 from 'components/Main/Steps/Step1'
import Step2 from 'components/Main/Steps/Step2'
import Step3 from 'components/Main/Steps/Step3'

const Form = ({currentStep, cartPayInfo, setCartPayInfo}) => {
  return(
    <section className={`${styles.form__container} col col-12`}>
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 cartPayInfo={cartPayInfo} setCartPayInfo={setCartPayInfo}/>}
    </section>
  )
}

export default Form