import create from 'zustand';
import { v4 as uuid } from 'uuid';

const createTodos = () =>
  create(() => ({
    todos: [
      {
        id: uuid(),
        text: 'Buy some milk',
        done: false,
      },
      {
        id: uuid(),
        text: 'Buy some bread',
        done: false,
      },
    ],
  }));

export default createTodos;
