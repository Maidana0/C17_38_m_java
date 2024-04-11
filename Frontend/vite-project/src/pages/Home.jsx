import { Link } from "react-router-dom";
import styles from "../pages/Home.module.css";

const Home = () => {
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
          <div className={styles.carrucel1}>
            <div className={styles.tipCont}></div>
            <div className={styles.tipCont}></div>
            <div className={styles.tipCont}></div>
            <div className={styles.tipCont}></div>
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
