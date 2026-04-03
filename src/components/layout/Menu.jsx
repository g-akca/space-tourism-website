import NavLinks from "../ui/NavLinks";

import closeIcon from "/assets/shared/icon-close.svg";

function Menu({ closeMenu }) {
  return (
    <div className="fixed top-0 right-0 z-50 h-screen w-63.5 pl-8 bg-[rgba(11,13,23,0.15)] backdrop-blur-[80px] flex flex-col gap-12">
      <div className="py-8 px-6 flex justify-end">
        <button type="button" className="cursor-pointer" onClick={closeMenu}>
          <img src={closeIcon} alt="Close menu" />
        </button>
      </div>

      <nav className="flex flex-col gap-8 uppercase text-white text-[16px] font-barlow-cond tracking-[2px] leading-auto">
        <NavLinks direction="vertical" />
      </nav>
    </div>
  )
}

export default Menu;