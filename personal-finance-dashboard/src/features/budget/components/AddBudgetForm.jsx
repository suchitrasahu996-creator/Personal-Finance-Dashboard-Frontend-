import { useState } from "react";
import { useBudget } from "../hooks/useBudget";

export default function AddBudgetForm() {

  const { addBudget } = useBudget();

  const [formData, setFormData] = useState({
    category: "",
    limit: "",
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    await addBudget({
      category: formData.category,
      limit_amount: Number(formData.limit),
    });

    setFormData({
      category: "",
      limit: "",
    });
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-2 gap-3 mb-4"
    >

      <input
        placeholder="Category (Food, Rent, etc)"
        value={formData.category}
        onChange={(e) =>
          setFormData({
            ...formData,
            category: e.target.value
          })
        }
        className="border p-2 rounded"
        required
      />

      <input
        type="number"
        placeholder="Budget Limit"
        value={formData.limit}
        onChange={(e) =>
          setFormData({
            ...formData,
            limit: e.target.value
          })
        }
        className="border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="col-span-2 bg-indigo-600 text-white py-2 rounded"
      >
        Add Budget
      </button>

    </form>

  );
}