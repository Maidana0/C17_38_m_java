import "./ResumePrest.css"

function ResumePrest(props){

    const {amount, setAmount} = props

    const {selectedOption, setSelectedOption} = props

    const {startDate, setStartDate} = props
    const {options} = props
    
    let  cuota = 0 
    
 
    if (selectedOption === 1) {
        cuota = 12;
      } else if (selectedOption === 2) {
        cuota = 6;
      } else if (selectedOption === 3) {
        cuota = 3;
      }
    
    let value = (amount/cuota)

    const tasaInteres = 0.005;
    let Interes = value*tasaInteres*cuota;
    let totalDevo = (value*cuota)+Interes;
     
    return (
        <div className="resumen-container">
          <h2>Revisa si está todo bien</h2>
          <div className="resumen-item">
            <span><img src="images/icons/tarjetacredito.svg" alt="" /> Recibís</span>
            <span>${amount.toLocaleString('es-AR')}</span>
          </div>
          <div className="resumen-item">
            <span className="titulo-pagas"><img src="images/icons/Moneda.svg" alt="" /> Pagás</span>
            <div className="titulo-pagas-bloque">
              <span className="contenido-pagas">
                {selectedOption === 1
                  ? `${cuota} x $${(amount / 12).toLocaleString('es-AR')}`
                  : selectedOption === 2
                  ? `${cuota} x $${(amount / 6).toLocaleString('es-AR')}`
                  : `${cuota} x $${(amount / 3).toLocaleString('es-AR')}`}
              </span>
              <span className="contenido-pagas-texto">Cuotas fijas</span>
            </div>
          </div>
          <div className="resumen-item">
            <span><img src="images/icons/billetes.svg" alt="" /> En total devolvés</span>
            <span>${totalDevo.toLocaleString('es-AR')}</span>
          </div>
          <div className="resumen-item">
            <span><img src="images/icons/calendario.svg" alt="" /> Pagás la primera cuota el</span>
            <span>{startDate}</span>
          </div>
          <div className="terminos">
            <p>Al confirmar estás aceptando <strong>los términos y condiciones</strong> de este préstamo.</p>
          </div>
        </div>
      );
    }
    

export default ResumePrest;