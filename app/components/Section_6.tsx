import Image from "next/image";
import cut_out2 from "../../public/assets/cut_out2.svg";
import poster from "../../public/assets/poster.svg";
function Section_6(){
   return(<> 
                        <div className="lg:flex">
                <div className="flex-grow">  {/* Ensure the text section takes available space */}
                    <p className="text-3xl font-bold px-4 lg:ml-[60px] lg:mt-[60px]">All the cool features</p>
                    <div className="hidden lg:block mt-[20px] lg:ml-[80px]">
                    <p>Mauris consequat, cursus pharetra et, habitasse rhoncus quis </p>
                    <p>odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit</p>
                    <p>pellentesque quisque feugiat cras ullamcorper. Ultrices in amet,</p>
                    <p>ullamcorper non viverra a, neque orci.</p>
                    </div>
                    <button className="hidden lg:block font-bold inline-block after:content-['→'] after:ml-2  text-blue-500 mt-[50px] lg:ml-[80px]">View all the features</button>
                </div>

                {/* Image section aligned to the right */}
                <div className="lg:flex-shrink-0 lg:ml-4"> {/* Add margin and prevent the image from growing */}
                    <Image src={poster} alt="poster" className="hidden lg:h-[600px] lg:w-[450px] lg:block lg:mt-[-120px] lg:mr-[110px]" />
                </div>
                </div>

                <div className="lg:hidden">
                    <p className="px-4 pt-4">
                    Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
                    </p>
                    <button className="font-bold inline-block after:content-['→'] after:ml-2 text-blue-500 mt-4 px-4">View all the features</button>
                </div>
                <Image src={poster} alt ="poster" className="lg:hidden"/>     
           
           
   </>);
}
export default Section_6;