import { useState, useContext } from "react";
import ProgressBar from "../components/progressBar/ProgressBar";
import Verification from "../components/register/verificationIdentity/Verification";
import RegisterComponent from "../components/register/Register";
import EmailComponent from "../components/register/email/Email";
import DoneRegister from "../components/register/registerDone/DoneRegister";
import "./Register.css";
import { Context } from "../components/context/Context";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { setUserCreated, userCreated } = useContext(Context);
  const [currentStep, setCurrentStep] = useState(1);

  const navigate = useNavigate();

  function onSubmit() {
    console.log("DESDE EL PRINCIPAL", userCreated);
    if (userCreated.consent) {
      delete userCreated.consent;
    }

    fetch("http://localhost:5000/users/create", {
      method: "POST",
      body: JSON.stringify(userCreated),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.log(error))
      .finally(() =>
        setUserCreated({
          name: "",
          surname: "",
          dni: "",
          email: "",
          cellphone: "",
          password: "",
          consent: false,
        })
      );
  }

  const back = () => {
    if (currentStep === 1) {
      navigate("/");
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <div className="register_page ">
        <div className="column-1-page">
          <div className="side-navigation-bar">
            <div className="navigation-bar">
              <span onClick={back}>
                {" "}
                <img
                  src="images/icons/arrow_back.svg"
                  alt="Volver (arrow_back)"
                />{" "}
                Volver atrás
              </span>{" "}
              <span>
                <img
                  src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280918/Cashfly/help_cdyxt2.svg"
                  alt="Ayuda"
                />
              </span>
            </div>
            <div className="registerPanel">
              <ProgressBar
                currentStep={currentStep}
                totalSteps={4}
                setStep={setCurrentStep}
                textButton={"Continuar"}
                handleSubmitButton={currentStep === 3 && onSubmit}
              >
                {currentStep == 1 && <EmailComponent />}
                {currentStep == 2 && <RegisterComponent />}
                {currentStep == 3 && <Verification />}
                {currentStep == 4 && <DoneRegister />}
              </ProgressBar>
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
      </div>
    </>
  );
};

export default Register;
