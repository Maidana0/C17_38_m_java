import { useState } from "react";
import "./register.css";

export function Register() {
  //const { registerUser } = useContext(AuthContext);

  const [full_name, setFull_name] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [doc, setDoc] = useState();

  const handleSubmit = async (e) => {
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
  };

  return (
    <>
      <div className="register">
        <h1>Registo de usuario</h1>
        <p>Crear una cuenta nueva</p>
        <form>
          <input
            type="text"
            placeholder="Nombre completo"
            value={full_name}
            onChange={(e) => setFull_name(e.target.value)}
          />
          <input
            type="text"
            placeholder="DNI/Id"
            value={dni}
            onChange={(e) => setDni(e.target.value)}
          />
          <input
            type="email"
            value={email}
            placeholder="Correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Celular"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Clave"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            value={password2}
            placeholder="Confirmación de clave"
            onChange={(e) => setPassword2(e.target.value)}
          />
          <label htmlFor="doc">
            * Agrega un documento para verificar si eres apto para un prestamo
          </label>
          <input
            type="file"
            placeholder="Documento de solvencia"
            onChange={(e) => setDoc(e.target.files[0])}
          />
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="consent"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />{" "}
            <label htmlFor="consent">
              ¿Le gustaría guardar sus datos para un préstamo posterior?
            </label>
          </div>
          <div className="btn-container">
            <button type="button" onClick={handleSubmit}>
              Registrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
