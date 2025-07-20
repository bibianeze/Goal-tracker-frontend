import axios from "axios";

const BASE_URL = "http://localhost:2000/api/goals"; // adjust if needed

export const fetchGoals = () => axios.get(BASE_URL);
export const createGoal = (goal) => axios.post(BASE_URL, goal);
export const updateGoal = (id, updatedGoal) =>
  axios.patch(`${BASE_URL}/${id}`, updatedGoal);
export const deleteGoal = (id) => axios.delete(`${BASE_URL}/${id}`);
