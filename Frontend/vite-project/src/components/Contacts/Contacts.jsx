import React, { useContext, useRef } from "react";
import styles from "../Contacts/Contacts.module.css";
import { Context } from "../context/Context";
import { useInView, motion } from "framer-motion"

function Contacts({ contactos }) {

  const { setUserP } = useContext(Context);

  const estilosDeCarga = {
    isOn: { scale: 1, opacity: 1 },
    isOff: { scale: 0.95, opacity: 0.5 },
  }
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.div className={styles.Contacts} ref={ref} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ duration: 0.4, ease: "easeOut" }} variants={estilosDeCarga}>
      <div className={styles.panelCont}>
        <div className={styles.contactsCont}>
          <div className={styles.tittleCont}>
            <h2>Contactos</h2>
            <p onClick={() => setUserP(0)}>Volver</p>
          </div>
          <div className={styles.listaC}>
            {contactos.map((contacto) => (
              <div
                key={contactos.indexOf(contacto)}
                className={styles.contacto}
              >
                <div className={styles.contactoC}>
                  <div className={styles.imgCont}>
                    <img src={contacto.img} alt="" />
                  </div>
                  <p>{contacto.nombre}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contacts;
