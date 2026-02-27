import apiClient from "../../../shared/services/apiClient";

export const getGoals = async () => {
  const res = await apiClient.get("/goals/getAllGoals");
  return res.data.data;
};

export const createGoal = async (data) => {
  const res = await apiClient.post("/goals/addGoal", data);
  return res.data.data;
};
export const editGoal = async (id) => {
  await apiClient.edit(`/goals/editGoal/${id}`);
};

export const deleteGoal = async (id) => {
  await apiClient.delete(`/goals/deleteGoal/${id}`);
};
