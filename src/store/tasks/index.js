import create from 'zustand';
import { persist } from 'zustand/middleware';

import { createState } from './tasks.state';
import { createActions } from './tasks.actions';

const createTasks = () =>
  create(
    persist(
      (set, get) => ({
        ...createState(),
        ...createActions(set, get),
      }),
      {
        name: 'moice-tasks',
        version: '0.0.1',
      }
    )
  );

export default createTasks;
