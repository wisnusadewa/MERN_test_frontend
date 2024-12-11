import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import DashboardComp from '../../components/Dashboard/DashboardComp';

const Dashboard = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 min-h-screen w-full grid grid-rows-7 px-10">
      <section>
        <Navbar />
      </section>
      <section className="row-span-6">
        <DashboardComp />
      </section>
    </div>
  );
};

export default Dashboard;
