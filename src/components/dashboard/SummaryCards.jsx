import { useEffect, useState } from "react";

export default function SummaryCards({ transactions = [] }) {
  const [summary, setSummary] = useState({
    income: 0,
    expenses: 0,
    balance: 0,
  });

  useEffect(() => {
    // const income = transactions
    //   .filter((t) => t.type === "income")
    //   .reduce((acc, curr) => acc + Number(curr.amount), 0);

    // const expenses = transactions
    //   .filter((t) => t.type === "expense")
    //   .reduce((acc, curr) => acc + Number(curr.amount), 0);

    // setSummary({
    //   income,
    //   expenses,
    //   balance: income - expenses,
    // });
  }, [transactions]);

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-8">
      
      {/* Income */}
      <div className="bg-blue-200 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-black-500 text-sm mb-2">Total Income</h2>
        <p className="text-2xl font-bold text-green-600">
          ₹{summary.income}
        </p>
      </div>

      {/* Expenses */}
      <div className="bg-blue-200 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-gray-500 text-sm mb-2">Total Expenses</h2>
        <p className="text-2xl font-bold text-red-600">
          ₹{summary.expenses}
        </p>
      </div>

      {/* Balance */}
      <div className="bg-blue-200 p-6 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-gray-500 text-sm mb-2">Balance</h2>
        <p
          className={`text-2xl font-bold ${
            summary.balance >= 0 ? "text-indigo-600" : "text-red-600"
          }`}
        >
          ₹{summary.balance}
        </p>
      </div>

    </div>
  );
}