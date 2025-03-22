import { useState } from "react";
import { Header } from "./components/Header";
import { WarningBanner } from "./components/WarningBanner";
import { SuccessBanner } from "./components/SuccessBanner";
import { StatsGrid } from "./components/StatsGrid";
import { WeeklyChart } from "./components/WeeklyChart";
import { MarketingResults } from "./components/MarketingResults";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <div className="relative flex flex-1">
        <Sidebar
          isSidebarCollapsed={isSidebarCollapsed}
          toggleSidebar={toggleSidebar}
        />

        <main
          className={`transition-all duration-300 flex-1 py-6 px-4
    ${isSidebarCollapsed ? "ml-16" : "ml-16"}
    max-w-full w-full
  `}
        >
          <div className="container mx-auto space-y-6">
            <WarningBanner />
            <SuccessBanner />
            <StatsGrid />
            <WeeklyChart />
            <MarketingResults />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
