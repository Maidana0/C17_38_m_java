
const Info = ({ className, info }) => <div className={className}> <h5>{info.title}</h5>
  <div> <span>$</span> <strong>{info.amount}</strong>  </div></div>



const StepOne = ({ styles }) => {

  const infoArray = [
    { title: "Disponible para invertir", amount: "0,0" },
    { title: "Fondos invertidos", amount: "0,0" },
    { title: "Beneficio", amount: "0,0" },
  ]


  return (
    <div className={styles.amount_step_one}>
      <h3>Elegí el monto que querés tener disponible en fondos</h3>

      <div className={styles.amount}>
        <span>$</span>
        <strong>0,0</strong>
      </div>

      {infoArray.map((info, i) => <Info key={i} className={styles.info} info={info} />)}


      <div className={styles.card_contain}>
        <h4>Rentabilidad neta anualizada</h4>
        <strong>  0% </strong>
      </div>


      <div className={styles.suggestions}>
        <small>Sugerencias para ti</small>

        {/* EN CONSTRUCCIÓN... */}
        <div style={{ display: "flex", justifyContent: "center", margin: "1rem auto", gap: "1rem", overflowX: "auto" }}>
          <div style={{ minWidth: "137px", height: "130px", backgroundColor: "gray", borderRadius: "25px" }}></div>
          <div style={{ minWidth: "137px", height: "130px", backgroundColor: "gray", borderRadius: "25px" }}></div>
          <div style={{ minWidth: "137px", height: "130px", backgroundColor: "gray", borderRadius: "25px" }}></div>
          <div style={{ minWidth: "137px", height: "130px", backgroundColor: "gray", borderRadius: "25px" }}></div>
          <div style={{ minWidth: "137px", height: "130px", backgroundColor: "gray", borderRadius: "25px" }}></div>
        </div>


      </div>
    </div>
  )
}

export default StepOne