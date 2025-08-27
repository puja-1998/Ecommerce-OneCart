import React from 'react'
import Title from '../components/Title'
import contact from '../assets/contact.jpg';
import NewLetterBox from '../components/NewLetterBox';
function Contact() {
  return (
     <div className='w-full min-h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] flex items-center justify-start flex-col gap-[50px] pt-[80px]'>
        <Title text1={"CONTACT"} text2={"US"}/>
        <div className='w-[100%] flex items-center justify-center flex-col lg:flex-row'>
            <div className='w-[100%] lg:w-[50%]  flex items-center justify-center'>
                <img src={contact} alt="conatct" className='lg:w-[70%] w-[80%] shadow-md  shadow-black rounded-sm'/>
            </div>
            <div className='w-[80%] lg:w-[50%]  flex items-start justify-center gap-[20px] flex-col mt-[20px] lg:mt-[0px]'>
                <p className='w-[100%] lg:w-[80%] text-white font-bold lg:text-[18px] text-[15px]'>
                    Our Store
                </p>
                <p className='w-[100%] lg:w-[80%] text-white md:text-[16px] text-[13px]'>
                    <p>41103 Pune, Chincwadgaon</p>
                    <p>Pune, Maharashtra, India</p>
                </p>

                <p className='w-[100%] lg:w-[80%] text-white md:text-[16px] text-[13px]'>
                    <p>tel: +91-9876543210</p>
                    <p>Email: admin@onecart.com</p>
                </p>

                <p className='w-[100%] lg:w-[80%] text-white font-bold lg:text-[18px] text-[15px]'>Careers at OneCart</p>
                <p className='w-[100%] lg:w-[80%] text-white md:text-[16px] text-[13px]'>
                    Learn more about our teams and job openings
                </p>

                <button className=' cursor-pointer flex items-center justify-center px-[30px] py-[20px] text-white bg-transparent border active:bg-slate-600 rounded-md'>Explore Jobs</button>
            </div>
        </div>
        <NewLetterBox/>
    </div>  
  )
}

export default Contact