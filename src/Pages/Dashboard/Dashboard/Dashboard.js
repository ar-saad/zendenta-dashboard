import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div
      className="border-8 h-screen overflow-auto"
      style={{ borderColor: "#344679" }}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-10">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
