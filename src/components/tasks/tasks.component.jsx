import { useRef } from 'react';

import Task from '@/components/task';
import { useTasks } from '@/store';
import { until } from '@/helpers/wait';

import * as S from './tasks.styles';

const Tasks = () => {
  const tasks = useTasks(state => state.tasks);
  const check = useTasks(state => state.check);
  const write = useTasks(state => state.write);
  const add = useTasks(state => state.add);

  const refs = useRef({});

  const handleCheck = id => () => check(id);

  const handleChange = id => text => write(id, text.replaceAll('\n', ''));

  const handleAdd = id => async () => {
    const newID = add(id);

    await until(() => !!refs.current[newID]);

    refs.current[newID].focus();
  };

  return (
    <S.List>
      {tasks.map(task => (
        <Task
          text={task.text}
          done={task.done}
          onCheck={handleCheck(task.id)}
          onChange={handleChange(task.id)}
          onAdd={handleAdd(task.id)}
          ref={ref => (refs.current[task.id] = ref)}
          key={task.id}
        />
      ))}
    </S.List>
  );
};

export default Tasks;
