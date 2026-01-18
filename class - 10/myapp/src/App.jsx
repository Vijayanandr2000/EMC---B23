import { useState, useEffect } from "react";
import "./App.css";

import CountryContextProvider from "./context/CountryContext";
import CountryInfo from "./pages/CountryInfo";

function App() {
  const [data, setData] = useState([1, 2]);

  useEffect(() => {
    data.push(3);
    setData([...data]);
  }, []);

  return (
    <>
      {/* <CountryContextProvider>
        <CountryInfo />
      </CountryContextProvider> */}
      {data.map((d) => (
        <h1>{d}</h1>
      ))}
    </>
  );
}

export default App;
