import { Link } from "react-router";

function NavBar() {
  return (
    <nav 
      className="
        hidden tablet:flex items-center justify-end gap-12 
        grow self-stretch bg-[rgba(255,255,255,0.05)] backdrop-blur-[80px] px-10 
        uppercase text-white font-barlow-cond tracking-[2px] leading-auto
      "
    >
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
  )
}

export default NavBar;