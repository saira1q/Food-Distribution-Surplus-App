import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import skills from "../assets/images/tr.jpg";

const Demo = () => {
  return (
    <section id="demo" className="xl:padding-x    bg-gray-100   pb-30">
      {/* collections */}
      <div className="flex max-xl:flex-col  max-container flex-row-reverse gap-16 ">
        <div className="max-xl:padding-x py-20 xl:w-1/2 xl:mt-24 flex flex-col justify-around  ">
          {/* main Heading */}
          <div>
            <h1 className="text-8xl max-sm:text-4xl font-palanquin font-bold   relative  z-10 pr-10 ">
              Demo
            </h1>
            <br />
            <h1 className="text-xl   text-gray-600  font-palanquin leading-10">
            Experience Surplus Savior's demo and witness firsthand the seamless process of managing and redistributing surplus food resources. Navigate user-friendly interfaces, explore surplus tracking features, and see how this app bridges the gap between suppliers and those in need. Join us in revolutionizing food distribution for a hunger-free future!
            </h1>
          </div>

          
        </div>
        {/* image with gallary */}
        <div className="flex flex-1 items-center justify-center max-xl:mt-12   max-xl:py-32 max-xl:pb-36 relative  top-0   w-[100%] h-screen">
          <img src={skills} alt="shoe" className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Demo;
