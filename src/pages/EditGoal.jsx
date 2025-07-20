import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchGoals, updateGoal } from "../services/api";

export default function EditGoal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [goal, setGoal] = useState({ title: "", description: "", completed: false });

  useEffect(() => {
    fetchGoals().then((res) => {
      const g = res.data.find((g) => g._id === id);
      if (g) setGoal(g);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateGoal(id, goal);
    navigate("/goals");
  };

  return (
    <div className="max-w-xl mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">Edit Goal</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={goal.title}
          onChange={(e) => setGoal({ ...goal, title: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <textarea
          value={goal.description}
          onChange={(e) => setGoal({ ...goal, description: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={goal.completed}
            onChange={() =>
              setGoal((prev) => ({ ...prev, completed: !prev.completed }))
            }
          />
          Mark as completed
        </label>
        <button className="bg-green-600 cursor-pointer text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}
