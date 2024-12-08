import React from "react";
import { LOGIN_SNAPSHOT_DATA } from "../Constant";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

// Helper function to calculate the percentage width based on max value
const calculateWidth = (value, max) => {
  return (value / max) * 100; // Calculate percentage width for the bar
};

// Function to get the max value from the live/offline data
const getMaxValue = (data) => {
  return Math.max(data.live, data.offline);
};

const LoginSnapshot = () => {
  const data = LOGIN_SNAPSHOT_DATA;

  // Calculate the maximum value for the bar calculation
  const maxUsers = getMaxValue(data);

  // Prepare Donut Chart Data for Time Stamps
  const donutChartData = data.donutData.map((item) => ({
    labels: [item.label],
    datasets: [
      {
        data: [item.value, 100 - item.value],
        backgroundColor: [item.color, "#E0E0E0"],
        hoverBackgroundColor: [item.color, "#E0E0E0"],
      },
    ],
  }));

  return (
    <div className="p-4 sm:p-6 border-[1px] border-[#39CEF3] shadow-md relative">
      <div className="flex justify-between mb-8">
        <label className="text-white bg-[#39CEF3] w-full sm:w-[243px] h-[40px] rounded-tl-[5px] flex justify-center items-center absolute left-0 top-0 mt-3">
          LOGIN SNAPSHOT
        </label>
        <div className="text-white bg-[#39CEF3] w-full sm:w-[243px] h-[40px] rounded-tr-[5px] flex justify-center items-center absolute right-0 top-0 mt-3">
          Today
        </div>
      </div>

      <div className="flex justify-between mt-12 gap-4 h-[250px]">
        {/* First Child: Live and Offline Bar Chart */}
        <div className="w-full md:w-1/4 flex flex-col items-center border-[1px] border-[#39CEF3] h-full p-4">
          <h1 className="mb-4 font-bold text-4xl text-gray-600">
            {data.attendance}
          </h1>
          <h2 className="text-center text-gray-700">Attendance</h2>
          <div className="w-full mt-4 space-y-2">
            {/* Live Users */}
            <div className="flex items-center">
              <span className="text-gray-600 w-[60px]">Live:</span>
              <div className="flex-1 bg-gray-200 rounded-md relative">
                <div
                  className="absolute left-0 top-0 bg-[#1CCAD8] h-[6px] rounded-md"
                  style={{
                    width: `${calculateWidth(data.live, maxUsers)}%`,
                  }}
                ></div>
              </div>
              <span className="ml-3 text-gray-600">{data.live}</span>
            </div>
            {/* Offline Users */}
            <div className="flex items-center">
              <span className="text-gray-600 w-[60px]">Offline:</span>
              <div className="flex-1 bg-gray-200 rounded-md relative">
                <div
                  className="absolute left-0 top-0 bg-[#FDC516] h-[6px] rounded-md"
                  style={{
                    width: `${calculateWidth(data.offline, maxUsers)}%`,
                  }}
                ></div>
              </div>
              <span className="ml-3 text-gray-600">{data.offline}</span>
            </div>
          </div>
        </div>

        {/* Second Child: 4 Doughnut Charts for Time Stamps */}
        <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-[1px] border-[#39CEF3] p-4 h-full">
          {donutChartData.map((chartData, index) => (
            <div key={index} className="flex flex-col items-center">
              <Doughnut data={chartData} className="w-[150px]" />
              <p className="mt-2 text-gray-600 text-center">
                {/* {data.donutData[index].label} */}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginSnapshot;
