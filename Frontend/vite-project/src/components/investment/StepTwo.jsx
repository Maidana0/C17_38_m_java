import CustomCard from "./CustomCard"
import { InputRange } from "./InputRange"

const dataFicticia = [
  {
    flag: "argentina",
    id: "54911",
    name: "Ret.Store",
    prestamo: "Inmobiliario",
    interes: "9",
    plazo: "680",
    cantidad: "3000.00",
  },
  {
    flag: "colombia",
    id: "12345",
    name: "Monet",
    prestamo: "Personal",
    interes: "9",
    plazo: "30",
    cantidad: "1500.00",
  },
  {
    flag: "mexico",
    id: "54321",
    name: "S.N.C.",
    prestamo: "Crédito",
    interes: "6",
    plazo: "180",
    cantidad: "9000.00",
  }
]


const StepTwo = ({ handleInvert, styles, investmentValue, setInvestmentValue, totalFunds }) => {

  return (
    <div className={styles.invert_step_two}>
      <h3>Elegí cuanto y donde querés invertir</h3>


      <InputRange styles={styles} name={"investmentValue"} min={0} value={investmentValue} max={totalFunds} handleOnChange={(e) => setInvestmentValue(e.target.value)} />

      <div style={{ marginTop: "2rem" }}>
        <div style={{ width: "fit-content", color: "#454342" }}>
          <small>Opciones recomendadas</small>
        </div>

        {dataFicticia.map((data, i) => <CustomCard handleInvert={handleInvert} key={i} styles={styles} data={data} />)}
      </div>

    </div>
  )
}

export default StepTwo