import closeIcon from "/assets/shared/icon-close.svg";

import { NavLink } from "react-router";

function Menu() {
  const navClass = ({ isActive }) => 
    `flex items-center gap-3 border-r-[3px] h-4.75 ${
      isActive ? "border-white" : "border-transparent"
    }`;
  
  return (
    <div className="fixed top-0 right-0 z-50 h-screen w-63.5 pl-8 bg-[rgba(11,13,23,0.15)] backdrop-blur-[80px] flex flex-col gap-12">
      <div className="py-8 px-6 flex justify-end">
        <button type="button" className="cursor-pointer">
          <img src={closeIcon} alt="Close menu" />
        </button>
      </div>

      <nav className="flex flex-col gap-8 uppercase text-white text-[16px] font-barlow-cond tracking-[2px] leading-auto">
        <NavLink to="/" end className={navClass}>
          <strong className="tracking-[2.7px]">00</strong>
          <p>Home</p>
        </NavLink>

        <NavLink to="/destination" end className={navClass}>
          <strong className="tracking-[2.7px]">01</strong>
          <p>Destination</p>
        </NavLink>

        <NavLink to="/crew" end className={navClass}>
          <strong className="tracking-[2.7px]">02</strong>
          <p>Crew</p>
        </NavLink>

        <NavLink to="/technology" end className={navClass}>
          <strong className="tracking-[2.7px]">03</strong>
          <p>Technology</p>
        </NavLink>
      </nav>
    </div>
  )
}

export default Menu;