import "./style.css"
import logo from "../../assets/nu-kenzie.svg"

export function Header({ setIsHomePage }) {
  return (
    <header className="header">
      <div className="header__container">
        <img alt="" src={logo} />
        <button>Inicio</button>
      </div>
    </header>
  )
}
