import { createContext, useContext, useState, useEffect } from "react";
import dt from "../../data.json"

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [estadoUsuario, setEstadoUsuario] = useState(0);
  const [firstAddMov, setFirstAddMov] = useState(false);
  const [estadoHeader, setEstadoHeader] = useState(0);
  const [userP, setUserP] = useState(0);
  const [user, setUser] = useState(null);
  const [data, setData] = useState(dt)
  const [dataIn, setDataIn] = useState([])
  const [dataPr, setDataPr] = useState([])
  const [banco, setBanco] = useState('');
  const [cbu, setCbu] = useState('');
  const [userCreated, setUserCreated] = useState({
    name: "",
    surname: "",
    dni: "",
    email: "",
    cellphone: "",
    consent: "",
    password: ""
  });
  const [contactosIA, setContactosIA] = useState([]);

  useEffect(()=>{
    data.movimientos.sort(function (b, a) {
      if (a.fecha > b.fecha) {
        return 1;
      }
      if (a.fecha < b.fecha) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }, [data])

  function getDate (){
    let fecha = new Date();
    let mes = fecha.getUTCMonth() + 1;
    let dia = fecha.getUTCDate();
    let año = fecha.getUTCFullYear();
    return año + "/" + mes + "/" + dia;
  }

  function imagenMov(valor) {
    if (valor == "Préstamo")
      return "https://res.cloudinary.com/dabb8jxxh/image/upload/v1713313165/Cashfly/Group_52_wrc0rg.svg";
    else if (valor == "Inversión")
      return "https://res.cloudinary.com/dabb8jxxh/image/upload/v1713313165/Cashfly/Group_53_vibqwt.svg";
    else if (valor == "Depósito")
      return "https://res.cloudinary.com/dabb8jxxh/image/upload/v1713313165/Cashfly/Group_55_udxvbz.svg";
    else if (valor == "Transferencia")
      return "https://res.cloudinary.com/dabb8jxxh/image/upload/v1713313170/Cashfly/Group_54_th3mhc.svg";
    else return "";
  }

  return (
    <Context.Provider
      value={{
        estadoUsuario,
        estadoHeader,
        user,
        userP,
        contactosIA,
        data,
        dataIn,
        dataPr,
        firstAddMov,
        setFirstAddMov,
        getDate,
        setDataIn,
        setDataPr,
        setContactosIA,
        setData,
        setEstadoUsuario,
        setEstadoHeader,
        setUser,
        setUserP,
        imagenMov,
        userCreated,
        setUserCreated,
        banco, // Agrega esto
        setBanco, // Agrega esto
        cbu, // Agrega esto
        setCbu, // Agrega esto
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const UseContext = () => useContext(Context);
