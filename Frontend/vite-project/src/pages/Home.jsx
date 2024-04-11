import { Link } from "react-router-dom";
import styles from "../pages/Home.module.css";
import React, { useState, useRef } from "react";
import { useInView } from "framer-motion";

const Home = () => {

  const [currentTip, setCurrentTip] = useState(0);
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const inView0 = useInView(ref0)
  const inView1 = useInView(ref1)
  const inView2 = useInView(ref2)
  const inView3 = useInView(ref3)

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
                  <Link to="/Solicitud">
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
                <div className={styles.tip} ref={ref0}></div>
              </div>
              <div className={styles.tipCont}>
                <div className={styles.tip} ref={ref1}></div>
              </div>
              <div className={styles.tipCont}>
                <div className={styles.tip} ref={ref2}></div>
              </div>
              <div className={styles.tipCont}>
                <div className={styles.tip} ref={ref3}></div>
              </div>
            </div>
          </div>
          <div className={styles.paginaCont}>
            <div className={styles.pagina} style={inView0 ? {backgroundColor: "black"} : {backgroundColor: "rgb(189, 189, 189)"}}></div>
            <div className={styles.pagina} style={inView1 ? {backgroundColor: "black"} : {backgroundColor: "rgb(189, 189, 189)"}}></div>
            <div className={styles.pagina} style={inView2 ? {backgroundColor: "black"} : {backgroundColor: "rgb(189, 189, 189)"}}></div>
            <div className={styles.pagina} style={inView3 ? {backgroundColor: "black"} : {backgroundColor: "rgb(189, 189, 189)"}}></div>
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
