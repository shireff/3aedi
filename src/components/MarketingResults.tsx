import {
  TrendingDown,
  TrendingUp,
  Search,
  Facebook,
  Twitter,
  Camera,
  Video,
} from "lucide-react";

const platforms = [
  {
    platform: "جوجل",
    icon: <Search className="w-5 h-5 text-gray-700" />,
    date: "22 سبتمبر 2024",
  },
  {
    platform: "ميتا",
    icon: <Facebook className="w-5 h-5 text-gray-700" />,
    date: "22 سبتمبر 2024",
  },
  {
    platform: "تيك توك",
    icon: <Video className="w-5 h-5 text-gray-700" />,
    date: "22 سبتمبر 2024",
  },
  {
    platform: "سناب شات",
    icon: <Camera className="w-5 h-5 text-gray-700" />,
    date: "22 سبتمبر 2024",
  },
  {
    platform: "تويتر (X)",
    icon: <Twitter className="w-5 h-5 text-gray-700" />,
    date: "22 سبتمبر 2024",
  },
];

export const MarketingResults = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {/* Profit Card */}
      <div className="bg-white rounded-xl p-4 lg:p-6 shadow-md flex flex-col justify-between relative">
        <div className="mb-4 relative flex flex-col items-center lg:items-start">
          <div className="text-xs text-green-500 flex items-center gap-1">
            <span className="text-green-500">+3.46 %</span>
          </div>

          <h3 className="font-semibold text-lg mb-4 text-center lg:text-left">
            نتيجة الربح
          </h3>

          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-52 lg:h-52 text-green-500 flex justify-center items-center lg:absolute lg:left-0">
            <TrendingUp className="w-full h-full" />
          </div>

          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-center lg:text-left lg:absolute lg:right-0 lg:top-[150px] mt-4">
            <span className="font-bold mr-1">14</span>
            <span className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold">
              {" "}
              يوم
            </span>
          </div>
        </div>
        <div className="pt-4 border-t mt-16 sm:mt-20 md:mt-24 lg:mt-32">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#4f46e5] w-3 h-3 rounded-full"></span>
            <span className="text-gray-600">إجمالي الأرباح</span>
          </div>
          <h3 className="text-lg md:text-xl flex justify-center py-2 font-bold text-green-500">
            4154.50 ﷼
          </h3>
        </div>
      </div>

      {/* Loss Card */}
      <div className="bg-white rounded-xl p-4 lg:p-6 shadow-md flex flex-col justify-between relative">
        <div className="mb-4 relative flex flex-col items-center lg:items-start">
          <div className="text-xs text-red-500 flex items-center gap-1">
            <span className="text-red-500">-3.46 %</span>
          </div>

          <h3 className="font-semibold text-lg mb-4 text-center lg:text-left">
            نتيجة الخسارة
          </h3>

          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-52 lg:h-52 text-red-500 flex justify-center items-center lg:absolute lg:left-0">
            <TrendingDown className="w-full h-full" />
          </div>

          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-center lg:text-left lg:absolute lg:right-0 lg:top-[150px] mt-4">
            <span className="font-bold mr-1">16</span>
            <span className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold">
              يوم
            </span>
          </div>
        </div>
        <div className="pt-4 border-t mt-16 sm:mt-20 md:mt-24 lg:mt-32">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#4f46e5] w-3 h-3 rounded-full"></span>
            <span className="text-gray-600">إجمالي الخسائر</span>
          </div>
          <h3 className="text-lg md:text-xl flex justify-center py-2 font-bold text-red-500">
            4154.50 ﷼
          </h3>
        </div>
      </div>

      {/* Marketing Summary Card */}
      <div className="bg-white rounded-xl p-4 lg:p-6 shadow-md flex flex-col justify-between">
        <h3 className="font-semibold text-lg mb-3">إجمالي التسويق</h3>
        <span className="text-xl font-bold mb-6">682 ﷼</span>
        <div className="space-y-4">
          {platforms.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-sm font-medium">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-gray-900">{item.platform}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                </div>
                <span className="text-red-500 font-medium">-154.50 ﷼</span>
              </div>
              {index < platforms.length - 1 && <hr className="mt-4" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
