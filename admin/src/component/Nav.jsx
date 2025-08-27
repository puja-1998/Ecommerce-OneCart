import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom';
import logo from '../assets/logo.png';
import axios from 'axios';
import {authDataContext} from '../context/AuthContext';
import {adminDataContext} from '../context/AdminContext';

function Nav() {
  let navigate = useNavigate();
  let {serverUrl} = useContext(authDataContext);
  let {getAdmin} = useContext(adminDataContext); 

  const logOut = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout", {withCredentials:true});
      console.log(result.data);
      getAdmin();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='w-[100vw] h-[70px] bg-[#dcdbdbf8] z-10 fixed top-0 flex items-center justify-between px-[30px] overflow-x-hidden shadow-md shadow-black'>
      <div onClick={()=>{navigate("/")}} className='w-[30%] flex items-center justify-start gap-[10px] cursor-pointer'>
        <img src={logo} alt="logo" className='w-[30px]'/>
        <h1 className='text-[25px] text-black font-sans'>
          OneCart
        </h1>
      </div>
      <button onClick={logOut} className='text-[15px] hover:border-[2px] border-[#89daea] bg-[#000000ca] cursor-pointer rounded-2xl text-white px-[20px] py-[10px]'>Logout</button>
    </div>
  )
}

export default Nav