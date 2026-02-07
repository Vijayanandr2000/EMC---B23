import { useEffect } from "react";
import { useCounterStore } from "../store/Counter";
import "./App.css";

function App() {
  const { count, inc, dec, reset } = useCounterStore();

  useEffect(() => {
    console.log("rendering", count);
  }, []);

  return (
    <>
      <h1>{count}</h1>

      <div
        className="btn"
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default App;
