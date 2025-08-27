import React, { useContext } from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { adminDataContext } from '../context/AdminContext'

function Home() {

  let { totalProducts, totalOrders } = useContext(adminDataContext)
   return (
    <div className='w-[100vw] h-[100vh] text-white bg-gradient-to-l from-[#141414] to-[#0c2025] relative flex flex-col'>
      <Nav />
      <div className="flex flex-1">
        <Sidebar />

        {/* Dashboard Content */}
        <div className="flex-1 p-8 grid grid-cols-2 gap-6">
          {/* Total Products */}
          <div className="bg-[#1e293b] rounded-2xl shadow-md p-6 flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold">Total Products</h2>
            <p className="text-4xl font-bold mt-3">{totalProducts}</p>
          </div>

          {/* Total Orders */}
          <div className="bg-[#1e293b] rounded-2xl shadow-md p-6 flex flex-col items-center justify-center">
            <h2 className="text-xl font-semibold">Total Orders</h2>
            <p className="text-4xl font-bold mt-3">{totalOrders}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home