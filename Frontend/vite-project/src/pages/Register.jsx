import { useState } from "react";
import ProgressBar from "../components/progressBar/ProgressBar";
import styles from "../components/investment/styles.module.css";
import Verification from "../components/register/verificationIdentity/Verification";
import RegisterComponent from "../components/register/Register";
import DoneRegister from "../components/register/registerDone/DoneRegister";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className={styles.investment_contain}>
      <ProgressBar
        currentStep={currentStep}
        setStep={setCurrentStep}
        totalSteps={3}
      >
        <div className={styles.step_contain}>
          {currentStep == 1 && <RegisterComponent />}
          {currentStep == 2 && <Verification />}
          {currentStep == 3 && <DoneRegister />}
        </div>
      </ProgressBar>
    </div>
  );
};

export default Register;
