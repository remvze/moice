import { useRef, useState, useEffect } from 'react';

import Task from '@/components/task';
import { useTasks } from '@/store';
import { until } from '@/helpers/wait';

import * as S from './tasks.styles';

const Tasks = () => {
  const tasks = useTasks(state => state.tasks);
  const pins = useTasks(state => state.pins);
  const check = useTasks(state => state.check);
  const write = useTasks(state => state.write);
  const add = useTasks(state => state.add);
  const remove = useTasks(state => state.remove);
  const reorder = useTasks(state => state.reorder);
  const togglePin = useTasks(state => state.togglePin);

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const refs = useRef({});

  const handleCheck =
    (id, pinned = false) =>
    () =>
      check(id, pinned);

  const handleTogglePin = id => () => togglePin(id);

  const handleChange =
    (id, pinned = false) =>
    text =>
      write(id, text.replaceAll('\n', ''), pinned);

  const handleAdd =
    (id, pinned = false) =>
    async () => {
      const newID = add(id, pinned);

      await until(() => !!refs.current[newID]);

      refs.current[newID].focus();
    };

  const handleRemove =
    (id, pinned = false) =>
    async () => {
      setTimeout(() => {
        try {
          const prevID = remove(id, pinned);
          delete refs.current[id];

          if (prevID) {
            const input = refs.current[prevID];
            const end = input.value.length;

            input.setSelectionRange(end, end);
            input.focus();
          }
        } catch (error) {
          return;
        }
      }, 50);
    };

  return (
    <>
      {!!pins.length && (
        <S.Section>
          <S.Label>Pinned Tasks</S.Label>

          <S.List
            axis="y"
            values={pins}
            onReorder={tasks => reorder(tasks, true)}
          >
            {pins.map(task => (
              <Task
                mounted={mounted}
                id={task.id}
                text={task.text}
                done={task.done}
                task={task}
                isPinned
                onTogglePin={handleTogglePin(task.id)}
                onCheck={handleCheck(task.id, true)}
                onChange={handleChange(task.id, true)}
                onAdd={handleAdd(task.id, true)}
                onRemove={handleRemove(task.id, true)}
                ref={ref => (refs.current[task.id] = ref)}
                key={task.id}
              />
            ))}
          </S.List>
        </S.Section>
      )}

      <S.List axis="y" values={tasks} onReorder={reorder}>
        {tasks.map(task => (
          <Task
            mounted={mounted}
            text={task.text}
            done={task.done}
            task={task}
            onTogglePin={handleTogglePin(task.id)}
            onCheck={handleCheck(task.id)}
            onChange={handleChange(task.id)}
            onAdd={handleAdd(task.id)}
            onRemove={handleRemove(task.id)}
            ref={ref => (refs.current[task.id] = ref)}
            key={task.id}
          />
        ))}
      </S.List>
    </>
  );
};

export default Tasks;