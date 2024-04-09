import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./prestamo.css";
import "./selectorprestamo.css";
function FormularioPrestamo() {
  let navigate = useNavigate();
  const [amount, setAmount] = useState(70000);
  const [inputValue, setInputValue] = useState('70,000');
  const [errorMessage, setErrorMessage] = useState("");
  const [startDate, setStartDate] = useState('');
  const min = 70000;
  const max = 150000;
  useEffect(() => {
    // Calcula la fecha actual más diez días
    const date = new Date();
    date.setDate(date.getDate() + 20); // Añade 10 días

    // Opciones para el formato de fecha que deseas
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    // Formatea la fecha a un string y actualiza el estado
    setStartDate(date.toLocaleDateString('es-CO', options));
  }, []); // Dependencias vacías para que solo se ejecute una vez
  useEffect(() => {
    // Actualizar el valor del input cuando amount cambia
    setInputValue(amount.toLocaleString());
  }, [amount]);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { id: 1, text: '12 cuotas', value: Math.round(amount / 12) },
    { id: 2, text: '6 cuotas', value: Math.round(amount / 6) },
    { id: 3, text: '3 cuotas', value: Math.round(amount / 3) },
  ];

  const handleInputChange = (e) => {
    const inputtedValue = e.target.value.replace(/[^0-9]/g, ''); // Solo permite números
    setInputValue(e.target.value); // Actualiza inputValue con lo que el usuario escribe

    if (inputtedValue === '') {
      setErrorMessage("El monto no puede estar vacío.");
      // No actualizamos 'amount' si el campo está vacío
    } else {
      const numericValue = parseInt(inputtedValue, 10);
      if (numericValue < min) {
        setErrorMessage(`El monto debe ser al menos $${min.toLocaleString()}.`);
      } else if (numericValue > max) {
        setErrorMessage(`El monto no debe exceder $${max.toLocaleString()}.`);
      } else {
        setAmount(numericValue); // Solo actualiza 'amount' con valores válidos
        setErrorMessage(""); // Limpia el mensaje de error si el valor es válido
      }
    }
  };

  const handleSliderChange = (e) => {
    setAmount(Number(e.target.value));
    setErrorMessage(""); // Limpia el mensaje de error cuando se ajusta el slider
  };
  // const handleButtonClick = () => {
  //   navigate('/Validate-Date'); // Usa el método navigate para cambiar de ruta
  // };
  return (
    <div className="Prestamo">

      <div className="loan-amount-slider">
        <p className="p1">Elige el monto que necesitas, y elige una opción de pago.</p>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <input
          type="text"
          className="amount-input"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="labels">
          <span>${min.toLocaleString()}</span>
          <input className="rangebar"
            type="range"
            min={min}
            max={max}
            value={amount}
            onChange={handleSliderChange}
          />
          <span>${max.toLocaleString()}</span>
        </div>

        <p className="p2">Como preferis devolverlo?</p>
        <div className="textos">
          <p className="p3">Comenzá a pagarlo el {startDate}</p>
        </div>
        <div className="payment-options">
          {options.map((option) => (
            <div key={option.id} className="payment-option">
              <input
                type="radio"
                id={`option-${option.id}`}
                name="payment"
                checked={selectedOption === option.id}
                onChange={() => setSelectedOption(option.id)}
              />
              <label htmlFor={`option-${option.id}`}>
                <span className="option-text">{option.text}</span>
                <span className="option-value">${option.value.toLocaleString()}</span>
              </label>
            </div>
          ))}
        </div>
        {/* <div className="botonContinue"><button
          onClick={handleButtonClick}>

          Continuar
        </button></div> */}

      </div>

    </div>
  );
}

export default FormularioPrestamo;
