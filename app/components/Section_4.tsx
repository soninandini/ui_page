import Image from "next/image";
import collage from "../../public/assets/collage.svg";
function Section_4() {
    return(
        <>
        <div className="flex flex-col-reverse lg:flex-row">
        <div>
    <Image src={collage} alt="collage" className="mt-[20px] h-[500px] w-[600px]" />
  </div>
  <div>
    <p className="font-bold mt-[20px] px-4 text-2xl lg:mt-[120px] lg:text-3xl lg:px-4 lg:ml-[-8px]">
      Meet international 
      <span className="lg:block">students & teachers</span>
    </p>
    <p className="px-4 text-[14px] py-10">
  Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel
  <span className="block lg:hidden">facilisi facilisi nec magna hendrerit.Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. </span>
  <span className="hidden lg:block">Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit.</span> 
  Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
</p>
    <button className="font-bold inline-block after:content-['→'] after:ml-2 lg:ml-[-5px] px-4 text-blue-500">Explore teachers and students</button>
  </div>
 
</div>

        </>
    );
}
export default Section_4;