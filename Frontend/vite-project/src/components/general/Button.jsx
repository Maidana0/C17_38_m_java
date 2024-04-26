import { useNavigate } from 'react-router-dom';

const CustomButton = ({ text, handleClick, classNameContain }) => {
    const navigate = useNavigate();
    const localhandleClick = ()=> navigate("#")

    return (
        <div className={classNameContain ? classNameContain : "botonayudaValidate"}>
            <button  className='buton-ayuda' onClick={handleClick ? handleClick : localhandleClick}>{text ? text : "Necesitas ayuda"}</button>
        </div>
    )
}

export default CustomButton

