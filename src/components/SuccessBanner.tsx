import { Plus } from "lucide-react";

export const SuccessBanner = () => {
  return (
    <div
      dir="rtl"
      className="border py-4 mb-6 container mx-auto px-4 sm:px-6 lg:px-8 rounded-lg"
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col text-center sm:text-left">
          <h3 className="text-gray-600 text-lg text-start sm:text-xl">الملخص اليومى</h3>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-3xl sm:text-4xl font-bold text-green-600">
              مبروك! 🎉
            </span>
            <span className="text-lg sm:text-xl">
              أرباحك تكبر ونجاحك يستمر!
            </span>
            <span className="text-green-600 text-2xl sm:text-3xl">🟢</span>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-green-600 rounded-lg text-green-600 hover:bg-green-100 sm:text-base text-sm">
          <Plus className="w-4 h-4" />
          <span className="text-sm">تعليقات</span>
        </button>
      </div>
    </div>
  );
};
