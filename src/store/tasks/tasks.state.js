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
 *   tasks: Array<Task>,
 *   pins: Array<Task>
 * }}
 */
export const createState = () => ({
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
    {
      id: uuid(),
      text: '',
      done: false,
    },
  ],
  pins: [],
});
