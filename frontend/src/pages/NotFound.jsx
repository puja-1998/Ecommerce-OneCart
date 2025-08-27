import React from 'react';
import {useNavigate} from 'react-router-dom'

function NotFound() {
    let navigate = useNavigate();
  return (
    <div className='w-full min-h-[100vh] text-white md:text-[70px] text-[30px] flex items-center justify-center flex-col gap-[20px]  bg-gradient-to-l from-[#141414] to-[#0c2025]'>
        404 Page Not Found
        <button onClick={()=>navigate("/login")} className=' px-[20px] py-[10px] rounded-xl bg-white  text-[black]  text-[18px] cursor-pointer active:bg-slate-500'>
            Login
        </button>
    </div>
  )
}

export default NotFound