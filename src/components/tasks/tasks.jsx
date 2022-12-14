import { useRef, useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Task from '@/components/task';
import DragMessage from '@/components/drag-message';
import Filters from '@/components/filters';
import EmptyMessage from '@/components/empty-message';
import useFilter from '@/hooks/use-filter';
import { useTasks } from '@/store';
import { usePWA } from '@/contexts/pwa';
import { until } from '@/utils/wait';

import * as S from './tasks.styles';

const Tasks = () => {
  const { isStandalone } = usePWA();
  const tasks = useTasks(state => state.tasks);
  const reorder = useTasks(state => state.reorder);

  const { filter, filters, mode, setMode } = useFilter();
  const filteredTasks = useMemo(() => tasks.filter(filter), [filter, tasks]);
  const allDone = useMemo(
    () => tasks.filter(task => task.text.length).every(task => task.done),
    [tasks]
  );

  const [mounted, setMounted] = useState(false);
  const [dragged, setDragged] = useState(false);

  useEffect(() => setMounted(true), []);

  const refs = useRef({});

  const focus = async id => {
    await until(() => !!refs.current[id]);

    const input = refs.current[id];
    const end = input.value.length;

    input.setSelectionRange(end, end);
    input.focus();
  };

  const handleDrag = () => {
    if (!dragged) setDragged(true);
  };

  const variants = !isStandalone
    ? {
        hide: { opacity: 0 },
        show: { opacity: 1 },
      }
    : {
        hide: { opacity: 1 },
        show: { opacity: 1 },
      };

  const reorderTasks = newTasks => {
    const before = {};
    const after = {};

    filteredTasks.forEach((task, i) => {
      const index = tasks.indexOf(task);
      before[index] = i;
    });

    filteredTasks.forEach(task => {
      const index = newTasks.indexOf(task);
      after[index] = task;
    });

    const reordered = tasks.map((task, i) => {
      if (typeof before[i] === 'undefined') return task;
      return after[before[i]];
    });

    reorder(reordered);
  };

  return (
    <motion.div variants={variants}>
      <S.Section>
        <Filters filters={filters} mode={mode} onChange={setMode} />

        <S.Tasks>
          <S.List axis="y" values={filteredTasks} onReorder={reorderTasks}>
            {filteredTasks.map(task => (
              <Task
                mounted={mounted}
                task={task}
                mode={mode}
                allDone={allDone}
                onDrag={handleDrag}
                focus={focus}
                ref={ref => (refs.current[task.id] = ref)}
                key={task.id}
              />
            ))}
          </S.List>

          {filteredTasks.length === 0 && <EmptyMessage mode={mode} />}

          <AnimatePresence initial={false}>
            {!dragged && filteredTasks.length > 1 && <DragMessage />}
          </AnimatePresence>
        </S.Tasks>
      </S.Section>
    </motion.div>
  );
};

export default Tasks;
