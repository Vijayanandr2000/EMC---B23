import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const [value, setValue] = useState(0);

  // let count = 0;

  useEffect(() => {
    console.log("Mounting", value);
  }, []);

  useEffect(() => {
    console.log("Updating", value);
  }, [value]);

  return (
    <>
      <h1>Count: {value}</h1>

      <button
        onClick={() => {
          setValue((prev) => prev + 1);
          setValue((prev) => prev + 1);
          // setValue(value + 1);
          console.log("vijay-count", value);
        }}
      >
        Inc
      </button>
      {/* <Form></Form> */}
    </>
  );
}

export default App;
