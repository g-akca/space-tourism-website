import NavLinks from "../ui/NavLinks";

function NavBar() {
  return (
    <nav 
      className="
        hidden tablet:flex justify-end gap-12 px-10 desktop:px-16 desktop:max-w-184
        grow self-stretch bg-[rgba(255,255,255,0.05)] backdrop-blur-[80px] 
        uppercase text-white text-[16px] font-barlow-cond tracking-[2px] leading-auto
      "
    >
      <NavLinks />
    </nav>
  )
}

export default NavBar;