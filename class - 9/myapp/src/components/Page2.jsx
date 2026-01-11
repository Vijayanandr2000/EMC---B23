import React, { useContext } from "react";
import { GlobalContext } from "../context/Global";

const Page2 = () => {
  const name = useContext(GlobalContext);

  return <div>Page2-{name}</div>;
};

export default Page2;
