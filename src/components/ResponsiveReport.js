import React, { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineFileDownload } from "react-icons/md";

const ResponsiveReport = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  return (
    <div className="flex justify-between items-center w-full mt-12  px-4 lg:px-8">
      {/* Left Section: Date, Month, Year */}
      <div className="flex items-center w-2/3 space-x-4">
        {/* Date */}
        <div
          className="flex items-center justify-between bg-white border border-gray-300 rounded-lg cursor-pointer h-14 px-4 w-full max-w-[140px]"
          onClick={() => document.getElementById("date-picker").click()}
        >
          <AiOutlineCalendar className="text-gray-500 text-lg" />
          <span className="text-sm font-semibold">Date</span>
          <div className="flex flex-col items-start">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Choose Date"
              className="hidden"
              id="date-picker"
            />
            <span className="text-gray-500 text-xs mt-1">
              {selectedDate ? selectedDate.toLocaleDateString() : ""}
            </span>
          </div>
        </div>

        {/* Month */}
        <div
          className="flex items-center justify-between bg-white border border-gray-300 rounded-lg cursor-pointer h-14 px-4 w-full max-w-[140px]"
          onClick={() => document.getElementById("month-picker").click()}
        >
          <AiOutlineCalendar className="text-gray-500 text-lg" />
          <span className="text-sm font-semibold">Month</span>
          <div className="flex flex-col items-start">
            <DatePicker
              selected={selectedMonth}
              onChange={(date) => setSelectedMonth(date)}
              showMonthYearPicker
              placeholderText="Choose Month"
              className="hidden"
              id="month-picker"
            />
            <span className="text-gray-500 text-xs mt-1">
              {selectedMonth
                ? selectedMonth.toLocaleDateString("default", { month: "long" })
                : ""}
            </span>
          </div>
        </div>

        {/* Year */}
        <div
          className="flex items-center justify-between bg-white border border-gray-300 rounded-lg cursor-pointer h-14 px-4 w-full max-w-[140px]"
          onClick={() => document.getElementById("year-picker").click()}
        >
          <AiOutlineCalendar className="text-gray-500 text-lg" />
          <span className="text-sm font-semibold">Year</span>
          <div className="flex flex-col items-start">
            <DatePicker
              selected={selectedYear}
              onChange={(date) => setSelectedYear(date)}
              showYearPicker
              dateFormat="yyyy"
              placeholderText="Choose Year"
              className="hidden"
              id="year-picker"
            />
            <span className="text-gray-500 text-xs mt-1">
              {selectedYear ? selectedYear.getFullYear() : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Right Section: Target Report */}
      <div className="flex flex-col items-center justify-center text-white bg-[#39CEF3] border border-gray-300 rounded-lg h-14 w-full max-w-[200px]">
        <span className="text-sm font-semibold flex items-center">
          <MdOutlineFileDownload />
          Target Report
        </span>
      </div>
    </div>
  );
};

export default ResponsiveReport;
