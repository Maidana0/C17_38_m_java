import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./register.css";
import { useContext } from "react";
import { Context } from "../context/Context";

function Register() {
  const { setUserCreated } = useContext(Context);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    const object = {
      name: data.name,
      surname: data.surname,
      dni: data.dni,
      email: data.email,
      cellphone: data.phone,
      password: data.password,
    };
    fetch("http://localhost:5000/users/create", {
      method: "POST",
      body: JSON.stringify(object),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("USER CREATED: ", data);
        setUserCreated(data);
      })
      .catch((error) => console.log(error))
      .finally(() => navigate("/verifi"));
  }
  return (
    <>
      <div className="register">
        <div className="column-1">
          <div className="header_navigation">
            <div>Help</div>
            <div>info</div>
          </div>

          <div className="registerCont">
            <h2>Información personal </h2>
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
                <span className="error">
                  * El campo nombre es obligatorio y solo debe contener letras
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
              {errors.surname && (
                <span className="error">
                  * El campo apellido es obligatorio y solo deebe contener
                  letras
                </span>
              )}

              <input
                type="text"
                className="quit-border"
                placeholder="DNI/ ID"
                {...register("dni", {
                  required: true,
                  pattern: /^\d{8}$/,
                })}
              />
              {errors.dni && (
                <span className="error">
                  * El campo DNI es obligatorio y solo debe contener 8 dígitos
                  númerico
                </span>
              )}

              <input
                type="email"
                className="quit-border"
                placeholder="Correo electrónico"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Expresión regular para validar el correo
                })}
              />
              {errors.email && (
                <span className="error">* Ingresa un correo válido</span>
              )}

              <input
                type="text"
                className="quit-border"
                placeholder="Celular"
                {...register("phone", { required: true, pattern: /^[0-9]+$/ })}
              />
              {errors.phone && (
                <span className="error">
                  * El contacto solo debe tener caracteres númericos
                </span>
              )}

              <input
                className="quit-border"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  pattern:
                    /*/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/*/ /[A-Za-z0-9_.-]{8,15}/g,
                })}
              />
              {errors.password && (
                <span className="error">
                  * Al menos una letra minúscula <br />
                  * Contener 8 o más caracteres <br />
                  * Al menos una letra mayúscula <br />* Al menos un carácter
                  numérico
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
                  <span className="error">
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

        <div className="column-2">
          <div className="logoLeftSide">
            <img
              className="logo_cashFly"
              src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280914/Cashfly/Frame_61_rqiigo.svg"
              alt="Logo Cashfy"
            />
          </div>
          <div className="descriptionL">
            <p className="contextL">
              ¡Invierte en proyectos emocionantes y haz crecer tu dinero
              mientras apoyas a otros!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
