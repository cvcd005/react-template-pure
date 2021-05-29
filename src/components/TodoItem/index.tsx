import React, { useCallback } from 'react';
import { TodoItemType } from 'src/types';
import styles from './TodoItem.module.scss';

interface IProps extends TodoItemType {
  index: number;
  cb: (id: number) => void;
}

export const TodoItem: React.FC<IProps> = ({ index, text, cb, id }) => {
  const handleDel = useCallback((todoId: number) => () => cb(todoId), [cb]);

  return (
    <div className={styles.item}>
      <span>
        {`${index + 1}. `}
        <span>{text}</span>
      </span>
      <button type="button" className={styles.btn} onClick={handleDel(id)}>
        x
      </button>
    </div>
  );
};
