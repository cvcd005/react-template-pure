import React, { useState, useCallback, useEffect } from 'react';
import { TodoForm } from 'src/components/TodoForm';
import { TodoItem } from 'src/components/TodoItem';
import { TodoItemType } from 'src/types';
import { getTodoList, setTodoList } from 'src/api';

export const TodoList: React.FC = () => {
  const [list, setList] = useState<TodoItemType[]>([]);

  useEffect(() => {
    const todoList = getTodoList();
    setList(todoList);
  }, []);

  const addTodo = useCallback(
    (item: TodoItemType) => {
      setList([...list, item]);
      setTodoList([...list, item]);
    },
    [list]
  );

  const delTodo = useCallback(
    (id: number) => {
      const filteredList = list.filter((el: TodoItemType) => el.id !== id);
      setList(filteredList);
      setTodoList(filteredList);
    },
    [list]
  );

  return (
    <>
      <TodoForm cb={addTodo} />
      {list.map((el: TodoItemType, i: number) => (
        <TodoItem {...el} index={i} cb={delTodo} key={el.id} />
      ))}
    </>
  );
};
