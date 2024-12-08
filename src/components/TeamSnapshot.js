import { TEAM_SNAPSHOT_DATA } from "../Constant";

const formatNumber = (num) => {
  if (num >= 100000) {
    return (num / 100000).toFixed(1) + "L";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toLocaleString();
};

const TeamSnapshot = () => {
  return (
    <div className="p-4 sm:p-6 border-[1px] border-[#39CEF3] shadow-md relative">
      <label className="text-white bg-[#39CEF3] w-full sm:w-[243px] h-[40px] rounded-tl-[5px] flex justify-center items-center absolute left-0">
        TEAM SNAPSHOT
      </label>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-16">
        {/* Team Performance Section */}
        <div className="border-[1px] border-[#39CEF3] rounded-lg p-4 sm:p-6 shadow">
          <h3 className="text-sm sm:text-base lg:text-lg text-white bg-[#39CEF3] py-2 text-center rounded mb-2">
            TEAM PERFORMANCE
          </h3>
          {TEAM_SNAPSHOT_DATA.teamPerformance.map((member, index) => (
            <div
              key={member.id}
              className={`flex items-start ${
                index > 0 ? "mt-2 border-t border-gray-300 pt-4" : "mt-0"
              }`}
            >
              <span className="text-gray-700 font-bold mr-4">{member.id}.</span>
              <img
                src={member.imgIcon}
                alt={member.fullName}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 mr-4"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800 text-sm sm:text-base">
                    {member.fullName}
                     ({member.designation})
                  </span>
                  
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1 flex justify-between">
                  <span>Target:{formatNumber(member.target)}</span>
                  <span>Achieved:{formatNumber(member.achieved)}</span>
                </div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#907EFF] text-white font-semibold text-xs sm:text-sm">
                {member.percentageAchieved}%
              </div>
            </div>
          ))}
        </div>

        {/* New Activation Section */}
        <div className="border-[1px] border-[#39CEF3] rounded-lg p-4 sm:p-6 shadow">
          <h3 className="text-sm sm:text-base lg:text-lg text-white bg-[#39CEF3] py-2 text-center rounded mb-2">
            NEW ACTIVATION
          </h3>
          {TEAM_SNAPSHOT_DATA.newActivation.map((member, index) => (
            <div
              key={member.id}
              className={`flex items-start ${
                index > 0 ? "mt-2 border-t border-gray-300 pt-4" : "mt-0"
              }`}
            >
              <span className="text-gray-700 font-bold mr-4">{member.id}.</span>
              <img
                src={member.imgIcon}
                alt={member.fullName}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 mr-4"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800 text-sm sm:text-base">
                    {member.fullName}
                    ({member.designation})
                  </span>
                  
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1 flex justify-between">
                  <span>Target:{formatNumber(member.target)}</span>
                  <span>Achieved:{formatNumber(member.achieved)}</span>
                </div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#907EFF] text-white font-semibold text-xs sm:text-sm">
                {member.percentageAchieved}%
              </div>
            </div>
          ))}
        </div>

        {/* SKU Performance Section */}
        <div className="border-[1px] border-[#39CEF3] rounded-lg p-4 sm:p-6 shadow">
          <h3 className="text-sm sm:text-base lg:text-lg text-white bg-[#39CEF3] py-2 text-center rounded mb-2">
            SKU PERFORMANCE
          </h3>
          {TEAM_SNAPSHOT_DATA.skuPerformance.map((member, index) => (
            <div
              key={member.id}
              className={`flex items-start ${
                index > 0 ? "mt-2 border-t border-gray-300 pt-4" : "mt-0"
              }`}
            >
              <span className="text-gray-700 font-bold mr-4">{member.id}.</span>
              <img
                src={member.imgIcon}
                alt={member.fullName}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 mr-4"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800 text-sm sm:text-base">
                    {member.fullName}
                    ({member.designation})
                  </span>
                  
                </div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1 flex justify-between">
                  <span>Target:{formatNumber(member.target)}</span>
                  <span>Achieved:{formatNumber(member.achieved)}</span>
                </div>
              </div>
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#907EFF] text-white font-semibold text-xs sm:text-sm">
                {member.percentageAchieved}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSnapshot;
