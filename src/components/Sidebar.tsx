import React from "react";
import {
  Home,
  ChevronDown,
  BarChart3,
  CreditCard,
  RefreshCcw,
  FileText,
  Share2,
  Settings2,
  RotateCcw,
  FileBarChart,
  LineChart,
  Settings,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

interface SidebarProps {
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
}

const navItems = [
  { icon: <Home className="w-5 h-5" />, label: "الرئيسية", active: true },
  { icon: <BarChart3 className="w-5 h-5" />, label: "الملخص اليومي" },
  { icon: <CreditCard className="w-5 h-5" />, label: "ملخص الشهر" },
  { icon: <RefreshCcw className="w-5 h-5" />, label: "محرر البيانات" },
  {
    icon: <FileText className="w-5 h-5" />,
    label: "التحليلات",
    hasSubmenu: true,
  },
  { icon: <Share2 className="w-5 h-5" />, label: "تحليل الدفع والأقساط" },
  { icon: <Settings2 className="w-5 h-5" />, label: "الدفع عبر الإستلام" },
  { icon: <RotateCcw className="w-5 h-5" />, label: "المرتجعات" },
  { icon: <FileBarChart className="w-5 h-5" />, label: "التقارير العامة" },
  { icon: <LineChart className="w-5 h-5" />, label: "التسويق" },
  { icon: <Settings className="w-5 h-5" />, label: "الإعدادات" },
];

export const Sidebar: React.FC<SidebarProps> = ({
  isSidebarCollapsed,
  toggleSidebar,
}) => {
  return (
    <aside
      className={`bg-white h-screen transition-all duration-300 ease-in-out ${
        isSidebarCollapsed ? "w-16" : "w-64"
      } md:block fixed md:relative z-30`}
    >
      <button
        onClick={toggleSidebar}
        className="bg-white border rounded-full text-black px-2 py-2 absolute top-4 left-[-15px] z-10"
      >
        {isSidebarCollapsed ? (
          <ChevronLeft className="w-5 h-5" />
        ) : (
          <ChevronRight className="w-5 h-5" />
        )}
      </button>

      <nav className="space-y-1">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center justify-between px-4 py-4 rounded-lg ${
              item.active
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span
                className={`${
                  isSidebarCollapsed ? "hidden" : "block"
                } font-medium text-gray-700`}
              >
                {item.label}
              </span>
            </div>
            {item.hasSubmenu && <ChevronDown className="w-4 h-4" />}
          </button>
        ))}
      </nav>
    </aside>
  );
};
