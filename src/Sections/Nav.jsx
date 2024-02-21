import { headerLogo } from "../assets/images/index";
import { navLinks } from "../Constants";
import { hamburger } from "../assets/icons/index";
import { Link } from "react-router-dom";
import slogo from "../assets/images/slogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  // const navLinks = [{label:"",link:""},]

  const [bar, setBar] = useState(false);

  const handleServicesClick = () => {
    setBar((prev) => !prev);
  };

  const handleNavLinkClick = () => {
    setBar(false);
  };

  console.log("current bar value", bar);

  return (
    <header className="fixed bg-white  shadow-xl top-0 w-full z-20 mb-[500px] ">
      <nav className="max-container  padding-x py-2 flex items-center justify-between ">
        {/* logo */}
        <Link to="/">
          <img src={slogo} height={1} width={60} />
        </Link>
        {/* list */}
        <ul className="flex items-center gap-16 max-lg:hidden text-black">
          <li
            className="text-lg font-montserrat font-medium  hover:text-slate-800 hover:underline-offset-[8px] hover:underline hover:decoration-slate-900 hover:decoration-2 text-black"
            onClick={handleNavLinkClick}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="text-lg font-montserrat font-medium  hover:text-slate-800 hover:underline-offset-[8px] hover:underline hover:decoration-slate-900 hover:decoration-2 hover:cursor-pointer text-black"
            onClick={handleNavLinkClick}
          >
            <Link to="/Arilog">About</Link>
          </li>
          <li className="relative text-lg font-montserrat font-medium  hover:text-slate-800 hover:underline-offset-[8px] hover:underline hover:decoration-slate-900 hover:decoration-2 hover:cursor-pointer items-center flex justify-center text-black">
            <button onClick={handleServicesClick}>Services</button>
            {bar && (
            <div className="bg-white bg-opacity-90 absolute bottom-[-500%]  p-4 flex flex-col gap-4 rounded-lg shadow-xl">
              <Link to="/Weather">
                {" "}
                <h1
                  className="text-lg font-semibold text-gray-500 hover:cursor-pointer hover:text-gray-900"
                  onClick={handleNavLinkClick}
                >
              Restaurant
                </h1>
              </Link>
              <Link to="/Map">
                <h1
                  className="text-lg font-semibold text-gray-500 hover:cursor-pointer hover:text-gray-900"
                  onClick={handleNavLinkClick}
                >
               
                </h1>
              </Link>
              <Link to="/Products">
                <h1
                  className="text-lg font-semibold text-gray-500 hover:cursor-pointer hover:text-gray-900"
                  onClick={handleNavLinkClick}
                >
                  
                </h1>
              </Link>
            </div>
          )}
          </li>
          
          <li
            className="text-lg font-montserrat font-medium  hover:text-slate-800 hover:underline-offset-[8px] hover:underline hover:decoration-slate-900 hover:decoration-2 text-black"
            onClick={handleNavLinkClick}
          >
            <Link to="/Team">Team</Link>
          </li>
        </ul>

        {/* explore/signin */}
        <Link to="/Login">
         
          <button className="flex items-center px-6 py-3 gap-4  bg-green-500 text-white rounded-full border-2 border-green-400 hover:bg-green-400">
            <FontAwesomeIcon icon={faUser} className="text-gray-600 " />
            <h1 className="font-bold text-lg tracking-wider  ">Sign In</h1>
          </button>
        </Link>
        {/* hamburger */}
        <button className="hidden max-lg:block">
          <img src={hamburger} height={30} width={30} />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
