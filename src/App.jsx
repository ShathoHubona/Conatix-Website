import styles from "./style"

import { Navbar, Hero, Footer } from "./components"

const App = () => {
  return (
    <div className='bg-white w-full overflow-hidden flex flex-col min-h-screen'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-gray-900 ${styles.flexStart} flex-grow`}>        
          <Footer />
      </div>
    </div>
  )
}

export default App
