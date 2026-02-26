import apiClient from "../../../shared/services/apiClient";

export const getBills = async () => {
  const res = await apiClient.get("/bill/getBills");
  return res.data.data;
};

export const createBill = async (bill) => {
  const res = await apiClient.post("/bill/addBill", bill);
  return res.data.data;
};

export const updateBillStatus = async (id, status) => {
  await apiClient.put(`/bill/updateBill/${id}/status`, {
    status,
  });
};

export const deleteBill = async (id) => {
  await apiClient.delete(`/bill/deleteBill/${id}`);
};