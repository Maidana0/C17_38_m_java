import styles from "./styles.module.css"

const ProgressBar = ({ moreButtons, handleSubmitButton, textButton, currentStep, setStep, totalSteps, arrayWithNameSteps = [],BooleanNextButton=true, children }) => {
  const steps = []
  const stepwidth = 100 / (totalSteps - 1)


  for (let i = 1; i <= (totalSteps); i++) {
    const isActive = i < currentStep ? styles.step_active : ""
    steps.push(
      <div key={`${i}-img`} className={`${styles.step_image_contain} ${i < currentStep && styles.step_active} ${currentStep == i && styles.current_step_image}`}>
        {(i < currentStep)
          ? <img src="images/icons/done_step.svg" alt="done step" />
          : ""
        }
      </div>
    )
    i != totalSteps && steps.push(
      <div key={i} style={{ width: `calc(${stepwidth}% - 26px)` }} className={`${styles.step} ${isActive}`} title={"Paso: " + i}>
      </div>
    )
  }

  const handleNextStep = () => {
    handleSubmitButton && handleSubmitButton()
    setStep(prevStep => prevStep < totalSteps ? prevStep + 1 : prevStep);
    window.scrollTo(0, 0);
  }
  const handlePreviousStep = () => setStep(prevStep => prevStep > 1 ? prevStep - 1 : prevStep);


  return (
    <div className={styles.progress_contain}>
      <div className={styles.progress_header}>
        <button className={`${styles.previous_btn} ${currentStep > 1 ? "" : styles.invisible}`} onClick={handlePreviousStep}>
          <img src="images/icons/arrow_back.svg" alt="Volver (arrow_back)" />
        </button>

      </div>

      <div className={styles.progress_bar}>
        {steps}
      </div>

      <div className={styles.steps_name_contain}>
        {
          arrayWithNameSteps.map((name, i) => (
            <div key={i} style={{ width: `${stepwidth}%` }}>
              {(i + 1) <= currentStep ?
                <p onClick={() => setStep(i + 1)}
                  style={{ cursor: "pointer", fontWeight: `${i + 1 == currentStep ? 700 : 400}` }}>
                  {name}
                </p>
                : <p>{name}</p>
              }
            </div>
          ))
        }
      </div>


      {children}
      {
        BooleanNextButton &&
        <div className={styles.progress_footer}>
          {currentStep < totalSteps && <button className={styles.next_btn} onClick={handleNextStep}  >
            {
              textButton ? textButton : currentStep > 1 ? "Siguiente" : "Continuar"
            }
          </button>}
          {moreButtons ? moreButtons : ""}
        </div>
      }

    </div>
  )
}

export default ProgressBar