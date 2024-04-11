import { useState } from "react"
import ProgressBar from "../components/progressBar/ProgressBar"
import ChooseAmount from "../components/investment/ChooseAmount"
import WhereInvert from "../components/investment/WhereInvert"
import HowMuch from "../components/investment/HowMuch"
import styles from "../components/investment/styles.module.css"
const Investment = () => {
    const [currentStep, setCurrentStep] = useState(1)
    return (
        <div className={styles.investment_contain}>
            <ProgressBar currentStep={currentStep} setStep={setCurrentStep} totalSteps={4}>
                <div className={styles.step_contain}>

                    {
                        currentStep == 1
                        && <ChooseAmount />
                    }

                    {
                        currentStep == 2
                        && <WhereInvert />
                    }

                    {
                        currentStep == 3
                        && <HowMuch />
                    }


                    {
                        currentStep == 4
                        && <div>

                        </div>

                    }
                </div>
            </ProgressBar>
        </div>
    )
}

export default Investment