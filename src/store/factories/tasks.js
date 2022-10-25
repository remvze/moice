import create from 'zustand';
import { v4 as uuid } from 'uuid';

const createTasks = () =>
  create(() => ({
    tasks: [
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

export default createTasks;
