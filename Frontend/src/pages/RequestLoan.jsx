import { useState } from "react";
import ProgressBar from "../components/progressBar/ProgressBar";
import FormularioPrestamo from "../components/prestamoSoli/SolicitudPrestamo";
import ValidateDatePrest from "../components/validateDate/ValidateDatePrest";
import ResumePrest from "../components/confirmPrest/ResumePrest";
import Finalprest from "../components/endPrest/Finalprest";
import CustomButton from "../components/general/Button";
import { UseContext } from "../components/context/Context";

const RequestLoan = () => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(70000);
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [archivoDNI, setArchivoDNI] = useState(null);
  const options = [
    { id: 1, text: "12 cuotas", value: Math.ceil(amount / 12) },
    { id: 2, text: "6 cuotas", value: Math.ceil(amount / 6) },
    { id: 3, text: "3 cuotas", value: Math.ceil(amount / 3) },
  ];
  
  // const [userData, setUserData] = useState({});
  // const {user } = UseContext(useState);
  const { banco, cbu,  user } = UseContext(useState);
  // const fileToBinaryString = (file) => {
  //   const reader = new FileReader();
  
  //   return new Promise((resolve, reject) => {
  //     reader.onload = () => {
  //       resolve(reader.result);
  //     };
  //     reader.onerror = (error) => {
  //       reject(error);
  //     };
  //     reader.readAsBinaryString(file);
  //   });
  // };
  
  async function saveFile() {
    //const binaryString = await fileToBinaryString(archivoDNI);
    // const formdata = new FormData();
    // formdata.append("userId", user.id);
    // formdata.append("file", archivoDNI);

    
    //console.log(binaryString); // console


    // fetch("http://localhost:5000/file", {
    //   method: "POST",
    //   body: binaryString,
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data: ", data);
    //   })
    //   .catch((error) => console.log(error));
    
  }
  function datosPrestamo(userId) {  // Asumiendo que tienes el ID del usuario como un argumento
    
    let option = options.find((o) => o.id === selectedOption);
    const prestamoData = {
      bank: banco,
      amount: amount,
      interesRate: 0.005,
      numberOfInstallments: Number(option.text.split(" cuotas")[0]),
      userId: user.id,
      cbu: cbu,
    };
    
   
    const url = new URL("http://localhost:5000/loan/Create");
    url.searchParams.append('id', user.id); // Asegúrate de que este es el valor correcto para 'id'

    fetch(url.toString(), {  // Usamos url.toString() para incluir los parámetros de consulta
      method: "POST",
      body: JSON.stringify(prestamoData),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("data: ", data);
    })
    .catch((error) => console.log(error));
}


  return (
    <div style={{ backgroundColor: "#fff", marginTop: "3rem" }}>
      <ProgressBar
        currentStep={step}
        totalSteps={4}
        setStep={setStep}
        textButton={step == 3 ? "Sacar prestamo" : false}
        moreButtons={step > 1 && <CustomButton />}
        handleSubmitButton={step == 3 ? datosPrestamo : step == 2 && saveFile }
      >
        {step == 1 && (
          <FormularioPrestamo
            amount={amount}
            setAmount={setAmount}
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            startDate={startDate}
            setStartDate={setStartDate}
          />
        )}

        {step == 2 && <ValidateDatePrest setArchivoDNI={setArchivoDNI} banco={banco} cbu={cbu}  />}

        {step == 3 && (
          <ResumePrest
            amount={amount}
            setAmount={setAmount}
            options={options}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            startDate={startDate}
            setStartDate={setStartDate}
          />
          
          
        )}

        {step == 4 && <Finalprest />
        }
      </ProgressBar>
    </div>
  );
};

export default RequestLoan;
