import { useState } from "react";
import { useTransactions } from "../hooks/useTransactions";

export default function AddTransactionForm() {
  const { addTransaction } = useTransactions();

  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    type: "expense",
    category: "",
    date: "",
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      description: formData.description,
      amount: Number(formData.amount),
      type: formData.type,
      category: formData.category,
      date: formData.date,
    };

    await addTransaction(payload);

    // reset form
    setFormData({
      description: "",
      amount: "",
      type: "expense",
      category: "salary",
      date: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-5 gap-3 mb-4">
      {/* DESCRIPTION */}
      <input
        placeholder="Description"
        value={formData.description}
        onChange={handleChange("description")}
        className="border p-2 rounded"
        required
      />

      {/* AMOUNT */}
      <input
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange("amount")}
        className="border p-2 rounded"
        required
      />

      {/* TYPE */}
      <select
        value={formData.type}
        onChange={handleChange("type")}
        className="border p-2 rounded"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      {/* CATEGORY */}

      <select
        value={formData.category}
        onChange={handleChange("category")}
        className="border p-2 rounded"
      >
        <option value="salary">Salary</option>
        <option value="food">Food</option>
        <option value="rent">Rent</option>
        <option value="transport">Transport</option>
        <option value="shopping">Shopping</option>
        <option value="entertainment">Entertainment</option>
        <option value="health">Health</option>
      </select>

      {/* DATE */}
      <input
        type="date"
        value={formData.date}
        onChange={handleChange("date")}
        className="border p-2 rounded"
        required
      />

      {/* SUBMIT */}
      <button
        type="submit"
        className="col-span-5 bg-indigo-600 text-white py-2 rounded"
      >
        Add Transaction
      </button>
    </form>
  );
}
