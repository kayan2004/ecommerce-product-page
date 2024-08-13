/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState("");

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom Hook for using context
const useMyContext = () => useContext(MyContext);

export { MyProvider, useMyContext };
