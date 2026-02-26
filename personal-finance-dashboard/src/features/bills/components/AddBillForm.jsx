import { useState } from "react";
import { useBills } from "../hooks/useBills";

export default function AddBillForm() {

  const { addBill } = useBills();

  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    dueDate: "",
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    await addBill({
      name: formData.name,
      amount: Number(formData.amount),
      due_date: formData.dueDate,
      status: "pending",
    });

    setFormData({
      name: "",
      amount: "",
      dueDate: "",
    });

  };

  return (

    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-3 gap-3 mb-4"
    >

      <input
        placeholder="Bill Name"
        value={formData.name}
        onChange={e =>
          setFormData({
            ...formData,
            name: e.target.value
          })
        }
        className="border p-2 rounded"
        required
      />

      <input
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={e =>
          setFormData({
            ...formData,
            amount: e.target.value
          })
        }
        className="border p-2 rounded"
        required
      />

      <input
        type="date"
        value={formData.dueDate}
        onChange={e =>
          setFormData({
            ...formData,
            dueDate: e.target.value
          })
        }
        className="border p-2 rounded"
        required
      />

      <button
        type="submit"
        className="col-span-3 bg-indigo-600 text-white py-2 rounded"
      >
        Add Bill
      </button>

    </form>

  );
}