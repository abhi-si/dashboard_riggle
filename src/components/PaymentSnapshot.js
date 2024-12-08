import React, { useState } from "react";
import { PAYMENT_SNAPSHOT_DATA } from "../Constant";
import { FiPlus, FiMinus } from "react-icons/fi";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";

const PaymentSnapshot = () => {
  const [expandedWeek, setExpandedWeek] = useState("week1");

  const toggleAccordion = (week) => {
    setExpandedWeek(expandedWeek === week ? null : week);
  };

  return (
    <div className="p-4 sm:p-6 border-[1px] border-[#39CEF3] shadow-md relative">
      <label className="text-white bg-[#39CEF3] w-full sm:w-[243px] h-[40px] rounded-tl-[5px] flex justify-center items-center absolute left-0">
        PAYMENT SNAPSHOT
      </label>

      {/* Accordions with margin */}
      <div className="mt-14">
        {Object.keys(PAYMENT_SNAPSHOT_DATA).map((weekKey, index) => (
          <div key={index} className="rounded-md ml-0 mt-4">
            {/* Accordion Header */}
            <div
              onClick={() => toggleAccordion(weekKey)}
              className={`flex justify-between items-center py-2 px-4 text-white bg-[#39CEF3] cursor-pointer ${
                expandedWeek === weekKey ? "border-b border-gray-300" : ""
              }`}
            >
              <span className="font-bold text-lg">{`Week ${index + 1}`}</span>
              {expandedWeek === weekKey ? (
                <FiMinus size={20} />
              ) : (
                <FiPlus size={20} />
              )}
            </div>

            {/* Accordion Content */}
            {expandedWeek === weekKey && (
              <div className="p-4 bg-white">
                <div className="overflow-x-auto">
                  {" "}
                  {/* Make the table scrollable on smaller screens */}
                  <table className="min-w-full border-collapse text-left">
                    <thead>
                      <tr>
                        <th className="p-3 border-b border-gray-300 font-bold bg-gray-200">
                          Date
                        </th>
                        <th className="p-3 border-b border-gray-300 font-bold bg-gray-200">
                          Payment Planned (₹)
                        </th>
                        <th className="p-3 border-b border-gray-300 font-bold bg-gray-200">
                          Payment Received (₹)
                        </th>
                        <th className="p-3 border-b border-gray-300 font-bold bg-gray-200">
                          View
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {PAYMENT_SNAPSHOT_DATA[weekKey].map((data, i) => (
                        <tr key={i} className="even:bg-gray-50">
                          <td className="p-3 border-b border-gray-300">
                            {data.date}
                          </td>
                          <td className="p-3 border-b border-gray-300">
                            {data.paymentPlanned.toLocaleString()}
                          </td>
                          <td className="p-3 border-b border-gray-300">
                            {data.paymentReceived.toLocaleString()}
                          </td>
                          <td className="p-3 border-b border-gray-300">
                            {data.view ? (
                              <HiOutlineArrowRightCircle
                                className=" bg-[#39CEF3] text-white rounded-full "
                                size={18}
                              />
                            ) : (
                              "❌"
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentSnapshot;
