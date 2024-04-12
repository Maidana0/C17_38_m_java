import { Turn as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const paths = Object.freeze([
  { name: "préstamos", path: "/prestamos" },
  { name: "inversiones" },
  { name: "configuración", path: "#" },

  { name: "iniciar sesión", path: "iniciar-sesion" },
  { name: "registrarme" }
])

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const setOpen = () => setIsOpen(!isOpen)
  const closeNavbar = () => isOpen && setIsOpen(false)

  return (
    <header>
        <Hamburger
          distance="lg"
          toggled={isOpen}
          toggle={setOpen}
        />

      <div className='title-app'>
        <img alt="vite-icon" src="/vite.svg" width={25} height={25} />
        <Link to={"/"}>
          CashFly
        </Link>
      </div>

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

      <div className='nav-buttons'>
        <Link onClick={closeNavbar} to={"/registrarme"} className='link-signup'>
          registrarme
        </Link>
      </div>

      <div onClick={closeNavbar} className={`backdrop ${isOpen ? "bd-active" : "hidden"}`}></div>
    </header>
  )
}

export default Header