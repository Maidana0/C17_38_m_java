import React, { useContext } from 'react'
import styles from "../UserPanel/UserPanel.module.css"
import { Context } from '../context/Context'

function UserPanel() {

  const { user } = useContext(Context);

  return (
    <div className={styles.UserPanel}>
      <div className={styles.PanelCont}>
        <div className={styles.headerCont}>
          <h2 className={styles.titulo}>{`¡Hola ${user.name}!`}</h2>
          <p className={styles.titulo2}>Pedí préstamos o invertí en sólo minutos!</p>
        </div>
        <div className={styles.infoCont}>
          <div className={styles.profile}></div>
          <div className={styles.history}></div>
        </div>       
      </div>
    </div>
  )
}

export default UserPanel