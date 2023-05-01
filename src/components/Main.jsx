import styles from 'components/Main.module.scss'
import Register from 'components/Main/Steps/Register'
import Cart from 'components/Main/Cart/Cart'
import ProgressControl from 'components/Main/Steps/ProgressControl'

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








    

      


    
