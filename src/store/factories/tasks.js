import create from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuid } from 'uuid';

const createTasks = () =>
  create(
    persist((set, get) => ({
      tasks: [
        {
          id: uuid(),
          text: 'Make yourself a better person',
          done: true,
        },
        {
          id: uuid(),
          text: 'Make the world a better place',
          done: false,
        },
      ],
      pins: [],

      check(id, pinned = false) {
        const key = pinned ? 'pins' : 'tasks';

        set(state => ({
          [key]: state[key].map(task => {
            if (task.id !== id) return task;

            task.done = !task.done;

            return task;
          }),
        }));
      },

      write(id, text, pinned = false) {
        const key = pinned ? 'pins' : 'tasks';

        set(state => ({
          [key]: state[key].map(task => {
            if (task.id !== id) return task;

            task.text = text;
            task.done = text.length === 0 ? false : task.done;

            return task;
          }),
        }));
      },

      add(id, pinned = false) {
        const key = pinned ? 'pins' : 'tasks';

        const state = get();
        const index = state[key].findIndex(task => task.id === id);
        const next = state[key][index + 1];
        const newID = uuid();

        if (next?.text?.length === 0) return next.id;

        set(state => {
          const tasks = [...state[key]];

          tasks.splice(index + 1, 0, {
            id: newID,
            text: '',
            done: false,
          });

          return { [key]: tasks };
        });

        return newID;
      },

      remove(id, pinned = false) {
        const key = pinned ? 'pins' : 'tasks';

        const state = get();
        const index = state[key].findIndex(task => task.id === id);
        const prev = state[key][index - 1];

        if (state.pins.length + state.tasks.length === 1) throw new Error();

        set(state => {
          const tasks = [...state[key]];

          tasks.splice(index, 1);

          return { [key]: tasks };
        });

        return prev?.id || null;
      },

      reorder(tasks, pinned = false) {
        const key = pinned ? 'pins' : 'tasks';

        set(() => ({ [key]: tasks }));
      },

      togglePin(id) {
        const state = get();
        const isPinned = state.pins.some(task => task.id === id);
        const from = isPinned ? 'pins' : 'tasks';
        const to = isPinned ? 'tasks' : 'pins';

        console.log('hi');

        set(state => {
          const values = {
            tasks: [...state.tasks],
            pins: [...state.pins],
          };

          const index = values[from].findIndex(task => task.id === id);
          const [task] = values[from].splice(index, 1);

          values[to].push(task);

          console.log(values);

          return values;
        });
      },
    }))
  );

export default createTasks;
