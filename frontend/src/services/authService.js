import { apiInstance } from "./index";

export const loginUser = async (data) => {
  const { data: response } = await apiInstance.post("auth", data);
  localStorage.setItem("token", response.token);
  return response;
};

export const sendRegistrationRequest = async (data) => {
  const { data: response } = await apiInstance.post("requests", data);
  return response;
};

export const checkUser = async () => {
  const { data: response } = await apiInstance.get("auth/profile");
  return response;
};

export const checkToken = async () => {
  const { data: response } = await apiInstance.get("auth/token");

  localStorage.setItem("token", response.token);
};
