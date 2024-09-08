import Image from "next/image";
import play from "../../public/assets/play.svg";
import badge from "../../public/assets/badge.svg";
import white_logo_1 from "../../public/assets/white_logo_1.svg";
import white_logo_2 from "../../public/assets/white_logo_2.svg";
import white_logo_3 from "../../public/assets/white_logo_3.svg";
import white_logo_4 from "../../public/assets/white_logo_4.svg";
import white_logo_5 from "../../public/assets/white_logo_5.svg";
function Section(){
    return(
        <div className="px-4 lg:flex lg:space-x-40 lg:justify-between">
  <div>
    <p className="text-3xl font-bold mt-10">Teach Student <br />Worldwide</p>
    <p className="mt-5 leading-[1.2] lg:leading-[0.75]">
      Amet nunc diam orci duis ut sit diam arcu, nec.
      <span className="hidden lg:block"><br /></span>
      Eleifend proin massa tincidunt viverra lectus pulvinar.
      <span className="hidden lg:block"><br /></span>
      Nunc ipsum est pellentesque turpis ultricies.
    </p>
    <div className="flex flex-wrap mt-5">
  <div className="flex">
    <button className="bg-orange-500 text-white px-4 py-2 rounded">Sign up Now</button>
    <div className="flex items-center ml-7">
      <Image src={play} alt="play" width={20} height={20} className="ml-2" />
      <button className="border border-white text-blue-600 px-4 py-2 rounded">View Demo</button>
    </div>
  </div>
  <div className="w-full mt-5 flex flex-col lg:flex-row lg:items-center lg:space-x-8">
  <p className="mb-4 lg:mb-0 text-gray-600">
  Trusted by 
  <span className="hidden lg:block">leading companies</span>
  <span className="lg:hidden">leading companies</span>
</p>
  <div className="flex flex-wrap lg:flex-nowrap space-x-4">
    <Image src={white_logo_1} alt="logo"  />
    <Image src={white_logo_2} alt="logo"  />
    <Image src={white_logo_3} alt="logo"  />
    <Image src={white_logo_4} alt="logo"  />
    <Image src={white_logo_5} alt="logo" />
  </div>
</div>

</div>

  </div>
  <div className="mt-10 flex justify-end flex-grow">
    <Image src={badge} alt="play" className="lg:ml-auto" />
  </div>
</div>

      
    );
}
export default Section;