
const LocalCard = ({ styles, data }) => <div className={styles.card_contain}>
  <div className={styles.card_head}>
    <span>
      {data.icon}
    </span>
    <h4>{data.name}</h4>
  </div>
  <strong>  {data.value} </strong>
</div>


const StepThree = ({ styles }) => {

  const cardInfo = [
    { icon: "ID", name: "USERID", value: "Ret Store?" },
    { icon: <img src="images/icons/investment/paid.svg" />, name: "Cantidad a invertir", value: "$ 0,0" },
    { icon: <img src="images/icons/investment/payments.svg" />, name: "Tasa de intéres", value: "9%" },
    { icon: <img src="images/icons/investment/calendar_clock.svg" />, name: "Plazo", value: "680 días" },

  ]


  return (
    <div>
      <h3>Elegí cuanto querés invertir</h3>

      {
        cardInfo.map((data, i) => <LocalCard key={i} styles={styles} data={data} />)
      }

      <span>
        <small style={{ margin: "1.5rem auto 1rem", padding: "1rem" }}>Al confirmar estas aceptando <strong>los términos y conficiones</strong> de este prestamo</small>
      </span>

    </div>
  )
}

export default StepThree