import React from "react";
import logo from "../assets/vcart logo.png";

function Footer() {
  return (
    <div className="w-[100%] md:h-[36vh] h-[21vh] mb-[77px] md:mb-0">
      <div className="w-[100%] md:h-[30vh] h-[15vh] md:px-[50px] px-[5px] md:mb-0 flex items-center justify-center bg-[#dbfcfcec]">
        <div className="md:w-[30%] w-[35%] h-[100%] flex justify-center flex-col gap-[5px]">
          <div className="flex items-start justify-start gap-[5px] mt-[10px] md:mt-[40px]">
            <img
              src={logo}
              alt="logo"
              className="md:w-[40px] md:h-[40px] w-[30px] h-[30px]"
            />
            <p className=" text-[19px] md:text-[20px] text-black">OneCart</p>
          </div>
          <p className=" text-[15px] md:block hidden text-[#1e2223]">
            OneCart is Your all-in-one online shopping destination, offering top
            quality products, unbeatable deals,and fast delivery-all backed by
            trusted service designed to make your life easier every day.
          </p>
          <p className=" text-[15px] flex md:hidden text-[#1e2223]">
            Fast. Easy. Reliable. OneCart Shopping.
          </p>
        </div>

        <div className="w-[30%] md:w-[25%]  h-[100%] flex items-center justify-center flex-col text-center">
          <div className="flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]">
            <p className=" text-[19px] md:text-[20px] text-[#1e2223] font-sans">
              COMPANY
            </p>
          </div>

          <ul>
            <li className="text-[15px] md:block hidden text-[#1e2223] cursor-pointer">
              Home
            </li>
            <li className="text-[15px]  text-[#1e2223] cursor-pointer">
              About Us
            </li>
            <li className="text-[15px] md:block hidden text-[#1e2223] cursor-pointer">
              Delivery
            </li>
            <li className="text-[15px]  text-[#1e2223] cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>

        <div className="w-[40%] md:w-[25%] h-[100%] flex items-center justify-center flex-col text-center">
            <div className="flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]">
            <p className=" text-[19px] md:text-[20px] text-[#1e2223] font-sans">
              GET IN TOUCH
            </p>
          </div>
          <ul>
            <li className="text-[15px]  text-[#1e2223] ">
              +91-9284879246
            </li>
            <li className="text-[15px]  text-[#1e2223] ">
              contact@onecart.com
            </li>
            <li className="text-[15px] md:block hidden text-[#1e2223] cursor-pointer">
              +1-123-456-7890
            </li>
            <li className="text-[15px]  text-[#1e2223] cursor-pointer">
              admin@onecart.com
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[100%] h-[1px] bg-slate-400"></div>
      <div className="w-[100%] h-[5vh] flex items-center justify-center bg-[#dbfcfcec]">
        Copyright 2025@onecart.com-All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
