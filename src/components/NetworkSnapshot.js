import React from "react";
import { NETWORK_SNAPSHOT_DATA } from "../Constant"; 

function NetworkSnapshot() {
  
  const primaryData = NETWORK_SNAPSHOT_DATA[0]; // Data for Primary (Channel Partner)
  const secondaryData = NETWORK_SNAPSHOT_DATA[1]; // Data for Secondary (Retailers)

  // Helper function to calculate the percentage width based on Total CP
  const calculateWidth = (value, max) => {
    return (value / max) * 100; // Calculate percentage width for the bar
  };

  // Function to get the max value from a given data object
  const getMaxValue = (data) => {
    return Math.max(
      data.TotalCP,
      data.ActiveCP,
      data.ZeroOrderCP,
      data.NewCP,
      data.Orders
    );
  };

  // Get max values for both primary and secondary sections
  const primaryMax = getMaxValue(primaryData);
  const secondaryMax = getMaxValue(secondaryData);

  return (
    <div className="p-6 border-[1px] border-[#39CEF3] rounded-lg shadow-md relative">
      <label className="text-white bg-[#39CEF3] w-[243px] h-[40px] rounded-tl-[5px] flex justify-center items-center absolute left-0">
        NETWORK SNAPSHOT
      </label>
      <div className="snapshot-container flex gap-6 mt-14">
        {/* Primary (Channel Partner) Section */}
        <div className="snapshot-box flex-1 bg-white p-4 rounded-lg shadow-lg border-[1px] border-[#39CEF3]">
          <h3 className="text-xl font-semibold mb-4">
            Primary (Channel Partner)
          </h3>
          <div className="bar-container space-y-4">
            {/* Total CP */}
            <div className="flex items-center justify-between">
              <div className="w-1/4 text-sm font-medium">{`Total CP:`}</div>
              <div className="flex-1">
                <div
                  className="bar"
                  style={{
                    backgroundColor: "#E42B1F", // Red
                    height: "6px",
                    borderRadius: "4px",
                    width: `${calculateWidth(
                      primaryData.TotalCP,
                      primaryMax
                    )}%`,
                  }}
                ></div>
              </div>
              <div className="w-1/5 text-sm ml-3">{primaryData.TotalCP}</div>
            </div>
            {/* Active CP */}
            <div className="flex items-center justify-between">
              <div className="w-1/4 text-sm font-medium">{`Active CP:`}</div>
              <div className="flex-1">
                <div
                  className="bar"
                  style={{
                    backgroundColor: "#2EC315", // Green
                    height: "6px",
                    borderRadius: "4px",
                    width: `${calculateWidth(
                      primaryData.ActiveCP,
                      primaryMax
                    )}%`,
                  }}
                ></div>
              </div>
              <div className="w-1/5 text-sm">{primaryData.ActiveCP}</div>
            </div>
            {/* Zero Order CP */}
            <div className="flex items-center justify-between">
              <div className="w-1/4 text-sm font-medium">{`Zero Order CP:`}</div>
              <div className="flex-1">
                <div
                  className="bar"
                  style={{
                    backgroundColor: "#907EFF", // Purple
                    height: "6px",
                    borderRadius: "4px",
                    width: `${calculateWidth(
                      primaryData.ZeroOrderCP,
                      primaryMax
                    )}%`,
                  }}
                ></div>
              </div>
              <div className="w-1/5 text-sm">{primaryData.ZeroOrderCP}</div>
            </div>
            {/* New CP */}
            <div className="flex items-center justify-between">
              <div className="w-1/4 text-sm font-medium">{`New CP:`}</div>
              <div className="flex-1">
                <div
                  className="bar"
                  style={{
                    backgroundColor: "#F0AD00", // Yellow
                    height: "6px",
                    borderRadius: "4px",
                    width: `${calculateWidth(primaryData.NewCP, primaryMax)}%`,
                  }}
                ></div>
              </div>
              <div className="w-1/5 text-sm">{primaryData.NewCP}</div>
            </div>
            {/* Orders */}
            <div className="flex items-center justify-between">
              <div className="w-1/4 text-sm font-medium">{`Orders:`}</div>
              <div className="flex-1">
                <div
                  className="bar"
                  style={{
                    backgroundColor: "#39CEF3", // Blue
                    height: "6px",
                    borderRadius: "4px",
                    width: `${calculateWidth(primaryData.Orders, primaryMax)}%`,
                  }}
                ></div>
              </div>
              <div className="w-1/5 text-sm">{primaryData.Orders}</div>
            </div>
          </div>
        </div>

        {/* Secondary (Retailers) Section */}
        <div className="snapshot-box flex-1 bg-white p-4 rounded-lg shadow-lg border-[1px] border-[#39CEF3]">
          <h3 className="text-xl font-semibold mb-4">Secondary (Retailers)</h3>
          <div className="bar-container space-y-4">
            {/* Total CP */}
            <div className="flex items-center justify-between">
              <div className="w-1/4 text-sm font-medium">{`Total CP:`}</div>
              <div className="flex-1">
                <div
                  className="bar"
                  style={{
                    backgroundColor: "#E42B1F", // Red
                    height: "6px",
                    borderRadius: "4px",
                    width: `${calculateWidth(
                      secondaryData.TotalCP,
                      secondaryMax
                    )}%`,
                  }}
                ></div>
              </div>
              <div className="w-1/5 text-sm ml-3">{secondaryData.TotalCP}</div>
            </div>
            {/* Active CP */}
            <div className="flex items-center justify-between">
              <div className="w-1/4 text-sm font-medium">{`Active CP:`}</div>
              <div className="flex-1">
                <div
                  className="bar"
                  style={{
                    backgroundColor: "#2EC315", // Green
                    height: "6px",
                    borderRadius: "4px",
                    width: `${calculateWidth(
                      secondaryData.ActiveCP,
                      secondaryMax
                    )}%`,
                  }}
                ></div>
              </div>
              <div className="w-1/5 text-sm">{secondaryData.ActiveCP}</div>
            </div>
            {/* Zero Order CP */}
            <div className="flex items-center justify-between">
              <div className="w-1/4 text-sm font-medium">{`Zero Order CP:`}</div>
              <div className="flex-1">
                <div
                  className="bar"
                  style={{
                    backgroundColor: "#907EFF", // Purple
                    height: "6px",
                    borderRadius: "4px",
                    width: `${calculateWidth(
                      secondaryData.ZeroOrderCP,
                      secondaryMax
                    )}%`,
                  }}
                ></div>
              </div>
              <div className="w-1/5 text-sm">{secondaryData.ZeroOrderCP}</div>
            </div>
            {/* New CP */}
            <div className="flex items-center justify-between">
              <div className="w-1/4 text-sm font-medium">{`New CP:`}</div>
              <div className="flex-1">
                <div
                  className="bar"
                  style={{
                    backgroundColor: "#F0AD00", // Yellow
                    height: "6px",
                    borderRadius: "4px",
                    width: `${calculateWidth(
                      secondaryData.NewCP,
                      secondaryMax
                    )}%`,
                  }}
                ></div>
              </div>
              <div className="w-1/5 text-sm">{secondaryData.NewCP}</div>
            </div>
            {/* Orders */}
            <div className="flex items-center justify-between">
              <div className="w-1/4 text-sm font-medium">{`Orders:`}</div>
              <div className="flex-1">
                <div
                  className="bar"
                  style={{
                    backgroundColor: "#39CEF3", // Blue
                    height: "6px",
                    borderRadius: "4px",
                    width: `${calculateWidth(
                      secondaryData.Orders,
                      secondaryMax
                    )}%`,
                  }}
                ></div>
              </div>
              <div className="w-1/5 text-sm">{secondaryData.Orders}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NetworkSnapshot;
