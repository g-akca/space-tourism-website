import logoImg from "/assets/shared/logo.svg";
import hamburgerIcon from "/assets/shared/icon-hamburger.svg";

import { Link } from "react-router";

import NavBar from "./NavBar";

function Header() {
  return (
    <header className="p-6 tablet:p-0 flex justify-between items-center">
      <Link to="/" className="tablet:py-6 tablet:px-10">
        <img src={logoImg} alt="Logo image" className="h-10 tablet:h-12" />
      </Link>

      <button type="button" className="cursor-pointer tablet:hidden">
        <img src={hamburgerIcon} alt="Menu icon" />
      </button>

      <NavBar />
    </header>
  )
}

export default Header;