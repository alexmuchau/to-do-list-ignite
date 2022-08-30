import styles from './TaskList.module.css'
import { Trash } from 'phosphor-react'

export interface TaskProps {
  id: Number,
  content: string,
  completed: boolean,
  onCheck: (id: Number) => void,
  onDelete: (id: Number) => void
}

export function TaskList({ id , onCheck, onDelete, content, completed }: TaskProps) {  
  function handleCheckTask() {
    onCheck(id)
  }

  function onDeleteTask() {
    onDelete(id)
  }
  
  return(
    <li>
      <div>
        <label className={styles.labelContainer} >
          <input
            className={styles.checkboxInput}
            type="checkbox"
            readOnly
            checked={completed}
            onClick={handleCheckTask}
          />
          {/* <span className="checkmark"></span> */}
          <p>{content}</p>
        </label>
      </div>
      <Trash className={styles.trash} size={16} onClick={onDeleteTask} />
      </li>
  )
}