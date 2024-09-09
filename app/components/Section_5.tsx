import Image from 'next/image';
import countries_icon from '../../public/assets/countries_icon.svg';
import teachers_icon from '../../public/assets/teachers_icon.svg';
import students_icon from '../../public/assets/students_icon.svg';
import arrows from '../../public/assets/arrows.svg';
import card1 from '../../public/assets/card1.svg';
import card2 from '../../public/assets/card2.svg';
import card3 from '../../public/assets/card3.svg';
function Section_5(){
      return(<div className='pt-[40px]'>
            
               <div className="bg-[#1F172A] flex flex-col items-center lg:flex-row lg:space-x-[220px]">
                <Image src={countries_icon} alt="countries_icon" className="h-[250px] w-[250px] mb-4 lg:mb-0 lg:ml-[40px]" />
                <Image src={teachers_icon} alt="teachers_icon" className="h-[250px] w-[250px] mb-4 lg:mb-0" />
                <Image src={students_icon} alt="students_icon" className="h-[250px] w-[250px]" />
                </div>
                <div className="lg:flex pt-[40px] px-4 lg:ml-[70px]">
                    <p className='text-3xl font-bold'>What everyone says</p>
                     <Image src = {arrows} alt="arrows" className="hidden lg:block ml-[700px] h-[70px] w-[70px] mt-[-15px] "/>
                </div>
                <div className='lg:flex lg:ml-[40px]'>
                <Image src = {card1} alt="arrows" className='h-[400px] w-[400px]'/>
                <Image src = {card2} alt="arrows" className="hidden lg:block h-[400px] w-[400px] "/>
                <Image src = {card3} alt="arrows" className="hidden lg:block h-[400px] w-[400px]"/>
                </div>




      </div>);
}
export default Section_5;