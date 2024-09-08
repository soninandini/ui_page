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
                <div className="px-4 lg:flex lg:ml-[80px] lg:pt-[40px]">
                    <Image src={logo2} alt="logo" className="lg:mt-[-140px]"/>
                    <Image src={footer1} alt="footer1" className="lg:h-[200px] w-[200px]"/>
                    <Image src={footer2} alt="footer2" className="lg:h-[200px] w-[200px]"/>
                    <Image src={footer3} alt="footer3" className="lg:h-[200px] w-[200px]"/>
                    <Image src={footer4} alt="footer4" className="lg:h-[200px] w-[200px]"/>
                    <Image src={footer5} alt="footer5" className="lg:h-[200px] w-[200px]"/>

                </div>
                <div className="w-[1200px] bg-white h-[1px] mb-4 mt-4 mx-auto"></div>
                <div className="lg:flex ">
                    <p className="text-white px-4 lg:ml-[40px]">uteach @ 2023. All rights reserved.</p>
                    <Image src={last_footer} alt="last_footer" className="px-4 w-[90%] lg:ml-[420px] lg:w-[30%] lg:pt-[-24px] " />
                </div>
         </div>
     );
}
export default Footer;