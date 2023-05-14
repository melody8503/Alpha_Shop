import { ReactComponent as CheckedIcon} from 'assets/icons/pg-complete.svg'
import styles from 'components/Main/Steps/stepProgress.module.scss'

const Step = ({currentStep, phase, number, label}) => {
  return(
    <span className={styles.progress__group} data-phase={phase}>
      <span className={styles.progress__icon}>
        <span className={styles.progress__text}>
          {currentStep > number ? <CheckedIcon className={`${styles.checked__icon} cursor-point`} /> : number}
        </span>
      </span>
      <span className={styles.progress__label}>{label}</span>
    </span>
  )
}

const StepProgress = ({currentStep}) => {
  return(
    <section className={`${styles.progress__container} col col-12`}>
      <Step 
        currentStep={currentStep}
        phase="address"
        number={1}
        label="寄送地址"
      />

      <span className={styles.progress__bar} data-order="1"></span>

      <Step 
        currentStep={currentStep}
        phase="shipping"
        number={2}
        label="運送方式"
      />

      <span className={styles.progress__bar} data-order="2"></span>

      <Step 
        currentStep={currentStep}
        phase="credit-card"
        number={3}
        label="付款資訊"
      />
    </section>
  )
}

export default StepProgress
