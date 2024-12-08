import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { SALES_SNAPSHOT_DATA } from "../Constant"; // Importing the constant data

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesSnapshot = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // No API fetch needed since data is directly imported from Constant.js
    setData(SALES_SNAPSHOT_DATA);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: data.sales_snapshot.map((item) => item.month.substring(0, 3)), // Get the first 3 letters of the month
    datasets: [
      {
        label: "Target",
        data: data.sales_snapshot.map((item) => item.target),
        backgroundColor: "#FC8C4D", // Orange for target
        borderColor: "#FC8C4D",
        borderWidth: 1,
        barThickness: 10, // Adjust the bar thickness for better fit
      },
      {
        label: "Achieved",
        data: data.sales_snapshot.map((item) => item.achieved),
        backgroundColor: "#39CEF3", // Sky blue for achieved
        borderColor: "#39CEF3",
        borderWidth: 1,
        barThickness: 10, // Adjust the bar thickness for better fit
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "",
      },
      legend: {
        display: false, // Hide the legend completely
      },
      tooltip: {
        enabled: false, // Disable tooltips to avoid percentage or value display
      },
      datalabels: {
        display: false, // Explicitly disable data labels on the bars
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false, // Hide grid lines
        },
      },
      y: {
        grid: {
          drawOnChartArea: false, // Hide grid lines
        },
        ticks: {
          stepSize: 20, // Set step size for Y axis
        },
      },
    },
    elements: {
      line: {
        borderWidth: 1,
        borderDash: [5, 5], // Dotted line style
      },
    },
    layout: {
      padding: 10,
    },
  };

  return (
    <div className="w-full p-6 border-[1px] border-[#39CEF3] overflow-hidden">
      {/* Labels - Sales Snapshot and Brand */}
      <div className="flex justify-between mb-4">
        <label
          className="text-white bg-[#39CEF3] w-[243px] h-[40px] rounded-tl-[5px] flex justify-center items-center"
        >
          SALES SNAPSHOT
        </label>
        <label className="text-[#39CEF3] w-[243px] h-[40px] rounded-tl-[5px] flex justify-center items-center">
          Brand
        </label>
      </div>

      {/* Wrapper Box for Bar Graph and Color Icons */}
      <div className="relative border-[1px] border-[#39CEF3] bg-white p-6 rounded-lg w-1/2">
        {/* Color Icons Box */}
        <div className="absolute top-2 right-2 z-20 flex flex-col gap-2 p-3">
          <div className="flex items-center gap-1">
            <span
              className="w-[15px] h-[15px] rounded-full"
              style={{ backgroundColor: "#FC8C4D" }} // Target color
            ></span>
            <span className="text-xs font-semibold">Target</span>
          </div>
          <div className="flex items-center gap-1">
            <span
              className="w-[15px] h-[15px] rounded-full"
              style={{ backgroundColor: "#39CEF3" }} // Achieved color
            ></span>
            <span className="text-xs font-semibold">Achieved</span>
          </div>
        </div>

        {/* Bar Chart */}
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default SalesSnapshot;
