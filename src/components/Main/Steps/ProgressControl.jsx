import { ReactComponent as RightArrow} from 'assets/icons/right-arrow.svg'
import { ReactComponent as LeftArrow} from 'assets/icons/right-arrow.svg'
import styles from 'components/Main/Steps/stepProgress.module.scss'

const NextStep = ({handleNextClick}) => {
  return (
    <button className={`${styles.button__next} cursor-point`} onClick={handleNextClick}>
      下一步
      <RightArrow />
    </button>
  )
}

const PreStep = ({handlePreClick}) => {
  return (
    <button className={`${styles.button__prev} cursor-point`} onClick={handlePreClick}>
      <LeftArrow />
      上一步
    </button>
  )
}

const ProgressControl = ({currentStep, handleNextClick, handlePreClick}) => {
  return(
    <section className={`${styles.progress__control__container} col col-lg-6 col-sm-12`}>
      {currentStep === 1 && (
        <section className={`${styles.button__group} col col-12`} data-phase="address">
          <NextStep handleNextClick={handleNextClick} />
        </section>
      )}
      
      {currentStep === 2 && (
        <section className={`${styles.button__group} col col-12`} data-phase="shipping">
          <PreStep handlePreClick={handlePreClick} />
          <NextStep handleNextClick={handleNextClick} />
        </section>
      )}

      {currentStep === 3 && (
        <section className={`${styles.button__group} col col-12`} data-phase="credit-card">
          <PreStep handlePreClick={handlePreClick} />
          <button className={`${styles.button__next} cursor-point`}>
            確認下單
          </button>
        </section>
      )}
    </section>
  )
}

export default ProgressControl