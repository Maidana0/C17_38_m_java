import { createContext, useContext, useState } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [estadoUsuario, setEstadoUsuario] = useState(0);
  const [estadoHeader, setEstadoHeader] = useState(0);

  return (
    <Context.Provider
      value={{
        estadoUsuario,
        estadoHeader,
        setEstadoUsuario,
        setEstadoHeader,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const UseContext = () => useContext(Context);
