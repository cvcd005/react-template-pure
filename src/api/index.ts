import { TodoItemType } from '../types';

export const setTodoList = (list: TodoItemType[]) => {
  localStorage.setItem('todolist', JSON.stringify(list));
};

export const getTodoList = () => {
  const list = localStorage.getItem('todolist');
  if (list) {
    return JSON.parse(list);
  }
  return [];
};
