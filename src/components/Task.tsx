import styles from './Task.module.css';
import { PlusCircle } from 'phosphor-react';

export function Task() {
  return (
    <div className={styles.newtask}>
      <form>
        <input placeholder="Adicione uma nova tarefa" />
        <button type="submit">
          Criar {''} <PlusCircle color="white" size="16" />
        </button>
      </form>
    </div>
  );
}
