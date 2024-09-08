import Image from "next/image";
import cut_out2 from "../../public/assets/cut_out2.svg";
import poster from "../../public/assets/poster.svg";
function Section_6(){
   return(<> 
            <div className="lg:flex">
                <p>All the cool features</p>
                <div className="hidden lg:block">
                <p>Mauris consequat, cursus pharetra et, habitasse rhoncus quis </p>
                <p>odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit</p>
                <p>pellentesque quisque feugiat cras ullamcorper. Ultrices in amet,</p>
                <p> ullamcorper non viverra a, neque orci.</p>
                </div>
                <div>
                <Image src={poster} alt ="poster" className="hidden lg:h-[600px] lg:w-[400px] lg:block"/>
            </div>
            </div>
                <div className="lg:hidden">
                    <p>
                    Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non viverra a, neque orci.
                    </p>
                </div>
                <Image src={poster} alt ="poster" className="lg:hidden"/>     
           
           
   </>);
}
export default Section_6;