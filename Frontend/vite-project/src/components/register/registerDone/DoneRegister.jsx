import { Link } from "react-router-dom";
import "./done.css";

function DoneRegister() {
  return (
    <div className="doneRegister">
      <div className="column-1">
        <div className="doneContainer">
          <img
            className="custom-circle"
            src={"images/OK.svg"}
            height={20}
            alt="Imagen de terminado "
          />

          <h1 className="read">!Listo¡</h1>

          <p className="first_info">Estás a un paso de comenzar.</p>
          <p className="second_info">Creaste exitosamente tu cuenta.</p>
          <Link to="/iniciar-sesion">
            <button type="button" className="btn-verify">
              Empecemos
            </button>
          </Link>
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
            ¡Descubre emocionantes oportunidades de préstamo e inversión y
            alcanza tus metas financieras de forma divertida!
          </p>
        </div>
      </div>
    </div>
  );
}

export default DoneRegister;
