import "./register.css";
import { useForm } from "react-hook-form";

export function Register() {
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
    <>
      <div className="register">
        <div className="column">
          <div className="registerCont">
            <h1>Información personal </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="quit-border"
                type="text"
                placeholder="Nombre"
                {...register("name", {
                  required: true,
                  pattern: /^[A-Za-z\s]+$/,
                })}
              />
              {errors.name && (
                <span>
                  * Este campo es obligatorio y solo deebe contener letras
                </span>
              )}
              <input
                type="text"
                className="quit-border"
                placeholder="Apellidos"
                {...register("surname", {
                  required: true,
                  pattern: /^[A-Za-z\s]+$/,
                })}
              />
              {errors.surname && <span>Ingresa una fecha válida</span>}

              <input
                type="text"
                className="quit-border"
                placeholder="DNI/ ID"
                {...register("dni", {
                  required: true,
                  pattern: /^[a-zA-Z0-9]+$/,
                })}
              />
              {errors.dni && <span>* Este campo es obligatorio</span>}

              <input
                type="email"
                className="quit-border"
                placeholder="Correo electrónico"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Expresión regular para validar el correo
                })}
              />
              {errors.email && <span>Ingresa un correo válido</span>}

              <input
                type="text"
                className="quit-border"
                placeholder="Celular"
                {...register("phone", { required: true, pattern: /^[0-9]+$/ })}
              />
              {errors.phone && (
                <span>* El contacto solo debe tener caracteres númericos</span>
              )}

              <input
                className="quit-border"
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
                  * La contraseña debe ser de 8 a 15 dígitos y con distintos
                  tipos de caracteres
                </span>
              )}

              <div className="checkbox-container">
                <input
                  type="checkbox"
                  id="consent"
                  {...register("consent", { required: false })}
                />
                <label htmlFor="consent">
                  ¿Le gustaría guardar sus datos para un préstamo posterior?
                </label>
                {errors.consent && (
                  <span>
                    * Este campo es obligatorio y debe de coincidir con la
                    primera
                  </span>
                )}
              </div>
              <div className="btn-container">
                <button type="submit">Registrar</button>
              </div>
            </form>
          </div>
        </div>

        <div className="column">
          <h2 className="title-second-column">Crece con tus finanzas: </h2>
          <p className="context-second-column">
            La primera P2P en enseñarte a pedir tu primer préstamo personal y a
            hacer crecer tu dinero.
          </p>
        </div>
      </div>
    </>
  );
}
