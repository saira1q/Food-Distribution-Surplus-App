import { arrowRight } from "../assets/icons/index";
import cta from "../assets/images/log.jpg";
import { Link } from "react-router-dom";
const LastSec = () => {
  return (
    <div className="relative ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center "
        style={{ backgroundImage: `url(${cta})` }}
      ></div>

      {/* Background Color with Low Transparency */}
      <div className="relative bg-green-600 bg-opacity-50 py-32">
        {/* Your content goes here */}
        <div className="flex max-container gap-16">
          <div className="w-2/3 bg-white/20 text-black px-8 py-4 h-[300px] rounded-md">
            <h1 className="text-4xl font-bold  mb-4 font-Urbanist">Surplus Food App</h1>
            <p className="font-Urbanist text-xl">
           
Surplus Food App Definition:

A surplus food app is a digital platform designed to efficiently connect donors with excess food resources to individuals, organizations, or charities in need. The primary goal of the app is to combat food waste by facilitating the seamless redistribution of surplus or unsold food items from businesses, events, or individuals to those who may face food insecurity or benefit from the additional resources.
            </p>
          </div>
          <div className="my-auto">
            <Link to='/Arilog'>
              <button className="border-2 border-white flex gap-2  px-6 py-3 rounded-full text-white font-bold text-2xl active:scale-90">
                Get Started{" "}
                <span className="my-auto ml-2">
                  <img src={arrowRight} alt="" className="h-8" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastSec;
