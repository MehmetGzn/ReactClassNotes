import Msg from "./Msg";
import Person from "./Person";

function App() {
  return (
    <>
      <Person
        name="Julian"
        img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
        tel="730071806"
      />
      <Person
        name="Marie"
        img="https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60"
        tel="650342502"
      />
    </>
  );
}

export default App;
