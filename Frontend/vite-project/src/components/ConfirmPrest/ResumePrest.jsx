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
        <div className="resumen-container" >
            
            <h2>Revisa si esta todo bien</h2>
            <div className="resumen-item ">
                <span ><img src="images/icons/tarjetacredito.svg" alt="" /> Recibis</span>
                <span>{amount}</span>
            </div>
            <div className="resumen-item ">
                <span className="titulo-pagas"> <img src="images/icons/Moneda.svg" alt="" /> Pagas</span>
                <span className="contenido-pagas"> {selectedOption === 1
                    ? `${cuota} x ${Math.round(amount / 12).toLocaleString()}`
                    : selectedOption === 2
                    ? `${cuota} x ${Math.round(amount / 6).toLocaleString()}`
                    : `${cuota} x ${Math.round(amount / 3).toLocaleString()}`}
                Cuotasfijas
                </span>

            </div>
            <div className="resumen-item ">
                <span> <img src="images/icons/billetes.svg" alt="" /> En total debes</span>
                <span>{totalDevo}</span>
            </div>
            <div className="resumen-item ">
                <span> <img src="images/icons/calendario.svg" alt="" /> Pagas la primera cuota el </span>
                <span>{startDate}</span>
            </div>
            <p>Al confirmar estas aceptando los términos condiciones de este préstamo.</p>
        </div>
    )
    }

export default ResumePrest;