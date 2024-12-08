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
import { SECONDARY_COVERAGE_DATA } from "../Constant"; // Importing the constant data

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SecondaryCoverage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Directly using the imported constant data
    setData(SECONDARY_COVERAGE_DATA);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: data.secondary_coverage.map((item) => item.month.substring(0, 3)), // Get the first 3 letters of the month
    datasets: [
      {
        label: "Target",
        data: data.secondary_coverage.map((item) => item.target),
        backgroundColor: "#FC8C4D", // Orange for target
        borderColor: "#FC8C4D",
        borderWidth: 1,
        barThickness: 10, // Adjust the bar thickness for better fit
      },
      {
        label: "Achieved",
        data: data.secondary_coverage.map((item) => item.achieved),
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
        // Remove the title for the X axis
        grid: {
          drawOnChartArea: false, // Hide grid lines
        },
      },
      y: {
        // Remove the title for the Y axis
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
    backgroundColor: "#FC8C4D", // Orange background color
  };

  return (
    <div className="p-4 sm:p-6 border-[1px] border-[#39CEF3] shadow-md relative">
      {/* Labels - Sales Snapshot and Brand */}
      
        <label
          className="text-white bg-[#39CEF3] w-full sm:w-[243px] h-[40px] rounded-tl-[5px] flex justify-center items-center absolute left-0"
        >
         SECONDARY COVERAGE
        </label>
        
    
      {/* Wrapper Box for Bar Graph and Color Icons */}
<div className="relative border-[1px] border-[#39CEF3] bg-white p-6 rounded-lg w-full h-[300px] flex items-center justify-center mt-14">
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
  <div className="w-full h-full flex justify-center items-center">
    <Bar data={chartData} options={options} />
  </div>
</div>

    </div>
  );
};

export default SecondaryCoverage;
