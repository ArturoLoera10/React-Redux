import { useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  const { data: todos, isLoading } = useGetTodosQuery();

  return (
    <>
      <h1>Todo - RTK Query</h1>
      <hr />

      <h4>isLoading: {isLoading ? "True" : "False"}</h4>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.completed ? "DONE" : "Pending"}</strong>
            {todo.title}
          </li>
        ))}
      </ul>

      <button>Next Todo</button>
    </>
  );
};
