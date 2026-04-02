import { NavLink } from "react-router";

function NavBar() {
  return (
    <nav 
      className="
        hidden tablet:flex justify-end gap-12 px-10 
        grow self-stretch bg-[rgba(255,255,255,0.05)] backdrop-blur-[80px] 
        uppercase text-white font-barlow-cond tracking-[2px] leading-auto
      "
    >
      <NavLink to="/" end className={({ isActive }) => `flex items-center border-b-[3px] ${isActive ? "border-white" : "border-transparent"}`}>
        Home
      </NavLink>

      <NavLink to="/destination" end className={({ isActive }) => `flex gap-2 items-center border-b-[3px] ${isActive ? "border-white" : "border-transparent"}`}>
        <strong className="tracking-[2.7px]">01</strong>
        <p>Destination</p>
      </NavLink>

      <NavLink to="/crew" end className={({ isActive }) => `flex gap-2 items-center border-b-[3px] ${isActive ? "border-white" : "border-transparent"}`}>
        <strong className="tracking-[2.7px]">02</strong>
        <p>Crew</p>
      </NavLink>

      <NavLink to="/technology" end className={({ isActive }) => `flex gap-2 items-center border-b-[3px] ${isActive ? "border-white" : "border-transparent"}`}>
        <strong className="tracking-[2.7px]">03</strong>
        <p>Technology</p>
      </NavLink>
    </nav>
  )
}

export default NavBar;