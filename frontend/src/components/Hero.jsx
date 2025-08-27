import React from 'react';
import { FaCircle } from "react-icons/fa";

function Hero({heroData, heroCount, setHeroCount}) {
  return (
    <div className='w-[40%] h-[100%] relative'>
        <div className='absolute text-[#88d9ee] w-[60%] text-[18px] md:text-[30px] lg:text-[40px] md:left-[10%] md:top-[90px] lg:top-[130px] left-[10%] top-[10px]' >
            <p>{heroData.text1}</p>
            <p className='text-white'>{heroData.text2}</p>
        </div>
        <div className='absolute  md:top-[400px] lg:top-[500px] left-[10%] top-[160px] flex items-center justify-center gap-[10px]'>
            <FaCircle className={`w-[14px] ${heroCount === 0 ? "fill-orange-400" : "fill-white"}`} onClick={()=>{setHeroCount(0)}}/>
            <FaCircle className={`w-[14px] ${heroCount === 1 ? "fill-orange-400" : "fill-white"}`} onClick={()=>{setHeroCount(1)}}/>
            <FaCircle className={`w-[14px] ${heroCount === 2 ? "fill-orange-400" : "fill-white"}`} onClick={()=>{setHeroCount(2)}}/>
            <FaCircle className={`w-[14px] ${heroCount === 3 ? "fill-orange-400" : "fill-white"}`} onClick={()=>{setHeroCount(3)}}/>
        </div>
    </div>
  )
}

export default Hero