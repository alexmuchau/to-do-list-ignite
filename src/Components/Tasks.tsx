import { TaskList } from './TaskList'
import styles from './Tasks.module.css'

export function Tasks() {
  return(
    <div className={styles.container} >
      <header>
        <div className={styles.counterContainer} >
          <h4 className={styles.createdTitle}>Tarefas criadas</h4>
          <h4 className={styles.counter} >0</h4>
        </div>
        <div className={styles.counterContainer} >
          <h4 className={styles.concludedTitle}>Concluídas</h4>
          <h4 className={styles.counter}>2 de 5</h4>
        </div>
      </header>
      <main className={styles.taskListContainer} >
        <TaskList/>
      </main>
    </div>
  )
}