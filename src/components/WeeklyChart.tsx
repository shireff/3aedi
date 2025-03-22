import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const weeklyData = [
  { day: "الأربعاء", profit: 900, sales: 700 },
  { day: "الخميس", profit: 500, sales: 800 },
  { day: "الجمعة", profit: 700, sales: 600 },
  { day: "السبت", profit: 100, sales: 300 },
  { day: "الأحد", profit: 900, sales: 400 },
  { day: "الإثنين", profit: 800, sales: 200 },
  { day: "الثلاثاء", profit: 700, sales: 200 },
];

const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      max: 1000,
      ticks: {
        stepSize: 200,
        font: {
          family: "Arial",
          size: 12,
        },
      },
      grid: {
        color: "#f1f5f9",
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          family: "Arial",
          size: 12,
        },
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        font: {
          family: "Arial",
          size: 12,
        },
      },
    },
  },
};

export const WeeklyChart = () => {
  const [date, setDate] = useState<Date>(new Date());

  const barChartData = {
    labels: weeklyData.map((item) => item.day),
    datasets: [
      {
        label: "الأرباح",
        data: weeklyData.map((item) => item.profit),
        backgroundColor: "#4F46E5",
        borderRadius: 4,
        barThickness: 16,
      },
      {
        label: "المبيعات",
        data: weeklyData.map((item) => item.sales),
        backgroundColor: "#E5E7EB",
        borderRadius: 4,
        barThickness: 16,
      },
    ],
  };

  return (
    <div dir="rtl" className="flex flex-col lg:flex-row gap-4 w-full mb-8">
      {/* Weekly chart section */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm w-full lg:w-2/3">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-semibold text-lg">الرصيد الأسبوعي</h3>
          <div className="flex items-center gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
            <span className="text-sm font-medium">الأمس</span>
            <button className="p-1 hover:bg-gray-100 rounded">
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        <div className="h-[250px] sm:h-[300px] md:h-[350px]">
          <Bar
            options={{
              ...barChartOptions,
              plugins: {
                ...barChartOptions.plugins,
                legend: {
                  ...barChartOptions.plugins.legend,
                  position: "bottom" as const,
                },
              },
            }}
            data={barChartData}
          />
        </div>
      </div>

      {/* Calendar section */}
      <div className="bg-white rounded-xl p-4 sm:p-6 shadow-sm w-full lg:w-1/3">
        <h3 className="font-semibold text-lg mb-4">فبراير 2024</h3>
        <Calendar
          onChange={(value) => value instanceof Date && setDate(value)}
          value={date}
          locale="ar"
          className="react-calendar border-none w-full custom-calendar"
        />
      </div>
    </div>
  );
};
