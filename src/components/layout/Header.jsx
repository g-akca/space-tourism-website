import logoImg from "/assets/shared/logo.svg";
import hamburgerIcon from "/assets/shared/icon-hamburger.svg";

import { Link } from "react-router";

import NavBar from "./NavBar";

function Header() {
  return (
    <header className="p-6 tablet:p-0 desktop:pt-10 flex justify-between items-center">
      <Link to="/" className="tablet:py-6 tablet:px-10 desktop:px-16">
        <img src={logoImg} alt="Logo image" className="h-10 tablet:h-12" />
      </Link>

      <div className="hidden desktop:block grow h-px bg-[#979797] opacity-25 -mr-8 z-10" />

      <button type="button" className="cursor-pointer tablet:hidden">
        <img src={hamburgerIcon} alt="Menu icon" />
      </button>

      <NavBar />
    </header>
  )
}

export default Header;