import { ChevronDown, Bell } from "lucide-react";

export const Header = () => {
  const notificationCount = 4;

  return (
    <header dir="ltr" className="bg-white py-2 shadow-sm w-full">
      <div className="px-20">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-x-3 sm:gap-x-7">
            <div className="flex items-center gap-2 sm:gap-3 border rounded-full px-2 py-1 sm:px-3 sm:py-2 ">
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 ml-2 sm:ml-4" />

              <div className="hidden sm:block">
                <span className="text-sm text-gray-600">أسامة محمد</span>
                <br />
                <span className="text-xs text-gray-500">6941956497</span>
              </div>

              <div className="sm:hidden">
                <span className="text-xs text-gray-600">أسامة محمد</span>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
                  <span className="text-xs">ك</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="relative">
              <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              {notificationCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notificationCount}
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
