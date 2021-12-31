import { apiInstance } from "./index";

export const editUser = async (data) => {
  const { data: response } = await apiInstance.patch(
    `users/${data.email}`,
    data
  );
  return response;
};

export const showUsers = async () => {
  const { data: response } = await apiInstance.get(`users`);
  return response;
};

export const findUser = async (username) => {
  const { data: response } = await apiInstance.get(`users/${username}`);
  return response;
};

export const deleteUser = async (username) => {
  const { data: response } = await apiInstance.delete(`users/${username}`);
  return response;
};
