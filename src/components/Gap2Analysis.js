import React from 'react';
import { GAP_ANALYSIS_TEAM } from '../Constant';  

const Gap2Analysis = () => {
  const { sales_team, order, dispatch, gap_analysis } = GAP_ANALYSIS_TEAM.gap_analysis_team;

  return (
    <div className="p-4 sm:p-6 border-[1px] border-[#39CEF3] shadow-md relative">
        <label className="text-white bg-[#39CEF3] w-full sm:w-[243px] h-[40px] rounded-tl-[5px] flex justify-center items-center absolute left-0">
        GAP ANALYSIS (TEAM)
      </label>
      
      <div className="border-[1px] overflow-x-auto mt-14">
  <table className="min-w-full bg-white shadow-md rounded-lg">
    <thead>
  <tr
    className="bg-[#39CEF3] bg-opacity-60 grid grid-cols-4 items-center text-left"
  >
    <th className="px-4 py-2">Sales Team Name</th>
    <th className="px-4 py-2">Order</th>
    <th className="px-4 py-2">Dispatch</th>
    <th className="px-4 py-2">Gap Analysis</th>
  </tr>
</thead>

 <tbody>
  {sales_team.map((teamMember, index) => (
    <tr key={index} className="grid grid-cols-4 items-center border-t">
      <td className="px-4 py-2">{teamMember}</td>
      <td className="px-4 py-2">{order[index]}</td>
      <td className="px-4 py-2">{dispatch[index]}</td>
      <td className="px-4 py-2">{gap_analysis[index]}</td>
    </tr>
  ))}
</tbody>

  </table>
</div>

    </div>
  );
};

export default Gap2Analysis;
