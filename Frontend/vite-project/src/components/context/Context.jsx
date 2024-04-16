import { createContext, useContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [estadoUsuario, setEstadoUsuario] = useState(0);
  const [estadoHeader, setEstadoHeader] = useState(0);
  const [user, setUser] = useState(null)

  return (
    <Context.Provider
      value={{
        estadoUsuario,
        estadoHeader,
        user,
        setEstadoUsuario,
        setEstadoHeader,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};

//export const UseContext = () => useContext(Contexto);
