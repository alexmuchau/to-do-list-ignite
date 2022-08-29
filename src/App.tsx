import styles from './App.module.css'
import { Header } from './Components/Header'
import { Tasks } from './Components/Tasks'



export function App() {
  return (
    <div className={styles.container} >
      <Header />
      <main className={styles.tasksContainer} >
        <Tasks />
      </main>
    </div>
  )
    
}

