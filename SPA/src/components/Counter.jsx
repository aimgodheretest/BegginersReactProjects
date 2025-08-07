import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-800  text-white">
      <h1 className="text-7xl font-bold mb-8">{count}</h1>

      <div className="flex gap-6">
        <button
          onClick={increment}
          className="bg-blue-600 text-white p-[20px] text-4xl rounded-full hover:bg-blue-700 transition"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="bg-red-600 text-white p-[20px] text-4xl  rounded-full hover:bg-red-700 transition"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
