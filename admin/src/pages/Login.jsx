import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { authDataContext } from "../context/AuthContext";
import { adminDataContext } from "../context/AdminContext";

function Login() {

  const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let {serverUrl} = useContext(authDataContext);
    let {adminData, getAdmin} = useContext(adminDataContext);
    let navigate = useNavigate();

    const adminLogin = async (e)=>{
         e.preventDefault();
        try {
           const result = await axios.post(serverUrl + "/api/auth/adminlogin",{email, password}, {withCredentials:true})
            console.log(result.data);
            getAdmin();
            navigate("/")
        } catch (error) {
            console.log(error);
        }
    }
      
     
  return (
    <div className=" w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2015] text-white flex flex-col items-center justify-start">
      <div
        className="w-[100%] h-[80px]  flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
      >
        <img src={logo} alt="logo" className="w-[40px]" />
        <h1 className="text-[22px] font-sans">OneCart</h1>
      </div>
      <div className="w-[100%] h-[100px] flex flex-col items-center justify-center gap-[10px]">
        <span className="text-[25px] font-semibold">Admin Login</span>
        <span className="text-[16px] mb-2">
          Welcome to OneCart, Apply to Admin Login
        </span>
      </div>

      {/* Form */}

      <div className="max-w-[600px] w-[90%] h-[400px] bg-[#00000025] border-[1px] border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center">
        <form action="" onSubmit={adminLogin} className="gap-[20px]  w-[90%] h-[90%] flex flex-col items-center justify-start">
          
          <div className=" relative gap-[15px]  w-[90%] h-[400px] flex flex-col items-center justify-center">
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder="Email" required className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold" />
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type={showPassword ? "text" : "password"} placeholder="Password" required className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold" />
            {!showPassword && <IoEyeOff onClick={()=>setShowPassword(prev => !prev)} className="w-[20px] h-[20px] cursor-pointer  absolute right-[5%] bottom-[50%]"/>}
            {showPassword &&  <IoEye onClick={()=>setShowPassword(prev => !prev)} className="w-[20px] h-[20px] cursor-pointer  absolute right-[5%] bottom-[50%]"/>}
            <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold text-white cursor-pointer"> Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
