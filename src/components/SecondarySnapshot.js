import React from 'react';
import { SECONDARY_SNAPSHOT_DATA } from '../Constant';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, Title);
ChartJS.register(ChartDataLabels);

const SecondarySnapshot = () => {
  const data = SECONDARY_SNAPSHOT_DATA;

  // Prepare Donut Chart Data for Orders and Activity
  const donutChartData = {
    labels: data.donutData.map((item) => item.label),
    datasets: [
      {
        data: data.donutData.map(() => 50), // Example static data
        backgroundColor: data.donutData.map((item) => item.color),
        hoverBackgroundColor: data.donutData.map((item) => item.color),
      },
    ],
  };

  return (
    <div className="p-4 sm:p-6 border-[1px] border-[#39CEF3] shadow-md relative">
      <div className="flex justify-between mb-8">
        <label className="text-white bg-[#39CEF3] w-full sm:w-[243px] h-[40px] rounded-tl-[5px] flex justify-center items-center absolute left-0 top-0 mt-3">
          SECONDARY SNAPSHOT
        </label>
        <label className="text-white bg-[#39CEF3] w-full sm:w-[243px] h-[40px] rounded-tr-[5px] flex justify-center items-center absolute right-80  top-0 mt-3">
          DROP SIZE (AOV)
        </label>
      </div>

      <div className="flex justify-between mt-12 gap-4 h-[250px]">
        {/* First Child */}
        <div className="w-full md:w-1/4 flex flex-col items-center border-[1px] border-[#39CEF3] h-full">
          <div className="h-1/2 flex justify-center items-center">
            <Doughnut data={donutChartData} className="w-[150px]" />
          </div>
          <p className="mt-4 text-gray-600">TC = Order + Activity</p>
        </div>

        {/* Second Child */}
        <div className="w-full md:w-3/4 grid grid-cols-2 sm:grid-cols-4 gap-4 border-[1px] border-[#39CEF3] p-4 h-full">
          {data.dropSizeData.map((item, index) => {
            const singleDropSizeChartData = {
              labels: [item.range],
              datasets: [
                {
                  data: [item.value, 100 - item.value],
                  backgroundColor: [item.color, '#E0E0E0'],
                  hoverBackgroundColor: [item.color, '#E0E0E0'],
                },
              ],
            };

            return (
              <div key={index} className="flex flex-col items-center">
                <Doughnut data={singleDropSizeChartData} className="w-[150px]" />
                <p className="mt-2 text-gray-600 text-center">{item.range}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SecondarySnapshot;