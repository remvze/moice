import { useTasks } from '@/store';

const Tasks = () => {
  const tasks = useTasks(state => state.tasks);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.text}</li>
      ))}
    </ul>
  );
};

export default Tasks;
