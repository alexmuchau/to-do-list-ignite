import styles from './App.module.css'
import { Header } from './Components/Header'
import { Tasks } from './Components/Tasks'

export function App() {
  return (
    <div className={styles.container} >
      <Header />
      <div className={styles.tasksContainer}>
        <Tasks />
      </div>
    </div>
  )
    
}

