import { useCallback, useState } from "react";
import { OpenAI } from "openai";
import "./App.css";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPEN_AI_KEY,
  dangerouslyAllowBrowser: true,
});

function App() {
  const [input, setInput] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const handleOpenAIReq = useCallback(async (value: string) => {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Generate emoji from given text",
          },
          {
            role: "assistant",
            content: "😊",
          },
          {
            role: "user",
            content: value,
          },
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      console.log(response);
      const emoji = response.choices[0].message.content;
      return emoji;
    } catch (error) {
      console.error(error);
    }
  }, []);

  const handleAddTodo = async () => {
    console.log("input", input);
    // send input to openAI
    // get response from openAI
    // const emojiData = response.data.emojiData;
    // const newInput = emojiData + input;

    const emoji = await handleOpenAIReq(input);
    const newInput = emoji + input;

    setTodos([...todos, newInput]);
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
