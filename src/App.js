import Header from "./component/Header";
import TimerBar from "./component/TimerBar";
import { useState } from "react";

function App() {
  const [hasStarted, setHasStarted] = useState(false);

  return (
    <div className="App">
      <h1>Fitness Timer</h1>
      {hasStarted === false ? 
        <button onClick={() => {setHasStarted(true); console.log(hasStarted)}}>
          Start workout
        </button>
        :
        <TimerBar />
      }
    </div>
  );
}

export default App;
