import { useState } from "react";
import "./register.css";
import { useForm } from "react-hook-form";

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  /*const [full_name, setFull_name] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [doc, setDoc] = useState();*/

  /*const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(
      "Name: ",
      full_name,
      " DNI: ",
      dni,
      " Email: ",
      email,
      " Phone: ",
      phone,
      " PASSWORD: ",
      password,
      " Re-password: ",
      password2,
      " CHECKED: ",
      isChecked,
      " FILE: ",
      doc
    );
  };*/

  const onSubmit = (data) => {
    console.log("Datos del formulario:", data);
    // Realiza acciones adicionales, como enviar datos al servidor
  };

  return (
    <div className="register">
      <div className="registerCont">
        <h1>Registo de usuario</h1>
        <p>Crear una cuenta nueva</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Nombre completo"
            {...register("full_name", {
              required: true,
              pattern: /^[A-Za-z\s]+$/,
            })}
          />
          {errors.full_name && (
            <span>
              * Este campo es obligatorio y solo deebe contener letras
            </span>
          )}

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
            type="text"
            placeholder="DNI/ ID"
            {...register("dni", { required: true, pattern: /^[a-zA-Z0-9]+$/ })}
          />
          {errors.dni && <span>* Este campo es obligatorio</span>}

          <input
            type="text"
            placeholder="Celular"
            {...register("phone", { required: true, pattern: /^[0-9]+$/ })}
          />
          {errors.phone && (
            <span>* El contacto solo debe tener caracteres númericos</span>
          )}

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

          <input
            type="text"
            placeholder="Repeat password"
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
          <input
            type="file"
            placeholder="Documento de solvencia"
            {...register("doc", { required: true })}
            accept=".pdf, .doc, .docx, .png, jpg"
          />
          {errors.doc && <span>* Debes agregar un documentos</span>}

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
                * Este campo es obligatorio y debe de coincidir con la primera
              </span>
            )}
          </div>
          <div className="btn-container">
            <button type="submit">Registrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
