import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleAddTodo = () => {
    console.log("input", input);
    // send input to openAI
    // get response from openAI
    // const emojiData = response.data.emojiData;
    // const newInput = emojiData + input;

    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div>
      <h1>TODO APP</h1>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
