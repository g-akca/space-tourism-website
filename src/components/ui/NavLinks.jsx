import { NavLink } from "react-router";

function NavLinks({ direction = "horizontal" }) {
  const navClass = ({ isActive }) =>
    `flex items-center transition-all ${
      direction === "vertical"
        ? "border-r-[3px] h-4.75 gap-3"
        : "border-b-[3px] gap-2"
    } ${
      isActive ? "border-white" : "border-transparent hover:border-[rgba(255,255,255,0.5)]"
    }`;

  const links = [
    { to: "/", label: "Home", number: "00", end: true },
    { to: "/destination", label: "Destination", number: "01" },
    { to: "/crew", label: "Crew", number: "02" },
    { to: "/technology", label: "Technology", number: "03" },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          end={link.end}
          className={navClass}
        >
          <strong className="tracking-[2.7px]">{link.number}</strong>
          <p>{link.label}</p>
        </NavLink>
      ))}
    </>
  )
}

export default NavLinks;