import styles from './App.module.css'
import { Header } from './Components/Header'
import { Tasks } from './Components/Tasks'

export function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Tasks />
      </div>
    </>
  )
    
}

