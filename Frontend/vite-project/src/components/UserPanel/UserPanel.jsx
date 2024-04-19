import React, { useContext } from 'react'
import styles from "../UserPanel/UserPanel.module.css"
import { Context } from '../context/Context'
import AddContact from '../AddContact/AddContact';
import Contacts from '../Contacts/Contacts';
import UserHome from '../UserHome/UserHome';

function UserPanel() {

  const { user, userP } = useContext(Context);

  const data = {
    nombre: "walter",
    email: "wall45@gmail.com",
    saldo: 1200,
    contactos:[
      {
        nombre: "Josefina",
        img: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1713318778/Cashfly/Ellipse_19_ntqplw.png",
      },
      {
        nombre: "Antón",
        img: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1713318779/Cashfly/Ellipse_20_an0grm.png",
      },
      {
        nombre: "Florencia",
        img: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1713318781/Cashfly/Ellipse_21_uce6mx.png",
      },
      {
        nombre: "Elías",
        img: "https://res.cloudinary.com/dabb8jxxh/image/upload/v1713318785/Cashfly/Ellipse_22_zztrlr.png",
      },
    ],
    movimientos: [
      {
        tipo: "Prestamo",
        monto: 1200,
        fecha: new Date("2024/04/17"),
        saldo: 1200,
        estado: false
      },
      {
        tipo: "Inversión",
        monto: 400,
        fecha: new Date("2024/04/15"),
        saldo: 0,
        estado: true
      },
      {
        tipo: "Depósito",
        monto: 200,
        fecha: new Date("2024/04/10"),
        saldo: 400,
        estado: true
      },
      {
        tipo: "Depósito",
        monto: 100,
        fecha: new Date("2024/04/08"),
        saldo: 200,
        estado: true
      },
      {
        tipo: "Depósito",
        monto: 100,
        fecha: new Date("2024/04/07"),
        saldo: 100,
        estado: true
      },
    ]
  }

  return (
    <div className={styles.UserPanel}>
      <div className={styles.PanelCont}>
        <div className={styles.headerCont} >
          <h2 className={styles.titulo}>{`¡Hola ${user.name}!`}</h2>
          <p className={styles.titulo2}>Pedí préstamos o invertí en sólo minutos!</p>
        </div>
        {userP === 0 && <UserHome data={data}></UserHome>}
        {userP === 1 && <AddContact></AddContact>}
        {userP === 2 && <Contacts contactos={data.contactos}></Contacts>}       
      </div>
    </div>
  )
}

export default UserPanel