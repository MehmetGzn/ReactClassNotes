import { useState } from "react";
import { useEffect } from "react";
const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  //   useEffect(() => {
  //     console.log("fetched");
  //   }, [count]);
  const fetchData = () => {
    console.log("Data Fetched");
  };

  useEffect(() => {
    const timerId = setInterval(fetchData, 3000);
    console.log("mounted");
    return () => {
      clearInterval(timerId);
      console.log("unmounted");
    };
  }, []);

  return (
    <div className="container text-center mt-4">
      <h1 className="text-danger">USE EFFECT</h1>
      <h3 className="">Count:{count}</h3>
      <button className="btn btn-warning" onClick={() => setCount(count + 1)}>
        INC
      </button>
    </div>
  );
};

export default UseEffectHook;
