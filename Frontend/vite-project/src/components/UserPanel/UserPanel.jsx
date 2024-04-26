import React, { useContext, useState } from 'react'
import styles from "../UserPanel/UserPanel.module.css"
import { Context } from '../context/Context'
import AddContact from '../AddContact/AddContact';
import Contacts from '../Contacts/Contacts';
import UserHome from '../UserHome/UserHome';
import Movements from '../Movements/Movements';

function UserPanel() {

  const { user, userP, data } = useContext(Context);

  return (
    <div className={styles.UserPanel}>
      <div className={styles.PanelCont}>
        <div className={styles.headerCont} >
          <h2 className={styles.titulo}>{`¡Hola ${user.name}!`}</h2>
          <p className={styles.titulo2}>Pedí préstamos o invertí en sólo minutos!</p>
        </div>
        {userP === 0 && <UserHome></UserHome>}
        {userP === 1 && <AddContact></AddContact>}
        {userP === 2 && <Contacts contactos={data.contactos}></Contacts>} 
        {userP === 3 && <Movements movimientos={data.movimientos}></Movements>}        
      </div>
    </div>
  )
}

export default UserPanel