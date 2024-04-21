export const transformNumber = (number) => {
    let numberToStr = number.toString()
    if (numberToStr.length > 3) {

        let firstThree = numberToStr.slice(0, -3)
        let rest = numberToStr.length == 6 ? numberToStr.slice(3) : numberToStr.length == 5 ? numberToStr.slice(2) : numberToStr.slice(1)
        numberToStr = firstThree + "." + rest
    }

    return numberToStr
}

export const InputRange = ({ styles, name, min = 100, max = 150000, step = 100, value, handleOnChange, }) => {
    return (
        <>
            <div className={styles.amount}>
                <span>$</span>
                <strong>{transformNumber(value)}</strong>
            </div>
            
            <div className={styles.input_range_contain}>
                <label htmlFor={name}>$ {min}</label>
                <input
                    id={name}
                    type="range" min={min}
                    max={max} step={step}
                    onChange={handleOnChange}
                    value={value}
                />
                <label htmlFor={name}>$ {transformNumber(max)}</label>
            </div>
        </>
    )
}

