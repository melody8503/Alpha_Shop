import styles from 'components/Main/Steps/steps.module.scss'

const Step2 = () => {
  return(
    <form className="col col-12" data-phase="credit-card">
      <h3 className={styles.form__title}>付款資訊</h3>
      <section className="form-body col col-12">
        <div className="col col-12">
          <div className={`${styles.input__group} input-w-lg-4 input-w-sm-full`}>
            <div className={styles.input__label}>持卡人姓名</div>
            <input type="text" placeholder="John Doe" />
          </div>
        </div>
        <div className="col col-12">
          <div className={`${styles.input__group} input-w-lg-4 input-w-sm-full`}>
            <div className={styles.input__label}>卡號</div>
            <input type="text" placeholder="1111 2222 3333 4444" />
          </div>
        </div>
        <div className={`${styles.input__container} col col-12`}>
          <div className={`${styles.input__group} input-w-lg-3 input-w-sm-s3`}>
            <div className={styles.input__label}>有效期限</div>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div className={`${styles.input__group} input-w-lg-3 input-w-sm-s3`}>
            <div className={styles.input__label}>CVC / CCV</div>
            <input type="text" placeholder="123" />
          </div>
        </div>
      </section>
    </form>
  )
}

export default Step2