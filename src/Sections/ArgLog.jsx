import why from "../assets/images/oi.jpg";
const ArgLog = () => {
  return (
    <section  id="arlog" className="bg-gray-100 pt-16">
      <div  className="py-1 padding-x max-container  font-Urbanist">
        <div>
          <h1 className="text-center text-4xl font-bold mb-4 font-montserrat">
          Surplus Redistribution:
          </h1>
          <p className="text-center max-w-[70%] mx-auto text-gray-600 text-lg">
          Surplus redistribution, within the context of a food distribution app, refers to the systematic and organized process of efficiently redirecting excess or surplus food resources from donors to individuals or organizations in need. This process aims to minimize food wastage, enhance sustainability, and contribute to the broader goal of addressing food insecurity.
          </p>
        </div>
        <div className="flex  mt-20">
          <div className="w-[50%] ">
            <img src={why} alt="" className="h-full object-contain" />
          </div>
          <div className="w-[60%]  flex flex-col py-12 px-8 ">
            <h1 className="text-4xl font-bold font-montserrat">
              Importance of Surplus Distribution
            </h1>
            <p className=" mt-4 text-lg text-gray-600">
            Surplus redistribution plays a crucial role in minimizing food waste by ensuring that excess food from various sources, such as restaurants, grocery stores, or events, does not go unused. Instead, it is redirected to those who can benefit from it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArgLog;
