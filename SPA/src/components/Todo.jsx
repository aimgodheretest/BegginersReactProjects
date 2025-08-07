import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return; // prevent empty todos
    setTodos((todos) => [
      ...todos,
      { text: input, id: Math.floor(Math.random() * 100000) },
    ]);
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 p-4">
      <div className="w-full max-w-md bg-gray-800 shadow-xl rounded-xl p-6 border border-gray-700">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-100">
          Todo App
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Add New Todo"
            className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg 
                       placeholder-gray-400 text-gray-200 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg 
                       hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map(({ text, id }) => (
            <li
              key={id}
              className="flex justify-between items-center bg-gray-700 px-4 py-2 
                         rounded-lg border border-gray-600"
            >
              <span>{text}</span>
              <button
                onClick={() => removeTodo(id)}
                className="text-red-400 hover:text-red-500 font-bold text-lg"
              >
                ×
              </button>
            </li>
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="text-gray-500 text-center mt-4">No todos yet</p>
        )}
      </div>
    </div>
  );
};

export default Todo;
