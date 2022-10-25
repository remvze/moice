import create from 'zustand';
import { v4 as uuid } from 'uuid';

const createTasks = () =>
  create(set => ({
    tasks: [
      {
        id: uuid(),
        text: 'Buy some milk',
        done: true,
      },
      {
        id: uuid(),
        text: 'Buy some bread',
        done: false,
      },
    ],

    check(id) {
      set(state => ({
        tasks: state.tasks.map(task => {
          if (task.id !== id) return task;

          task.done = !task.done;

          return task;
        }),
      }));
    },

    write(id, text) {
      set(state => ({
        tasks: state.tasks.map(task => {
          if (task.id !== id) return task;

          task.text = text;

          return task;
        }),
      }));
    },
  }));

export default createTasks;
