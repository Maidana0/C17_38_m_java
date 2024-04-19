import { createContext, useContext, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [estadoUsuario, setEstadoUsuario] = useState(0);
  const [estadoHeader, setEstadoHeader] = useState(0);
  const [user, setUser] = useState(null);
  const [userCreated, setUserCreated] = useState();
  const [userP, setUserP] = useState(0);

  function imagenMov ( valor ){
    if (valor == "Préstamo") return "https://res.cloudinary.com/dabb8jxxh/image/upload/v1713313165/Cashfly/Group_52_wrc0rg.svg"
    else if (valor == "Inversión") return "https://res.cloudinary.com/dabb8jxxh/image/upload/v1713313165/Cashfly/Group_53_vibqwt.svg"
    else if (valor == "Depósito") return "https://res.cloudinary.com/dabb8jxxh/image/upload/v1713313165/Cashfly/Group_55_udxvbz.svg"
    else if (valor == "Transferencia") return "https://res.cloudinary.com/dabb8jxxh/image/upload/v1713313170/Cashfly/Group_54_th3mhc.svg"
    else return ""
  }

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
        imagenMov,
        userCreated,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const UseContext = () => useContext(Context);
