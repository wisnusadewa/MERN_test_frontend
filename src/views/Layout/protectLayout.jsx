import React from 'react';
import { Outlet } from 'react-router-dom';

const ProtectLayout = () => {
  return (
    <div className="w-full h-screen">
      <Outlet />
    </div>
  );
};

export default ProtectLayout;
