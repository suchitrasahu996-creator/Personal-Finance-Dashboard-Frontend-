import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useState } from "react";

const originalData = [
  { name: "Jan", date: "2026-01-05", income: 50000, expenses: 20000 },
  { name: "Feb", date: "2026-02-10", income: 60000, expenses: 25000 },
  { name: "Mar", date: "2026-03-12", income: 45000, expenses: 18000 },
  { name: "Apr", date: "2026-04-08", income: 70000, expenses: 30000 },
];

export default function Charts() {

  const [monthFilter, setMonthFilter] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Filter logic
  const filteredData = originalData.filter(item => {

    const itemDate = new Date(item.date);

    if (monthFilter !== "") {
      if (itemDate.getMonth() !== Number(monthFilter)) {
        return false;
      }
    }

    if (startDate) {
      if (itemDate < new Date(startDate)) {
        return false;
      }
    }

    if (endDate) {
      if (itemDate > new Date(endDate)) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow">

      <h2 className="text-xl font-bold mb-4">
        Income vs Expenses
      </h2>

      {/* FILTERS */}
      <div className="flex gap-3 mb-4">

        {/* Month filter */}
        <select
          className="border p-2 rounded"
          onChange={(e) => setMonthFilter(e.target.value)}
        >
          <option value="">All Months</option>
          <option value="0">Jan</option>
          <option value="1">Feb</option>
          <option value="2">Mar</option>
          <option value="3">Apr</option>
          <option value="4">May</option>
          <option value="5">Jun</option>
          <option value="6">Jul</option>
          <option value="7">Aug</option>
          <option value="8">Sep</option>
          <option value="9">Oct</option>
          <option value="10">Nov</option>
          <option value="11">Dec</option>
        </select>

        {/* Start date */}
        <input
          type="date"
          className="border p-2 rounded"
          onChange={(e) => setStartDate(e.target.value)}
        />

        {/* End date */}
        <input
          type="date"
          className="border p-2 rounded"
          onChange={(e) => setEndDate(e.target.value)}
        />

      </div>

      {/* CHART */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={filteredData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="income" fill="#4f46e5" />
          <Bar dataKey="expenses" fill="#ef4444" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}