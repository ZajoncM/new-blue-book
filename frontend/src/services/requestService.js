import { apiInstance } from "./index";

export const showRequests = async () => {
  const { data: response } = await apiInstance.get(`requests`);
  return response;
};

export const acceptRequest = async (email) => {
  const { data: response } = await apiInstance.patch(`requests/${email}`);
  return response;
};
