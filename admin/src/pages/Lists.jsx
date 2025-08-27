import React from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { useState } from 'react'
import { useContext } from 'react';
import { authDataContext } from '../context/AuthContext';
import { useEffect } from 'react';
import axios from 'axios';

function Lists() {
  let [list, setList] = useState([]);
  let {serverUrl} = useContext(authDataContext);

  const fetchList = async () => {
    try {
      let result  = await axios.get(serverUrl+"/api/product/list");
      setList(result.data);
      console.log(result.data);
    } catch (error) {
      console.log("Error while fetchng List Product");
    }
  }

  const removeList = async (id)=>{
    try {
      let result = await axios.post(`${serverUrl}/api/product/remove/${id}`,{},{withCredentials:true});
      if(result.data){
        fetchList();
      }
      else{
        console.log("Failed to remove Product")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchList();
  },[]);

  return (
    <div className="w-[100vw] min-h-[100vh]  text-white bg-gradient-to-l from-[#141414] to-[#0c2025]">
     <Nav/>
     <div className='w-[100%] h-[100%] flex items-center justify-start'> 
        <Sidebar/>

        <div  className="w-[82%] h-[100%] flex flex-col  gap-[30px] mt-[70px] py-[50px] ml-[120px] md:ml-[230px] lg:ml-[320px] overflow-x-hidden ">
          <div className='w-[400px] h-[50px] text-[28px] md:text-[40px] mb-[20px] text-white'>
          All Listed Products
          </div>
          {
            list?.length > 0 ? (
              list.map((item, index)=>(
                <div key={index} className='w-[90%] md:h-[120px] h-[90px] bg-slate-600 rounded-xl flex items-center justify-start gap-[5px] md:gap-[30px] p-[10px] md:px-[30px]'>
                  <img src={item.image1} alt="img1" className='w-[30px] md:w-[120px] h-[90%] rounded-lg ' />
                  <div className='w-[90%] h-[80%] flex flex-col item-start justify-center gap-[2px]'> 
                    <div className='w-[100%] md:text-[20px] text-[15px] text-[#bef0f3]'>
                      {item.name}
                      <div className='md:text-[17px] text-[15px] text-[#bef3da]'>
                      {item.category}
                    </div>

                    <div className='md:text-[17px] text-[15px] text-[#bef3da]'>
                      ₹{item.price}
                    </div>
                    </div>
                  </div>
                   <div className='w-[10%] h-[100%] flex items-center justify-center bg-transparent'>
                      <span onClick={()=>{removeList(item._id)}} className='w-[35px] h-[30%] flex items-center justify-center rounded-md hover:text-red-300 md:hover:bg-red-300 md:hover:text-black cursor-pointer '>X</span>
                    </div>
                </div>
              ))
            )
            : (
            <div className='text-white text-lg '> 
              No Products Availbale.
            </div>
            )
          }
        </div>
     </div>
    </div>
  )
}

export default Lists