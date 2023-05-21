import styles from 'components/Main/Steps/stepProgress.module.scss'
import StepProgress from 'components/Main/Steps/StepProgress'
import Form from 'components/Main/Steps/Form'

const Register = ({currentStep, cartPayInfo, setCartPayInfo}) => {
  return(
    <section className={`${styles.register__container} col col-lg-6 col-sm-12`} data-phase={currentStep} data-total-price="0">
      <h2 className={`${styles.register__title} col col-12`}>結帳</h2>
      <StepProgress currentStep={currentStep} />
      <Form currentStep={currentStep} cartPayInfo={cartPayInfo} setCartPayInfo={setCartPayInfo} />     
    </section>
  )
}

export default Register
