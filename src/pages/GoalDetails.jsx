import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchGoals } from '../services/api';

export default function GoalDetails() {
  const { id } = useParams();
  const [goal, setGoal] = useState(null);

  useEffect(() => {
    fetchGoals().then(res => {
      const found = res.data.find(g => g._id === id);
      setGoal(found);
    });
  }, [id]);

  if (!goal) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold">{goal.title}</h2>
      <p className="mt-2">{goal.description}</p>
      {goal.deadline && <p className="text-sm text-gray-500">Deadline: {goal.deadline}</p>}
    </div>
  );
}
