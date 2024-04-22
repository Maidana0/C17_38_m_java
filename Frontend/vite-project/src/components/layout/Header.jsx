import { Turn as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UseContext } from '../context/Context'

const paths = Object.freeze([
  { name: "préstamos", path: "/prestamos" },
  { name: "inversiones" },
  { name: "configuración", path: "#" },
  { name: "cerrar sesión", path: "#" }
])

const Header = () => {
  const { user } = UseContext()
  const [isOpen, setIsOpen] = useState(false)
  const setOpen = () => setIsOpen(!isOpen)
  const closeNavbar = () => isOpen && setIsOpen(false)

  return (
    <>
      <header>
        {
          user != null &&
          <Hamburger
            distance="lg"
            toggled={isOpen}
            toggle={setOpen}
          />
        }

        <div className={`title-app`}>
          <img alt="CashFly-icon" src="cashFly.svg" />
          <Link to={"/"}>
            CashFly
          </Link>
        </div>

        {
          user != null
            ?
            <nav className={`navbar ${isOpen ? "nav-active" : ""}`}>
              <ul className='nav-items'>
                {
                  paths.map(({ name, path }, i) => (
                    <li key={i} className='nav-link'>
                      <Link onClick={closeNavbar} to={path ? path : `/${name}`}>{name}</Link>
                    </li>
                  ))
                }
              </ul>
            </nav>

            :
            <div className='nav-buttons'>
              <Link onClick={closeNavbar} to={"/iniciar-sesion"} className='link-login'>
                iniciar sesión
              </Link>
              <Link onClick={closeNavbar} to={"/registrarme"} className='link-signup'>
                registrarme
              </Link>
            </div>
        }

        {
          user != null &&
          <div style={{ display: "flex", alignItems: "center", gap: "5px", paddingRight: "5px" }}>
            <img src="/images/help.svg" alt="help-icon" />
            <img src="/images/notifications.svg" alt="notifications-icon" />
            <img src="/images/profile_default.svg" alt="profile_default-icon" />
          </div>
        }


      </header>
      <div onClick={closeNavbar} className={`backdrop ${isOpen ? "bd-active" : "hidden"}`}></div>
    </>
  )
}

export default Header