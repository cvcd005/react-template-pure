import React, { useCallback, useState } from 'react';
import { TodoItemType } from 'src/types';
import styles from './TodoForm.module.scss';

interface IProps {
  cb: (el: TodoItemType) => void;
}

export const TodoForm: React.FC<IProps> = ({ cb }) => {
  const [text, setText] = useState('');
  const handleText = useCallback((e: any) => setText(e.target.value), []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    cb({ text, id: Date.now() });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.form__input}
        onChange={handleText}
        value={text}
      />
      <button className={styles.form__btn} type="submit">
        Add
      </button>
    </form>
  );
};
