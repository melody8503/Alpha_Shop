import { ReactComponent as RightArrow} from 'assets/icons/right-arrow.svg'
import { ReactComponent as LeftArrow} from 'assets/icons/right-arrow.svg'
import styles from './stepProgress.module.scss'

const Step1 = () => {
  return(
    <section className={`${styles.progress__control__container} col col-lg-6 col-sm-12`}>
      <section className={`${styles.button__group} col col-12`} data-phase="address">
        <button className={styles.button__next}>
          下一步
          <RightArrow className="cursor-point" />
        </button>
      </section>
      <section className={`${styles.button__group} col col-12`} data-phase="shipping">
        <button className={styles.button__prev}>
          <LeftArrow className="cursor-point" />
          上一步
        </button>
        <button className={styles.button__next}>
          下一步
          <RightArrow className="cursor-point" />
        </button>
      </section>
      <section className={`${styles.button__group} col col-12`} data-phase="credit-card">
        <button className={styles.button__prev}>
          <LeftArrow className="cursor-point" />
          上一步
        </button>
        <button className={styles.button__next}>
          確認下單
        </button>
      </section>
    </section>
  )
}

export default Step1