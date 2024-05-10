const CustomCard = ({ styles, handleInvert, data }) => {
    const detailsOnClick = () => { }
    const Investment = () => handleInvert(data)


    return (
        <div className={styles.card_contain + " " + styles.card_option}>
            <div className={styles.card_header}>
                <div>
                    <span>
                        <img src={`images/icons/investment/flags/${data.flag}.svg`} alt={data.flag} />
                    </span>
                    <p>ID - {data.id}</p>
                </div>
                <small>
                    {data.name}
                </small>
            </div>

            <div className={styles.card_content}>
                <div>
                    <strong>Tipo de préstamo</strong>
                    <span>{data.prestamo}</span>
                </div>
                <div>
                    <strong>Tasa de interés</strong>
                    <span>{data.interes}%</span>
                </div>
                <div>
                    <strong>Plazo mínimo retirada</strong>
                    <span>{data.plazo} días</span>
                </div>
                <div>
                    <strong>Cantidad a recaudar</strong>
                    <span>$ {data.cantidad}</span>
                </div>
            </div>

            <div className={styles.card_footer}>
                <button onClick={detailsOnClick}>Ver detalles</button>
                <button onClick={Investment}>Inversión inmediata</button>
            </div>
        </div>
    )
}

export default CustomCard