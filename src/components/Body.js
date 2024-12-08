import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SalesSnapshot from "./SalesSnapshot";
import TeamSnapshot from "./TeamSnapshot";
import LoginSnapshot from "./LoginSnapshot";
import NetworkSnapshot from "./NetworkSnapshot";
import InsightsSnapshot from "./InsightsSnapshot";
import Gap1Analysis from "./Gap1Analysis";
import SecondarySnapshot from "./SecondarySnapshot";
import SecondaryCoverage from "./SecondaryCoverage";
import Gap2Analysis from "./Gap2Analysis";
import PaymentSnapshot from "./PaymentSnapshot";

function Body() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar stays at the top */}
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        {/* Main content area */}
        <div className="flex flex-col w-full p-6 mt-6 gap-6">
          {/* SalesSnapshot container */}
          <div className="flex justify-center w-full">
            <div className="relative w-[1046px]">
              <SalesSnapshot />
            </div>
          </div>

          {/* TeamSnapshot container */}
          <div className="flex justify-center w-full">
            <div className="relative w-[1046px]">
              <TeamSnapshot />
            </div>
          </div>

          
          <div className="flex justify-center w-full">
            <div className="relative w-[1046px]">
              <LoginSnapshot />
            </div>
          </div>

         
          <div className="flex justify-center w-full">
            <div className="relative w-[1046px]">
              <NetworkSnapshot />
            </div>
          </div>

         
          <div className="flex justify-center w-full">
            <div className="relative w-[1046px]">
              <InsightsSnapshot />
            </div>
          </div>

         
          <div className="flex justify-center w-full">
            <div className="relative w-[1046px]">
              <Gap1Analysis />
            </div>
          </div>

        
          <div className="flex justify-center w-full">
            <div className="relative w-[1046px]">
              <SecondarySnapshot />
            </div>
          </div>

          
          <div className="flex justify-center w-full">
            <div className="relative w-[1046px]">
              <SecondaryCoverage />
            </div>
          </div>

          
          <div className="flex justify-center w-full">
            <div className="relative w-[1046px]">
              <Gap2Analysis />
            </div>
          </div>

        
          <div className="flex justify-center w-full">
            <div className="relative w-[1046px]">
              <PaymentSnapshot />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
