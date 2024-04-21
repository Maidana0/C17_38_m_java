import { useState } from "react"
import styles from "../components/investment/styles.module.css"
import ProgressBar from "../components/progressBar/ProgressBar"
import StepOne from "../components/investment/StepOne"
import StepTwo from "../components/investment/StepTwo"
import StepThree from "../components/investment/StepThree"


const Investment = () => {
    const [currentStep, setCurrentStep] = useState(1)
    // TO INVEST
    const [totalFunds, setTotalFunds] = useState(0)
    const [invest, setInvest] = useState(0)

    /*
    EL USUARIO VA A PODER ELEGIR LOS FONDOS Y LA CANTIDAD A INVERTIR QUE VENDRA DE ESOS FONDOS
    FONDOS TOTALES / A INVERTIR
    100 / 50
    */
    //    EJEMPLO
    const miFuncion = () => console.log("Estas en el paso: " + currentStep);
    //    EJEMPLO
    const stepsName = ["Elegí tus fondos", "Elegí cuanto y donde invertir", "Confirma los detalles", "Inversion realizada"]
    return (
        <div className={styles.investment_contain}>
            <ProgressBar
                currentStep={currentStep}
                setStep={setCurrentStep}
                totalSteps={4}
                arrayWithNameSteps={stepsName}
                handleSubmitButton={miFuncion}
                // EJEMPLO
                textButton={currentStep == 1 && "Registrarme"}
                moreButtons={<div style={{ margin: "auto" }}>
                    <button>
                        Otro boton
                    </button>
                </div>}
            //
            >
                <div className={styles.step_contain}>

                    {
                        currentStep == 1
                        && <StepOne styles={styles} />
                    }

                    {
                        currentStep == 2
                        && <StepTwo styles={styles} />
                    }

                    {
                        currentStep == 3
                        && <StepThree styles={styles} />
                    }


                    {
                        currentStep == 4
                        && <div className={styles.success_step_four}>
                            <h3>¡Listo!</h3>
                            <p>Ahora te llegará un correo electrónico con la confirmación de tu inversión</p>
                            <p><small>Este proceso puede tardar hasta 24hs.</small></p>

                            <button>Volver al inicio</button>
                        </div>

                    }
                </div>
            </ProgressBar>
        </div>
    )
}

export default Investment