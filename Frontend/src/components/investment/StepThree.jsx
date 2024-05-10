import { transformNumber } from "./InputRange";

const StepThree = ({ dataToInvert = false, styles }) => {

  const cardInfo = [
    {
      special: true, icon: <img src={`images/icons/investment/flags/${dataToInvert.flag}.svg`} alt={dataToInvert.flag + "-icon"} />,
      name: `ID - ${dataToInvert.id}`, value: dataToInvert.name
    },
    {
      special: true, icon: <img src="images/icons/investment/paid.svg" alt="paid-icon" />, name: "Invertir", value: "$" + transformNumber(dataToInvert.inversion),
      extraContent: "$" + transformNumber(dataToInvert.fondos)
    },
    { icon: <img src="images/icons/investment/payments.svg" alt="payments-icon" />, name: "Tasa de intéres", value: `${dataToInvert.interes}%` },
    { icon: <img src="images/icons/investment/calendar_clock.svg" />, name: "Plazo mínimo retirada", value: `${dataToInvert.plazo} días` },

  ]


  return (
    <div className={styles.invert_step_three}>
      <h3>Revisa si está todo bien</h3>

      {
        cardInfo.map((data, i) => (
          <div key={i} className={`${styles.card_contain} ${data.special ? styles.special_card : ""}`}>
            <div className={styles.card_head}>
              <span>
                {data.icon}
              </span>
              <h5>{data.name}</h5>
            </div>
            {
              data.extraContent ?
                <div className={styles.extra_content}>
                  <strong>{data.value}</strong>
                  <span>Fondo disponible: <strong>{data.extraContent}</strong></span>
                </div>
                : <strong style={{ textDecoration: "underline" }}>{data.value}</strong>
            }
          </div>
        ))
      }

      <span>
        <small style={{ margin: "1.5rem auto 1rem", padding: "1rem" }}>Al confirmar estas <strong>aceptando los términos y condiciones</strong> de esta inversión</small>
      </span>

    </div>
  )
}

export default StepThree