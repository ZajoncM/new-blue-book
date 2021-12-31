import { apiInstance } from "./index";

export const editUser = async (data) => {
  const { data: response } = await apiInstance.patch(
    `users/${data.email}`,
    data
  );
  return response;
};

export const showObservations = async () => {
  const { data: response } = await apiInstance.get(`observations`);
  return response;
};

export const findObservation = async (username) => {
  const { data: response } = await apiInstance.get(`observations/${username}`);
  return response;
};

export const deleteUser = async (username) => {
  const { data: response } = await apiInstance.delete(
    `observations/${username}`
  );
  return response;
};
