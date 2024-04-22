import { useState } from "react";
import ProgressBar from "../components/progressBar/ProgressBar";
import FormularioPrestamo from "../components/PrestamoSoli/SolicitudPrestamo";
import ValidateDatePrest from "../components/ValidateDate/ValidateDatePrest";
import ResumePrest from "../components/ConfirmPrest/ResumePrest";
import Finalprest from "../components/EndPrest/Finalprest";
import CustomButton from "../components/general/Button";
import { UseContext } from "../components/context/Context";

const Solucitud = () => {
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
  const { user } = UseContext(useState);
  function datosPrestamo() {
    
    let option = options.find((o) => o.id === selectedOption);
    const prestamoData = {
      userId: user.id,
      bank: "dfsdfsdf",
      CBU: "23456734",
      amount: amount,
      interesRate: 0.005,
      file: archivoDNI,
      numberInstallments: Number(option.text.split(" cuotas")[0]),
      installmmentValue: option.value,
    };
    //console.log(user.id);
    fetch("http://localhost:5000/loan/save", {
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
  //console.log(user.id)
  return (
    <div style={{ backgroundColor: "#fff", marginTop: "3rem" }}>
      <ProgressBar
        currentStep={step}
        totalSteps={4}
        setStep={setStep}
        textButton={step == 3 ? "Sacar prestamo" : false}
        moreButtons={step > 1 && <CustomButton />}
        handleSubmitButton={step == 3 && datosPrestamo}
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

        {step == 2 && <ValidateDatePrest setArchivoDNI={setArchivoDNI} />}

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

        {step == 4 && <Finalprest />}
      </ProgressBar>
    </div>
  );
};

export default Solucitud;
