import { useState, useEffect } from "react";
import { fetchGoals, createGoal } from "../services/api";
import GoalCard from "../components/GoalCard";

export default function Goals() {
  const [goals, setGoals] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });

  const getAllGoals = async () => {
    const res = await fetchGoals();
    setGoals(res.data.goals);
     console.log("Fetched goals response:", res);
  };

  useEffect(() => {
    getAllGoals();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    await createGoal(form);
    setForm({ title: "", description: "" });
    getAllGoals();
  };

  return (
    <div className="max-w-xl mx-auto py-6">
      <h2 className="text-2xl font-bold mb-4">My Goals</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mb-8">
        <input
          type="text"
          placeholder="Goal title"
          className="w-full p-2 border rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <textarea
          placeholder="Description (optional)"
          className="w-full p-2 border rounded"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <button className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded">
          Add Goal
        </button>
      </form>

      {goals.length === 0 ? (
        <p className="text-gray-500 text-center">No goals yet...</p>
      ) : (
        goals.map((goal) => (
          <GoalCard key={goal._id} goal={goal} onUpdate={getAllGoals} />
        ))
      )}
    </div>
  );
}
