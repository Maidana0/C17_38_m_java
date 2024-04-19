import React, { useContext, useRef } from "react";
import styles from "../AddContact/AddContact.module.css";
import { Context } from "../context/Context";
import { useInView, motion } from "framer-motion"

function AddContact() {

  const { setUserP } = useContext(Context);

  const estilosDeCarga = {
    isOn: { scale: 1, opacity: 1 },
    isOff: { scale: 0.95, opacity: 0.5 },
  }
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

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
              <input type="text" className="inputP" />
            </div>
            <button>Buscar</button>
          </div>
          <div className={styles.addCont}>
            <div className={styles.userStatus}>
              <img src="" alt="" />
              <p></p>
            </div>
            <button>Añadir</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AddContact;
