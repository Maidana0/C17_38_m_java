import "./login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState, useEffect } from "react";
import { Context } from "../context/Context";
import { useInView, motion } from "framer-motion";
import cIA from "../../contactos.json";

function Login() {
  const {
    setUser,
    setContactosIA,
    data,
    setData,
    setDataIn,
    setDataPr,
    dataPr,
    dataIn,
    getDate,
    firstAddMov,
    setFirstAddMov
  } = useContext(Context);
  const navigate = useNavigate();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [confirmL, setConfirmL] = useState(false);
  const [errorL, setErrorL] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(info) {
    // Realiza acciones adicionales, como enviar datos al servidor
    findData(info);
  }

  function findData(info) {
    fetch("http://localhost:5000/users/login", {
      method: "POST",
      body: JSON.stringify({ email: info[0].value, password: info[1].value }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((datos) => {
        if (datos) {
          setUser(datos);
          setContactosIA(cIA);
          setData({ ...data, nombre: datos.name, email: datos.email });
        } else {
          throw new Error("No hay prestamos");
        }
      })
      .catch((error) => {console.log(error); setErrorL(true)});
  }

  function cargarDatos() {
    fetch("http://localhost:5000/loan", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((prestamos) => {
        setDataPr(
          prestamos.filter((prestamo) => prestamo.user.email == data.email)
        );
      });

    fetch("http://localhost:5000/investment", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((inversiones) => {
        setDataIn(
          inversiones.filter((inversion) => inversion.user.email == data.email)
        );
      });
  }

  useEffect(() => {
    if (dataIn[0] == null) {
    } else {
        dataIn.map((inv) =>
          data.movimientos.push({
            tipo: "Inversión",
            monto: inv.invested_amount,
            fecha: getDate(),
            saldo: inv.available_amount,
            estado: true,
          })
        );
    }
  }, [dataIn]);

  useEffect(() => {
    if (dataPr[0] == null) {
    } else {
        dataPr.map((pr) =>
          data.movimientos.push({
            tipo: "Préstamo",
            monto: pr.amount,
            fecha: getDate(),
            saldo: data.saldo,
            estado: true,
          })
        );

        navigate("/userpanel");      
    }
  }, [dataPr]);

  return (
    <div className="login">
      <div className="loginCont" ref={ref}>
        <motion.div
          className="panelLogin"
          initial={{ width: "20%", opacity: 0 }}
          animate={
            isInView
              ? { width: "55%", opacity: 1 }
              : { width: "20%", opacity: 0 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="navegacionL">
            <p onClick={() => navigate("/")}>Volver Atras</p>
            <img
              src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280918/Cashfly/help_cdyxt2.svg"
              alt=""
            />
          </div>
          <div className="loginElementos">
            <div className="tituloLogin">
              <h1 className="tituloL1">Inicio de sesión:</h1>
              <h1 className="tituloL1">¡Te damos la Bienvenida!</h1>
              <p className="parrafoL1">
                Indicanos tu email con el que te registraste y tu constraseña.
              </p>
            </div>

            <form
              className="formL"
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit(e.target);
              }}
            >
              <div className="formLoginCont">
                <input
                  className="inputP"
                  type="email"
                  placeholder="Correo electrónico"
                  {...register("email", {
                    required: true,
                    pattern: /[A-Za-z0-9_.-]{8,15}/g, // Expresión regular para validar el correo
                  })}
                />
                {errors.email && <span>Ingresa un correo válido</span>}

                <input
                  className="inputP"
                  type="password"
                  placeholder="Contraseña"
                  {...register("password", {
                    required: true,
                    pattern: /[A-Za-z0-9_.-]{8,15}/g,
                  })}
                />
                {errors.password && (
                  <span>
                    * La contraseña debe ser de 8 a 15 dígitos y con distintos
                    tipos de caracteres
                  </span>
                )}

                <div className="validacionesInfo">
                  <div className="validacionesItem">
                    <img
                      src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713283505/Cashfly/listItem_ceyvf0.svg"
                      alt=""
                    />
                    <p>Al menos una letra minúscula</p>
                  </div>
                  <div className="validacionesItem">
                    <img
                      src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713283505/Cashfly/listItem_ceyvf0.svg"
                      alt=""
                    />
                    <p>Contener 8 o más caracteres</p>
                  </div>
                  <div className="validacionesItem">
                    <img
                      src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713283505/Cashfly/listItem_ceyvf0.svg"
                      alt=""
                    />
                    <p>Al menos una letra mayúscula</p>
                  </div>
                  <div className="validacionesItem">
                    <img
                      src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713283505/Cashfly/listItem_ceyvf0.svg"
                      alt=""
                    />
                    <p>Al menos un carácter numérico</p>
                  </div>
                </div>
                <div className="linkRegLogin">
                  <p>¿Aún no estás registrado? </p>
                  <a href="/registrarme"> Registrate aquí</a>
                </div>
              </div>

              {confirmL === false ? (
                <button type="submit" onClick={() => errorL === true ? setConfirmL(false) : setConfirmL(true)}>
                  Login
                </button>
              ) : (
                <button onClick={() => cargarDatos()}>Ingresar</button>
              )}

              {errorL === true && <p style={{color: "red"}}>Datos incorrectos, revise su correo y contraseña.</p>}
            </form>
          </div>
        </motion.div>
        <motion.div
          className="panelInfoL"
          initial={{ width: "80%", opacity: 0 }}
          animate={
            isInView
              ? { width: "45%", opacity: 1 }
              : { width: "80%", opacity: 0 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="infoLCont"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
          >
            <div className="logoLCont">
              <img
                src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280914/Cashfly/Frame_61_rqiigo.svg"
                alt=""
              />
            </div>
            <div className="descripcionL">
              <h2 className="tituloL2">Crece con tus finanzas:</h2>
              <p className="parrafoL2">
                La primera P2P en enseñarte a pedir tu primer préstamo personal
                y a hacer crecer tu dinero.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Login;
