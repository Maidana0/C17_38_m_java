import React, { useContext, useRef } from "react";
import { Context } from "../context/Context";
import styles from "../UserHome/UserHome.module.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useInView, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function UserHome() {
  const { setUserP, imagenMov, data } = useContext(Context);
  const options = { weekday: "long" };
  const navigate = useNavigate();

  const estilosDeCarga = {
    isOn: { scale: 1, opacity: 1 },
    isOff: { scale: 0.95, opacity: 0.5 },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const fecha1 = new Date(data.movimientos[0].fecha);
  const fecha2 = new Date(data.movimientos[1].fecha);

  return (
    <motion.div
      className={styles.UserHome}
      ref={ref}
      initial={"isOff"}
      animate={isInView === true ? "isOn" : "isOff"}
      transition={{ duration: 0.4, ease: "easeOut" }}
      variants={estilosDeCarga}
    >
      <div className={styles.infoCont}>
        <div className={styles.profile} ref={ref}>
          <div className={styles.panelAcciones}>
            <div className={styles.tituloAcciones}>
              <p>Disponible</p>
              <p></p>
            </div>
            <div className={styles.montoAcciones}>
              <h2>$1200</h2>
              <img
                src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713313166/Cashfly/Group_64_veqynh.svg"
                alt=""
              />
            </div>
            <div className={styles.acciones}>
              <div className={styles.accion}>
                <img
                  src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713313165/Cashfly/Group_55_udxvbz.svg"
                  alt=""
                />
                <p>Ingresar</p>
              </div>
              <div className={styles.accion}>
                <img
                  src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713313170/Cashfly/Group_54_th3mhc.svg"
                  alt=""
                />
                <p>Transferir</p>
              </div>
              <div
                className={styles.accion}
                onClick={() => {navigate("/inversiones")}}
              >
                <img
                  src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713313165/Cashfly/Group_53_vibqwt.svg"
                  alt=""
                />
                <p>Invertir</p>
              </div>
              <div
                className={styles.accion}
                onClick={() => {navigate("/prestamos")}}
              >
                <img
                  src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713313165/Cashfly/Group_52_wrc0rg.svg"
                  alt=""
                />
                <p>Solicitar</p>
              </div>
            </div>
          </div>
          <div className={styles.panelPrestamo}>
            <div className={styles.botonAccion1}>
              <img
                src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280930/Cashfly/payments_d3x2m6.svg"
                alt=""
              />
              <p>Total préstamo</p>
            </div>
            <div className={styles.totalPCont}>
              <h2>$1200</h2>
              <p>detalles</p>
            </div>
          </div>
          <div className={styles.panelCuota}>
            <div className={styles.botonAccion1}>
              <img
                src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280930/Cashfly/payments_d3x2m6.svg"
                alt=""
              />
              <p>Pago por mes</p>
            </div>
            <div className={styles.cuotaPCont}>
              <h2>$200</h2>
              <p>Cuota 1/12</p>
            </div>
          </div>
          <div className={styles.panelContactos}>
            <div className={styles.tituloContactos}>
              <p>Ultimos Contactos</p>
              <p className={styles.vm} onClick={() => setUserP(2)}>
                Ver más
              </p>
            </div>
            <div className={styles.contactos}>
              <div className={styles.addC}>
                <img
                  src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713318521/Cashfly/anadir_tllspj.png"
                  alt=""
                  className={styles.añadir}
                  onClick={() => setUserP(1)}
                />
                <p>Añadir</p>
              </div>
              {data.contactos[0] && (
                <div className={styles.addC}>
                  <img src={data.contactos[0].img} alt="" />
                  <p>{data.contactos[0].nombre}</p>
                </div>
              )}
              {data.contactos[1] && (
                <div className={styles.addC}>
                  <img src={data.contactos[1].img} alt="" />
                  <p>{data.contactos[1].nombre}</p>
                </div>
              )}
              {data.contactos[2] && (
                <div className={styles.addC}>
                  <img src={data.contactos[2].img} alt="" />
                  <p>{data.contactos[2].nombre}</p>
                </div>
              )}
              {data.contactos[3] && (
                <div className={styles.addC}>
                  <img src={data.contactos[3].img} alt="" />
                  <p>{data.contactos[3].nombre}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={styles.history}>
          <div className={styles.panelMovimientos}>
            <div className={styles.tituloMovimientos}>Movimientos</div>
            <div className={styles.grafica}>
              <ResponsiveContainer width="100%" aspect={1.6}>
                <BarChart data={data.movimientos}>
                  <CartesianGrid strokeDasharray="4 1 2"></CartesianGrid>
                  <XAxis dataKey="fecha"></XAxis>
                  <YAxis></YAxis>
                  <Tooltip></Tooltip>
                  <Legend></Legend>
                  <Bar dataKey="monto" fill="#8ACF8A" barSize={10}></Bar>
                  <Bar dataKey="saldo" fill="#FFAD09" barSize={10}></Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className={styles.panelActividad}>
            <div className={styles.tituloActividad}>
              <h2>Actividad Reciente</h2>
              <p onClick={() => setUserP(3)}>Ver más</p>
            </div>
            <div className={styles.listaActividad}>
              <div className={styles.actividad}>
                <div className={styles.actividadDesc}>
                  <img src={imagenMov(data.movimientos[0].tipo)} alt="" />
                  <div className={styles.actD}>
                    <p className={styles.actDT}>{data.movimientos[0].tipo}</p>
                    <p>
                      {data.movimientos[0].estado === true
                        ? "Completado"
                        : "En espera"}
                    </p>
                  </div>
                </div>
                <div className={styles.actividadValor}>
                  <h2
                    style={
                      data.movimientos[0].tipo === "Inversión" ||
                      data.movimientos[0].tipo === "Transferencia"
                        ? { color: "rgb(225, 16, 58)" }
                        : { color: "rgb(3, 137, 41)" }
                    }
                  >
                    {data.movimientos[0].tipo === "Inversión" ||
                    data.movimientos[0].tipo === "Transferencia"
                      ? `- $${data.movimientos[0].monto}`
                      : `+ $${data.movimientos[0].monto}`}
                  </h2>
                  <p>{fecha1.toLocaleDateString("es-ES", options)}</p>
                </div>
              </div>
              <div className={styles.actividad}>
                <div className={styles.actividadDesc}>
                  <img src={imagenMov(data.movimientos[1].tipo)} alt="" />
                  <div className={styles.actD}>
                    <p className={styles.actDT}>Inversión realizada</p>
                    <p>Completada</p>
                  </div>
                </div>
                <div className={styles.actividadValor}>
                  <h2
                    style={
                      data.movimientos[1].tipo === "Inversión" ||
                      data.movimientos[1].tipo === "Transferencia"
                        ? { color: "rgb(225, 16, 58)" }
                        : { color: "rgb(3, 137, 41)" }
                    }
                  >
                    {data.movimientos[1].tipo === "Inversión" ||
                    data.movimientos[1].tipo === "Transferencia"
                      ? `- $${data.movimientos[1].monto}`
                      : `+ $${data.movimientos[1].monto}`}
                  </h2>
                  <p>{fecha2.toLocaleDateString("es-ES", options)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default UserHome;
