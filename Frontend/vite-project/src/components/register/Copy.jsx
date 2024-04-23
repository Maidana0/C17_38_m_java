import { useContext } from "react";
import { Context } from "../context/Context";
import "./register.css";

function Register() {
  const { setUserCreated, userCreated } = useContext(Context);

  function onSubmit(e) {
    e.preventDefault();

    setUserCreated(...userCreated, {
      name: data[0].value,
      surname: data[1].value,
      dni: data[2].value,
      phone: data[3].value,
    }).then(() => console.log("From Register: ", userCreated));
  }
  return (
    <>
      <div className="register-container">
        <div className="column-1-register">
          <div className="registerCont-register">
            <p className="header-register">Información Personal</p>
            <form
              className="registerForm"
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit(e.target);
              }}
            >
              <input
                type="text"
                placeholder="Nombre"
                onChange={setUserCreated()}
              />
              {/* {errors.name && (
                <span className="error">
                  * El campo nombre es obligatorio y solo debe contener letras
                </span>
              )}*/}
              <input
                type="text"
                placeholder="Apellidos"
                value={userCreated.surname}
                {/*{...register("surname", {
                  required: true,
                  pattern: /^[A-Za-z\s]+$/,
                })} */}
              />
              {/*{errors.surname && (
                <span className="error-register">
                  * El campo apellido es obligatorio y solo deebe contener
                  letras
                </span>
              )}*/}

              <input
                type="text"
                placeholder="DNI/ ID"
                {...register("dni", {
                  required: true,
                  pattern: /^\d{8}$/,
                })}
              />
              {/* {errors.dni && (
                <span className="error">
                  * El campo DNI es obligatorio y solo debe contener 8 dígitos
                  númerico
                </span>
              )}*/}

              <input
                type="text"
                placeholder="Celular"
                {...register("phone", { required: true, pattern: /^[0-9]+$/ })}
              />
              {/*{errors.phone && (
                <span className="error">
                  * El contacto solo debe tener caracteres númericos
                </span>
              )}*/}
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
