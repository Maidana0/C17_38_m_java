import { Link } from "react-router-dom";
import "./done.css";

function DoneRegister() {

  return (
    <div className="doneRegister">
      <div className="column-1-done">
        <div className="doneContainer">
          <img
            className="custom-circle"
            src={"images/OK.svg"}
            height={20}
            alt="Imagen de terminado "
          />

          <h1 className="read">¡Listo!</h1>

          <p>Estás a un paso de comenzar.</p>
          <p>Creaste exitosamente tu cuenta.</p>
          <Link to="/iniciar-sesion">
            <button type="button" className="btn-verify">
              Empecemos
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DoneRegister;
