import React, { useContext } from 'react';
import Nav from '../component/Nav';
import Sidebar from '../component/Sidebar';
import { adminDataContext } from '../context/AdminContext';

function Home() {
  let { totalProducts, totalOrders } = useContext(adminDataContext);

  return (
    <div className="w-full h-screen text-white bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col">
      {/* Top Navigation */}
      <Nav />

      {/* Main Content Layout */}
      <div className="flex flex-1">
        {/* Sidebar on the left (fixed width on desktop, collapses on mobile) */}
        <div className="hidden md:block w-[250px]">
          <Sidebar />
        </div>

        {/* Dashboard Content on the right */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {/* Total Products */}
          <div className="bg-[#1e293b] min-h-[100px] rounded-2xl shadow-md p-6 flex flex-col items-center justify-center">
            <h2 className="text-lg sm:text-xl font-semibold">Total Products</h2>
            <p className="text-3xl sm:text-4xl font-bold mt-3">{totalProducts}</p>
          </div>

          {/* Total Orders */}
          <div className="bg-[#1e293b] min-h-[100px] rounded-2xl shadow-md p-6 flex flex-col items-center justify-center">
            <h2 className="text-lg sm:text-xl font-semibold">Total Orders</h2>
            <p className="text-3xl sm:text-4xl font-bold mt-3">{totalOrders}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
