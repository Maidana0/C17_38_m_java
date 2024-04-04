import { useState } from "react";
import "./prestamo.css";
function FormularioPrestamo() {
    const [monto, setMonto] = useState(5000);
    const [plazo, setPlazo] = useState(12);
  
    // Constantes para los cálculos (pueden ser ajustadas o dinámicas)
    const tasaInteresAnual = 0.05; // Ejemplo: 5% de interés anual
    const cuotaInicialPorcentaje = 0.1; // Ejemplo: 10% de cuota inicial
  
    // Cálculos
    const cuotaInicial = monto * cuotaInicialPorcentaje;
    const montoFinal = monto - cuotaInicial; // Monto después de la cuota inicial
    const tasaInteresMensual = tasaInteresAnual / 12;
    const cuotaMensual = montoFinal * (tasaInteresMensual / (1 - Math.pow(1 + tasaInteresMensual, -plazo)));
    const ingresosRequeridos = cuotaMensual * 3; // Ejemplo: se requiere que la cuota mensual no supere 1/3 de los ingresos
  
    return (
      <div className="formulario">
        <h2>Solicitud de Préstamo</h2>
        
        {/* Entrada y slider para el monto */}
        <label htmlFor="monto">Monto a solicitar:</label>
        <input type="number" id="monto" value={monto} onChange={(e) => setMonto(Number(e.target.value))}/>
        <input type="range" min="1000" max="10000" value={monto} step="500" onChange={(e) => setMonto(Number(e.target.value))}/>
        <p>Monto actual: ${monto}</p>
        
        {/* Entrada para el plazo */}
        <label htmlFor="plazo">Plazo (en meses):</label>
        <input type="number" id="plazo" value={plazo} onChange={(e) => setPlazo(Number(e.target.value))}/>
        <p>Plazo seleccionado: {plazo} meses</p>
  
        {/* Sección de resumen */}
        <div style={{marginTop: '20px'}}>
          <h3>Resumen del Préstamo</h3>
          <p>Cuota inicial: ${cuotaInicial.toFixed(2)}</p>
          <p>Tasa de interés mensual: {(tasaInteresMensual * 100).toFixed(2)}%</p>
          <p>Cuota mensual: ${cuotaMensual.toFixed(2)}</p>
          <p>Ingresos requeridos: ${ingresosRequeridos.toFixed(2)}</p>
        </div>
        <button onClick={() => console.log(`Solicitando préstamo de $${monto} a ${plazo} meses`)}>Solicitar Préstamo</button>
      </div>
    );
  }
  
  export default FormularioPrestamo;
