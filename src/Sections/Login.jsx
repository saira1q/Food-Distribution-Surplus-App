import login from "../assets/images/logi.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import slogo from "../assets/images/slogo.png";

import { useFarmDataQuery } from "../store/dataApi";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const { data } = useFarmDataQuery();
  console.log("THIS IS DATA", data);

  return (
    <div className="h-screen ">
      <div className="w-[95%] h-[88%] border-2 mx-auto mt-[5%] flex">
        <div
          className="w-2/3 bg-cover relative"
          style={{ backgroundImage: `url(${login})` }}
        >
          <div className="bg-black opacity-40 absolute inset-0"></div>
          <div className="p-16 relative flex flex-col gap-6">
            <img src={slogo} alt="" width={140} />

            <h1 className="text-[3.5rem] font-bold text-white font-Urbanist ">
              Food distribution surplus app
            </h1>
            <p className="text-[1.3rem] mt-4 p-2 text-white font-montserrat font-semibold max-w-2xl">
            ood distribution surplus refers to excess food beyond current demand. It arises from overproduction, market fluctuations, or supply chain inefficiencies. Effective management is essential to minimize waste and address food insecurity through redistribution initiatives.
            </p>
          </div>
        </div>
        <div className="w-1/3 px-[3%] py-[1%]">
          <div className="flex mb-6  gap-4 items-center ">
            <img
              src={slogo}
              alt=""
              height={10}
              width={100}
              className="bg-white"
            />
            <h1 className="text-3xl font-bold font-Urbanist"></h1>
          </div>
          <div className="h-0.5 w-full bg-gray-400 mb-2"></div>
          <h1 className="font-bold text-3xl font-Urbanist mt-4">Sign In</h1>
          <p className="text-gray-500 mt-2 text-xl font-Urbanist">
            Enter your name and password to sign in
          </p>
          {/* Name Input */}
          <div className="relative mb-4 mt-12 flex items-center ">
            <input
              type="text"
              className="pl-8 pr-4 py-4 w-[100%] border-2 border-gray-600 peer rounded-md  focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
              value={username}
              onChange={(text) => setusername(text)}
            />

            <FontAwesomeIcon
              icon={faUser}
              className="text-gray-400 peer-focus:text-blue-500 absolute left-2 h-[20px] w-[20px]"
            />
          </div>

          {/* Password Input */}
          <div className="relative mb-4 flex items-center">
            <input
              type="password"
              className="pl-8 pr-4 py-4 w-[100%] border-2 border-gray-600 peer rounded-md  focus:outline-none focus:border-blue-500 "
              placeholder="Password"
              value={password}
              onChange={(text) => setPassword(text)}
            />
            <FontAwesomeIcon
              icon={faLock}
              className="text-gray-400 peer-focus:text-blue-500 absolute left-2 h-[20px] w-[20px]"
            />
          </div>
          <div className="text-right">
            <h1 className="font-bold text-lg text-blue-500 font-Urbanist underline underline-offset-2 hover:cursor-pointer">
              Forgot?
            </h1>
          </div>

          {/* checkbox */}
          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              id="myCheckbox"
              className="w-[20px] h-[100px]"
            />
            <p className="text-base font-Urbanist">
              I Agree to the{" "}
              <span className="font-bold">Terms and Conditions</span> by siging
              in
            </p>
          </div>
          {/* buttons */}
          <div className="flex flex-col gap-8">
            <button className="bg-green-600 text-white text-xl w-[100%] py-4 rounded-lg hover:bg-green-800 active:scale-90 transition-all font-bold font-Urbanist">
              Sign In
            </button>
            <button className="text-yellow-500 border-2 border-yellow-500 font-bold text-xl w-[100%] py-4 rounded-lg active:scale-90 transition-all hover:bg-yellow-500 hover:text-white font-Urbanist">
              Sign In As Guest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
