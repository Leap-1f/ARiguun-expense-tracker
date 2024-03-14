import React, { createContext, useContext, useState } from "react";

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [modalExpense, setModalExprense] = useState(false);
  const toggleHeader = () => {
    setShowHeader((prevState) => !prevState);
  };
  return (
    <Context.Provider value={{ modalExpense, toggleHeader }}>
      {children}
    </Context.Provider>
  );
};
export const useHeader = () => {
  return useContext(Context);
};
