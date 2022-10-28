import { v4 as uuid } from 'uuid';

/**
 * @typedef {Object} Actions
 *
 * @property {Function} check
 * @property {Function} write
 * @property {Function} add
 * @property {Function} remove
 * @property {Function} reorder
 * @property {Function} togglePin
 */

/**
 * Create the actions for Tasks store
 *
 * @param {Function} set - State setter
 * @param {Function} get - State getter
 * @returns {Actions}
 */
export const createActions = (set, get) => ({
  /**
   * Toggle done and undone for a task
   *
   * @param {string} id - The ID of the task
   * @param {boolean} pinned - If the task is pinned
   * @returns {void}
   */
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

  /**
   * Change the text of a task
   *
   * @param {string} id - The ID of the task
   * @param {string} text - The task's text
   * @param {boolean} pinned - If the task is pinned
   * @returns {void}
   */
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

  /**
   * Add a new task after the given task
   *
   * @param {string} id - The ID of the task
   * @param {boolean} pinned - If the task is pinned
   * @returns {string} - The ID of the new/next task
   */
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

  /**
   * Remove the given task
   *
   * @param {string} id - The ID of the task
   * @param {boolean} pinned - If the task is pinned
   * @returns {(string | null)} - The ID of the previous task if exists, or null
   */
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

  /**
   * Reorder the given tasks
   *
   * @param {Array<import('./tasks.state').Task>} tasks - Tasks to reorder
   * @param {boolean} pinned - If the tasks are pinned
   * @returns {void}
   */
  reorder(tasks, pinned = false) {
    const key = pinned ? 'pins' : 'tasks';

    set(() => ({ [key]: tasks }));
  },

  /**
   * Toggle the given task in and out of pins
   *
   * @param {string} id - The ID of the task
   * @returns {void}
   */
  togglePin(id) {
    const state = get();
    const isPinned = state.pins.some(task => task.id === id);
    const from = isPinned ? 'pins' : 'tasks';
    const to = isPinned ? 'tasks' : 'pins';

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
});
