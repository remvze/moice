import Task from '@/components/task';
import * as S from './tasks.styles';
import { useTasks } from '@/store';

const Tasks = () => {
  const tasks = useTasks(state => state.tasks);
  const check = useTasks(state => state.check);
  const write = useTasks(state => state.write);

  const handleCheck = id => () => check(id);

  const handleChange = id => text => write(id, text);

  return (
    <S.List>
      {tasks.map(task => (
        <Task
          text={task.text}
          done={task.done}
          onCheck={handleCheck(task.id)}
          onChange={handleChange(task.id)}
          key={task.id}
        />
      ))}
    </S.List>
  );
};

export default Tasks;
