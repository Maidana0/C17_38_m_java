import styles from "./UserPanel.module.css"
import { UseContext } from '../context/Context'
import AddContact from './components/addContact/AddContact';
import Contacts from './components/contacts/Contacts';
import UserHome from './components/userHome/UserHome';
import Movements from './components/movements/Movements';
import { useNavigate } from "react-router-dom";


function UserPanel() {
  const navigate = useNavigate();
  const { user, userP, data } = UseContext();

  if (user === null) navigate("/iniciar-sesion")

  return (
    <div className={styles.UserPanel}>
      <div className={styles.PanelCont}>
        <div className={styles.headerCont} >
          <h2 className={styles.titulo}>{`¡Hola ${user?.name ?? "Franco"}!`}</h2>
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