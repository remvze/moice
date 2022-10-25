import create from 'zustand';
import { v4 as uuid } from 'uuid';

const createTasks = () =>
  create((set, get) => ({
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

    add(id) {
      const state = get();
      const index = state.tasks.findIndex(task => task.id === id);
      const next = state.tasks[index + 1];
      const newID = uuid();

      if (next?.text?.length === 0) return next.id;

      set(state => {
        const tasks = [...state.tasks];

        tasks.splice(index + 1, 0, {
          id: newID,
          text: '',
          done: false,
        });

        return { tasks };
      });

      return newID;
    },
  }));

export default createTasks;
