import { ChangeEvent, FormEvent, useState } from 'react'
import { TaskList } from './TaskList'
import styles from './Tasks.module.css'
import { PlusCircle } from 'phosphor-react'

export function Tasks() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        content: "Que vai ta escrito muita coisa Que vai ta escrito muita coisa Que vai ta escrito muita coisa" ,
        completed: true,
      },
      {
        id: 2,
        content: "eqwrw12341Que vai ta escrito muita coisa Que vai ta escrito muita coisa Que vai ta escrito muita coisa" ,
        completed: false,
      },
      {
        id: 3,
        content: "fgasdfasQue vai ta escrito muita coisa Que vai ta escrito muita coisa Que vai ta escrito muita coisa" ,
        completed: false,
      },
      {
        id: 4,
        content: "dgasdhfdsQue vai ta escrito muita coisa Que vai ta escrito muita coisa Que vai ta escrito muita coisa",
        completed: true,
      },
      
    ]
  )

  const [newTaskText, setNewTaskText] = useState('')
  
  function handleCheckTask(id: Number) {
    const checkedTask = tasks.map(task => task.id === id ? {
      ...task,
      completed: !task.completed,
    } : task)

    // console.log(checkedTask)

    setTasks(checkedTask)
  }

  function handleNewTaskChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity("")
    setNewTaskText(e.target.value)
  }

  function handleNewTask(e: FormEvent) {
    e.preventDefault()

    setTasks([...tasks, {
      id: tasks.length + 1,
      content: newTaskText,
      completed: false
    }])
    setNewTaskText('')
  }

  function handleDeleteTask(id: Number) {
    const newTasks = tasks.filter(task => task.id !== id)

    setTasks(newTasks)
  }

  let count = 0;
  
  return(
    <>
      <form onSubmit={handleNewTask} className={styles.addInput} >
        <textarea 
          name='task'
          placeholder="Adicione uma nova Tarefa"
          required
          value={newTaskText}
          onChange={handleNewTaskChange}
        />
        <button 
          type="submit"
        >
          Criar
          <PlusCircle size={20}/>
        </button>
      </form>
      <div className={styles.container}>
        <header>
          <div className={styles.counterContainer} >
            <h4 className={styles.createdTitle}>Tarefas criadas</h4>
            <h4 className={styles.counter} >{tasks.length}</h4>
          </div>
          <div className={styles.counterContainer} >
            <h4 className={styles.concludedTitle}>Concluídas</h4>
            <h4 className={styles.counter}>{tasks.map((task) => {            
              task.completed === true ? count += 1 : count
              
              let total = tasks.length
            
              if(task.id === total ) {
                return count;
              } else {
                return ''
              }
            })} de {tasks.length}</h4>
          </div>
        </header>
        <main className={styles.taskListContainer} >
          <ul className={styles.ulContainer} >
            {tasks.map(task => {
              return(
                <TaskList
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  completed={task.completed}
                  onCheck={handleCheckTask}
                  onDelete={handleDeleteTask}
                />
              )
            })}
          </ul>
        </main>
      </div>
    </>
  )
}