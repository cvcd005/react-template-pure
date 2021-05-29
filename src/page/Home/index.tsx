import React from 'react';
import { TodoList } from '../../components/TodoList';
import styles from './Home.module.scss';

export const HomePage: React.FC = () => (
  <div className={styles.content}>
    <h1 className={styles.title}>TODO example</h1>
    <TodoList />
  </div>
);
