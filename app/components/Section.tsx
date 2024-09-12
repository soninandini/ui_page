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
        <div className="px-4 lg:flex  lg:justify-between font-roboto mt-[30px]">
  <div className="lg:ml-[60px]">
    {/* <p className="text-3xl font-bold mt-10">Teach Student <br />Worldwide</p> */}
    <p className="text-4xl lg:text-[56px] font-roboto font-bold lg:font-extrabold mt-10 lg:mt-[60px]">
  <span className="underline decoration-4 decoration-orange-500">Teach</span> students <br /><span className="block lg:mt-5">worldwide</span>
</p>
    <p className="mt-8 lg:mt-12 leading-[22.4px] lg:leading-[0.65] lg:text-[24px]">
      Amet nunc diam orci duis ut sit diam arcu,nec.
      <span className="hidden lg:block"><br /></span>
      Eleifend proin massa tincidunt lectus pulvinar.
      <span className="hidden lg:block"><br /></span>
      Nunc ipsum est pellentesque turpis ultricies.
    </p>
    <div className="flex flex-wrap mt-10">
  <div className="flex">
    <button className="bg-[#EA580C] text-white px-4 py-2 lg:font-bold font-medium lg:text-[20px] rounded">Sign Up Now</button>
    <div className="flex items-center ml-7">
      <Image src={play} alt="play" width={24} height={24} className="ml-2" />
      <button className="border border-white text-blue-600 font-roboto lg:text-[20px] lg:font-medium px-4 py-2 rounded">View Demo</button>
    </div>
  </div>
  <div className="w-full mt-10 flex flex-col lg:flex-row lg:items-center lg:gap-12 lg:mt-[50px]">
  <p className="mb-4 lg:mb-0 text-gray-600 lg:text-[16px]">
  Trusted by 
  <span className="hidden lg:block">leading companies</span>
  <span className="lg:hidden"> leading companies</span>
</p>
  <div className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-12">
    <Image src={white_logo_1} alt="logo"  />
    <Image src={white_logo_2} alt="logo"  />
    <Image src={white_logo_3} alt="logo"  />
    <Image src={white_logo_4} alt="logo"  />
    <Image src={white_logo_5} alt="logo" />
  </div>
</div>

</div>

  </div>
  {/* <div className="mt-10 flex justify-end flex-grow">
    <Image src={badge} alt="play" className="lg:ml-auto" />
  </div> */}
  <div className="mt-10 flex lg:pr-[60px]">
  <Image src={badge} alt="play" className="h-[329px] w-[361px]  lg:h-[400px] lg:w-[650px]" />
</div>
  

</div>

      
    );
}
export default Section;