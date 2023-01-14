import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import { TaskPublished } from './TaskPublished';

export function Task() {
  const [tasks, setTasks] = useState(['post comentado']);
  const [newTaskText, setNewTaskText] = useState('');

  function handleCreateNewTask() {
    event.preventDefault();
    setTasks([...tasks, newTaskText]);
    setNewTaskText('');
  }

  function handleNewTaskChange() {
    event?.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  function deleteTask(taskToDelete) {
    const tasksWithoutDeleteOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });

    setTasks(tasksWithoutDeleteOne);
  }

  console.log(tasks);
  const isNewTaskEmpty = newTaskText.length === 0;

  return (
    <div className={styles.newtask}>
      <form onSubmit={handleCreateNewTask}>
        <input
          name="task"
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
        />
        <button type="submit">
          Criar {''} <PlusCircle color="white" size="16" />
        </button>
      </form>
      <div className={styles.contage}>
        <p>tarefas criadas </p>
        <p>{tasks.length}</p>
      </div>

      <div className={styles.taskList}>
        {tasks.map((task) => {
          return <TaskPublished content={task} onDeleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
}
