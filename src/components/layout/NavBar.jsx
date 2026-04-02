import { NavLink } from "react-router";

function NavBar() {
  const navClass = ({ isActive }) => 
    `flex items-center gap-2 border-b-[3px] ${
      isActive ? "border-white" : "border-transparent"
    }`;

  return (
    <nav 
      className="
        hidden tablet:flex justify-end gap-12 px-10 
        grow self-stretch bg-[rgba(255,255,255,0.05)] backdrop-blur-[80px] 
        uppercase text-white font-barlow-cond tracking-[2px] leading-auto
      "
    >
      <NavLink to="/" end className={navClass}>
        Home
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
  )
}

export default NavBar;