import { transformNumber, InputRange } from "./InputRange"

const StepOne = ({ totalFunds, setTotal, styles }) => {

  const infoArray = [
    { title: "Disponible para invertir", amount: transformNumber(totalFunds) },
    { title: "Fondos invertidos", amount: "0" },
    { title: "Beneficio", amount: "0" },
  ]

  return (
    <div className={styles.amount_step_one}>
      <h3>Elegí el monto que querés añadir a tus fondos</h3>

      <InputRange styles={styles} name="totalFounds" value={totalFunds} handleOnChange={(e) => setTotal(e.target.value)} />

      <div className={styles.card_contain + " " + styles.special_card_contain}>
        <strong>Rentabilidad anualizada 5% </strong>
      </div>


      {
        infoArray.map((info, i) => (
          <div key={i} className={styles.info}>
            <h5>{info.title}</h5>
            <div><strong>$ {info.amount}</strong>
            </div>
          </div>
        )
        )
      }



    </div>
  )
}

export default StepOne