import React from "react";
import { INSIGHTS_SNAPSHOT_DATA } from "../Constant";

const formatNumber = (num) => {
  return num.toLocaleString(); // To format numbers with commas
};

const getInitials = (name) => {
  // Get the first letter of the first and last name
  const names = name.split(" ");
  const firstInitial = names[0].charAt(0).toUpperCase();
  const lastInitial = names[names.length - 1].charAt(0).toUpperCase();
  return `${firstInitial}${lastInitial}`;
};

const InsightsSnapshot = () => {
  return (
    <div className="p-4 md:p-6 border-[1px] border-[#39CEF3] shadow-md relative">
      <label className="text-white bg-[#39CEF3] w-full md:w-[243px] h-[40px] rounded-tl-[5px] flex justify-center items-center absolute left-0">
        INSIGHTS SNAPSHOT
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-14">
        {/* Top 10 Products Section */}
        <div className="border-[1px] border-[#39CEF3] rounded-lg p-4 shadow">
          <h3 className="text-lg text-white bg-[#39CEF3] py-2 text-center rounded">
            TOP 10 PRODUCTS
          </h3>
          {INSIGHTS_SNAPSHOT_DATA.top_10_products.map((product, index) => (
            <div
              key={product.rank}
              className={`flex items-start mt-2 mb-4 ${
                index > 0 ? "border-t border-gray-300 pt-4" : ""
              }`}
            >
              <span className="text-gray-700 font-bold mr-4">
                {product.rank}.
              </span>
              <img
                src={product.imageSrc}
                alt={product.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 mr-4"
              />
              <div className="flex-1">
                <p className="font-medium text-gray-800 text-sm sm:text-base">
                  {product.name}
                </p>
                <div className="text-xs text-gray-600 mt-1">
                  <p className="flex flex-wrap space-x-2">
                    <span>Count: {formatNumber(product.count)}</span>
                    <span>Value: ${formatNumber(product.value)}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Top 10 Distributors Section */}
        <div className="border-[1px] border-[#39CEF3] rounded-lg p-4 shadow">
          <h3 className="text-lg text-white bg-[#39CEF3] py-2 text-center rounded">
            TOP 10 DISTRIBUTORS
          </h3>
          {INSIGHTS_SNAPSHOT_DATA.top_10_distributors.map(
            (distributor, index) => (
              <div
                key={distributor.rank}
                className={`flex items-start mt-2 mb-4 ${
                  index > 0 ? "border-t border-gray-300 pt-4" : ""
                }`}
              >
                <span className="text-gray-700 font-bold mr-4">
                  {distributor.rank}.
                </span>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#F0AD00] text-white font-bold mr-4">
                  {getInitials(distributor.name)}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-800 text-sm sm:text-base">
                    {distributor.name}
                  </p>
                  <div className="text-xs text-gray-600 mt-1">
                    <p className="flex flex-wrap space-x-2">
                      <span>Target: {formatNumber(distributor.target)}</span>
                      <span>Achieved: {formatNumber(distributor.achieved)}</span>
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#907EFF] text-white font-semibold text-xs">
                  {distributor.percentage}%
                </div>
              </div>
            )
          )}
        </div>

        {/* New Activation Section */}
        <div className="border-[1px] border-[#39CEF3] rounded-lg p-4 shadow">
          <h3 className="text-lg text-white bg-[#39CEF3] py-2 text-center rounded">
            NEW ACTIVATION
          </h3>
          {INSIGHTS_SNAPSHOT_DATA.new_activation.map((activation, index) => (
            <div
              key={activation.rank}
              className={`flex items-start mt-2 mb-4 ${
                index > 0 ? "border-t border-gray-300 pt-4" : ""
              }`}
            >
              <span className="text-gray-700 font-bold mr-4">
                {activation.rank}.
              </span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-[#F0AD00] text-white font-bold mr-4">
                {getInitials(activation.name)}
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-800 text-sm sm:text-base">
                  {activation.name}
                </p>
                <div className="text-xs text-gray-600 mt-1">
                  <p className="flex flex-wrap space-x-2">
                    <span>Achieved: {formatNumber(activation.achieved)}</span>
                    <span>Last Order: {activation.last_order_date}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsSnapshot;
