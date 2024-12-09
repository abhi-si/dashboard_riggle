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
    setData(SALES_SNAPSHOT_DATA);
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: data.sales_snapshot.map((item) => item.month.substring(0, 3)),
    datasets: [
      {
        label: "Target",
        data: data.sales_snapshot.map((item) => item.target),
        backgroundColor: "#FC8C4D",
        borderColor: "#FC8C4D",
        borderWidth: 1,
        barThickness: "flex", // Allow bars to flex for responsive sizing
      },
      {
        label: "Achieved",
        data: data.sales_snapshot.map((item) => item.achieved),
        backgroundColor: "#39CEF3",
        borderColor: "#39CEF3",
        borderWidth: 1,
        barThickness: "flex",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to resize dynamically
    plugins: {
      title: {
        display: true,
        text: "",
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: false, // Explicitly disable data labels on the bars
      },
    },
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
      },
      y: {
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div className="w-full p-4 sm:p-6 border border-[#39CEF3] overflow-hidden ">
      {/* Labels */}
      <div className="relative flex flex-wrap items-center mb-4">
        <label className="text-white bg-[#39CEF3] w-auto px-4 py-2 rounded-tl-[5px] flex justify-center items-center z-10 mb-2 sm:mb-0">
          SALES SNAPSHOT
        </label>
        <label className="ml-auto text-[#39CEF3] border-[1px] border-[#39CEF3] w-auto px-4 py-2 flex justify-center items-center">
          Brand
        </label>
      </div>

      {/* Wrapper Box */}
      <div className="relative border border-[#39CEF3] bg-white p-4 sm:p-6 rounded-lg w-full sm:w-3/4 lg:w-1/2 h-auto sm:h-[300px] lg:h-[250px] overflow-hidden left-0">
        {/* Color Icons */}
        <div className="absolute top-2 right-2 z-20 flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <span
              className="w-[15px] h-[15px] rounded-full"
              style={{ backgroundColor: "#FC8C4D" }}
            ></span>
            <span className="text-xs font-semibold">Target</span>
          </div>
          <div className="flex items-center gap-1">
            <span
              className="w-[15px] h-[15px] rounded-full"
              style={{ backgroundColor: "#39CEF3" }}
            ></span>
            <span className="text-xs font-semibold">Achieved</span>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="w-full h-full max-h-[200px] sm:max-h-[250px] lg:max-h-[200px] overflow-hidden">
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default SalesSnapshot;
