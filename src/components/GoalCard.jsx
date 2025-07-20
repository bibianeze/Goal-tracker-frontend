import { useNavigate } from "react-router-dom";
import { updateGoal, deleteGoal } from "../services/api";

export default function GoalCard({ goal, onUpdate }) {
  const navigate = useNavigate();

  const toggleCompleted = async () => {
    const updated = { ...goal, completed: !goal.completed };
    await updateGoal(goal._id, updated);
    onUpdate(); // refresh goal list
  };

  const handleDelete = async () => {
    await deleteGoal(goal._id);
    onUpdate(); // refresh goal list
  };

  return (
    <div className="border p-4 rounded shadow mb-4 flex justify-between items-start">
      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={goal.completed}
            onChange={toggleCompleted}
            className="cursor-pointer"
          />
          <span
            className={`font-semibold text-lg ${
              goal.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {goal.title}
          </span>
        </label>
        {goal.description && (
          <p className="text-gray-600 ml-6">{goal.description}</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <button
          onClick={() => navigate(`/edit/${goal._id}`)}
          className="text-blue-600 cursor-pointer hover:underline"
        >
          ✏️ Edit
        </button>
        <button
          onClick={handleDelete}
          className="text-red-600 cursor-pointer hover:underline"
        >
          🗑️ Delete
        </button>
      </div>
    </div>
  );
}
