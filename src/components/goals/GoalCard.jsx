export default function GoalCard({ goal, onDelete }) {
  const percentage = Math.min(
    (goal.saved / goal.target) * 100,
    100
  ).toFixed(0);

  const isCompleted = percentage >= 100;

  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-lg">
          {goal.title}
        </h3>

        <button
          onClick={() => onDelete(goal.id)}
          className="text-red-500 text-sm hover:underline"
        >
          Delete
        </button>
      </div>

      <p className="text-sm text-gray-500 mb-2">
        ₹{goal.saved} / ₹{goal.target}
      </p>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
        <div
          className={`h-3 rounded-full ${
            isCompleted ? "bg-green-600" : "bg-indigo-600"
          }`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <div className="flex justify-between text-sm text-gray-500">
        <span>{percentage}% completed</span>
        <span>Deadline: {goal.deadline}</span>
      </div>

      {isCompleted && (
        <p className="text-green-600 text-sm mt-2 font-semibold">
          🎉 Goal Achieved!
        </p>
      )}
    </div>
  );
}