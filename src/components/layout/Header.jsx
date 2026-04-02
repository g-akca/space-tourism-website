import logoImg from "/assets/shared/logo.svg";
import hamburgerIcon from "/assets/shared/icon-hamburger.svg";

import { Link } from "react-router";

function Header() {
  return (
    <header className="p-6 tablet:p-0 flex justify-between items-center">
      <Link to="/" className="tablet:py-6 tablet:px-10">
        <img src={logoImg} alt="Logo image" className="h-10 tablet:h-12" />
      </Link>

      <button type="button" className="cursor-pointer tablet:hidden">
        <img src={hamburgerIcon} alt="Menu icon" />
      </button>

      <nav className="hidden tablet:flex items-center justify-end gap-12 grow self-stretch bg-[rgba(255,255,255,0.05)] backdrop-blur-[80px] px-10 uppercase text-white font-barlow-cond tracking-[2px] leading-auto">
        <Link to="/">
          Home
        </Link>

        <Link to="" className="flex gap-2">
          <strong className="tracking-[2.7px]">01</strong>
          <p>Destination</p>
        </Link>

        <Link to="" className="flex gap-2">
          <strong className="tracking-[2.7px]">02</strong>
          <p>Crew</p>
        </Link>

        <Link to="" className="flex gap-2">
          <strong className="tracking-[2.7px]">03</strong>
          <p>Technology</p>
        </Link>
      </nav>
    </header>
  )
}

export default Header;