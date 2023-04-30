import styles from 'components/Main/Steps/steps.module.scss'

const Step2 = () => {
  return(
    <form className="col col-12" data-phase="shipping">
      <h3 className={styles.form__title}>運送方式</h3>
      <section className="form-body col col-12">
        <label className={`${styles.radio__group} col col-12`} data-price="0">
          <input id="shipping-standard" type="radio" name="shipping" defaultChecked/>
          <div className={styles.radio__info}>
            <div className={`${styles.radio__spacing} col col-12`}>
              <div className={styles.radio__text}>標準運送</div>
              <div className={styles.radio__price}>免費</div>
            </div>
            <div className={`${styles.radio__period} col col-12`}>約 3~7 個工作天</div>
          </div>
          <div className={styles.radio__box__border}></div>
        </label>
        <label className={`${styles.radio__group} col col-12`} data-price="500">
          <input id="shipping-dhl" type="radio" name="shipping" />
          <div className={styles.radio__info}>
            <div className={`${styles.radio__spacing} col col-12`}>
              <div className={styles.radio__text}>DHL 貨運</div>
              <div className={styles.radio__price}>$500</div>
            </div>
            <div className={`${styles.radio__period} col col-12`}>48 小時內送達</div>
          </div>
          <div className={styles.radio__box__border}></div>
        </label>
      </section>
    </form>
  )
}

export default Step2