import styles from './Main.module.scss'
import Register from './Main/Steps/Register'
import Cart from './Main/Cart/Cart'
import ProgressControl from './Main/Steps/ProgressControl'

const Main = () => {
  return(
    <main className={styles.site__main}>
      <div className={styles.main__container}>
        <Register />
        <Cart />
        <ProgressControl />
      </div>
    </main>
  )
}

export default Main








    

      


    
