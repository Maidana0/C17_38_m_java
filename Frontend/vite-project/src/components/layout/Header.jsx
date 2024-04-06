import { Turn as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const paths = Object.freeze([
  { name: "inicio", path: "/" },
  { name: "iniciar sesión", path: "login" },
  { name: "registrarme", path: "register" }
])

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const setOpen = () => setIsOpen(!isOpen)

  return (
    <header>

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
                <Link onClick={setOpen} to={path ? path : `/${name}`}>{name}</Link>
              </li>
            ))
          }
        </ul>
      </nav>

      <div className='nav-buttons'>

        <Link onClick={setOpen} to={"/register"} className='link-signup'>
          registrarme
        </Link>

        <Hamburger
          distance="lg"
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>

      <div onClick={setOpen} className={`backdrop ${isOpen ? "bd-active" : "hidden"}`}></div>
    </header>
  )
}

export default Header