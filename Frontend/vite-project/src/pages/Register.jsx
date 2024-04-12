import { useState } from "react";
import ProgressBar from "../components/progressBar/ProgressBar";
import styles from "../components/investment/styles.module.css";
import Verification from "../components/register/verificationIdentity/Verification";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className={styles.investment_contain}>
      <ProgressBar
        currentStep={currentStep}
        setStep={setCurrentStep}
        totalSteps={4}
      >
        <div className={styles.step_contain}>
          {currentStep == 1 && <Register />}

          {currentStep == 2 && <Verification />}
        </div>
      </ProgressBar>
    </div>
  );
};

export default Register;
