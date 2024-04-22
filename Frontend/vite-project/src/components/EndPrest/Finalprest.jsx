import "./okPrest.css"

function Finalprest() {
    return (
      <div className="Finalprest-container">
        <div className="cuerpo-end">
        <img className="imagen-correo" src="images/icons/listo-prestamo.svg" alt="" />
        <h1>¡Listo!</h1>
        <h2 className="subtitulo-end">Confirmación</h2>
        <h2 className="texto-oculto-end">Ahora fijate en tu correo electrónico que tiene que haber llegado la validación.</h2>
        <p>Estamos trabajando para que tu préstamo se vea reflejado en tu cuenta bancaria en 24hs.</p>
        <button className="inicio-button">Volver al Inicio</button>
        </div>
        
      </div>
    );
  }
  
  export default Finalprest;