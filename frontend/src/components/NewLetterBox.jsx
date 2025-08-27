import React from 'react'

function NewLetterBox() {
    const HandleSubmit = async () => {
        e.preventDefault()
    }
  return (
    <div className='w-[100%] h-[40vh]  flex items-center justify-start  flex-col bg-gradient-to-l from-[#141414] to-[#0c2025] gap-[10px]'>
        <p className='md:text-[30px] text-[20px] text-[#a5faf7] font-semibold px-[20px]'>Subscribe Now And Get 20% Off</p>
        <p className='md:text-[18px] text-[14px] text-center text-blue-100 font-semibold px-[20px]'>
            Subscribe now and enjoy exclusive savings, special deals, and early access to new Collections.
        </p>
        <form action="" onSubmit={HandleSubmit} className='w-[100%] h-[30%]  md:h-[50%] flex items-center justify-center mt-[20px] px-[20px] gap-[20px]'>
            <input type="text" placeholder='Enter Your Email' required className='placeholder:text-black bg-slate-300 w-[600px] h-[40px]  max-w[60%] px-[20px] rounded-lg shadow-sm shadow-black'/>
            <button type='submit' className='md:text-[16px] text-[15px] px-[10px] md:px-[30px] py-[12px] md:py-[10px] hover:bg-slate-500 cursor-pointer bg-[#2e3030c9] text-white flex items-center justify-center gap-[20px] border-[1px] border-[#8008049] rounded-lg shadow-sm shadow-black'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewLetterBox