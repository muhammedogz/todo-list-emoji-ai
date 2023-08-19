import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <div>
      <h1>TODO APP</h1>
      <form
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSubmit={(e: any) => {
          e.preventDefault();

          const newTodo = e.target[0].value;
          setTodos((prev) => [...prev, newTodo]);
        }}
      >
        <input type="text" name="todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
