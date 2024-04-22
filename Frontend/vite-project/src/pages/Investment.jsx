import { useState } from "react"
import styles from "../components/investment/styles.module.css"
import ProgressBar from "../components/progressBar/ProgressBar"
import StepOne from "../components/investment/StepOne"
import StepTwo from "../components/investment/StepTwo"
import StepThree from "../components/investment/StepThree"
import { Link } from 'react-router-dom'

const Investment = () => {
    const [currentStep, setCurrentStep] = useState(1)
    const [totalFunds, setTotalFunds] = useState(100)
    const [investmentValue, setInvestmentValue] = useState(0)
    const [invertTo, setInvertTo] = useState(false)


    const handleInvertToClick = (objInvert) => {
        setCurrentStep(prevStep => prevStep < 4 ? prevStep + 1 : prevStep);
        setInvertTo({ ...objInvert, inversion: investmentValue, fondos: totalFunds })
        window.scrollTo(0, 0);
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
                // handleSubmitButton={}
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
                        && <StepTwo handleInvert={handleInvertToClick} investmentValue={investmentValue} setInvestmentValue={setInvestmentValue} totalFunds={totalFunds} styles={styles} />
                    }

                    {
                        currentStep == 3
                        && <StepThree dataToInvert={invertTo} styles={styles} />
                    }


                    {
                        currentStep == 4
                        && <div className={styles.success_step_four}>
                            <img src="images/OK.svg" />
                            <h2>¡Listo!</h2>
                            <h3>Inversión realizada</h3>
                            <p style={{marginBottom:"2rem"}}>Ahora te llegará un correo electrónico con la confirmación de tu inversión</p>


                            <Link to="/" style={{
                                backgroundColor: "black",
                                fontFamily: "var(--fira)",
                                color: "white",
                                borderRadius: "2rem",
                                padding: "1rem 3rem",
                                fontSize: "1rem",
                                width: "218.31px", 
                                textDecoration: "none",
                                fontWeight:"bold"
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