import { useRef, useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Task from '@/components/task';
import DragMessage from '@/components/drag-message';
import Filters from '@/components/filters';
import useFilter from '@/hooks/use-filter';
import { useTasks } from '@/store';
import { until } from '@/helpers/wait';

import * as S from './tasks.styles';

const Tasks = () => {
  const tasks = useTasks(state => state.tasks);
  const reorder = useTasks(state => state.reorder);

  const { filter, filters, mode, setMode } = useFilter();
  const filteredTasks = useMemo(() => tasks.filter(filter), [filter, tasks]);
  const allDone = useMemo(() => tasks.every(task => task.done), [tasks]);

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

  const variants = {
    hide: { opacity: 0 },
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
      <Filters filters={filters} mode={mode} onChange={setMode} />

      <S.List axis="y" values={filteredTasks} onReorder={reorderTasks}>
        {filteredTasks.map(task => (
          <Task
            mounted={mounted}
            task={task}
            allDone={allDone}
            onDrag={handleDrag}
            focus={focus}
            ref={ref => (refs.current[task.id] = ref)}
            key={task.id}
          />
        ))}
      </S.List>

      <AnimatePresence initial={false}>
        {!dragged && filteredTasks.length > 1 && <DragMessage />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Tasks;
