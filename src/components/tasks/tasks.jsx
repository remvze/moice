import { useRef, useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Task from '@/components/task';
import DragMessage from '@/components/drag-message';
import { useTasks } from '@/store';
import { until } from '@/helpers/wait';

import * as S from './tasks.styles';

const Tasks = () => {
  const tasks = useTasks(state => state.tasks);
  const pins = useTasks(state => state.pins);
  const reorder = useTasks(state => state.reorder);

  const allDone = useMemo(() => {
    const tasksDone = tasks.every(task => task.done);
    const pinsDone = pins.every(task => task.done);

    return tasksDone && pinsDone;
  }, [tasks, pins]);

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

  const renderTask = (task, isPinned = false) => (
    <Task
      mounted={mounted}
      task={task}
      isPinned={isPinned}
      allDone={allDone}
      onDrag={handleDrag}
      focus={focus}
      ref={ref => (refs.current[task.id] = ref)}
      key={task.id}
    />
  );

  const variants = {
    hide: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div variants={variants}>
      {!!pins.length && (
        <S.Section>
          <S.Label>Pinned Tasks</S.Label>

          <S.List
            axis="y"
            values={pins}
            onReorder={tasks => reorder(tasks, true)}
          >
            {pins.map(task => renderTask(task, true))}
          </S.List>

          <AnimatePresence initial={false}>
            {!dragged && tasks.length <= 1 && pins.length > 1 && (
              <DragMessage />
            )}
          </AnimatePresence>
        </S.Section>
      )}

      <S.List axis="y" values={tasks} onReorder={reorder}>
        {tasks.map(task => renderTask(task))}
      </S.List>

      <AnimatePresence initial={false}>
        {!dragged && tasks.length > 1 && <DragMessage />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Tasks;
