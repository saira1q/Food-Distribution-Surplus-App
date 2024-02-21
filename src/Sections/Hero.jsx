import heroImg from "../assets/images/hel.jpg";
const Hero = () => {
  return (
    <section id="home" className="xll:padding-x  bg-green-90 ">
    
    
      {/* collections */}
       <div className="h-screen relative border- ">
        <div className= "absolute inset-0 bg-cover mt-20"
        style={{ backgroundImage: `url(${heroImg})` }}>
          {/* main Heading */}
          <div className=" relative w-[80%]   h-[20%]  mx-32 mt-22 p-4"></div>
          <div>
            <h1 className="text-8xl max-sm:text-4xl font-palanquin font-bold   relative  z-10 pr-10 text-black">
             Food Disribution Surplus App
            </h1>
            <br />
            <h1 className="text-4xl  font-bold text-black-200 font-serif">
            Zero Hunger Initiative
            </h1>
          </div>
          {/* button */}
        </div>
        {/* image with gallary */}
        <div className="flex flex-1 items-center justify-center max-xl:mt-17 bg-cover  max-xl:py-42 max-xl:pb-36 relative  top-0   w-[100%] h-screen">
          {/* <img
            src={heroImg}
            alt="shoe"
            className="h-full w-full object-contain"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
