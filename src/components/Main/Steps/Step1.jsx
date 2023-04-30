import styles from './steps.module.scss'

const cities = [
  { id: '請選擇縣市', name: '請選擇縣市'},
  { id: 'KLU', name: '基隆市' },
  { id: 'TPH', name: '新北市' },
  { id: 'TPE', name: '臺北市' },
  { id: 'TYC', name: '桃園市' },
  { id: 'HSH', name: '新竹縣' },
  { id: 'HSC', name: '新竹市' },
  { id: 'MAC', name: '苗栗市' },
  { id: 'MAL', name: '苗栗縣' },
  { id: 'TXG', name: '臺中市' },
  { id: 'CWH', name: '彰化縣' },
  { id: 'CWS', name: '彰化市' },
  { id: 'NTC', name: '南投市' },
  { id: 'NTO', name: '南投縣' },
  { id: 'YLH', name: '雲林縣' },
  { id: 'CHY', name: '嘉義縣' },
  { id: 'CYI', name: '嘉義市' },
  { id: 'TNN', name: '臺南市' },
  { id: 'KHH', name: '高雄市' },
  { id: 'IUH', name: '屏東縣' },
  { id: 'PTS', name: '屏東市' },
  { id: 'ILN', name: '宜蘭縣' },
  { id: 'ILC', name: '宜蘭市' },
  { id: 'HWA', name: '花蓮縣' },
  { id: 'HWC', name: '花蓮市' },
  { id: 'TTC', name: '臺東市' },
  { id: 'TTT', name: '臺東縣' },
  { id: 'PEH', name: '澎湖縣' },
  { id: 'KMN', name: '金門縣' },
  { id: 'LNN', name: '連江縣' }
]

const Step1 = () => {
  return(
    <form className="col col-12" data-phase="address">
      <h3 className={styles.form__title}>寄送地址</h3>
      <section className="form-body col col-12">
        <div className={`${styles.input__container} col col-12`}>
          <div className={`${styles.input__group} input-w-lg-2 input-w-sm-s1`}>
            <div className={styles.input__label}>稱謂</div>
            <div className={styles.select__container}>
              <select defaultValue="mr">
                <option value="mr">先生</option>
                <option value="ms">女士</option>
                <option value="mx">不明</option>
              </select>
            </div>
          </div>
          <div className={`${styles.input__group} input-w-lg-4 input-w-sm-s2`}>
            <div className={styles.input__label}>姓名</div>
            <input type="text" placeholder="請輸入姓名" />
          </div>
        </div>
        <div className={`${styles.input__container} col col-12`}>
          <div className={`${styles.input__group} input-w-lg-3 input-w-sm-full`}>
            <div className={styles.input__label}>電話</div>
            <input type="tel" placeholder="請輸入行動電話" />
          </div>
          <div className={`${styles.input__group} input-w-lg-3 input-w-sm-full`}>
            <div className={styles.input__label}>Email</div>
            <input type="email" placeholder="請輸入電子郵件" />
          </div>
        </div>
        <div className={`${styles.input__container} col col-12`}>
          <div className={`${styles.input__group} input-w-lg-2 input-w-sm-full`}>
            <div className={styles.input__label}>縣市</div>
            <div className={styles.select__container}>
              <select defaultValue="" required>
                {cities.map( city => 
                  <option key={city.id} value={city.id}>{city.name}</option>
                )}
              </select>
            </div>
          </div>
          <div className={`${styles.input__group} input-w-lg-4 input-w-sm-full`}>
            <div className={styles.input__label}>地址</div>
            <input type="text" placeholder="請輸入地址" />
          </div>
        </div>
      </section>
    </form>
  )
}

export default Step1