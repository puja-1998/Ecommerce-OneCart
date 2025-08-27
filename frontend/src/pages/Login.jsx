import React from "react";
import logo from "../assets/vcart logo.png";
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useContext } from "react";
import { authDataContext } from "../context/authContext";
import axios from 'axios';
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/Firebase";
import { userDataContext } from "../context/UserContext";

function Login() {

  const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let {serverUrl} = useContext(authDataContext);
    let {getCurrentUser} = useContext(userDataContext);

    let navigate = useNavigate();

    const handleLogin = async (e)=>{
      e.preventDefault();
      try {
        let result = await axios.post(serverUrl + "/api/auth/login",{email, password}, {withCredentials:true})
        console.log(result.data);
        getCurrentUser();
        navigate("/")
      } catch (error) {
        console.log("Failed to login.",error);
        
      }
    }

      const googleLogin =async ()=>{
        try {
          const response = await signInWithPopup(auth, provider);
          let user = response.user
          let name = user.displayName
          let email = user.email
    
          const result = await axios.post(serverUrl + "/api/auth/googlelogin", {name, email}, {withCredentials:true});
          console.log(result.data);
           getCurrentUser();
          navigate("/")
          
        } catch (error) {
          console.log("Failed to login with google account.",error);
        }
      }
     
  return (
    <div className=" w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2015] text-white flex flex-col items-center justify-start">
      <div
        onClick={() => navigate("/")}
        className="w-[100%] h-[80px]  flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
      >
        <img src={logo} alt="logo" className="w-[40px]" />
        <h1 className="text-[22px] font-sans">OneCart</h1>
      </div>
      <div className="w-[100%] h-[100px] flex flex-col items-center justify-center gap-[10px]">
        <span className="text-[25px] font-semibold">Login Page</span>
        <span className="text-[16px] mb-2">
          Welcome to OneCart, Place your order
        </span>
      </div>

      {/* Form */}

      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center">
        <form action="" onSubmit={handleLogin} className="gap-[20px]  w-[90%] h-[90%] flex flex-col items-center justify-start">
          <div onClick={googleLogin} className=" w-[90%] h-[50px] bg-[#42656cae] border-[1px]  rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer">
              <FcGoogle size={24} />
             Login Account with Google
          </div>
          <div  className="gap-[10px]  w-[100%] h-[20px] flex items-center justify-center">
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div> OR <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
          </div>
          <div className=" relative gap-[15px]  w-[90%] h-[400px] flex flex-col items-center justify-center">
            <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder="Email" required className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold" />
            <input onChange={(e)=>setPassword(e.target.value)} value={password} type={showPassword ? "text" : "password"} placeholder="Password" required className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold" />
            {!showPassword && <IoEyeOff onClick={()=>setShowPassword(prev => !prev)} className="w-[20px] h-[20px] cursor-pointer  absolute right-[5%] bottom-[57%]"/>}
            {showPassword &&  <IoEye onClick={()=>setShowPassword(prev => !prev)} className="w-[20px] h-[20px] cursor-pointer  absolute right-[5%] bottom-[57%]"/>}
            <button className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold text-white cursor-pointer"> Login</button>
            <p className="flex gap-[10px]">You have'n any account? <span onClick={()=>navigate("/register")} className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer"> Create New Account</span></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
