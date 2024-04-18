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
    <header>
      {
        user != null &&
        <>
          <Hamburger
            distance="lg"
            toggled={isOpen}
            toggle={setOpen}
          />
          <div onClick={closeNavbar} className={`backdrop ${isOpen ? "bd-active" : "hidden"}`}></div>
        </>
      }

      <div className={`title-app ${user != null && "title-center"}`}>
        <img alt="CashFly-icon" src="cashFly.svg" width={25} height={25} />
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



    </header>
  )
}

export default Header