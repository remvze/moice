import { useRef, useState, useEffect } from 'react';

import Task from '@/components/task';
import { useTasks } from '@/store';
import { until } from '@/helpers/wait';

import * as S from './tasks.styles';

const Tasks = () => {
  const tasks = useTasks(state => state.tasks);
  const check = useTasks(state => state.check);
  const write = useTasks(state => state.write);
  const add = useTasks(state => state.add);
  const remove = useTasks(state => state.remove);
  const reorder = useTasks(state => state.reorder);

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const refs = useRef({});

  const handleCheck = id => () => check(id);

  const handleChange = id => text => write(id, text.replaceAll('\n', ''));

  const handleAdd = id => async () => {
    const newID = add(id);

    await until(() => !!refs.current[newID]);

    refs.current[newID].focus();
  };

  const handleRemove = id => async () => {
    if (tasks.length === 1) return;

    setTimeout(() => {
      const prevID = remove(id);
      delete refs.current[id];

      if (prevID) {
        const input = refs.current[prevID];
        const end = input.value.length;

        input.setSelectionRange(end, end);
        input.focus();
      }
    }, 50);
  };

  return (
    <S.List axis="y" values={tasks} onReorder={reorder}>
      {tasks.map(task => (
        <Task
          mounted={mounted}
          text={task.text}
          done={task.done}
          task={task}
          onCheck={handleCheck(task.id)}
          onChange={handleChange(task.id)}
          onAdd={handleAdd(task.id)}
          onRemove={handleRemove(task.id)}
          ref={ref => (refs.current[task.id] = ref)}
          key={task.id}
        />
      ))}
    </S.List>
  );
};

export default Tasks;
