import apiClient from "../../../shared/services/apiClient";

export const getBudgets = async () => {
  const res = await apiClient.get("/budget/getBudget");
  return res.data.data;
};

export const createBudget = async (budget) => {
  const res = await apiClient.post("/budget/addBudget", budget);
  return res.data.data;
};

export const deleteBudget = async (id) => {
  await apiClient.delete(`/budget/deleteBudget/${id}`);
};