import Image from "next/image";
import right_column from "../../public/assets/right_column.svg";
import right2_column  from "../../public/assets/right2_column.svg";
import screen from "../../public/assets/screen.svg";
import lines from "../../public/assets/lines.svg";
import icon1 from "../../public/assets/icon1.svg";
import icon2 from "../../public/assets/icon2.svg";
import icon3 from "../../public/assets/icon3.svg";
import icon4 from "../../public/assets/icon4.svg";
import icon5 from "../../public/assets/icon5.svg";
import icon6 from "../../public/assets/icon6.svg";
import icon7 from "../../public/assets/icon7.svg";
import icon8 from "../../public/assets/icon8.svg";
import icon9 from "../../public/assets/icon9.svg";
function Section_2() {
    return (<div className="bg-slate-100"> 
                <div>
                    <p className="mt-20 py-[40px] text-2xl px-4 font-bold lg:text-center lg:text-3xl"> All the  <span className="underline decoration-4 decoration-orange-500">Tools</span> that you need</p>
                    <p className="mt-4 px-4 lg:text-center lg:leading-[0.75]">
                        Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.
                        <span className="hidden lg:block"><br /></span>
                        Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.
                     </p>

                </div>
                {/* <div className="relative flex justify-between items-center">
  <Image src={right_column} alt="right column" className="z-10 lg:h-[480px] lg:w-[600px] sm:h-[50px] sm:w-[60px]" />
  <Image src={screen} alt="screen" className="absolute z-20 lg:h-[800px] lg:w-[900px] left-[200px] sm:h-[100px] sm:w-[100px]" />
  <Image src={right2_column} alt="right column" className="z-10 lg:h-[600px] lg:w-[400px] top-[-60] sm:h-[10px] sm:w-[20px]" />
</div> */}

<div className="relative flex justify-between items-center">
  <Image 
    src={right_column} 
    alt="right column" 
    className="
      z-10 
      h-[100px] w-[250px]    {/* Default size for mobile screens */}
      sm:h-[50px] sm:w-[60px]  {/* Size for small screens */}
      lg:h-[480px] lg:w-[600px]" 
  />

  <Image 
    src={screen} 
    alt="screen" 
    className="
      absolute z-20 
      h-[200px] w-[200px]  {/* Default size for mobile screens */}
      sm:h-[100px] sm:w-[100px]  {/* Size for small screens */}
      lg:h-[800px] lg:w-[900px]  
       left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-1/2 "
  />

  <Image 
    src={right2_column} 
    alt="right column" 
    className="
      z-10 
      h-[150px] w-[300px]   {/* Default size for mobile screens */}
      sm:h-[10px] sm:w-[20px]  {/* Size for small screens */}
      lg:h-[600px] lg:w-[400px] top-[-60px]" 
  />
</div>
<div className="relative">
  <Image 
    src={lines} 
    alt="lines" 
    className="absolute right-[50px] top-[-35px]"
  />
</div>
<div className="flex space-x-14 ml-0">
    <Image src={icon1} alt="icon1" className="lg:h-[50px] lg:w-[50px] lg:space-x-20 lg:mt-12 lg:ml-40" />
    <Image src={icon2} alt="icon2" className="lg:h-[50px] lg:w-[50px] lg:space-x-20 lg:mt-12 lg:ml-40" />
    <Image src={icon3} alt="icon3" className="lg:h-[50px] lg:w-[50px] lg:space-x-20 lg:mt-12 lg:ml-40" />
    <Image src={icon4} alt="icon4" className="lg:h-[50px] lg:w-[50px] lg:space-x-20 lg:mt-12 lg:ml-40"/>
    <Image 
    src={icon5} 
    alt="icon5"  
    className="hidden lg:block lg:h-[50px] lg:w-[50px] lg:space-x-20 lg:mt-12 lg:ml-40" 
  />
  
  <Image 
    src={icon6} 
    alt="icon6"  
    className="hidden lg:block lg:h-[50px] lg:w-[50px] lg:space-x-20 lg:mt-12 lg:ml-40" 
  />
  
  <Image 
    src={icon7} 
    alt="icon7"  
    className="hidden lg:block lg:h-[50px] lg:w-[50px] lg:space-x-20 lg:mt-12 lg:ml-40" 
  />
  
  <Image 
    src={icon8} 
    alt="icon8"  
    className="hidden lg:block lg:h-[50px] lg:w-[50px] lg:space-x-20 lg:mt-12 lg:ml-40" 
  />
  
  <Image 
    src={icon9} 
    alt="icon9"  
    className="hidden lg:block  lg:h-[50px] lg:w-[50px] lg:space-x-20 lg:mt-12 lg:ml-40" 
  />
</div>


    </div>);
}
export default Section_2;
      