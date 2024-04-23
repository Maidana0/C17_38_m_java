import { useState, useContext, useRef, useEffect } from "react";
import ProgressBar from "../components/progressBar/ProgressBar";
import Verification from "../components/register/verificationIdentity/Verification";
import RegisterComponent from "../components/register/Register";
import EmailComponent from "../components/register/email/Email";
import DoneRegister from "../components/register/registerDone/DoneRegister";
import { Context } from "../components/context/Context";
import { useNavigate } from "react-router-dom";
import { useInView, motion } from "framer-motion";
import "./Register.css";

const Register = () => {
  const { setUserCreated, userCreated } = useContext(Context);
  const [currentStep, setCurrentStep] = useState(1);
  const [textRight, setTextRight] = useState("");

  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    switch (currentStep) {
      case 1:
        setTextRight(
          "¡Invierte en proyectos emocionantes y haz crecer tu dinero de manera segura!"
        );
        break;
      case 2:
        setTextRight(
          "¡Descubre emocionantes oportunidades de préstamo e inversión y alcanza tus metas financieras de forma divertida!"
        );
        break;
      case 3:
        setTextRight(
          "Aprende los conceptos básicos de inversión, descubre estrategias para administrar tu dinero de manera efectiva."
        );
        break;
      case 4:
        setTextRight(
          "Únete a nuestra comunidad y comienza a alcanzar tus metas financieras hoy mismo."
        );
        break;
      default:
        console.log(currentStep);
        break;
    }
  }, [currentStep]);

  function onSubmit() {
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
    <div className="register_page " style={{ width: "100%" }}>
      <motion.div
        className="column-1-page"
        ref={ref}
        initial={{ width: "20%", opacity: 0 }}
        animate={
          isInView
            ? { width: "var(--width55)", opacity: 1 }
            : { width: "20%", opacity: 0 }
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
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
      </motion.div>
      <motion.div
        className="column-2-page"
        initial={{ width: "var(--width80)", opacity: 0 }}
        animate={
          isInView
            ? { width: "var(--width45)", opacity: 1 }
            : { width: "var(--width80)", opacity: 0 }
        }
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="infoLCont"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
        >
          <div className="logoLCont">
            <img
              src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280914/Cashfly/Frame_61_rqiigo.svg"
              alt=""
            />
          </div>
          <div className="descripcionL">
            <p className="parrafoL2">{textRight}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Register;
