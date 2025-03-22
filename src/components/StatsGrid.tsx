import { LineChart, CircleDot } from "lucide-react";

export const StatsGrid = () => {
  return (
    <div
      dir="rtl"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
    >
      {/* Profits/Losses Section */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md flex flex-col justify-between">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-600">الأرباح/الخسائر</h3>
          <LineChart className="w-5 h-5 text-gray-400" />
        </div>
        <p className="text-2xl font-bold text-green-600">350.40 ﷼</p>
      </div>

      {/* Orders Section */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md flex flex-col justify-between">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-600">الطلبات</h3>
          <CircleDot className="w-5 h-5 text-blue-600" />
        </div>
        <p className="text-2xl font-bold text-gray-800">321 طلب</p>
      </div>

      {/* Sales Section */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md flex flex-col justify-between">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-600">المبيعات</h3>
          <div className="flex -space-x-1">
            <div className="w-1 h-4 bg-blue-600 rounded"></div>
            <div className="w-1 h-6 bg-blue-600 rounded"></div>
            <div className="w-1 h-3 bg-blue-600 rounded"></div>
            <div className="w-1 h-5 bg-blue-600 rounded"></div>
          </div>
        </div>
        <p className="text-2xl font-bold text-gray-800">350 ﷼</p>
      </div>

      {/* ROAS Section */}
      <div className="bg-blue-600 text-white rounded-xl p-4 sm:p-6 flex flex-col justify-between">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium opacity-80">
            عائد الإنفاق الإعلامي (ROAS)
          </h3>
          <LineChart className="w-5 h-5 opacity-80" />
        </div>
        <p className="text-2xl font-bold">350 ﷼</p>
      </div>
    </div>
  );
};
