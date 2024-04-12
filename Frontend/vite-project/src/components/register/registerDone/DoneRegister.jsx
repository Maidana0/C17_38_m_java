import "./done.css";

function DoneRegister() {
  return (
    <div className="doneRegister">
      <div className="column-1">
        <div className="doneContainer">
          <div className="custom-circle"></div>

          <h1 className="read">!Listo¡</h1>

          <p className="first_info">Estás a un paso de comenzar.</p>
          <p className="second_info">Creaste exitosamente tu cuenta.</p>

          <button type="button" className="btn-verify">
            Empecemos
          </button>
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
  );
}

export default DoneRegister;
