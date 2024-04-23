import "./Email.css";
import { Context } from "../../context/Context";
import { useContext } from "react";

function Email() {
  const { setUserCreated, userCreated } = useContext(Context);

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
            <form className="form-email">
              <input
                type="email"
                onChange={(e) =>
                  setUserCreated({ ...userCreated, email: e.target.value })
                }
                className="quit-border-email"
                placeholder="Correo electrónico"
              />

              <input
                className="quit-border-email"
                type="password"
                placeholder="Contraseña"
                onChange={(e) =>
                  setUserCreated({ ...userCreated, password: e.target.value })
                }
              />

              <div className="checkbox-container-email">
                <input
                  type="checkbox"
                  id="consent"
                  onChange={(e) =>
                    setUserCreated({ ...userCreated, consent: e.target.value })
                  }
                />
                <label htmlFor="consent">
                  Confirmo que he leído y acepto la Política de privacidad y los
                  Términos de uso.
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Email;
