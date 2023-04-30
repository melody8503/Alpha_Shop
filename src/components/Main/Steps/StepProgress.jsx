import { ReactComponent as CheckedIcon} from 'assets/icons/pg-complete.svg'
import styles from './stepProgress.module.scss'

const Step = ({phase, number, label}) => {
  return(
    <span className={styles.progress__group} data-phase={phase}>
      <span className={styles.progress__icon}>
        <span className={styles.progress__text}>{number}</span>
        {/* <CheckedIcon className={`${styles.checked__icon} cursor-point`} /> */}
      </span>
      <span className={styles.progress__label}>{label}</span>
    </span>
  )
}

const StepProgress = () => {
  return(
    <section className={`${styles.progress__container} col col-12`}>
      <Step 
        phase="address"
        number="1"
        label="寄送地址"
      />

      <span className={styles.progress__bar} data-order="1"></span>

      <Step 
        phase="shipping"
        number="2"
        label="運送方式"
      />

      <span className={styles.progress__bar} data-order="2"></span>

      <Step 
        phase="credit-card"
        number="3"
        label="付款資訊"
      />
    </section>
  )
}

export default StepProgress
