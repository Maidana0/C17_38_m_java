import { useForm } from "react-hook-form";
import "./Email.css";
import { Context } from "../../context/Context";
import { useContext } from "react";

function Email() {
  const { setUserCreated, userCreated } = useContext(Context);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(e) {
    e.preventDefault();
    /*

    setUserCreated(...userCreated, {
      email: data.email,
      password: data.password,
      consent: data.consent,
    });
    console.log("From Email: ", userCreated);*/
  }
  return (
    <>
      <div className="email-container">
        <div className="column-1-email">
          <div className="registerCont-email">
            <p className="header-Email">Soy nuevx aquí? Registrate!</p>
            <p className="context-email">
              Esto solo tomará unos minutos.
              <br />
              Por favor, completa todos los campos para
              <br /> continuar con el siguiente paso.
            </p>
            <form className="form-email" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                onChange={(e) =>
                  setUserCreated([...userCreated, { email: e.target.value }])
                }
                className="quit-border-email"
                placeholder="Correo electrónico"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                })}
              />
              {errors.email && (
                <span className="error-email">* Ingresa un correo válido</span>
              )}

              <input
                className="quit-border-email"
                type="password"
                onChange={(e) =>
                  setUserCreated([...userCreated, { password: e.target.value }])
                }
                placeholder="Contraseña"
                {...register("password", {
                  required: true,
                  pattern: /[A-Za-z0-9_.-]{8,15}/g,
                })}
              />
              {errors.password && (
                <span className="error-email">
                  * Al menos una letra minúscula <br />
                  * Contener 8 o más caracteres <br />
                  * Al menos una letra mayúscula <br />* Al menos un carácter
                  numérico
                </span>
              )}

              <div className="checkbox-container-email">
                <input
                  type="checkbox"
                  id="consent"
                  onChange={(e) =>
                    setUserCreated([
                      ...userCreated,
                      { consent: e.target.value },
                    ])
                  }
                  {...register("consent", { required: false })}
                />
                <label htmlFor="consent">
                  Confirmo que he leído y acepto la Política de privacidad y los
                  Términos de uso.
                </label>
                {errors.consent && (
                  <span className="error-email">
                    * Este campo es obligatorio y debe de coincidir con la
                    primera
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Email;
