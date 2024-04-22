import { useState } from "react";
import "./ValidateDatePrest.css";
import { useNavigate } from 'react-router-dom';

function ValidateDatePrest({setArchivoDNI}) {
  // let navigate = useNavigate();

  const [banco, setBanco] = useState('');
  const [cbu, setCbu] = useState('');
  
  const bancos = ["Santander Rio", "Galicia", "Nacion", "Banco Patagonia"];
  const handleBancoChange = (event) => {
    setBanco(event.target.value);
  };
  const handleCbuChange = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, '');
    setCbu(value);
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.match('image.*')) {
      setArchivoDNI(file);
    } else {
      setArchivoDNI(null);
      alert('Solo se aceptan imágenes.');
    }
  };
  // const handleButtonClick = () => {
  //   navigate('/Validate-Date'); // Usa el método navigate para cambiar de ruta
  // };

  return (
    <div className="validate">
      <div className="titulo-validate">
        <p className="titulo">¡Ya casi estás!</p>
        <p className="titulo">Ahora necesitamos validar tus datos </p>
        <p className="p3Validate">Por favor indicanos tu banco y CBU y adjunta la foto de tu DNI. Ya con esto podemos poner en marcha la solicitud de tu préstamo.</p>
        <div className="textos">
          <p className="p4Validate"> <img src="images/icons/candado.svg" alt="" />Tus datos se guardarán de forma segura.</p>
        </div>
      </div>
      <div className="opciones-validate">
        {/* Campo desplegable para la selección del banco */}
        <select className="banco-select" value={banco} onChange={handleBancoChange}>
          <option value="">Banco</option>

          {bancos.map((nombreBanco) => (
            <option key={nombreBanco} value={nombreBanco}>
              {nombreBanco}
            </option>
          ))}
        </select>

        {/* Campo de texto para el CBU */}
        <input className="listabancos"
          type="text"
          value={cbu}
          onChange={handleCbuChange}
          placeholder="CBU de tu cuenta"
        />

        {/* Campo de carga de archivo para el DNI */}
        <input className="inp"
          type="file"
          onChange={handleFileChange}
          accept="image/png, image/jpeg"
        />
      </div>
      {/* {<div className="botonayudaValidate"><button
        onClick={handleButtonClick}>
        Necesitas ayuda
      </button></div>} */}














    </div>
  )









}

export default ValidateDatePrest; 