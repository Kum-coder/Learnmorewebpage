import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

const AnimatedChart = () => {
  const barData = {
    labels: ["Web Dev", "Data Analytics", "Cloud", "AI/ML", "UI/UX"],
    datasets: [
      {
        label: "Projects Completed",
        data: [25, 40, 15, 20, 10],
        backgroundColor: [
          "#1D4ED8",
          "#9333EA",
          "#10B981",
          "#F59E0B",
          "#EF4444",
        ],
        borderColor: "#1F2937",
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Monthly Revenue (in ₹)",
        data: [50000, 60000, 70000, 80000, 90000, 100000],
        borderColor: "#3B82F6",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const pieData = {
    labels: ["Frontend", "Backend", "Database", "Cloud"],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: ["#4F46E5", "#EC4899", "#10B981", "#F97316"],
      },
    ],
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Key Metrics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Bar data={barData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
          {/* Line Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Line data={lineData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Pie data={pieData} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedChart;
