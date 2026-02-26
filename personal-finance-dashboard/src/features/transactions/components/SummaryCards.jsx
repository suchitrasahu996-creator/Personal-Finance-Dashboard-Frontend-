import { useTransactions } from "../hooks/useTransactions";

export default function SummaryCards() {

  const { transactions } = useTransactions();

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((acc, curr) =>
      acc + Number(curr.amount || 0), 0);

  const expenses = transactions
    .filter(t => t.type === "expense")
    .reduce((acc, curr) =>
      acc + Number(curr.amount || 0), 0);

  const balance = income - expenses;

  return (

    <div className="grid md:grid-cols-3 gap-6 mb-8">

      <div className="bg-blue-100 p-6 rounded-xl shadow">

        <h2 className="text-sm mb-2">
          Total Income
        </h2>

        <p className="text-2xl font-bold text-green-600">
          ₹{income}
        </p>

      </div>

      <div className="bg-blue-100 p-6 rounded-xl shadow">

        <h2 className="text-sm mb-2">
          Total Expenses
        </h2>

        <p className="text-2xl font-bold text-red-600">
          ₹{expenses}
        </p>

      </div>

      <div className="bg-blue-100 p-6 rounded-xl shadow">

        <h2 className="text-sm mb-2">
          Balance
        </h2>

        <p className={
          balance >= 0
            ? "text-indigo-600 text-2xl font-bold"
            : "text-red-600 text-2xl font-bold"
        }>
          ₹{balance}
        </p>

      </div>

    </div>

  );
}