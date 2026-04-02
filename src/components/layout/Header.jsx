import logoImg from "/assets/shared/logo.svg";
import hamburgerIcon from "/assets/shared/icon-hamburger.svg";

import { Link } from "react-router";

function Header() {
  return (
    <header className="p-6 flex justify-between items-center">
      <Link to="/">
        <img src={logoImg} alt="Logo image" className="h-10" />
      </Link>

      <button type="button">
        <img src={hamburgerIcon} alt="Menu icon" />
      </button>
    </header>
  )
}

export default Header;