import "./verification.css";

function Verification() {
  const handleVerifyInTime = () => {
    console.log("Verify in time");
  };

  const handleVerifyLate = () => {
    console.log("Verificar después");
  };
  return (
    <>
      <div className="verify">
        <div className="column-1">
          <div className="verifyContainer">
            <h1>Verificación de identidad</h1>
            <p>
              Para completar la configuración de tu cuenta,
              <br /> solo necesitamos verificar tu identidad.
            </p>

            <button
              type="button"
              className="btn-verify"
              onClick={handleVerifyInTime}
            >
              {" "}
              Verificar mi identidad
            </button>
            <button
              type="button"
              className="btn-verify-later"
              onClick={handleVerifyLate}
            >
              Verificar más tarde
            </button>

            <p className="info_to_userL">
              Utilizamos Veriff, un servicio de verificación de identidad en
              línea rápido y seguro. Requiere acceso a la cámara web o al
              teléfono y a un documento de identificación.
            </p>
          </div>
        </div>

        <div className="column-2">
          <div className="logoLeftSide">CashFly</div>
          <div className="descriptionL">
            <p className="contextL">
              ¡Descubre emocionantes oportunidades de préstamo e inversión y
              alcanza tus metas financieras de forma divertida!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Verification;
