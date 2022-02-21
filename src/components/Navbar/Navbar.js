import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../../data/logo2.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between items-center h-20 mr-20 sm:mr-0 ml-20 sm:ml-0">
        <div className="w-60 sm:w-24 sm:ml-4 p-8 sm:p-2">
          <a href="#home">
            <img className="w-40 sm:w-24" src={logo} alt="" />
          </a>
        </div>
        <div className="w-70 sm:w-[240px] flex justify-center sm:justify-end items-center p-8 sm:p-0 sm:mr-1">
              <div >
                  <a className="w-16 sm:w-12 flex justify-center items-center mr-4 sm:m-0 hover:border border-[#F91944] 
              duration-200 ease-linear py-2 rounded-[27px] sm:rounded-[15px]" href="#cart">
                    <FontAwesomeIcon
                    className="text-[#F91944] h-4 mr-1"
                    icon={faCartShopping}
                    />
                    <sup className="font-bold text-base text-[#F91944]">0</sup>
                  </a>
              </div>
              <div >
                    <a className="duration-200 ease-linear font-Montserrat sm:font-normal m-4 sm:m-0 text-lg sm:text-base hover:border
                           border-[#F91944] py-2 sm:py-2 px-4 sm:px-2 rounded-[27px] sm:rounded-[20px]" href="#login">Login</a>
              </div>
              <div >
                  <a className="duration-200 ease-linear sm:w-[100px] font-Montserrat m-4 sm:m-0 
                              text-base sm:text-base bg-[#F91944] rounded-[27px] sm:rounded-[20px] py-2 sm:py-2 px-4 text-white" href="#signup">Sign up</a>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
