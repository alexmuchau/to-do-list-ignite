import styles from './Header.module.css'

import todoLogo from "../assets/todo-logo.svg"
import { PlusCircle } from 'phosphor-react'

export function Header() {
  return(
    <header className={styles.header}>
      <img src={todoLogo} alt="todo list logo" />
      <div className={styles.addInput} >
        <input type="text" placeholder="Adicione uma nova Tarefa" />
        <button type="submit">
          Criar
          <PlusCircle size={20}/>
        </button>
      </div>
    </header>
  )
}