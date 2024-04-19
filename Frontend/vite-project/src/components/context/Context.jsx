import { createContext, useContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [estadoUsuario, setEstadoUsuario] = useState(0);
  const [estadoHeader, setEstadoHeader] = useState(0);
  const [user, setUser] = useState(null);
  const [userCreated, setUserCreated] = useState();
  const [userP, setUserP] = useState(0);

  return (
    <Context.Provider
      value={{
        estadoUsuario,
        estadoHeader,
        user,
        userP,
        setEstadoUsuario,
        setEstadoHeader,
        setUser,
        setUserCreated,
        setUserP,
        userCreated,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const UseContext = () => useContext(Context);
