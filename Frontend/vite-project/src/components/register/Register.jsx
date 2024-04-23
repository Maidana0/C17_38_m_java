import { useContext } from "react";
import { Context } from "../context/Context";
import "./register.css";

function Register() {
  const { setUserCreated, userCreated } = useContext(Context);

  return (
    <>
      <div className="register-container">
        <div className="column-1-register">
          <div className="registerCont-register">
            <p className="header-register">Información Personal</p>
            <form className="registerForm">
              <input
                type="text"
                placeholder="Nombre"
                onChange={(e) =>
                  setUserCreated({ ...userCreated, name: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Apellidos"
                onChange={(e) =>
                  setUserCreated({ ...userCreated, surname: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="DNI/ ID"
                onChange={(e) =>
                  setUserCreated({ ...userCreated, dni: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Celular"
                onChange={(e) =>
                  setUserCreated({ ...userCreated, cellphone: e.target.value })
                }
              />
              {/* <div className="btn-container">
                <button type="submit">Registrar</button>
              </div>*/}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
