const CustomCard = ({ styles, data }) => {
    const detailsOnClick = () => { }
    const Investment = () => { }

    return (
        <div className={styles.card_contain_grid}>
            <div className={styles.card_header}>
                <div>
                    <span>
                        <img src={`images/icons/investment/flags/${data.flag}.svg`} alt={data.flag} />
                    </span>
                    <h5>ID - {data.id}</h5>
                </div>
                <small>
                    {data.name}
                </small>
            </div>

            <div className={styles.card_content}>
                <div>
                    <p>Tipo de préstamo</p>
                    <p>{data.prestamo}</p>
                </div>
                <div>
                    <p>Tasa de interés</p>
                    <p>{data.interes}%</p>
                </div>
                <div>
                    <p>Plazo</p>
                    <p>{data.plazo} días</p>
                </div>
                <div>
                    <p>Cantidad disponible</p>
                    <p>$ {data.cantidad}</p>
                </div>
            </div>

            <div className={styles.card_footer}>
                <button onClick={detailsOnClick}>Detalles</button>
                <button onClick={Investment}>Inversión inmediata</button>
            </div>
        </div>
    )
}

export default CustomCard