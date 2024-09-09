import Image from "next/image";
import logo from "../../public/assets/logo.svg"
import hamburger from "../../public/assets/hamburger.svg"
function Header() {
    return (
      <header className="flex w-full items-center justify-between px-4 ">
        <div className="lg:ml-[60px]">
          <Image src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex flex-grow ml-5">
    <div className="flex-grow flex items-center space-x-4 lg:space-x-20 lg:ml-[40px] ">
      <a href="/Products" className="text-lg">Products</a>
      <a href="/Solutions" className="text-lg">Solutions</a>
      <a href="/Pricing" className="text-lg">Pricing</a>
    </div>
    <div className="flex space-x-4">
      <a href="/login" className="text-lg text-black  py-2">Login</a>
      <a href="/signup" className="text-lg text-black border border-black rounded px-2 py-0 mt-2">Sign Up Now</a>
    </div>
  </div>

        <div className="md:hidden">
          <Image src={hamburger} alt="menu" />
        </div>
      </header>
    );
  }
  
  export default Header;
  