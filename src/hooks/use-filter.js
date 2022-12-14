import { useMemo } from 'react';

import useLocalStorage from '@/hooks/use-local-storage';

const useFilter = () => {
  const [mode, setMode] = useLocalStorage('moice-filter-mode', 'all');

  const filters = useMemo(
    () => [
      {
        mode: 'all',
        name: 'All',
        filter: () => true,
      },
      {
        mode: 'pinned',
        name: 'Pinned',
        filter: task => task.pinned,
      },
      {
        mode: 'active',
        name: 'Active',
        filter: task => !task.done,
      },
      {
        mode: 'done',
        name: 'Done',
        filter: task => task.done,
      },
    ],
    []
  );

  const filter = useMemo(() => {
    const filterObject = filters.find(filter => filter.mode === mode);
    const defaultFilter = () => false;

    return filterObject?.filter || defaultFilter;
  }, [mode, filters]);

  return { filter, filters, mode, setMode };
};

export default useFilter;
