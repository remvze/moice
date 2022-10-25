import { useTodos } from '@/store';

const Todos = () => {
  const todos = useTodos(state => state.todos);

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
