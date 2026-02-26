import { useState } from "react";
import { useTransactions } from "../hooks/useTransactions";

export default function AddTransactionForm() {

  const { addTransaction } = useTransactions();

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: "",
    date: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addTransaction({
      title: formData.title,
      amount: Number(formData.amount),
      type: formData.type,
      category: formData.category,
      date: formData.date,
    });

    setFormData({
      title: "",
      amount: "",
      type: "expense",
      category: "",
      date: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-5 gap-3 mb-4"
    >

      <input
        placeholder="Title"
        value={formData.title}
        onChange={(e) =>
          setFormData({
            ...formData,
            title: e.target.value,
          })
        }
        className="border p-2 rounded"
        required
      />

      <input
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={(e) =>
          setFormData({
            ...formData,
            amount: e.target.value,
          })
        }
        className="border p-2 rounded"
        required
      />

      <select
        value={formData.type}
        onChange={(e) =>
          setFormData({
            ...formData,
            type: e.target.value,
          })
        }
        className="border p-2 rounded"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <input
        placeholder="Category"
        value={formData.category}
        onChange={(e) =>
          setFormData({
            ...formData,
            category: e.target.value,
          })
        }
        className="border p-2 rounded"
      />

      <input
        type="date"
        value={formData.date}
        onChange={(e) =>
          setFormData({
            ...formData,
            date: e.target.value,
          })
        }
        className="border p-2 rounded"
      />

      <button
        type="submit"
        className="col-span-5 bg-indigo-600 text-white py-2 rounded"
      >
        Add Transaction
      </button>

    </form>
  );
}