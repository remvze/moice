import create from 'zustand';
import { v4 as uuid } from 'uuid';

export const useTodos = create(() => ({
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
