import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdOutlineDashboard } from "react-icons/md";
import { TbBrandSolidjs } from "react-icons/tb";
import { IoMdPerson } from "react-icons/io";
import { TbTargetArrow } from "react-icons/tb";
import { FaHandshakeAngle } from "react-icons/fa6";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Sidebar for larger screens */}
      <div>
        {/* Sidebar for larger screens */}
        <div className="hidden lg:block w-64 h-screen p-6 shadow-2xl bg-white mt-12">
          <ul className="space-y-6">
            <li className="font-bold text-blue-600 hover:text-blue-800 cursor-pointer flex items-center space-x-2">
              <MdOutlineDashboard />
              <span>Dashboard</span>
            </li>
            <li className="hover:text-blue-800 cursor-pointer flex items-center space-x-2">
              <TbBrandSolidjs />
              <span>Brands</span>
            </li>
            <li className="hover:text-blue-800 cursor-pointer flex items-center space-x-2">
              <IoMdPerson />
              <span>Sales Person</span>
            </li>
            <li className="hover:text-blue-800 cursor-pointer flex items-center space-x-2">
              <TbTargetArrow />
              <span>Target</span>
            </li>
            <li className="hover:text-blue-800 cursor-pointer flex items-center space-x-2">
              <FaHandshakeAngle />
              <span>Channel Partners</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile sidebar toggle */}
      <div className="lg:hidden p-4">
        <button
          onClick={toggleSidebar}
          className="text-2xl text-blue-600"
          aria-label="Toggle Sidebar"
        >
          <FiMenu />
        </button>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`lg:hidden fixed top-12 left-0 w-64 h-screen p-6 shadow-2xl bg-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-40`}
      >
        <ul className="space-y-6">
          <li className="font-bold text-blue-600 hover:text-blue-800 cursor-pointer flex items-center space-x-2">
            <MdOutlineDashboard />
            <span>Dashboard</span>
          </li>
          <li className="hover:text-blue-800 cursor-pointer flex items-center space-x-2">
            <TbBrandSolidjs />
            <span>Brands</span>
          </li>
          <li className="hover:text-blue-800 cursor-pointer flex items-center space-x-2">
            <IoMdPerson />
            <span>Sales Person</span>
          </li>
          <li className="hover:text-blue-800 cursor-pointer flex items-center space-x-2">
            <TbTargetArrow />
            <span>Target</span>
          </li>
          <li className="hover:text-blue-800 cursor-pointer flex items-center space-x-2">
            <FaHandshakeAngle />
            <span>Channel Partners</span>
          </li>
        </ul>
      </div>

      {/* Overlay to close sidebar */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
