import React, { useContext, useState } from "react";
import logo from "../assets/vcart logo.png";
import { IoSearchCircleOutline } from "react-icons/io5";
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { userDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authDataContext } from "../context/AuthContext";
import { IoMdHome } from "react-icons/io";
import { HiOutlineCollection } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import { shopDataContext } from "../context/ShopContext";

function Nav() {
  let { getCurrentUser, userData } = useContext(userDataContext);
  let { serverUrl } = useContext(authDataContext);
  let {showSearch, setShowSearch, search, setSearch, getCartCount}= useContext(shopDataContext);
  let [showProfile, setShowProfile] = useState(false);
  let navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      console.log(result.data);
      getCurrentUser();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black">
      <div className="w-[20%] lg:w-[30%] flex items-center justify-start gap-[10px] ">
        <img src={logo} alt="logo" className="w-[30px]" />
        <h1 className="text-[25px] text-black font-sans">OneCart</h1>
      </div>
      <div className="w-[50%] lg:w-[40%] hidden md:flex">
        <ul className="flex items-center justify-center gap-[19px] text-white">
          <li onClick={()=>{navigate("/")}} className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            HOME
          </li>
          <li onClick={()=>{navigate("/collections")}} className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            COLLECTIONS
          </li>
          <li onClick={()=>{navigate("/about")}} className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            ABOUT
          </li>
          <li onClick={()=>{navigate("/contact")}} className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
            CONTACT
          </li>
        </ul>
      </div>

      <div className="w-[30%] flex items-center justify-end gap-[20px]">
        {!showSearch && (
          <IoSearchCircleOutline
            onClick={() => {setShowSearch((prev) => !prev); navigate("/collections")}}
            className="w-[38px] h-[38px] text-[#000000] cursor-pointer"
          />
        )}
        {showSearch && (
          <IoSearchCircleSharp
            onClick={() => setShowSearch((prev) => !prev)}
            className="w-[38px] h-[38px] text-[#000000] cursor-pointer"
          />
        )}
        {!userData && (
          <FaUserCircle
            onClick={() => setShowProfile((prev) => !prev)}
            className="w-[29px] h-[29px] text-[#000000] cursor-pointer"
          />
        )}
        {userData && (
          <div
            onClick={() => setShowProfile((prev) => !prev)}
            className="w-[30px] h-[30px] cursor-pointer bg-[#080808] text-[white] flex items-center justify-center rounded-full"
          >
            {userData?.name?.slice(0, 1)}
          </div>
        )}
        <MdOutlineShoppingCart onClick={()=>{navigate("/cart")}} className="w-[30px] h-[30px] text-[#000000] cursor-pointer hidden md:block" />
        <p className=" absolute w-[18px] h-[18px] items-center justify-center bg-black px-[5px] py-[2px] text-[9px] top-[10px] right-[23px] text-white rounded-full hidden md:block">
          {getCartCount()}
        </p>
      </div>

      {showSearch && (
        <div className=" w-[100%] h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center">
          <input
            type="text"
            value={search}
            className="lg:w-[50%] w-[80%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-[white] text-[18px]"
            placeholder="Search here"
            onChange={(e)=>{setSearch(e.target.value)}}
          />
        </div>
      )}

      {showProfile && (
        <div className=" w-[220px] h-[150px] bg-[#000000d7] absolute top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-10">
          <ul className="w-[100%] h-[100%] flex items-start justify-around flex-col text-[17px] py-[10px] text-white">
            {!userData && (
              <li
                onClick={() => {
                  navigate("/login");
                  setShowProfile(false);
                }}
                className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
              >
                Login
              </li>
            )}
            {userData && (
              <li
                onClick={() => {
                  handleLogout();
                  navigate("/login");
                  setShowProfile(false);
                }}
                className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
              >
                Logout
              </li>
            )}
            <li onClick={() => {navigate("/orders");setShowProfile(false);}} className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">
              Orders
            </li>
            <li onClick={() => {navigate("/about");setShowProfile(false);}} className="w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">
              About
            </li>
          </ul>
        </div>
      )}

      <div className="w-[100vw] h-[90px] flex items-center justify-between px-[20px] text-[12px] fixed bottom-0 left-0 bg-[#191818] md:hidden">
        <button onClick={()=>{navigate("/")}} className="text-white flex items-center justify-center flex-col gap-[2px] cursor-pointer">
          <IoMdHome className="w-[28px] h-[28px] text-white md:hidden" /> Home
        </button>
        <button onClick={()=>{navigate("/collections")}} className="text-white flex items-center justify-center flex-col gap-[2px] cursor-pointer">
          <HiOutlineCollection className="w-[28px] h-[28px] text-white md:hidden" />Collections
        </button>
        <button onClick={()=>{navigate("/contact")}} className="text-white flex items-center justify-center flex-col gap-[2px] cursor-pointer">
          <MdContacts className="w-[28px] h-[28px] text-white md:hidden" />Contact
        </button>
        <button onClick={()=>{navigate("/cart")}} className="text-white flex items-center justify-center flex-col gap-[2px] cursor-pointer">
          <MdOutlineShoppingCart className="w-[28px] h-[28px] text-white md:hidden" /> Cart
        </button>
        <p className=" absolute w-[18px] h-[18px] items-center justify-center bg-white px-[5px] py-[2px] text-[9px] top-[10px] right-[18px] text-black rounded-full ">
          {getCartCount()}
        </p>
      </div>
    </div>
  );
}

export default Nav;
