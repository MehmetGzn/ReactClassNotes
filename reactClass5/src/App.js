import Events from "./components/1-event-intro/Events";
import Counter from "./components/2-classComponents/Counter";
import UseStateExample from "./components/3-useStateHook/UseStateExample";

function App() {
  return (
    <div>
      <Events />
      <Counter />
      <Counter count={10} />
      <UseStateExample />
    </div>
  );
}
export default App;
