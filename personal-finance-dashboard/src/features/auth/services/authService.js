import apiClient from "../../../shared/services/apiClient";

export const signup = async (userData) => {

  const res = await apiClient.post(
    "/auth/signup",
    userData
  );

  return res.data;

};

export const login = async (credentials) => {

  const res = await apiClient.post(
    "/auth/login",
    credentials
  );

  return res.data;

};