import "./verification.css";

function Verification() {
  return (
    <>
      <div className="verifyContainer">
        <p className="title-verification">Verificación de identidad</p>
        <p className="context_verification">
          Para completar la configuración de tu cuenta,
          <br /> solo necesitamos verificar tu identidad.
        </p>

        <button type="button" className="btn-verify" disabled>
          Verificar mi identidad
        </button>

        <p className="info_to_userL">
          Utilizamos Veriff, un servicio de verificación de identidad en línea
          rápido y seguro. Requiere acceso a la cámara web o al teléfono y a un
          documento de identificación.
        </p>
      </div>
    </>
  );
}

export default Verification;
