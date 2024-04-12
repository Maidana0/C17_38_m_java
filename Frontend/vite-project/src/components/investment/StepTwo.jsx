import CustomCard from "./CustomCard"

const CustomButton = ({ handleClick, name, path }) => <button onClick={handleClick}>
  <img src={`images/icons/investment/${path}.svg`} alt="path" />
  {name}
</button>


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
    flag: "argentina",
    id: "12345",
    name: "Ret.Store",
    prestamo: "Personal",
    interes: "9",
    plazo: "30",
    cantidad: "1500.00",
  },
  {
    flag: "argentina",
    id: "54321",
    name: "Ret.Store",
    prestamo: "Crédito",
    interes: "6",
    plazo: "180",
    cantidad: "9000.00",
  },
  {
    flag: "argentina",
    id: "13254",
    name: "Ret.Store",
    prestamo: "Estudiantil",
    interes: "21",
    plazo: "360",
    cantidad: "5000.00",
  },
]


const StepTwo = ({ styles }) => {
  return (
    <div className={styles.invert_step_two}>
      <h3>Elegí donde querés invertir</h3>

      <div className={styles.card_contain}>
        <h5>Fondos disponibles</h5>
        <strong> $ 0,0 </strong>
      </div>

      <div className={styles.btn_contain}>
        <CustomButton handleClick={() => { }} name={"Filtrar"} path={"mi_filter"} />
        <CustomButton handleClick={() => { }} name={"Ordenar"} path={"uil_arrows-v-alt"} />
      </div>


      {/* (MODELO) */}
      <div className={styles.all_cards_contain}>
        {
          dataFicticia.map((data,i)=> <CustomCard key={i} styles={styles} data={data} />)
        }
      </div>

    </div>
  )
}

export default StepTwo