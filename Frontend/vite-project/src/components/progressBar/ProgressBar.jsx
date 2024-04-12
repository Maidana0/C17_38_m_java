import styles from "./styles.module.css"

const ProgressBar = ({ currentStep, setStep, totalSteps, showStepIndex=true, children }) => {
  const steps = []
  const stepwidth = 100 / totalSteps

  for (let i = 1; i <= totalSteps; i++) {
    const isActive = i <= currentStep ? styles.step_active : ""
    steps.push(<div key={i} style={{ width: `${stepwidth}%` }} className={`${styles.step} ${isActive}`} title={"Paso: " + i}></div>)
  }

  const handleNextStep = () => setStep(prevStep => prevStep < totalSteps ? prevStep + 1 : prevStep);
  const handlePreviousStep = () => setStep(prevStep => prevStep > 1 ? prevStep - 1 : prevStep);


  return (
    <div className={styles.progress_contain}>
      <div className={styles.progress_header}>
        <button className={`${styles.previous_btn} ${currentStep > 1 ? "": styles.invisible}` } onClick={handlePreviousStep}>
          <img src="images/icons/arrow_back.svg" alt="Volver (arrow_back)" />
        </button>

        {showStepIndex ? <span>Paso {currentStep}/{totalSteps}</span> : ""}
      </div>

      <div className={styles.progress_bar}>
        {steps}
      </div>


<<<<<<< HEAD
      {/*  BORRAR ESTO EN CASO DE USARSE, ES SOLO DE MUESTRA  */}
      {/* <h4 style={{ color: "black", textAlign: "center", margin: "1rem auto" }}>Este será el paso: {currentStep}</h4> */}
      {/* ------------------------  */}
=======
>>>>>>> 9f793038f86c13274e45ca4bfae19583fab88e09


      {children}

      <div className={styles.progress_footer}>
        {currentStep < totalSteps && <button className={styles.next_btn} onClick={handleNextStep}>
          {
            currentStep > 1 ? "Siguiente" : "Continuar"
          }
        </button>}
      </div>
    </div>
  )
}

export default ProgressBar