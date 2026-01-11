import { createContext } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  let name = "vijay";
  return (
    <GlobalContext.Provider value={name}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
