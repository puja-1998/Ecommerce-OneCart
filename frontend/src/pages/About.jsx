import React from 'react'
import Title from '../components/Title'
import aboutimg from '../assets/about.png';
import NewLetterBox from '../components/NewLetterBox';
function About() {
  return (
     <div className='w-full min-h-[100vh] overflow-x-hidden  bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-center flex-col gap-[50px] pt-[80px] '>
        <Title text1={"ABOUT"} text2={"US"}/>
        <div className='w-[100%] flex items-center justify-center flex-col lg:flex-row'>
            <div className='w-[100%] lg:w-[50%]  flex items-center justify-center'>
                <img src={aboutimg} alt="about" className='lg:w-[65%] w-[80%] shadow-md  shadow-black rounded-sm'/>
            </div>
            <div className='w-[80%] lg:w-[50%]  flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]'>
                <p className='w-[100%] lg:w-[80%] text-white md:text-[16px] text-[13px]'>
                    OneCart born fr smart, seamless shopping-created  to deliver quality products, trending styles, and everyday essentials in one place. With reliable servive, fast delivery, and greate value, OneCart makes you Online shopping experience simple, satisfying and stress-free.
                </p>
                <p className='w-[100%] lg:w-[80%] text-white md:text-[16px] text-[13px]'>
                    Modern shoppers-combining style, convenience, and affordability. Whether it's fashion, essentials, or trends, we bring everything you need to one trusted platform with fast delivery, easy-returns, and customer-first shopping experience you will love.
                </p>
                <p className='w-[100%] lg:w-[80%] text-white lg:text-[18px] text-[15px] mt-[10px] font-bold'>Our Mission</p>
                <p className='w-[100%] lg:w-[80%] text-white md:text-[16px] text-[13px]'>
                    Our Mission is to redefine online shopping by delivering quality, affordability, and convenience. OneCart connects customers with trusted products and brands, offering a seamless, customer-focused experience that saves time, adds value, and feets every lifestyle and needs.
                </p>
            </div>
        </div>
        <div className='w-[100%] flex items-center justify-center flex-col gap-[10px]'>
            <Title text1={"WHY"} text2={"CHOOSE US"}/>
            <div className='w-[80%] flex items-center justify-center flex-col lg:flex-row py-[40px]'>
                <div className='w-[90%] lg:w-[33%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center text-white flex-col gap-[20px]  px-[40px] py-[10px] background-blur-[2px] bg-[#ffffff0b]'>
                    <b className='text-[20px] font-semibold text-[#bff1f9]'>Quality Assurance</b>
                    <p>We guarantee quality through strict checks,reliable sourcing and commitment to customer satisfaction always. </p>
                </div>

                <div className='w-[90%] lg:w-[33%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center text-white flex-col gap-[20px]  px-[40px] py-[10px] background-blur-[2px] bg-[#ffffff0b]'>
                    <b className='text-[20px] font-semibold text-[#bff1f9]'>Convenience</b>
                    <p>Shop easily with fast delivery, simple navigations, secure checkout, and everything you need in one place. </p> 
                </div>

                <div className='w-[90%] lg:w-[33%] h-[250px] border-[1px] border-gray-100 flex items-center justify-center text-white flex-col gap-[20px]  px-[40px] py-[10px] background-blur-[2px] bg-[#ffffff0b]'>
                    <b className='text-[20px] font-semibold text-[#bff1f9]'>Exceptional Customer Service</b>
                    <p>Our dedicated support team ensures quick response helpful solutions, and smooth shopping experience every time. </p>
                </div> 
            </div>
        </div>
        <NewLetterBox/>
    </div>
  )
}

export default About