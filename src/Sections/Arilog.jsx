import Ari from "../assets/images/ou.jpg";
import smartFarming from "../assets/images/JH.jpg";
import shop from "../assets/images/shop.jpg";
import transportation from "../assets/images/transportation.jpg";
import { Link } from "react-router-dom";

const cards = [
  { title: "Restaurant Donor Program:", img: smartFarming,link:'/Weather' },
  
];

const Arilog = () => {
  return (
    <div className="h-screen relative border-2 ">
      <div
        className="absolute inset-0 bg-cover  mt-16"
        style={{ backgroundImage: `url(${Ari})` }}
      ></div>
      <div className=" relative w-[90%]   h-[50%]  mx-11 mt-52 p-4,  absolute bg-black/20 w-[59.5%] h-[50%] rounded-lg top-[2%] left-[2%]">
        <h1 className="text-[3.5rem] font-bold text-white mb-2  ">Donor Management in Food Distribution Surplus App</h1>
        <p className="text-[1.3rem] font-semibold text-white max-w-[80%]">
        
Donor Management in Food Distribution Surplus App Definition:

Donor management within a food distribution surplus app refers to the systematic and organized process of overseeing and engaging with individuals, businesses, or entities that contribute surplus food resources to the platform. This critical aspect of the app is designed to streamline and enhance the interaction between donors and the surplus food distribution system, ensuring a seamless and impactful collaboration.
        </p>
      </div>
      {/* cards */}
      <div className="absolute bottom-[-10] left-1/2 transform -translate-x-1/2  flex items-center justify-around  w-[80%] mt-[15%] mb-[20px]">
        {cards.map((obj) => (
          <Link key={obj.title} to={obj.link}>
          <div  className="text-center  h-56 w-[350px] ">
            
            <img src={obj.img} alt="" className="object-cover h-full w-full hover:cursor-pointer hover:scale-105 rounded-lg" />

            <h1 className="bg-white/60 text-3xl font-semibold py-4">{obj.title}</h1>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Arilog;
