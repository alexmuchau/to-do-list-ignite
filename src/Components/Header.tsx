import styles from './Header.module.css'

import todoLogo from "../assets/todo-logo.svg"

export function Header() {
  return(
    <header className={styles.header}>
      <div className={styles.todoLogo}>
        <img src={todoLogo} alt="todo list logo" />
      </div>
    </header>
  )
}

