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
        <div className="flex flex-col w-full p-4 sm:p-6 mt-4 sm:mt-6 gap-4 sm:gap-6">
          {/* Updated each snapshot container */}
          {[
            SalesSnapshot,
            TeamSnapshot,
            LoginSnapshot,
            NetworkSnapshot,
            InsightsSnapshot,
            Gap1Analysis,
            SecondarySnapshot,
            SecondaryCoverage,
            Gap2Analysis,
            PaymentSnapshot,
          ].map((Component, index) => (
            <div key={index} className="flex justify-center w-full">
              <div className="relative w-full max-w-[1046px]">
                <Component />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;



