import { useState } from "react";
import GoalCard from "./GoalCard";

export default function GoalsList() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: "Goa Vacation",
      target: 50000,
      saved: 20000,
      deadline: "2026-06-30",
    },
    {
      id: 2,
      title: "Emergency Fund",
      target: 100000,
      saved: 45000,
      deadline: "2026-12-31",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    target: "",
    saved: "",
    deadline: "",
  });

  // Add Goal
  const handleAddGoal = (e) => {
    e.preventDefault();

    const newGoal = {
      id: Date.now(),
      title: formData.title,
      target: Number(formData.target),
      saved: Number(formData.saved),
      deadline: formData.deadline,
    };

    setGoals([...goals, newGoal]);

    setFormData({
      title: "",
      target: "",
      saved: "",
      deadline: "",
    });
  };

  // Delete Goal
  const handleDelete = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <div className="space-y-8">

      {/* Add Goal Form */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">Add Savings Goal</h2>

        <form
          onSubmit={handleAddGoal}
          className="grid md:grid-cols-4 gap-4"
        >
          <input
            type="text"
            placeholder="Goal Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
            className="border p-2 rounded-lg"
          />

          <input
            type="number"
            placeholder="Target Amount"
            value={formData.target}
            onChange={(e) =>
              setFormData({ ...formData, target: e.target.value })
            }
            required
            className="border p-2 rounded-lg"
          />

          <input
            type="number"
            placeholder="Saved Amount"
            value={formData.saved}
            onChange={(e) =>
              setFormData({ ...formData, saved: e.target.value })
            }
            required
            className="border p-2 rounded-lg"
          />

          <input
            type="date"
            value={formData.deadline}
            onChange={(e) =>
              setFormData({ ...formData, deadline: e.target.value })
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
          <p className="text-gray-500">No goals added yet.</p>
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