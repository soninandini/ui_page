import Image from "next/image";
import logo2 from "../../public/assets/logo2.svg"
import footer1 from "../../public/assets/footer1.svg"
import footer2 from "../../public/assets/footer2.svg"
import footer3 from "../../public/assets/footer3.svg"
import footer4 from "../../public/assets/footer4.svg"
import footer5 from "../../public/assets/footer5.svg"
import last_footer from "../../public/assets/last_footer.svg"
function Footer(){
     return(
         <div className="bg-[#1F172A]">
                <div className="px-4 lg:flex lg:ml-[60px] pt-[48px] lg:pt-[40px]  space-y-8 lg:space-y-0">
                    <Image src={logo2} alt="logo" className="lg:mt-[-140px]"/>
                    <Image src={footer1} alt="footer1" className="lg:h-[200px] w-[200px]"/>
                    <Image src={footer2} alt="footer2" className="lg:h-[200px] w-[200px]"/>
                    <Image src={footer3} alt="footer3" className="lg:h-[200px] w-[200px]"/>
                    <Image src={footer4} alt="footer4" className="lg:h-[200px] w-[200px]"/>
                    <Image src={footer5} alt="footer5" className="lg:h-[200px] w-[200px]"/>

                </div>
                <div className="w-full bg-white h-[1px] mb-2 mt-4 "></div>
                <div className="lg:flex">
                    <p className="text-white px-4 lg:ml-[60px] lg: mt-[10px] text-[16px] lg:text-[16px] pt-[24px] pb-[24px]">uteach @ 2023. All rights reserved.</p>
                    <Image src={last_footer} alt="last_footer" className="px-4 w-[100%] lg:ml-[380px] lg:w-[452px] lg:h-[48px] pt:[24px] lg:mt-[22px] " />
                </div>
         </div>
     );
}
export default Footer;