import { useState } from "react";
import GoalCard from "./GoalCard";
import { useGoals } from "../hooks/useGoals";

export default function GoalsList() {

  const { goals, addGoal, removeGoal } = useGoals();

  const [formData, setFormData] = useState({
    title: "",
    target: "",
    saved: "",
    deadline: "",
  });

  const handleAddGoal = async (e) => {
    e.preventDefault();

    try {

      await addGoal({
        name: formData.title,
        target_amount: Number(formData.target),
        saved_amount: Number(formData.saved),
        deadline: formData.deadline,
      });

      setFormData({
        title: "",
        target: "",
        saved: "",
        deadline: "",
      });

    } catch (error) {
      console.error("Error adding goal:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await removeGoal(id);
    } catch (error) {
      console.error("Error deleting goal:", error);
    }
  };

  return (
    <div className="space-y-8">

      {/* Add Goal Form */}
      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-xl font-bold mb-4">
          Add Savings Goal
        </h2>

        <form
          onSubmit={handleAddGoal}
          className="grid md:grid-cols-4 gap-4"
        >

          <input
            type="text"
            placeholder="Goal Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value
              })
            }
            required
            className="border p-2 rounded-lg"
          />

          <input
            type="number"
            placeholder="Target Amount"
            value={formData.target}
            onChange={(e) =>
              setFormData({
                ...formData,
                target: e.target.value
              })
            }
            required
            className="border p-2 rounded-lg"
          />

          <input
            type="number"
            placeholder="Saved Amount"
            value={formData.saved}
            onChange={(e) =>
              setFormData({
                ...formData,
                saved: e.target.value
              })
            }
            required
            className="border p-2 rounded-lg"
          />

          <input
            type="date"
            value={formData.deadline}
            onChange={(e) =>
              setFormData({
                ...formData,
                deadline: e.target.value
              })
            }
            required
            className="border p-2 rounded-lg"
          />

          <button
            type="submit"
            className="md:col-span-4 bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Add Goal
          </button>

        </form>

      </div>

      {/* Goals List */}
      <div className="grid md:grid-cols-2 gap-6">

        {goals.length === 0 ? (
          <p className="text-gray-500">
            No goals added yet.
          </p>
        ) : (
          goals.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onDelete={handleDelete}
            />
          ))
        )}

      </div>

    </div>
  );
}