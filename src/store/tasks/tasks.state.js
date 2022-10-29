import { v4 as uuid } from 'uuid';

/**
 * @typedef {Object} Task
 *
 * @property {string} id
 * @property {string} text
 * @property {boolean} done
 */

/**
 * Generate the initial state for Tasks store
 *
 * @returns {{
 *   tasks: Array<Task>
 * }}
 */
export const createState = () => ({
  tasks: [
    {
      id: uuid(),
      text: 'Make yourself a better person',
      done: true,
      pinned: false,
    },
    {
      id: uuid(),
      text: 'Make the world a better place',
      done: false,
      pinned: true,
    },
    {
      id: uuid(),
      text: '',
      done: false,
      pinned: false,
    },
  ],
});
