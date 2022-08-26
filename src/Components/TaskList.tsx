import styles from './TaskList.module.css'
import { Trash, Check } from 'phosphor-react'

export function TaskList() {
  return(
    <ul className={styles.ulContainer}>
      <li>
        <div>
          <button type="button">
            <Check className={styles.check} size={12} />
          </button>
          <p>Que vai ta escrito muita coisa Que vai ta escrito muita coisa Que vai ta escrito muita coisa </p>
        </div>
        <Trash className={styles.trash} size={16} />
      </li>
      <li>
        <div>
          <button type="button">
            <Check className={styles.check} size={12} />
          </button>
          <p>Que vai ta escrito muita coisa Que vai ta escrito muita coisa Que vai ta escrito muita coisa </p>
        </div>
        <Trash className={styles.trash} size={16} />
      </li>
      <li>
        <div>
          <button type="button">
            <Check className={styles.check} size={12} />
          </button>
          <p>Que vai ta escrito muita coisa Que vai ta escrito muita coisa Que vai ta escrito muita coisa </p>
        </div>
        <Trash className={styles.trash} size={16} />
      </li>
      <li>
        <div>
          <button type="button">
            <Check className={styles.check} size={12} />
          </button>
          <p>Que vai ta escrito muita coisa Que vai ta escrito muita coisa Que vai ta escrito muita coisa </p>
        </div>
        <Trash className={styles.trash} size={16} />
      </li>  
    </ul>
  )
}