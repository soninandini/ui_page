import Image from "next/image";
import logo from "../../public/assets/logo.svg"
import hamburger from "../../public/assets/hamburger.svg"
import signup from "../../public/assets/signup.svg"
import resources from "../../public/assets/resources.svg"
function Header() {
    return (
      <header className="flex w-full items-center justify-between px-4 ">
        <div className="lg:ml-[60px]">
          <Image src={logo} alt="logo h-[35px] w-[80px]" />
        </div>
        <div className="hidden md:flex flex-grow ml-5">
    <div className="flex-grow flex items-center space-x-4 lg:space-x-20 lg:ml-[40px] font-medium ">
      {/* <a href="/Products" className="text-[16px]">Products</a>
      <a href="/Solutions" className="text-[16px]">Solutions</a>
      <a href="/Pricing" className="text-[16px]">Pricing</a>
      <a href="/Resources" className="text-[16px] flex items-center">
  Resources 
  <span className="ml-1 px-1 transform rotate-90">{`>`}</span>
</a> */}
      <Image src={resources} alt="menu" className="px-2 py-2 mt-2"/>

    </div>
    <div className="flex space-x-4 mr-[60px] font-medium">
      <a className=" text-black px-3 py-3 mt-4  font-medium">Log in</a>
      {/* <a href="/signup" className="text-lg text-black border border-black rounded px-2 py-0 mt-2">Sign Up Now</a> */}
      {/* <a href="/signup" className=" text-black border border-black rounded px-3 py-3 mt-2">Sign Up Now</a> */}
      {/* <a href="/signup" className="text-black border-2 border-black rounded-lg px-2 py-2 mt-2">Sign Up Now</a> */}
      <Image src ={signup} alt="menu" className="px-2 py-2 mt-2"/>


    </div>
  </div>

        <div className="md:hidden">
          <Image src={hamburger} alt="menu" />
        </div>
      </header>
    );
  }
  
  export default Header;
  