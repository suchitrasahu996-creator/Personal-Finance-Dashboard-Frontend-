import apiClient from "../../../shared/services/apiClient";

export const getTransactions = async () => {
  const res = await apiClient.get("/transactions/getTransaction");
  return res.data.data;
};

export const createTransaction = async (transaction) => {
  const res = await apiClient.post(
    "/transactions/addTransaction",
    transaction
  );
  return res.data.data;
};

export const deleteTransaction = async (id) => {
  await apiClient.delete(
    `/transactions/deleteTransaction/${id}`
  );
};