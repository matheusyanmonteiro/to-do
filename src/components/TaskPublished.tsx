import styles from './TaskPublished.module.css';

import { Trash } from 'phosphor-react';

interface Props {
  content: string;
  onDeleteTask: Function;
}

export function TaskPublished({ content, onDeleteTask }: Props) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }

  return (
    <div className={styles.content}>
      <h1>{content}</h1>
      <button onClick={handleDeleteTask}>
        <Trash />
      </button>
    </div>
  );
}
