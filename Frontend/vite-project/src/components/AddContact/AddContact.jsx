import React, { useContext, useRef, useState } from "react";
import styles from "../AddContact/AddContact.module.css";
import { Context } from "../context/Context";
import { useInView, motion } from "framer-motion"

function AddContact() {

  const { setUserP, contactosIA, data } = useContext(Context);

  const estilosDeCarga = {
    isOn: { scale: 1, opacity: 1 },
    isOff: { scale: 0.95, opacity: 0.5 },
  }
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [encontrado, setEncontrado] = useState(false)
  const [añadido, setAñadido] = useState(false)
  const [contacto, setContacto] = useState({nombre: "", img: "", email: ""})
  const [correo, setCorreo] = useState("")

  
  function buscarContacto(){
    let contactoE = contactosIA.find((c) => c.email === correo)
    let contactoA = data.contactos.find((c) => c.email === correo)
    if (contactoE){
      setEncontrado(true)
      setContacto(contactoE) 
    }else{
      setEncontrado(false)
      setContacto({nombre: "", img: "", email: ""})   
    }
    if (contactoA) {
      setAñadido(true)
    }else{
      setAñadido(false)
    }
  }

  return (
    <motion.div className={styles.AddContact} ref={ref} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ duration: 0.4, ease: "easeOut" }} variants={estilosDeCarga}>
      <div className={styles.panelCont}>
        <div className={styles.contactsCont}>
          <div className={styles.tittleCont}>
            <h2>Añadir Contacto</h2>
            <p onClick={() => setUserP(0)}>Volver</p>
          </div>
          <div className={styles.findCont}>
            <div className={styles.inputCont}>
              <p>Ingresa un email y busca tu contacto</p>
              <input type="text" className="inputP" onChange={(e) => setCorreo(e.target.value)}/>
            </div>
            <button onClick={() => buscarContacto()}>Buscar</button>
          </div>
          {encontrado === true ? <motion.div className={styles.addCont} ref={ref} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ duration: 0.4, ease: "easeOut" }} variants={estilosDeCarga}>
            <div className={styles.findElement}>
              <div className={styles.userStatus}>
                <img src={contacto.img} alt="" />
                <p>{`${contacto.nombre} ${contacto.apellido}` }</p>
              </div>
              {añadido === true ? <p>Añadido</p> : <button onClick={() => {setAñadido(true); data.contactos.push({nombre: contacto.nombre, img: contacto.img, email: contacto.email})}}>Añadir</button>}
            </div> 
          </motion.div> : <div>Usuario no encontrado</div>}
        </div>
      </div>
    </motion.div>
  );
}

export default AddContact;
