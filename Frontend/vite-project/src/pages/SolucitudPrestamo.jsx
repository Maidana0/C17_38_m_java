import { useState } from "react"
import ProgressBar from "../components/progressBar/ProgressBar"
import FormularioPrestamo from "../components/PrestamoSoli/SolicitudPrestamo"
import ValidateDatePrest from "../components/ValidateDate/ValidateDatePrest"
import ResumePrest from "../components/ConfirmPrest/ResumePrest";
import Finalprest from "../components/EndPrest/Finalprest";
import CustomButton from "../components/general/Button";

const Solucitud = () => {
    const [step, setStep] = useState(1)
    const [amount, setAmount] = useState(70000);
    const [selectedOption, setSelectedOption] = useState(null);
    const [startDate, setStartDate] = useState('');
    const options = [
        { id: 1, text: '12 cuotas', value: Math.ceil(amount / 12) },
        { id: 2, text: '6 cuotas', value: Math.ceil(amount / 6) },
        { id: 3, text: '3 cuotas', value: Math.ceil(amount / 3) },
    ];


    return (
        <div style={{ backgroundColor: "#fff", marginTop: "3rem" }}>
            <ProgressBar
                currentStep={step}
                totalSteps={4}
                setStep={setStep}
                textButton={step == 3 ? "Sacar prestamo" : false}
                moreButtons={ step > 1 && <CustomButton />}
            >

                {
                    step == 1 &&
                    <FormularioPrestamo amount={amount} setAmount={setAmount} options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} startDate={startDate} setStartDate={setStartDate} />
                }

                {
                    step == 2 &&
                    <ValidateDatePrest />
                }


                {
                    step == 3 &&
                    <ResumePrest amount={amount} setAmount={setAmount} options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} startDate={startDate} setStartDate={setStartDate} />

                }

                {
                    step == 4 &&
                    <Finalprest />
                }
            </ProgressBar>
        </div>
    )
}

export default Solucitud;