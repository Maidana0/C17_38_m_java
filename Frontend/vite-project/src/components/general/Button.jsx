import { useNavigate } from 'react-router-dom';

const CustomButton = ({ text, handleClick, classNameContain }) => {
    const navigate = useNavigate();
    const localhandleClick = ()=> navigate("#")

    return (
        <div className={classNameContain ? classNameContain : "botonayudaValidate"}>
            <button onClick={handleClick ? handleClick : localhandleClick}>{text ? text : "Necesitas ayuda"}</button>
        </div>
    )
}

export default CustomButton

