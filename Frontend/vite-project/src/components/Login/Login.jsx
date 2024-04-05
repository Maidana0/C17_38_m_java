import React from "react";
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
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Correo electrónico"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Expresión regular para validar el correo
            })}
          />
          {errors.email && <span>Ingresa un correo válido</span>}

          <input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: true,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/,
            })}
          />
          {errors.password && (
            <span>
              * La contraseña debe ser de 8 a 15 dígitos y con distintos tipos
              de caracteres
            </span>
          )}

          <div className="btn-container">
            <button type="submit">Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
