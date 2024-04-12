import "./login.css";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Datos del formulario:", data);
    // Realiza acciones adicionales, como enviar datos al servidor
  };

  return (
    <div className="login">
      <div className="loginCont">
        <div className="panelLogin">
          <div className="navegacionL">
            <p>Volver Atras</p>
            <p>Ayuda</p>
          </div>
          <div className="loginElementos">
            <div className="tituloLogin">
              <h1 className="tituloL1">Inicio de sesión:</h1>
              <h1 className="tituloL1">¡Te damos la Bienvenida!</h1>
              <p className="parrafoL1">
                Indicanos tu email con el que te registraste y tu constraseña.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="inputP"
                type="email"
                placeholder="Correo electrónico"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Expresión regular para validar el correo
                })}
              />
              {errors.email && <span>Ingresa un correo válido</span>}

              <input
                className="inputP"
                type="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/,
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
                  Al menos una letra minúscula
                </div>
                <div className="validacionesItem">
                  Contener 8 o más caracteres
                </div>
                <div className="validacionesItem">
                  Al menos una letra mayúscula
                </div>
                <div className="validacionesItem">
                  Al menos un carácter numérico
                </div>
              </div>

              <input
                className="inputP"
                type="text"
                placeholder="Repetir contraseña"
                {...register("password2", {
                  required: true,
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/,
                })}
              />
              {errors.password && (
                <span>
                  * Este campo es obligatorio y debe de coincidir con la primera
                </span>
              )}

              <div className="btn-container">
                <button type="submit">Ingresar</button>
              </div>
            </form>
          </div>
        </div>
        <div className="panelInfoL">
          <div className="infoLCont">
            <div className="logoLCont">CashFly</div>
            <div className="descripcionL">
              <h2 className="tituloL2">Crece con tus finanzas:</h2>
              <p className="parrafoL2">
                La primera P2P en enseñarte a pedir tu primer préstamo personal
                y a hacer crecer tu dinero.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
