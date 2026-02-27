import React from "react";

function GoalCard({ goal, onDelete,onEdit }) {

  const saved = Number(goal.saved_amount) || 0;
  const target = Number(goal.target_amount) || 0;

  const percentage = target > 0
    ? Math.min((saved / target) * 100, 100).toFixed(0)
    : 0;

  const isCompleted = percentage >= 100;

  const formattedDeadline = goal.deadline
    ? new Date(goal.deadline).toLocaleDateString()
    : "No deadline";

  return (

    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

      <div className="flex justify-between items-center mb-3">

        <h3 className="font-semibold text-lg">
          {goal.name}
        </h3>
        <button
          onClick={() => onEdit(goal.id)}
          className="text-blue-500 text-sm hover:underline  px-2 py-1 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(goal.id)}
          className="text-red-500 text-sm hover:underline"
        >
          Delete
        </button>

      </div>

      <p className="text-sm text-gray-500 mb-2">
        ₹{saved} / ₹{target}
      </p>

      <div className="w-full bg-gray-200 rounded-full h-3 mb-3">

        <div
          className={`h-3 rounded-full ${
            isCompleted
              ? "bg-green-600"
              : "bg-indigo-600"
          }`}
          style={{ width: `${percentage}%` }}
        />

      </div>

      <div className="flex justify-between text-sm text-gray-500">

        <span>{percentage}% completed</span>

        <span>
          Deadline: {formattedDeadline}
        </span>

      </div>

      {isCompleted && (

        <p className="text-green-600 text-sm mt-2 font-semibold">
          🎉 Goal Achieved!
        </p>

      )}

    </div>

  );
}

export default React.memo(GoalCard);