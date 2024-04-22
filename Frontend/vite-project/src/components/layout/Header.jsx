import { Turn as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UseContext } from '../context/Context'

const paths = Object.freeze([
  { name: "préstamos", path: "/prestamos" },
  { name: "inversiones" },
  { name: "configuración", path: "#" }
])

const Header = () => {
  const { user, setUser } = UseContext()
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
                <li className='nav-link' style={{ padding: "0px" }}>

                  <Link to="/"
                    onClick={() => {
                      setUser(null)
                    }}
                    style={{
                      borderRadius: "38px",
                      padding: ".5rem 1rem", border: "solid 1px #000"
                    }}>cerrar sesión</Link>
                </li>
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
            <img style={{cursor:"pointer"}} src="/images/help.svg" alt="help-icon" />
            <img style={{cursor:"pointer"}} src="/images/notifications.svg" alt="notifications-icon" />
            <img style={{cursor:"pointer"}} src="/images/profile_default.svg" alt="profile_default-icon" />
          </div>
        }


      </header>
      <div onClick={closeNavbar} className={`backdrop ${isOpen ? "bd-active" : "hidden"}`}></div>
    </>
  )
}

export default Header