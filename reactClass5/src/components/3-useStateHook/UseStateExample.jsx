import { useState } from "react";

const UseStateExample = () => {
  const [count, setCount] = useState(0);
  const inc = () => {
    setCount(count + 1);
  };
  const dec = () => {
    setCount(count - 1);
  };
  return (
    <div className="text-center mt-4">
      <h1 className="display-4 text-danger m4">Use State Count: {count}</h1>
      <button onClick={inc} className="btn btn-success">
        Increment
      </button>
      <button onClick={() => setCount(0)} className="btn btn-danger">
        Delete
      </button>
      <button onClick={dec} className="btn btn-dark">
        Decrement
      </button>
    </div>
  );
};

export default UseStateExample;
