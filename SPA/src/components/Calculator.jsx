import { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");
  const clear = () => {
    setInputValue("");
  };

  const display = (value) => {
    setInputValue(inputValue + value);
  };
  const calculate = () => {
    setInputValue(eval(inputValue));
  };

  const btnClass =
    "cursor-pointer p-4 text-xl rounded bg-gray-100 text-black active:bg-yellow-400 transition-colors duration-200 text-center";
  return (
    <div className="w-[320px] mx-auto p-4 bg-black rounded-xl shadow-lg">
      {/* Display */}
      <input
        type="text"
        value={inputValue}
        readOnly
        className="w-full text-right text-3xl p-4 mb-4 bg-black text-white border border-gray-600 rounded"
      />

      <div className="grid grid-cols-4 gap-3">
        {/* Top row */}
        <button className={btnClass} onClick={clear}>
          C
        </button>
        <button className={btnClass} onClick={() => display("/")}>
          /
        </button>
        <button className={btnClass} onClick={() => display("*")}>
          *
        </button>
        <button className={btnClass} onClick={() => display("-")}>
          -
        </button>

        {/* 7 8 9 + */}
        <button className={btnClass} onClick={() => display("7")}>
          7
        </button>
        <button className={btnClass} onClick={() => display("8")}>
          8
        </button>
        <button className={btnClass} onClick={() => display("9")}>
          9
        </button>
        <button className={btnClass} onClick={() => display("+")}>
          +
        </button>

        {/* 4 5 6 */}
        <button className={btnClass} onClick={() => display("4")}>
          4
        </button>
        <button className={btnClass} onClick={() => display("5")}>
          5
        </button>
        <button className={btnClass} onClick={() => display("6")}>
          6
        </button>
        <div className="row-span-2">
          {/* = button spans 2 rows */}
          <button
            className={`${btnClass} h-full w-full text-black bg-white-500 hover:bg-yellow-600`}
            onClick={calculate}
          >
            =
          </button>
        </div>

        {/* 1 2 3 */}
        <button className={btnClass} onClick={() => display("1")}>
          1
        </button>
        <button className={btnClass} onClick={() => display("2")}>
          2
        </button>
        <button className={btnClass} onClick={() => display("3")}>
          3
        </button>

        {/* 0 (col-span-2), 00, . */}
        <button
          className={`${btnClass} col-span-2`}
          onClick={() => display("0")}
        >
          0
        </button>
        <button className={btnClass} onClick={() => display("00")}>
          00
        </button>
        <button className={btnClass} onClick={() => display(".")}>
          .
        </button>
      </div>
    </div>
  );
};

export default Calculator;
