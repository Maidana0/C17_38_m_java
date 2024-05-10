import React, { useContext, useRef } from "react";
import styles from "./Movements.module.css";
import { Context } from "../../../context/Context";
import { useInView, motion } from "framer-motion"

function Movements({ movimientos }) {

  const { setUserP, imagenMov } = useContext(Context);

  const estilosDeCarga = {
    isOn: { scale: 1, opacity: 1 },
    isOff: { scale: 0.95, opacity: 0.5 },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const options = { weekday: "long" };

  return (
    <motion.div className={styles.Movements} ref={ref} initial={"isOff"} animate={isInView === true ? "isOn" : "isOff"} transition={{ duration: 0.4, ease: "easeOut" }} variants={estilosDeCarga}>
      <div className={styles.panelCont}>
        <div className={styles.movCont}>
          <div className={styles.tittleCont}>
            <h2>Movimientos</h2>
            <p onClick={() => setUserP(0)}>Volver</p>
          </div>
          <div className={styles.listaM}>
            {movimientos.map((mov) => (
              <div key={movimientos.indexOf(mov)} className={styles.mov}>
                <div className={styles.actividadDesc}>
                  <img
                    src={imagenMov(mov.tipo)}
                    alt=""
                  />
                  <div className={styles.actD}>
                    <p className={styles.actDT}>{mov.tipo}</p>
                    <p>
                      {mov.estado === true
                        ? "Completado"
                        : "En espera"}
                    </p>
                  </div>
                </div>
                <div className={styles.actividadValor}>
                  <h2
                    style={
                      mov.tipo === "Inversión" ||
                      mov.tipo === "Transferencia"
                        ? { color: "rgb(225, 16, 58)" }
                        : { color: "rgb(3, 137, 41)" }
                    }
                  >
                    {mov.tipo === "Inversión" ||
                    mov.tipo === "Transferencia"
                      ? `- $${mov.monto}`
                      : `+ $${mov.monto}`}
                  </h2>
                  <p>
                    {new Date(mov.fecha).toLocaleDateString(
                      "es-ES",
                      options
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Movements;
