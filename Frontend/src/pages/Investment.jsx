import { useState } from "react"
import styles from "../components/investment/styles.module.css"
import ProgressBar from "../components/progressBar/ProgressBar"
import StepOne from "../components/investment/StepOne"
import StepTwo from "../components/investment/StepTwo"
import StepThree from "../components/investment/StepThree"
import { Link } from 'react-router-dom'
import { UseContext } from "../components/context/Context"
import { createInvestment, transformDto } from "../components/investment/fetch"

const SERVER_ACTIVE = true

const Investment = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [totalFunds, setTotalFunds] = useState(100)
    const [message, setMessage] = useState({ success: false, message: "" })
    const [investmentValue, setInvestmentValue] = useState(0)
    const [invertTo, setInvertTo] = useState(false)
    const { user } = UseContext()

    const handleInvertToClick = (objInvert) => {
        if (investmentValue <= 100) {
            window.scrollTo(0, 0);
            setMessage({ success: true, message: "El monto minimo a invertir debe ser mayor a 100." })
            return
        }
        setCurrentStep(prevStep => prevStep < 4 ? prevStep + 1 : prevStep);
        setInvertTo({ ...objInvert, inversion: investmentValue, fondos: totalFunds, user_id: user?.id ?? 1 })
        window.scrollTo(0, 0);
        setMessage({ success: false, message: "" })
    }

    const finishInvert = async () => {
        if (invertTo && SERVER_ACTIVE) {
            const dataInvestment = transformDto(invertTo)
            const data = await createInvestment(dataInvestment)
            if (data.success) {
                setMessage({ success: true, message: data.mensaje })
            } else {
                console.log(data);
                setMessage({ success: true, message: data?.mensaje ?? "Ocurrio un error" })
            }
        }
    }

    const stepsName = ["Elegí tus fondos", "Elegí cuanto y donde invertir", "Confirma los detalles", "Inversion realizada"]
    return (
        <div className={styles.investment_contain}>
            <ProgressBar
                currentStep={currentStep}
                setStep={setCurrentStep}
                totalSteps={4}
                arrayWithNameSteps={stepsName}
                BooleanNextButton={currentStep != 2}
                handleSubmitButton={currentStep == 3 && finishInvert}
                textButton={currentStep == 3 && "Realizar inversión"}
                moreButtons={currentStep >= 3 &&
                    <button style={{ backgroundColor: "#fff", border: "solid 1px black", color: "black" }}>
                        Necesito ayuda
                    </button>
                }
            //
            >
                <div className={styles.step_contain}>

                    {
                        currentStep == 1
                        && <StepOne styles={styles} totalFunds={totalFunds} setTotal={setTotalFunds} />
                    }

                    {
                        currentStep == 2
                        && <>
                            {message.success && <div><small style={{ color: "darkred", fontSize: ".8em" }}>{message.message}</small></div>}
                            <StepTwo handleInvert={handleInvertToClick} investmentValue={investmentValue} setInvestmentValue={setInvestmentValue} totalFunds={totalFunds} styles={styles} />
                        </>
                    }

                    {
                        currentStep == 3
                        && <StepThree dataToInvert={invertTo} styles={styles} />
                    }


                    {
                        currentStep == 4
                        && <div className={styles.success_step_four}>
                            {message.success && <div style={{ marginBottom: "1rem" }}><small style={{ color: "#A774FF", fontSize: ".8em" }}>{message.message}</small></div>}
                            <img alt="success-icon" src="images/OK.svg" />
                            <h2>¡Listo!</h2>
                            <h3>Inversión realizada</h3>
                            <p style={{ marginBottom: "2rem" }}>Ahora te llegará un correo electrónico con la confirmación de tu inversión</p>


                            <Link to={user ? "/userPanel" : "/"} style={{
                                backgroundColor: "black",
                                fontFamily: "var(--fira)",
                                color: "white",
                                borderRadius: "2rem",
                                padding: "1rem 3rem",
                                fontSize: "1rem",
                                width: "218.31px",
                                textDecoration: "none",
                                fontWeight: "bold"
                            }}>
                                Volver al inicio
                            </Link>

                        </div>

                    }
                </div>
            </ProgressBar>
        </div>
    )
}

export default Investment