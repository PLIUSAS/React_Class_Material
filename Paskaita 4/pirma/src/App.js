import { useState } from "react";
import "./App.css";
import UserList from "./components/UsersList/UserList";

function App() {
  const [isRendering, setIsRendering] = useState(true);
  // if (isRendering) {
  //   return (
  //     <div>
  //       <h1>labas</h1>
  //     </div>
  //   );
  // }
  return (
    <div>
      {/* {isRendering ? (
        <h1>is Rendering yra true</h1>
      ) : (
        <h1>is Rendering yra false</h1>
      )}
      {[<h1>pirmas</h1>, <h2>antras</h2>, 1, 2, 3, 4, 5, 6, "true", "false"]}
      <h1>Viso gero</h1>
      <button onClick={() => setIsRendering((prev) => !prev)}>Toggle</button> */}
      <UserList />
    </div>
  );
}

export default App;
