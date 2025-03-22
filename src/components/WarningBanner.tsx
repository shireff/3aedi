export const WarningBanner = () => {
  return (
    <div
      dir="rtl"
      className="bg-amber-50 border border-amber-100 py-3 px-4 container mx-auto rounded-lg my-4"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col md:flex-row md:items-center gap-2 text-amber-800">
          <span className="text-2xl">⚠️</span>
          <p className="text-sm">
            يبدو أن هناك معلومات غير مكتملة ولا يمكنك رؤية الأرباح الحقيقي دون
            إدخال التكاليف الشهرية الصغيرة
          </p>
          <span className="font-semibold text-amber-600">
            أرقام بدونها.. مجرد تخمين!
          </span>
        </div>

        <button className="self-start md:self-auto bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm hover:bg-blue-200 transition-colors whitespace-nowrap">
          أدخل التكاليف الآن
        </button>
      </div>
    </div>
  );
};
