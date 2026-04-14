import React from 'react';
import { FaUserPlus } from "react-icons/fa";

const HomePage = () => {
    return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-16">

      {/* Title Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl md:text-[44px] font-bold text-[#1F2937]">
          Friends to keep close in your life
        </h1>

        <p className="mt-4 text-[#64748B] text-sm md:text-base px-18">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="btn mt-6 bg-[#244D3F] hover:bg-green-700 text-white px-5 py-2 rounded-md shadow-md transition">
            <FaUserPlus className="text-xl" />
                 Add a Friend
        </button>
      </div>

      {/* Stats Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
        
        <div className="bg-white shadow-sm rounded-xl p-6 text-center">
          <h2 className="text-2xl font-bold text-[#244D3F]">10</h2>
          <p className="text-gray-500 mt-1 text-sm">Total Friends</p>
        </div>

        <div className="bg-white shadow-sm rounded-xl p-6 text-center">
          <h2 className="text-2xl font-bold text-[#244D3F]">3</h2>
          <p className="text-gray-500 mt-1 text-sm">On Track</p>
        </div>

        <div className="bg-white shadow-sm rounded-xl p-6 text-center">
          <h2 className="text-2xl font-bold text-[#244D3F]">6</h2>
          <p className="text-gray-500 mt-1 text-sm">Need Attention</p>
        </div>

        <div className="bg-white shadow-sm rounded-xl p-6 text-center">
          <h2 className="text-2xl font-bold text-[#244D3F]">12</h2>
          <p className="text-gray-500 mt-1 text-sm">Interactions This Month</p>
        </div>

      </div>

    </div>
    );
};

export default HomePage;