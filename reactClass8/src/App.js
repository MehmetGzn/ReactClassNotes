import LifeCycleMethods from "./components/LifeCycleMethods";
import { useState } from "react";
import Timer from "./components/Timer";
import UseEffectHook from "./components/UseEffectHook";
import Users from "./components/Users";

function App() {
  // const [show, setShow] = useState(true);
  // console.log(show);
  return (
    <div className="container text-center" style={{ marginTop: "10rem" }}>
      {/* <button className="btn btn-dark" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <LifeCycleMethods />} */}
      {/* <button className="btn btn-dark" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
      {show && <UseEffectHook />} */}
      {/* <Timer /> */}
      <Users />
    </div>
  );
}

export default App;
