import { useState } from "react";
import ProgressBar from "../components/progressBar/ProgressBar";
import styles from "../components/investment/styles.module.css";
import Verification from "../components/register/verificationIdentity/Verification";
import RegisterComponent from "../components/register/Register";
import DoneRegister from "../components/register/registerDone/DoneRegister";
import "./Register.css";

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <>
      <div className="register_page">
        <div className="column-1-page">
          <div className="side-navigation-bar">
            <div className="navigation-bar">
              <p>atras</p> <p>help</p>
            </div>
            <div className="registerPanel">
              {currentStep == 1 && <RegisterComponent />}
              {/* {currentStep == 2 && <Verification />}
              {currentStep == 3 && <DoneRegister />} */}
            </div>
          </div>
        </div>
        <div className="column-2-page">
          <div className="logoLeftSide">
            <img
              className="logo_cashFly"
              src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280914/Cashfly/Frame_61_rqiigo.svg"
              alt="Logo Cashfy"
            />
          </div>
          <div className="descriptionL">
            <p className="contextL">
              ¡Invierte en proyectos emocionantes y haz crecer tu dinero
              mientras apoyas a otros!
            </p>
          </div>
        </div>

        {/* <div className="column-1-page">
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
        </div>
        <div className="column-2-page">
          <div className="logoLeftSide">
            <img
              className="logo_cashFly"
              src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280914/Cashfly/Frame_61_rqiigo.svg"
              alt="Logo Cashfy"
            />
          </div>
          <div className="descriptionL">
            <p className="contextL">
              ¡Invierte en proyectos emocionantes y haz crecer tu dinero
              mientras apoyas a otros!
            </p>
          </div>
        </div>
        */}
      </div>
    </>
  );
};

export default Register;
