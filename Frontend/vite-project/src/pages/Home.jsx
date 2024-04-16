import { Link } from "react-router-dom";
import styles from "../pages/Home.module.css";
import React, { useRef } from "react";
import { useInView } from "framer-motion";

const Home = () => {
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const inView0 = useInView(ref0);
  const inView1 = useInView(ref1);
  const inView2 = useInView(ref2);
  const inView3 = useInView(ref3);
  const inView4 = useInView(ref4);

  return (
    <div className={styles.Home}>
      <section className={styles.seccion0}>
        <div className={styles.panel0}>
          <div className={styles.articulo0}>
            <div className={styles.articulo0Cont}>
              <div className={styles.presentacion0Cont}>
                <h2 className={styles.titulo0}>Crece con tus finanzas:</h2>
                <p className={styles.descripcion0}>
                  La primera P2P en enseñarte a pedir tu primer préstamo
                  personal y a hacer crecer tu dinero.
                </p>
                <div className={styles.boton0Cont}>
                  <Link to="/prestamos">
                    <button>Solicita tu préstamo ahora</button>
                  </Link>
                </div>
              </div>
              <div className={styles.imagen0Cont}></div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.seccion1}>
        <div className={styles.articulo1}>
          <h4 className={styles.titulo1}>¿Cómo sacar tu primer préstamo?</h4>
          <div className={styles.carrucelCont}>
            <div className={styles.carrucel1}>
              <div className={styles.tipCont}>
                <div className={styles.tip} ref={ref0}>
                  <div className={styles.imgCont1}>
                    <img
                      src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280913/Cashfly/contact_mail_mplc3z.svg"
                      alt=""
                    />
                  </div>
                  <p>Tené a mano tu DNI</p>
                </div>
              </div>
              <div className={styles.tipCont}>
                <div className={styles.tip} ref={ref1}>
                  <div className={styles.imgCont1}>
                    <img
                      src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280912/Cashfly/account_balance_dxnbif.svg"
                      alt=""
                    />
                  </div>
                  <p>Tenés que tener cuenta bancaria</p>
                </div>
              </div>
              <div className={styles.tipCont}>
                <div className={styles.tip} ref={ref2}>
                  <div className={styles.imgCont1}>
                    <img
                      src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280930/Cashfly/payments_d3x2m6.svg"
                      alt=""
                    />
                  </div>
                  <p>Elegís el monto que querés pedir prestado</p>
                </div>
              </div>
              <div className={styles.tipCont}>
                <div className={styles.tip} ref={ref3}>
                  <div className={styles.imgCont1}>
                    <img
                      src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280927/Cashfly/search_check_xl2yyo.svg"
                      alt=""
                    />
                  </div>
                  <p>Validamos tus datos</p>
                </div>
              </div>
              <div className={styles.tipCont}>
                <div className={styles.tip} ref={ref4}>
                  <div className={styles.imgCont1}>
                    <img
                      src="https://res.cloudinary.com/dabb8jxxh/image/upload/v1713280913/Cashfly/currency_exchange_yj0rcl.svg"
                      alt=""
                    />
                  </div>
                  <p>En unas horas tenés tu dinero disponible</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.paginaCont}>
            <div
              className={styles.pagina}
              style={
                inView0
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "rgb(189, 189, 189)" }
              }
            ></div>
            <div
              className={styles.pagina}
              style={
                inView1
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "rgb(189, 189, 189)" }
              }
            ></div>
            <div
              className={styles.pagina}
              style={
                inView2
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "rgb(189, 189, 189)" }
              }
            ></div>
            <div
              className={styles.pagina}
              style={
                inView3
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "rgb(189, 189, 189)" }
              }
            ></div>
            <div
              className={styles.pagina}
              style={
                inView4
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "rgb(189, 189, 189)" }
              }
            ></div>
          </div>
        </div>
      </section>
      <section className={styles.seccion2}>
        <div className={styles.articulo2}>
          <h4 className={styles.titulo2}>
            Unite a la nueva comunidad de inversores :)
          </h4>
          <Link to="/">
            <button>Empieza a invertir</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
