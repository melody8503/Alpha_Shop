import styles from 'components/Main/Steps/steps.module.scss'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const Form = ({currentStep}) => {
  return(
    <section className={`${styles.form__container} col col-12`}>
      <Step1 />
      <Step2 />
      <Step3 />
    </section>
  )
}

export default Form