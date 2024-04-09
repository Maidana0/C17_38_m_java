import { useState } from "react"
import ProgressBar from "../components/progressBar/ProgressBar"
import FormularioPrestamo from "../components/PrestamoSoli/SolicitudPrestamo"
import ValidateDatePrest from "../components/ValidateDate/ValidateDatePrest"

const Solucitud= () => {
    const [step, setStep ] = useState(1)
  return (
    <div style={{backgroundColor:"#fff", marginTop:"3rem"}}>
        <ProgressBar currentStep={step} totalSteps={4} setStep={setStep}>

        step = 1
        componente 1
        {
            step == 1 &&
            <FormularioPrestamo />
        }


        step = 2
        componente 2
        {
            step == 2 &&
            <ValidateDatePrest />
        }

        step = 3
        componente 3

        </ProgressBar>

    </div>
  )
}

export default Solucitud