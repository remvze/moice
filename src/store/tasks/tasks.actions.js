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
   * @returns {void}
   */
  check(id) {
    set(state => ({
      tasks: state.tasks.map(task => {
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
   * @returns {void}
   */
  write(id, text) {
    set(state => ({
      tasks: state.tasks.map(task => {
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
   * @returns {string} - The ID of the new/next task
   */
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
        pinned: false,
      });

      return { tasks };
    });

    return newID;
  },

  /**
   * Remove the given task
   *
   * @param {string} id - The ID of the task
   * @returns {(string | null)} - The ID of the previous task if exists, or null
   */
  remove(id) {
    const state = get();
    const index = state.tasks.findIndex(task => task.id === id);
    const prev = state.tasks[index - 1];

    if (state.tasks.length === 1) throw new Error();

    set(state => {
      const tasks = [...state.tasks];

      tasks.splice(index, 1);

      return { tasks };
    });

    return prev?.id || null;
  },

  /**
   * Reorder the given tasks
   *
   * @param {Array<import('./tasks.state').Task>} tasks - Tasks to reorder
   * @returns {void}
   */
  reorder(tasks) {
    set(() => ({ tasks }));
  },

  /**
   * Toggle the given task in and out of pins
   *
   * @param {string} id - The ID of the task
   * @returns {void}
   */
  togglePin(id) {
    set(state => ({
      tasks: state.tasks.map(task => {
        if (task.id !== id) return task;

        task.pinned = !task.pinned;

        return task;
      }),
    }));
  },
});
