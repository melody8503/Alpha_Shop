import styles from './stepProgress.module.scss'
import StepProgress from './StepProgress'
import Form from './Form'


const Register = () => {
  return(
    <section className={`${styles.register__container} col col-lg-6 col-sm-12`} data-phase="1" data-total-price="0">
      <h2 className={`${styles.register__title} col col-12`}>結帳</h2>
      <StepProgress />
      <Form />     
    </section>
  )
}

export default Register
