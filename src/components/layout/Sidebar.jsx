export default function Sidebar({ activeModule, setActiveModule }) {
  const menu = [
    { id: "dashboard", label: "Dashboard" },
    { id: "transactions", label: "Income & Expenses" },
    { id: "goals", label: "Savings Goals" },
    { id: "budget", label: "Budget Planner" },
    { id: "insights", label: "Insights & Charts" },
    { id: "bills", label: "Bill Reminders" },
  ];

  return (
    <div className="w-64 bg-blue-300 shadow-lg p-5">
      <h2 className="text-xl font-bold text-indigo-600 mb-8">
        PERSONAL FINANCE DASHBOARD
      </h2>

      <ul className="space-y-3">
        {menu.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveModule(item.id)}
            className={`cursor-pointer p-3 rounded-lg transition ${
              activeModule === item.id
                ? "bg-indigo-600 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
